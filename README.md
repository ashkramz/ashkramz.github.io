# Ashley & Michael — Wedding Website

A fast, static wedding website built with [Astro](https://astro.build).
**February 13, 2027 · Oʻahu, Hawaiʻi.**

> ✍️ **Editing content?** You almost never need this file. See
> **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** (plain-English) and
> **[public/images/IMAGE-GUIDE.md](./public/images/IMAGE-GUIDE.md)** for photos.
> All site text lives in **`src/config/site.ts`**.

---

## Tech stack

- **Astro** — static-site generator (ships near-zero JavaScript → very fast)
- **Plain CSS** with design tokens in `src/styles/global.css` (no framework)
- **Self-hosted fonts** via `@fontsource` — Cormorant Garamond + Jost
- **RSVP** via an embedded Tally form (no guest data stored in this repo)

No database, no backend, no secrets in the codebase.

## Project structure

```
public/            # static assets served as-is
  images/          # all photos (+ IMAGE-GUIDE.md)
  favicon.svg
  og-share.jpg
src/
  config/site.ts   # ★ all editable content
  layouts/         # BaseLayout (head, header, footer)
  components/       # Hero, Countdown, ScheduleCard, HotelCard, FaqItem, …
  pages/            # one file per page (URL = filename)
  styles/global.css # design tokens + base styles
```

## Local development

Requires [Node.js](https://nodejs.org) 18.20+ (or 20+).

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

## Deploy

**Live now:** https://ashkramz.github.io — hosted on **GitHub Pages**, deployed
automatically by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)
on every push to `main` (repo: https://github.com/ashkramz/ashkramz.github.io).
See [DEPLOY.md](./DEPLOY.md) for the plain-English guide.

The site is fully static, so it can move to Vercel/Netlify/Cloudflare later with
no code changes if ever desired.

### Custom domain
Add it under the repo's **Settings → Pages → Custom domain**, then update `site:`
in [`astro.config.mjs`](./astro.config.mjs) to that URL (used for SEO and the
social-share preview).

## Notes

- No personal guest data is stored here; RSVPs are collected by Tally.
- Accessibility: semantic landmarks, alt text, visible focus states, AA contrast,
  and reduced-motion support are built in.
