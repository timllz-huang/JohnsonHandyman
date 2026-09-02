# Johnson Family Property Solutions — website

Static site with a small build step.

## How it fits together
- `*.dc.html` — the design sources (edit these in Claude Design). They still work on their own, but are `noindex` and canonical to the clean URLs.
- `site.config.json` — business facts (phone, email, areas, hours, licence, ABN, social profiles) and per-page titles/descriptions. **Edit this when the real details are known**, then rebuild.
- `tools/build.js` — `node tools/build.js` (run from this folder). Pre-renders each source into plain HTML at clean URLs
  (`index.html`, `about/index.html`, …), adds meta/Open Graph/canonical tags and JSON-LD schema, and writes
  `robots.txt`, `sitemap.xml` and `llms.txt`. Commit the generated files — GitHub Pages serves them as-is.
- `site.js` — the only JavaScript the built pages load (menu, dropdown, area picker, project filters, forms).
- `assets/responsive.css` — mobile/tablet layer (see below). `assets/og-image.jpg` — social share image.

When the domain is live, change `baseUrl` in `site.config.json`, rebuild, and set the custom domain in GitHub Pages.

## Layout
Pages use inline styles (dc-runtime). `assets/responsive.css` is the mobile/tablet layer: it targets the
`class` hooks on the pages (`g2`, `card-2`, `gallery`, `hero-inner`, `nav-*`, ...) with `!important` so it wins over
the inline desktop values below 900px / 640px / 480px. The header has a hamburger menu (`menuOpen` state) on ≤900px.

## Deploy (free, ~2 minutes)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page
3. Netlify gives you a live https://*.netlify.app link

Or push to GitHub and enable GitHub Pages (Settings → Pages → Deploy from branch → root).

## Forms
All forms post to FormSubmit. The address is `formMailTo` in `site.config.json` (built pages) and `window.__MAIL_TO || "timllz83@gmail.com"` in each *.dc.html (design sources).
On the first real submission, FormSubmit emails the recipient an activation link — click it once.
