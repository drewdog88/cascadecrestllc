# Cascade Crest LLC

A minimal, image-forward marketing site for Cascade Crest LLC—a Washington State rental company with a property in Portland’s University Park neighborhood (near the University of Portland bluff).

Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, optimized for deployment on [Vercel](https://vercel.com).

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

## Editing content

All copy and image URLs live in [`lib/content.ts`](lib/content.ts). Update text, Unsplash URLs, or swap in your own images under `public/images/` and point `src` to local paths.

**Privacy:** Do not add the property street address anywhere in content or metadata.

## Photography

Launch images are sourced from [Unsplash](https://unsplash.com) (free for web use). See `footer.photoCredit` in content. Replace with your own photography when ready.

## Bot and AI crawler protection

Two layers work together:

### 1. In the repo (deploy with the site)

- **`/robots.txt`** — asks known AI crawlers (GPTBot, ClaudeBot, etc.) not to crawl; still allows normal search bots.
- **Page metadata** — `noai, noimageai` hints where supported.
- **Security headers** — applied on every page via `proxy.ts` and `lib/security-headers.ts`.

This is polite blocking only; bad actors can ignore `robots.txt`.

### 2. In Vercel (recommended — actually blocks traffic)

On **Pro**, use the project **Firewall**:

1. **Firewall → Managed Rulesets → AI bots** → mode **Deny** (blocks AI training/scraping crawlers Vercel maintains).
2. **Firewall → Managed Rulesets → Bot protection** → mode **Challenge** (optional; slows scripted scrapers; keeps Googlebot etc. on the allow list).

Docs: [Bot management](https://vercel.com/docs/bot-management), [Block GPTBot](https://vercel.com/kb/guide/how-to-block-bots-openai-gptbot).

Optional env var: `NEXT_PUBLIC_SITE_URL` = `https://www.cascadecrestllc.com` (used for sitemap/robots URLs; defaults to that if unset).

### 3. BotID (`botid` package)

[Vercel BotID](https://vercel.com/docs/botid) protects **specific routes** (APIs, forms, server actions)—not the whole static site. The package is installed and configured via `withBotId()` in `next.config.ts` and `instrumentation-client.ts`.

When you add a sensitive endpoint, list it in `lib/botid-protected-routes.ts` and call `checkBotId()` from `botid/server` in that route handler.

In Vercel: **Firewall → Rules → enable BotID Deep Analysis** (optional, paid tier for stronger checks).

## Google Analytics (GA4)

The site loads GA4 when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set (free standard GA4).

1. In [Google Analytics](https://analytics.google.com), create a **GA4** property for `cascadecrestllc.com`.
2. **Admin → Data streams → Web** → copy the **Measurement ID** (`G-XXXXXXXXXX`).
3. **Vercel** → project **cascadecrestllc** → **Settings → Environment Variables**:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: your `G-…` ID
   - Environments: Production (and Preview if you want)
4. Redeploy production (or push to `main`).
5. In GA4, open **Reports → Realtime** to confirm hits (may take a few minutes).

Local dev (optional): create `.env.local` with the same variable. Analytics is omitted when the variable is unset.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In the Vercel dashboard, **Add New Project** and import the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` in **Settings → Environment Variables** if using Google Analytics.
5. Add a custom domain via **Add New → Domain** or the team **Domains** page.

## Project structure

- `app/` — layout, page, global styles
- `components/` — Hero, Neighborhood, Transportation, Gallery, About, Footer, GoogleAnalytics
- `lib/content.ts` — centralized copy and image URLs
- `lib/ai-crawler-user-agents.ts` — AI bot list for `robots.txt`
- `app/robots.ts`, `app/sitemap.ts` — crawler policy and sitemap
- `public/` — static assets (favicon, local images)

## License

Private business site. All rights reserved.
