/**
 * Known AI training / scraping crawlers. Listed in robots.txt as Disallow.
 * Well-behaved bots honor this; enforcement at the edge is via Vercel Firewall
 * (AI bots + bot protection managed rulesets).
 *
 * Does not block Googlebot / Bingbot (search indexing).
 */
export const AI_CRAWLER_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Diffbot",
  "Amazonbot",
  "meta-externalagent",
  "FacebookBot",
  "Applebot-Extended",
  "ImagesiftBot",
  "Omgilibot",
  "YouBot",
  "Timpibot",
] as const;
