# How to Update Your Wedding Website

Hi Ashley & Michael — this guide explains, in plain English, how to change
anything on your website. **You do not need to know how to code.** Almost
everything lives in a single file, and you only ever change the words between the
"quotation marks."

> 📄 **The one file you edit:** `src/config/site.ts`
> 🖼️ **Photos:** drop them into `public/images/` (see `public/images/IMAGE-GUIDE.md`)

---

## The golden rules (read this first)

When you open `src/config/site.ts`, you'll see lines like this:

```ts
dateDisplay: "February 13, 2027",
```

✅ **You may change** the text **inside the quotes** → `"February 13, 2027"`
🚫 **Do not delete** the quotes `" "`, the comma `,` at the end, or any of the
brackets `{ }` and `[ ]`. They hold everything together.

That's the whole skill. If you only ever change words inside quotes, you can't
break anything.

**Made a mistake?** Don't worry — see [If something breaks](#if-something-breaks)
at the bottom. Your changes can always be undone.

---

## 1. The basics — names, date, location

Open `src/config/site.ts` and look near the top for `couple` and `wedding`:

```ts
couple: {
  partnerA: "Ashley Kramer",
  partnerB: "Michael Sakazaki",
  firstNames: "Ashley & Michael",
  monogram: "A · M",
},

wedding: {
  dateISO: "2027-02-13T16:00:00",   // ⚠️ keep this format — the countdown reads it
  dateDisplay: "February 13, 2027",  // the words guests see
  dayOfWeek: "Saturday",
  location: "Oʻahu, Hawaiʻi",
  ...
},
```

- Change any text in quotes to update it everywhere on the site.
- **The countdown clock** counts down to `dateISO`. Keep the exact format
  `YEAR-MONTH-DAYThour:minute:second`. For 2:30 PM you'd write `...T14:30:00`.
  (After noon, add 12 to the hour: 2 PM = 14, 5 PM = 17.)

---

## 2. Turn on the RSVP form (Tally)

Your RSVP page shows a friendly "coming soon" message until you add your form.
To switch it on:

1. Go to **[tally.so](https://tally.so)** and create a free account.
2. Build your RSVP form (name, attending yes/no, meal choice, etc.) and click
   **Publish**.
3. Copy your form's share link. It looks like `https://tally.so/r/abc123`.
4. In `src/config/site.ts`, find the `rsvp` section:

   ```ts
   rsvp: {
     ...
     formEmbedUrl: "",   // ← paste your link between these quotes
     fallbackEmail: "[TBD — your-email@example.com]",
   },
   ```

5. Paste your link inside the empty quotes:

   ```ts
   formEmbedUrl: "https://tally.so/r/abc123",
   ```

6. While you're there, set the `deadline` and `fallbackEmail` too. Save the file.

That's it — your form now appears right on the page. (You can also use a Google
Form link here instead; paste its "Send → link" URL the same way.)

---

## 2b. The guest password

The site shows guests an elegant password screen once per device (so put the
password on your invitations!). It's controlled in the `gate` section:

```ts
gate: {
  enabled: true,              // set to false to remove the password screen
  password: "Aloha2027",      // change this to anything you like
  hint: "Enter the password from your invitation",
},
```

Honest note: like the password gates on The Knot and Zola, this politely keeps
out strangers and search engines — it isn't bank-vault security. Your RSVP
responses are never stored on the website, so they stay private regardless.

---

## 3. Schedule events — add, edit, or remove

Find the `schedule` section. Each event is one block that looks like this:

```ts
{
  title: "Reception",
  day: "Saturday, February 13, 2027",
  time: "[TBD — e.g. 5:30 PM]",
  venue: "La Pietra",
  address: "[TBD — confirm address]",
  note: "Cocktails, dinner, and dancing to follow the ceremony.",
  attire: "Formal / black-tie optional",
},
```

- **To edit an event:** change the words in quotes.
- **To add an event:** copy one whole block (from `{` to `},` including the comma),
  paste it right below another block, and edit the words.
- **To remove an event:** delete the whole block from `{` to `},`.

Keep each block separated by a comma. Anything marked `[TBD]` is a placeholder for
you to fill in.

---

## 4. FAQ — add, edit, or remove questions

Find the `faq` section. Each question is a small block:

```ts
{
  q: "What should I wear?",
  a: "The ceremony and reception are formal / black-tie optional...",
},
```

Same pattern as the schedule:
- Edit the words in quotes to change a question or answer.
- Copy a block and paste it below to add a new one.
- Delete a block to remove a question.

---

## 5. Hotels (Where to Stay)

Find the `stay` section. Each hotel is a block:

```ts
{
  name: "[TBD — Hotel Name]",
  neighborhood: "Waikīkī / Diamond Head",
  priceTier: "$$$",                 // use $, $$, $$$, or $$$$
  distance: "≈ 10 min to the ceremony",
  description: "A refined oceanfront option...",
  bookingUrl: "#",                  // paste the hotel's website link here
  bookingLabel: "View hotel",
  image: "/images/hotel-1.webp",    // matches a file in public/images
  imageAlt: "[TBD — Hotel exterior]",
},
```

- Fill in the `name`, `description`, and paste the hotel's website into
  `bookingUrl` (replace the `"#"`). Until you do, the card politely says
  "Booking link coming soon."
- To show a hotel photo, save it as `hotel-1.webp` (etc.) in `public/images/` —
  see the **Image Guide**.
- Add or remove hotels by copying or deleting a whole block, just like the
  schedule.
- **Room block:** if you reserve a group rate, replace the `roomBlockNote` text
  (remove the `[TBD]`) and it will appear in a highlighted box.

---

## 6. Registry links

Find the `registry` section:

```ts
links: [
  { label: "[TBD — Registry Name]", url: "#" },
  { label: "[TBD — Honeymoon Fund]", url: "#" },
],
```

- Replace `label` with the registry name (e.g. `"Zola"`) and `url` with the link
  (e.g. `"https://zola.com/..."`).
- Add another line for each registry. Remove a line you don't need.
- Until you add real links (anything that isn't `[TBD]` or `#`), the page shows a
  gracious "details coming soon" note.

---

## 7. Our Story

Find the `story` section. The `paragraphs` list becomes the text on the page:

```ts
paragraphs: [
  "[TBD — How you met.] Tell the story of where your paths first crossed...",
  "[TBD — Your life together.] A few lines about the years between...",
  "[TBD — The proposal.] Where it happened, who cried first...",
],
```

Replace each line with your own words. Add a line for another paragraph, or delete
one. You can also change the `quote` line and the story photo (`our-story-1.webp`).

---

## 8. Swapping photos

You change photos by replacing files in `public/images/` — **not** in the code.
Full instructions (sizes, shapes, and a free resizing tool) are in:

> 📄 `public/images/IMAGE-GUIDE.md`

Short version: export your photo at the listed size, name it exactly like the file
you're replacing (e.g. `hero-home.webp`), and drop it in the folder.

---

## 9. Previewing & publishing your changes

You have two easy options:

### Option A — Edit on GitHub, publish automatically (easiest)
Your site is **already live** at **https://ashkramz.github.io** and republishes
itself whenever you commit a change:
1. Open **https://github.com/ashkramz/ashkramz.github.io** and sign in.
2. Click into `src/config/site.ts` and click the **pencil ✏️ icon** to edit.
3. Make your changes, scroll down, and click **Commit changes**.
4. Your site rebuilds and goes live on its own in **about a minute**. ✨

### Option B — Preview on your own computer first
If you'd like to see changes before they go live (this needs Node installed):
```
npm install      (only the very first time)
npm run dev
```
Then open the address it prints (usually `http://localhost:4321`) in your browser.
Stop the preview with `Ctrl + C`.

---

## If something breaks

If the site won't load after an edit, you almost certainly removed a quote, comma,
or bracket by accident. To fix it:

- **On GitHub:** open the file's **History**, find the version from before your
  edit, and restore it — your site reappears. Nothing is ever lost.
- **On your computer:** undo your edits (Ctrl + Z) until it works again, or ask
  for help.

When in doubt, change **only the words inside the quotes**, save, and check the
site. Small steps are safe steps. 💛

---

### Quick reference

| I want to change… | Go to this section of `site.ts` |
|---|---|
| Our names / date / location | `couple`, `wedding` |
| Homepage welcome text | `home` |
| Our Story text | `story` |
| Photo gallery (Our Story page) | `gallery` — and the `public/images/gallery/` folder |
| Schedule events | `schedule` |
| Travel info | `travel` |
| Hotels | `stay` |
| RSVP form & deadline | `rsvp` |
| Registry links | `registry` |
| FAQ questions | `faq` |
| Contact email/phone | `contact` |
| Photos | *(not here — use `public/images/`)* |
