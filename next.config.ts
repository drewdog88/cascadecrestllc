import type { NextConfig } from "next";
import { securityHeaderEntries } from "./lib/security-headers";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
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
