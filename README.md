# Cascade Crest LLC

A minimal, image-forward marketing site for Cascade Crest LLC—a Washington State rental company with a property in Portland’s University Park neighborhood (near the University of Portland bluff).

Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, optimized for deployment on [Vercel](https://vercel.com).

**Live site:** [https://www.cascadecrestllc.com](https://www.cascadecrestllc.com) (apex redirects to `www`).

## Local development (Windows)

Recommended path: **`D:\Gitlocal\cascadecrestllc`**

```powershell
cd D:\Gitlocal\cascadecrestllc
npm install
npm run dev
```

**First-time setup or move from Documents:** run [`scripts/setup-gitlocal.ps1`](scripts/setup-gitlocal.ps1):

```powershell
Set-ExecutionPolicy -Scope Process Bypass
cd D:\Gitlocal\cascadecrestllc
.\scripts\setup-gitlocal.ps1
```

If the repo is not on your machine yet, clone into Gitlocal first:

```powershell
mkdir D:\Gitlocal -Force
cd D:\Gitlocal
git clone https://github.com/drewdog88/cascadecrestllc.git
cd cascadecrestllc
.\scripts\setup-gitlocal.ps1
```

Open [http://localhost:3000](http://localhost:3000).

## Local development (macOS / Linux)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000). Google Analytics does **not** load from a local production build—only on the Vercel production deploy.

## Editing content

All copy and image paths live in [`lib/content.ts`](lib/content.ts). Images are self-hosted under `public/images/photos/` as WebP files.

**To change a photo:**

1. Add or update the source URL in [`scripts/image-manifest.mjs`](scripts/image-manifest.mjs).
2. Run `npm run optimize-images` (downloads, resizes, and writes WebP + `app/opengraph-image.webp`).
3. Point the matching entry in `lib/content.ts` at `/images/photos/{slug}.webp`.

**Privacy:** Do not add the property street address anywhere in content or metadata.

## Photography

Photos were sourced from [Unsplash](https://unsplash.com), [Wikimedia Commons](https://commons.wikimedia.org/), and [npGREENWAY](https://npgreenway.org/) where noted. Attribution remains in `footer.photoCredits` in [`lib/content.ts`](lib/content.ts).

## Bot and AI crawler protection

Two layers work together:

### 1. In the repo (deploy with the site)

- **`/robots.txt`** — asks known AI crawlers (GPTBot, ClaudeBot, etc.) not to crawl; still allows normal search bots.
- **Page metadata** — `noai, noimageai` hints where supported.
- **Security headers** — applied via `headers()` in [`next.config.ts`](next.config.ts) and [`lib/security-headers.ts`](lib/security-headers.ts).

This is polite blocking only; bad actors can ignore `robots.txt`.

### 2. In Vercel (recommended — actually blocks traffic)

On **Pro**, use the project **Firewall**:

1. **Firewall → Managed Rulesets → AI bots** → mode **Deny** (blocks AI training/scraping crawlers Vercel maintains).
2. **Firewall → Managed Rulesets → Bot protection** — for a public marketing site, prefer **Log** or targeted rules over site-wide **Challenge**. Challenge can return Vercel Security Checkpoint pages to automated tools (Lighthouse, uptime monitors, some crawlers) and inflate perceived errors.
3. Confirm Googlebot and Bingbot are not challenged (Vercel managed allow lists).
4. After changing rules, verify with PageSpeed Insights and `curl -I https://www.cascadecrestllc.com` (expect normal HTML caching headers for static pages, not checkpoint responses).

Docs: [Bot management](https://vercel.com/docs/bot-management), [Block GPTBot](https://vercel.com/kb/guide/how-to-block-bots-openai-gptbot).

Optional env var: `NEXT_PUBLIC_SITE_URL` = `https://www.cascadecrestllc.com` (used for sitemap/robots/metadata; defaults to that if unset).

**BotID:** Not installed. When you add a contact form or API, follow [Vercel BotID](https://vercel.com/docs/botid) and protect only those routes.

## Google Analytics (GA4)

GA4 loads **only on Vercel production** (`www.cascadecrestllc.com`). Local dev and preview deploys do not send analytics. Scripts use `afterInteractive` so they do not block first paint.

1. In [Google Analytics](https://analytics.google.com), create a **GA4** property for `cascadecrestllc.com`.
2. **Admin → Data streams → Web** → copy the **Measurement ID** (`G-XXXXXXXXXX`).
3. **Vercel** → project **cascadecrestllc** → **Settings → Environment Variables**:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: your `G-…` ID
   - Environments: **Production** only
4. Redeploy production (or push to `main`).
5. In GA4, open **Reports → Realtime** to confirm hits (may take a few minutes).

The measurement ID is also hardcoded as a fallback in [`lib/analytics.ts`](lib/analytics.ts); the Vercel env var overrides it when set.

## Deploy to Vercel

This project is already connected to Vercel and deploys from `main` on push to GitHub.

**First-time setup (new fork or clone):**

1. Push this repository to GitHub.
2. In the Vercel dashboard, **Add New Project** and import the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in **Settings → Environment Variables** (Production only) if using Google Analytics.
5. Add a custom domain via **Add New → Domain** or the team **Domains** page.

**Ongoing:** push to `main` → Vercel builds production automatically.

## Project structure

- `app/` — layout, home page, global styles, `opengraph-image.webp`, `robots.ts`, `sitemap.ts`
- `components/` — Hero, Neighborhood, Transportation, ImageGallery, About, SiteFooter, GoogleAnalytics
- `lib/content.ts` — centralized copy and image paths
- `lib/analytics.ts` — GA4 measurement ID and production-only gate
- `lib/security-headers.ts` — CSP and security headers
- `lib/ai-crawler-user-agents.ts` — AI bot list for `robots.txt`
- `scripts/optimize-images.mjs` — download and optimize photos into `public/images/photos/`
- `scripts/image-manifest.mjs` — source URLs for the optimizer script
- `next.config.ts` — image formats, security `headers()`
- `public/images/photos/` — self-hosted WebP assets

## License

Private business site. All rights reserved.
