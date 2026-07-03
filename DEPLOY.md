# ✅ Your Website Is Live

**https://ashkramz.github.io**

The setup is done — nothing left to install or configure. This page is now just a
reference for how it works and what you *can* do later.

---

## How it works

- Your website's files live in a GitHub repository:
  **https://github.com/ashkramz/ashkramz.github.io**
- **Every time a change is committed there, the site republishes itself
  automatically in about a minute.** (A small robot — a "GitHub Action" — builds
  and publishes it. You'll see a yellow dot ● in the repo's *Actions* tab while it
  works, then a green check ✓.)
- Hosting is **free**, with HTTPS built in.
- The repository is **public** (free GitHub hosting requires it). That's fine:
  the website itself is public anyway, and no guest data is ever stored here.

## To change anything on the site

1. Open **https://github.com/ashkramz/ashkramz.github.io** and sign in.
2. Click into `src/config/site.ts`, then click the **pencil ✏️** to edit.
3. Make your change (only the words inside quotes! — see
   [CONTENT-GUIDE.md](./CONTENT-GUIDE.md)).
4. Click **Commit changes**. About a minute later, the live site is updated.

Adding photos? Upload them to `public/images/` on GitHub (Add file → Upload
files), then update `site.ts` — details in
[public/images/IMAGE-GUIDE.md](./public/images/IMAGE-GUIDE.md).

## Optional — your own web address (custom domain)

The free address works forever, but if you'd like something like
`ashleyandmichael.com` (~$10–15/year):

1. Buy the domain (Namecheap, Porkbun, Cloudflare, etc.).
2. In the GitHub repository: **Settings → Pages → Custom domain** → enter your
   domain and follow the DNS instructions shown.
3. Update the `site:` line in [`astro.config.mjs`](./astro.config.mjs) to the new
   address and commit.

## If something goes wrong

- **Site didn't update after an edit:** check the **Actions** tab on GitHub — a
  red ✗ almost always means a small typo in `site.ts` (a missing quote, comma, or
  bracket). Open the file's **History** and restore the last working version.
- More recovery help: the "If something breaks" section of
  [CONTENT-GUIDE.md](./CONTENT-GUIDE.md).
