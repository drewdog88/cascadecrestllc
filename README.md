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

## Deploy to Vercel

1. Push this repository to GitHub.
2. In the Vercel dashboard, **Add New Project** and import the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy—no environment variables required for v1.
5. Optionally add a custom domain under **Project → Settings → Domains**.

## Project structure

- `app/` — layout, page, global styles
- `components/` — Hero, Neighborhood, Transportation, Gallery, About, Footer
- `lib/content.ts` — centralized copy and image URLs
- `public/` — static assets (favicon, local images)

## License

Private business site. All rights reserved.
