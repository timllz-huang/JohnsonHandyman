# Johnson Family Property Solutions — website

Static site, no build step.

## Deploy (free, ~2 minutes)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page
3. Netlify gives you a live https://*.netlify.app link

Or push to GitHub and enable GitHub Pages (Settings → Pages → Deploy from branch → root).

## Forms
All forms post to FormSubmit. Change the address in each *.dc.html: search for `window.__MAIL_TO || "timllz83@gmail.com"`.
On the first real submission, FormSubmit emails the recipient an activation link — click it once.
