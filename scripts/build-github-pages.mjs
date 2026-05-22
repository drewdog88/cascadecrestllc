/**
 * Static export for GitHub Pages: stash server-only routes, build, restore.
 * Usage: npm run build:github-pages
 */
import { spawn } from "node:child_process";
import { cp, mkdir, rename, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const stashRoot = path.join(root, ".gh-pages-stash");

const GITHUB_PAGES_SITE_URL =
  "https://drewdog88.github.io/cascadecrestllc";

/** Paths relative to repo root to move aside during static export. */
const STASH_PATHS = ["app/admin", "app/api", "middleware.ts"];

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function movePath(from, to) {
  await mkdir(path.dirname(to), { recursive: true });
  try {
    await rename(from, to);
  } catch (err) {
    if (err?.code !== "EPERM" && err?.code !== "EXDEV") throw err;
    const st = await stat(from);
    if (st.isDirectory()) {
      await cp(from, to, { recursive: true });
    } else {
      await cp(from, to);
    }
    await rm(from, { recursive: true, force: true });
  }
}

async function stash() {
  await mkdir(stashRoot, { recursive: true });
  for (const rel of STASH_PATHS) {
    const from = path.join(root, rel);
    const to = path.join(stashRoot, rel);
    if (!(await exists(from))) continue;
    await movePath(from, to);
    console.log(`  stashed ${rel}`);
  }
}

async function restore() {
  for (const rel of STASH_PATHS) {
    const from = path.join(stashRoot, rel);
    const to = path.join(root, rel);
    if (!(await exists(from))) continue;
    await movePath(from, to);
    console.log(`  restored ${rel}`);
  }
  if (await exists(stashRoot)) {
    await rm(stashRoot, { recursive: true, force: true });
  }
}

function runNextBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["next", "build"], {
      cwd: root,
      stdio: "inherit",
      shell: true,
      env: {
        ...process.env,
        STATIC_EXPORT: "true",
        NEXT_PUBLIC_SITE_URL: GITHUB_PAGES_SITE_URL,
      },
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`next build exited with code ${code}`));
    });
  });
}

let stashed = false;

try {
  console.log("Stashing server-only paths for static export…");
  await stash();
  stashed = true;
  console.log("Running next build (STATIC_EXPORT=true)…");
  await runNextBuild();
  console.log(`Done. Static site is in ${path.join(root, "out")}`);
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  if (stashed) {
    console.log("Restoring stashed paths…");
    await restore();
  }
}

if (process.exitCode) process.exit(process.exitCode);
