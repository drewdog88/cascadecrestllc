# Cascade Crest LLC

A minimal, image-forward marketing site for Cascade Crest LLC—a Washington State rental company with a property in Portland’s University Park neighborhood (near the University of Portland bluff).

Built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**. Deployed on [Vercel](https://vercel.com): marketing pages are static; **rental apply** is disclosure-only on-site with handoff to RentSpree (no applicant PII stored—see [docs/SCREENING_SETUP.md](docs/SCREENING_SETUP.md)).

**Live site:** [https://www.cascadecrestllc.com](https://www.cascadecrestllc.com) (apex redirects to `www`).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (static pages) |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint |
| `npm run optimize-images` | Re-download sources, regenerate WebP assets and OG image (see below) |

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

Open [http://localhost:3000](http://localhost:3000).

Expected build output includes static marketing routes plus admin login API. Applicant data is **not** stored on this site.

Google Analytics does **not** load from a local production build—only on the Vercel production deploy (`VERCEL_ENV=production`).

## Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Vercel (optional) | Canonical base URL for sitemap, robots, and Open Graph. Defaults to `https://www.cascadecrestllc.com`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Vercel **Production** only | GA4 measurement ID (`G-…`). Overrides fallback in [`lib/analytics.ts`](lib/analytics.ts). |
| `ADMIN_SECRET` | Vercel (secret) | Optional admin login for `/admin/applications` (links to screening partner) |
| `SCREENING_INVITE_URL` | Vercel | RentSpree (or SmartMove) tenant screening link |
| `SCREENING_FEE_DISCLOSURE` | Vercel (optional) | Fee text on apply disclosures |

See [`.env.example`](.env.example) and [docs/SCREENING_SETUP.md](docs/SCREENING_SETUP.md).

## Editing content

All copy and image paths live in [`lib/content.ts`](lib/content.ts).

**Text:** edit strings in `lib/content.ts` and redeploy.

**Photos:** images are committed as WebP under `public/images/photos/`. New clones do **not** need to run `optimize-images` unless you are replacing assets.

To swap or add a photo:

1. Add or update the source URL in [`scripts/image-manifest.mjs`](scripts/image-manifest.mjs) (remote URLs) or point `localImages` at a file under `public/images/`.
2. Run `npm run optimize-images` (requires network; uses `sharp` as a dev dependency).
3. Wire the slug in `lib/content.ts` as `/images/photos/{slug}.webp`.
4. Update `SITE_LAST_MODIFIED` in [`app/sitemap.ts`](app/sitemap.ts) if the change is material for crawlers.
5. Commit the new WebP files and `app/opengraph-image.webp` (regenerated from the hero).

**Privacy:** Do not add the property street address anywhere in content or metadata.

## Images and Vercel

Photos are stored in **`public/images/photos/`**, not [Vercel Blob](https://vercel.com/docs/storage/vercel-blob). For a small, rarely changing marketing site this is the recommended approach: assets ship with the build, are cached on Vercel’s CDN, and avoid extra storage APIs or remote `next/image` hosts.

[`next/image`](https://nextjs.org/docs/app/api-reference/components/image) still generates responsive AVIF/WebP `srcset` from those local files. Open Graph uses the file convention [`app/opengraph-image.webp`](app/opengraph-image.webp).

## Photography

Photos were sourced from [Unsplash](https://unsplash.com), [Wikimedia Commons](https://commons.wikimedia.org/), and [npGREENWAY](https://npgreenway.org/) where noted. Attribution remains in `footer.photoCredits` in [`lib/content.ts`](lib/content.ts).

## Bot and AI crawler protection

Two layers work together:

### 1. In the repo (deploy with the site)

- **`/robots.txt`** — asks known AI crawlers (GPTBot, ClaudeBot, etc.) not to crawl; still allows normal search bots.
- **Page metadata** — `noai, noimageai` hints where supported.
- **Security headers** — CSP, HSTS, and related headers via `headers()` in [`next.config.ts`](next.config.ts) ([`lib/security-headers.ts`](lib/security-headers.ts)).

This is polite blocking only; bad actors can ignore `robots.txt`.

### 2. In Vercel (recommended — actually blocks traffic)

On **Pro**, use the project **Firewall**:

1. **Firewall → Managed Rulesets → AI bots** → mode **Deny** (blocks AI training/scraping crawlers Vercel maintains).
2. **Firewall → Managed Rulesets → Bot protection** — for a public marketing site, prefer **Log** or targeted rules over site-wide **Challenge**. Challenge can return Vercel Security Checkpoint pages to automated tools (Lighthouse, uptime monitors, some crawlers) and inflate perceived errors.
3. Confirm Googlebot and Bingbot are not challenged (Vercel managed allow lists).
4. After changing rules, verify with PageSpeed Insights and `curl -I https://www.cascadecrestllc.com` (expect normal HTML for static pages, not checkpoint responses).

Docs: [Bot management](https://vercel.com/docs/bot-management), [Block GPTBot](https://vercel.com/kb/guide/how-to-block-bots-openai-gptbot).

**BotID:** Not installed. Apply flow is client-side handoff only (no submit API).

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

## Deploy to Vercel

This project is connected to Vercel and deploys from `main` on push to GitHub.

**First-time setup (new fork or clone):**

1. Push this repository to GitHub.
2. In the Vercel dashboard, **Add New Project** and import the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy. Set environment variables above if needed.
5. Add a custom domain via **Add New → Domain** or the team **Domains** page.

**Ongoing:** push to `main` → Vercel builds production automatically.

## Project structure

```
app/                    Layout, home page, globals.css, metadata routes
  apply/                Disclosures + RentSpree handoff (noindex, no PII stored)
  admin/                Protected link to screening partner dashboard
  api/admin/login/      Admin session cookie
  screening-criteria/   Legal: screening criteria
  privacy/              Legal: privacy policy
  fair-housing/         Legal: fair housing notice
  opengraph-image.webp  Social preview image (regenerated by optimize-images)
  robots.ts             robots.txt
  sitemap.ts            sitemap.xml
components/             Hero, Neighborhood, …, apply/, admin/
lib/
  content.ts            Copy and image paths
  legal-content.ts      Screening criteria and policy text
  screening.ts          RentSpree handoff configuration
  admin-auth.ts         Admin session cookies
  analytics.ts          GA4 ID and production-only gate
  security-headers.ts   CSP and security header values
  ai-crawler-user-agents.ts
docs/SCREENING_SETUP.md RentSpree / SmartMove setup
middleware.ts           Protects /admin/* routes
docs/OREGON_COMPLIANCE.md
public/images/photos/   Self-hosted WebP assets (committed)
scripts/
  image-manifest.mjs    Source URLs for optimize-images
  optimize-images.mjs   Download, resize, write WebP + OG image
  setup-gitlocal.ps1    Windows Gitlocal setup helper
next.config.ts          Image formats (AVIF/WebP), security headers()
```

## License

Private business site. All rights reserved.
