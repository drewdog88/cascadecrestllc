import sharp from "sharp";

/**
 * Keys out paper-white, cream, and light lavender so logos blend on any page bg.
 */
export async function keyLightBackground(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected RGBA, got ${channels} channels`);
  }

  for (let i = 0; i < width * height; i++) {
    const o = i * 4;
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const chroma = max - min;

    let alpha = 255;

    const isLavenderTile =
      b > r + 6 && b > g + 4 && lum > 195 && lum < 250 && chroma < 55;
    const isPaper = lum > 238 && chroma < 28;
    const isCream =
      lum > 215 && lum <= 238 && chroma < 32 && r >= g - 8 && g >= b - 12;
    // Fake transparency: gray/white checkerboard baked into exports
    const isCheckerboard = chroma < 20 && lum > 100 && lum < 252;

    if (isPaper || isLavenderTile || isCheckerboard) {
      alpha = 0;
    } else if (isCream) {
      alpha = Math.round(255 * (1 - (lum - 215) / 23));
    } else if (lum > 200 && chroma < 40) {
      const feather = Math.min(1, (lum - 200) / 30);
      alpha = Math.round(255 * (1 - feather * 0.85));
    }

    data[o + 3] = Math.min(data[o + 3], alpha);
  }

  return sharp(data, {
    raw: { width, height, channels: 4 },
  }).png();
}
