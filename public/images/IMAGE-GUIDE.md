# Image Guide

Everything you need to swap the photos on the website. **You never edit code to
change a picture** — you just save your photo with the *same filename* into this
`public/images/` folder, and the website uses it automatically.

---

## The one rule

> To replace a photo: export your image at the size below, name it **exactly** the
> same as the file it's replacing (including the `.webp` or `.jpg` ending), and
> drop it into this folder. Done.

For example, to change the big homepage photo, replace **`hero-home.webp`** with
your own `hero-home.webp`.

---

## Every image at a glance

| Filename | Size (width × height) | Shape | What it's for & how to crop | Keep under |
|---|---|---|---|---|
| `hero-home.webp` | 2400 × 1600 | Wide (landscape) | The large homepage banner. Keep the main subject/horizon in the **lower third** and the upper-middle calmer, so the names + date stay readable on top. Looks good cropped tall on phones, so keep the key subject centered left-to-right. | 400 KB |
| `our-story-1.webp` | 1200 × 1500 | Tall (portrait) | The photo on the "Our Story" page. A vertical photo of the two of you, with a little space above your heads. | 250 KB |
| `our-story-2.webp` | 1600 × 1067 | Wide (landscape) | Optional second story photo (not shown unless you add it to a page). | 300 KB |
| `travel-banner.webp` | 2000 × 900 | Extra-wide | Optional scenic Oʻahu banner. Keep the middle calm in case text sits over it. | 300 KB |
| `hotel-1.webp` | 1200 × 900 | Wide (landscape) | First hotel card on "Where to Stay." Hotel exterior or lobby, centered. | 180 KB |
| `hotel-2.webp` | 1200 × 900 | Wide (landscape) | Second hotel card. Frame it like the others for a tidy row. | 180 KB |
| `hotel-3.webp` | 1200 × 900 | Wide (landscape) | Third hotel card. | 180 KB |
| `hotel-4.webp` | 1200 × 900 | Wide (landscape) | Spare hotel card (only shows if you add a 4th hotel in `site.ts`). | 180 KB |
| `registry-banner.webp` | 1600 × 900 | Wide (landscape) | Optional soft image for the Registry page. | 250 KB |
| `og-share.jpg` *(in the folder above this one)* | 1200 × 630 | Wide (landscape) | The preview picture shown when the website link is texted or posted. We made you a nice text-only one already — replace it only if you want a photo version. Keep names + date readable. | 200 KB |
| `favicon.svg` *(in the folder above this one)* | — | Square icon | The tiny "A · M" icon in the browser tab. You don't need to change this. | — |

The images that are in here now are **elegant placeholders** (they say "REPLACE")
so the site looks finished today. Swap them whenever your photos are ready.

---

## Gallery photos (the `gallery/` folder)

The photo gallery at the bottom of the **Our Story** page pulls every image from
the **`public/images/gallery/`** folder. Unlike the images above, these aren't
fixed — you can have as many as you like.

- **Size:** long edge **≈ 1600 px** (e.g. `1600 × 1067` landscape, or
  `1200 × 1500` portrait). Mixing portrait and landscape looks great — the gallery
  arranges them automatically and never crops them.
- **Format:** WebP. **Keep each under ~300 KB** (use squoosh.app, below).
- **Filename:** anything tidy, e.g. `gallery-7.webp`.

**To add a gallery photo (two small steps):**
1. Save your photo into `public/images/gallery/` (e.g. `gallery-7.webp`).
2. In `src/config/site.ts`, find the `gallery` section and add one line to the
   `photos` list:
   ```ts
   { src: "/images/gallery/gallery-7.webp", alt: "Sunset at Diamond Head" },
   ```
   (Copy an existing line, paste it, change the filename and description.)

**To remove one:** delete its line from that `photos` list (and optionally delete
the file). The 6 photos in there now are placeholders — replace them anytime.

---

## How to resize & compress (free, no installs)

Phone and camera photos are usually 4–12 MB — far too big for a fast website.
Shrink them first:

1. Go to **[squoosh.app](https://squoosh.app)** in your browser.
2. Drag your photo in.
3. On the right side, set:
   - **Resize** → the width from the table above (e.g. `2400` for the hero).
   - **Format** → **WebP** (for `.webp` files) or **MozJPEG** (for the `.jpg`).
   - Slide **Quality** until the size (shown bottom-right) is under the limit above —
     around **75–82** usually looks great.
4. Click **Download**, then **rename the file** to match exactly (e.g. `hero-home.webp`).
5. Drop it into this `public/images/` folder, replacing the placeholder.

---

## A few tips for a cohesive, editorial look

- Choose warm, soft, natural-light photos. Avoid heavy filters and very bright,
  saturated colors — they fight the ivory-and-ink palette.
- Keep the hotel photos framed similarly (all exteriors, or all interiors) so the
  row looks intentional.
- Always describe each photo for screen readers and search engines by updating its
  `imageAlt` / `...ImageAlt` text in `src/config/site.ts`.
