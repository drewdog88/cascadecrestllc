import type { MetadataRoute } from "next";
import { AI_CRAWLER_USER_AGENTS } from "@/lib/ai-crawler-user-agents";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cascadecrestllc.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_CRAWLER_USER_AGENTS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
