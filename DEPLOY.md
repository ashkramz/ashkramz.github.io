# Putting Your Website Online (GitHub + Vercel)

This is a one-time setup. Once it's done, your site is live on the internet, and
**every edit you make republishes automatically in about a minute.** Both services
below are **free**.

There are two short stops:
1. **GitHub** — a safe online home for your website's files.
2. **Vercel** — the service that turns those files into a live website.

The project is already prepared: it's a git repository with your first commit
saved. You just need to connect the two accounts.

---

## Step 1 — Put the code on GitHub

### Accounts you'll need
- A free **GitHub** account → [github.com/signup](https://github.com/signup)

Then choose **one** of the two paths below.

### Path A — Easiest (with my help) 🟢
1. Install the GitHub command-line tool. In **PowerShell**, run:
   ```powershell
   winget install GitHub.cli
   ```
2. Close and reopen PowerShell, then sign in:
   ```powershell
   gh auth login
   ```
   Choose **GitHub.com → HTTPS → Login with a web browser**, and follow the prompts
   (it shows a code, opens your browser, you click **Authorize**).
3. **Tell me once that's done** — I'll create the repository and upload everything
   with one command:
   ```powershell
   gh repo create sakazaki-kramer-wedding --private --source=. --remote=origin --push
   ```

### Path B — Manual (no extra tools)
1. On [github.com/new](https://github.com/new), create a repository named
   **`sakazaki-kramer-wedding`**. Leave it **empty** (don't add a README) and you
   can keep it **Private**.
2. **Tell me the repository's web address** (e.g.
   `https://github.com/yourname/sakazaki-kramer-wedding`). I'll run these for you:
   ```powershell
   git remote add origin <that-address>
   git push -u origin main
   ```
   The first push opens a browser window to sign in to GitHub — just approve it.

> Either path uploads the site. The repository is **private**, so the source files
> stay between us — but the finished website (Step 2) is public, as it should be.

---

## Step 2 — Connect Vercel (turns it into a live site)

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** → **Continue with
   GitHub** (this links the two accounts).
2. Click **Add New… → Project**.
3. Find **`sakazaki-kramer-wedding`** in the list and click **Import**.
4. Vercel automatically detects it's an Astro site — you don't need to change any
   settings. Click **Deploy**.
5. Wait about a minute. 🎉 You'll get a live link like
   `https://sakazaki-kramer-wedding.vercel.app`.

---

## After it's live: editing & republishing

You never have to repeat the setup. To change anything later:

- **The easy way:** open your repository on github.com, click into
  `src/config/site.ts`, click the **pencil ✏️**, make your change, and click
  **Commit changes**. Vercel rebuilds and your live site updates in ~1 minute.
- Adding photos? Upload them into the right folder on GitHub (e.g.
  `public/images/`), then update `site.ts` — see
  [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) and
  [public/images/IMAGE-GUIDE.md](./public/images/IMAGE-GUIDE.md).

---

## Optional — Use your own web address (custom domain)

1. Buy a domain (e.g. from Namecheap, Google Domains, etc.).
2. In Vercel: your project → **Settings → Domains → Add** → type your domain and
   follow the instructions it gives you.
3. Update the `site:` line in [`astro.config.mjs`](./astro.config.mjs) to your new
   address (used for link previews and search engines), then commit.

---

## If something goes wrong

- **Vercel build failed:** it almost always means a small typo in `site.ts` (a
  missing quote, comma, or bracket). Open the file on GitHub → **History** →
  restore the last working version. See the "If something breaks" section of
  [CONTENT-GUIDE.md](./CONTENT-GUIDE.md).
- **Stuck on GitHub sign-in:** make sure you finished the browser approval step,
  then try again — or just tell me and we'll sort it out together.
