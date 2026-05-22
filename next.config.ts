import type { NextConfig } from "next";
import { securityHeaderEntries } from "./lib/security-headers";

const isStaticExport = process.env.STATIC_EXPORT === "true";
import { GITHUB_PAGES_BASE_PATH } from "./lib/asset-path";

const githubPagesBasePath = GITHUB_PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`,
        images: { unoptimized: true },
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
        },
      }),
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...securityHeaderEntries],
      },
    ];
  },
};

export default nextConfig;
