import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { localImages, remoteImages } from "./image-manifest.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const photosDir = path.join(root, "public", "images", "photos");
const appDir = path.join(root, "app");

const WEBP_QUALITY = 82;

async function optimizeBuffer(buffer, maxWidth) {
  return sharp(buffer)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toBuffer();
}

async function writeWebp(slug, buffer) {
  const outPath = path.join(photosDir, `${slug}.webp`);
  await writeFile(outPath, buffer);
  const meta = await sharp(buffer).metadata();
  console.log(
    `  ${slug}.webp — ${meta.width}x${meta.height}, ${(buffer.length / 1024).toFixed(1)} KB`,
  );
}

async function fetchRemote(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "CascadeCrest-ImageOptimizer/1.0" },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function generateOpenGraph(heroBuffer) {
  const og = await sharp(heroBuffer)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toBuffer();
  const ogPath = path.join(appDir, "opengraph-image.webp");
  await writeFile(ogPath, og);
  console.log(
    `  opengraph-image.webp — 1200x630, ${(og.length / 1024).toFixed(1)} KB`,
  );
}

async function main() {
  await mkdir(photosDir, { recursive: true });

  console.log("Downloading and optimizing remote photos…");
  let heroBuffer = null;

  for (const { slug, url, maxWidth } of remoteImages) {
    console.log(slug);
    const raw = await fetchRemote(url);
    const optimized = await optimizeBuffer(raw, maxWidth);
    await writeWebp(slug, optimized);
    if (slug === "st-johns-bridge") heroBuffer = optimized;
  }

  console.log("Optimizing local photos…");
  for (const { slug, inputPath, maxWidth } of localImages) {
    console.log(slug);
    const fullInput = path.join(root, inputPath);
    const raw = await sharp(fullInput).toBuffer();
    const optimized = await optimizeBuffer(raw, maxWidth);
    await writeWebp(slug, optimized);
  }

  if (heroBuffer) {
    console.log("Generating Open Graph image…");
    await generateOpenGraph(heroBuffer);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
