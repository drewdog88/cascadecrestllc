/**
 * Process CascadeCrest.png (or path argv[2]) into web-ready transparent logos.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { keyLightBackground } from "./logo-alpha.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const defaultSrc = path.join(root, "CascadeCrest.png");
const outDir = path.join(root, "public", "images", "logo");
const appDir = path.join(root, "app");
const WORDMARK_MAX_WIDTH = 1400;
const ICON_SIZE = 220;

async function main() {
  const src = process.argv[2] ? path.resolve(process.argv[2]) : defaultSrc;
  await mkdir(outDir, { recursive: true });

  const keyed = await keyLightBackground(src);
  const trimmed = await keyed
    .trim({ threshold: 10 })
    .resize({ width: WORDMARK_MAX_WIDTH, withoutEnlargement: true })
    .png()
    .toBuffer();

  await writeFile(
    path.join(outDir, "cascade-crest-wordmark.png"),
    trimmed,
  );
  await sharp(trimmed)
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(path.join(outDir, "cascade-crest-wordmark.webp"));

  const meta = await sharp(trimmed).metadata();
  console.log(`  wordmark — ${meta.width}×${meta.height} (transparent)`);

  const iconWidth = Math.min(ICON_SIZE, Math.round(meta.width * 0.18));
  const iconBuf = await sharp(trimmed)
    .extract({ left: 0, top: 0, width: iconWidth, height: meta.height })
    .trim({ threshold: 10 })
    .resize({ width: ICON_SIZE, withoutEnlargement: true })
    .png()
    .toBuffer();

  await writeFile(path.join(outDir, "cascade-crest-icon.png"), iconBuf);
  await sharp(iconBuf)
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(path.join(outDir, "cascade-crest-icon.webp"));

  const iconMeta = await sharp(iconBuf).metadata();
  console.log(`  icon — ${iconMeta.width}×${iconMeta.height} (transparent)`);

  await sharp(iconBuf)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, "icon.png"));
  await sharp(iconBuf)
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));
  console.log("  app/icon.png + app/apple-icon.png");
  console.log("Done.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
