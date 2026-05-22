/**
 * Crops logos from the Gemini 2×2 brand sheet.
 * Source: design/gemini-logo-sheet.png (or pass path as argv[2])
 */
import { mkdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { keyLightBackground } from "./logo-alpha.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const defaultSrc = path.join(root, "design", "gemini-logo-sheet.png");
const outDir = path.join(root, "public", "images", "logo");
const appDir = path.join(root, "app");

async function resolveSheetPath() {
  let sheetPath = process.argv[2] ? path.resolve(process.argv[2]) : defaultSrc;
  const legacySrc = path.join(root, "Gemini_Generated_Image_bzd166bzd166bzd1.png");

  try {
    await sharp(sheetPath).metadata();
    return sheetPath;
  } catch {
    /* try legacy root filename */
  }

  try {
    await sharp(legacySrc).metadata();
    await mkdir(path.dirname(defaultSrc), { recursive: true });
    await rename(legacySrc, defaultSrc);
    console.log(`Moved sheet to ${path.relative(root, defaultSrc)}`);
    return defaultSrc;
  } catch {
    console.error(
      "Logo sheet not found. Place it at design/gemini-logo-sheet.png or pass a path.",
    );
    process.exit(1);
  }
}

async function writeTransparentAssets(croppedPng, baseName) {
  const transparent = await keyLightBackground(croppedPng);
  const pngBuf = await transparent.toBuffer();
  await writeFile(path.join(outDir, `${baseName}.png`), pngBuf);
  await sharp(pngBuf)
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(path.join(outDir, `${baseName}.webp`));
  const meta = await sharp(pngBuf).metadata();
  console.log(`  ${baseName} — ${meta.width}×${meta.height} (transparent)`);
  return pngBuf;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const sheetPath = await resolveSheetPath();

  const wordmarkCrop = await sharp(sheetPath)
    .extract({ left: 36, top: 48, width: 668, height: 200 })
    .trim({ threshold: 12 })
    .png()
    .toBuffer();
  await writeTransparentAssets(wordmarkCrop, "cascade-crest-wordmark");

  const iconCrop = await sharp(sheetPath)
    .extract({ left: 248, top: 468, width: 220, height: 188 })
    .png()
    .toBuffer();
  const iconPng = await writeTransparentAssets(iconCrop, "cascade-crest-icon");

  await sharp(iconPng)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, "icon.png"));
  await sharp(iconPng)
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));
  console.log("  app/icon.png + app/apple-icon.png (transparent)");
  console.log("Done.");
}

main();
