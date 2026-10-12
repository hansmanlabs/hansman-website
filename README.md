# hansmanlabs.com

Coming-soon site for Hansman Labs. Next.js 16 (App Router, Cache Components), Tailwind CSS 4, TypeScript. Fully static.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Checks:

```bash
pnpm exec next typegen && pnpm exec tsc --noEmit
pnpm lint
pnpm build && pnpm start
```

## Editing content

- **Copy, email, GitHub link, focus areas:** `lib/site.ts`. The GitHub link appears in the footer only once `github` is set.
- **Page layout:** `app/page.tsx`. Header and footer: `components/`.
- **Design tokens** (colors, type scale, spacing): `:root` and `@theme` in `app/globals.css`.
- **Monogram drawing:** `components/construction-mark.tsx`. Favicon: `app/icon.svg`. Share image and Apple icon are generated at build time from `app/opengraph-image.tsx` and `app/apple-icon.tsx`, using the vendored Instrument Serif font in `assets/fonts` (SIL OFL).

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project**, import the repo, and keep the detected Next.js defaults (install `pnpm install`, build `next build`). No environment variables are needed.
3. Open **Project → Settings → Domains**, add `hansmanlabs.com` and `www.hansmanlabs.com`, and set `www` to redirect to the apex domain (the canonical URL is `https://hansmanlabs.com`).
4. At your DNS provider, add the records Vercel shows for each domain. Usually that's an `A` record for the apex and a `CNAME` for `www` pointing at Vercel.
5. Once the certificate has been issued, confirm that `https://hansmanlabs.com`, `/robots.txt`, `/sitemap.xml` and `/opengraph-image` all load.
