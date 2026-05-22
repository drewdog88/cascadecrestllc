/** Must match basePath in next.config.ts for STATIC_EXPORT builds. */
export const GITHUB_PAGES_BASE_PATH = "/cascadecrestllc";

/** Prefix public asset paths when building the GitHub Pages static export. */
export function assetPath(path: string): string {
  if (process.env.STATIC_EXPORT !== "true" || !path.startsWith("/")) {
    return path;
  }
  return `${GITHUB_PAGES_BASE_PATH}${path}`;
}
