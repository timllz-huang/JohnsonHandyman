#!/usr/bin/env node
/* Static build for the Johnson Property Solutions site.
   Reads the *.dc.html design sources + site.config.json and writes plain, crawlable HTML:
     /index.html, /about/index.html, ... plus robots.txt, sitemap.xml, llms.txt.
   Run from the site folder:  node tools/build.js                                   */
"use strict";
const fs = require("fs"), path = require("path");
const SITE = path.resolve(__dirname, "..");
const cfg = JSON.parse(fs.readFileSync(path.join(SITE, "site.config.json"), "utf8"));
const BASE = cfg.baseUrl.replace(/\/?$/, "/");
const EXTRACT = process.argv.includes("--extract");
const LANGS = cfg.languages || {};                       // { zh: { lang, path, label, switchLabel, business, pages } }
const DICT = {}, MISSING = {};
for (const code of Object.keys(LANGS)) {
  const f = path.join(SITE, "i18n", code + ".json");
  DICT[code] = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : {};
  MISSING[code] = new Map();
}
const TRANSLATABLE_ATTRS = ["alt", "placeholder", "aria-label", "title", "data-done", "data-name"];
function lookup(code, text) {
  const t = text.trim();
  if (!t || !/[A-Za-z]/.test(t)) return text;                       // numbers, symbols, stars
  const v = DICT[code][t];
  if (v) return text.replace(t, v);
  if (!MISSING[code].has(t)) MISSING[code].set(t, "");
  return text;
}
function translateHtml(html, code) {
  html = html.replace(/>([^<]+)</g, (m, txt) => ">" + lookup(code, txt) + "<");
  html = html.replace(new RegExp("\\s(" + TRANSLATABLE_ATTRS.join("|") + ')="([^"]*)"', "g"), (m, a, v) => " " + a + '="' + lookup(code, v) + '"');
  return html;
}
const today = new Date().toISOString().slice(0, 10);
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---------- 1. evaluate the page's DC logic to get the data ---------- */
function evalVals(scriptSrc, title) {
  class DCLogic { setState() {} }
  const win = { __MAIL_TO: cfg.formMailTo }, doc = { title }, loc = { pathname: "/" };
  const Component = new Function("DCLogic", "window", "document", "location", "fetch", scriptSrc + "\nreturn Component;")(DCLogic, win, doc, loc, () => Promise.reject());
  return new Component().renderVals();
}

/* ---------- 2. tiny template expander for sc-for / sc-if / {{ }} ---------- */
const HIDE_IF = new Set(["moreOpen", "menuOpen", "formSent"]);     // rendered but hidden; site.js toggles them
const SHOW_IF = new Set(["menuClosed", "formNotSent"]);
function evalExpr(expr, scope) {
  try {
    const names = Object.keys(scope);
    const v = new Function(...names, "return (" + expr + ");")(...names.map(n => scope[n]));
    if (v == null || typeof v === "function") return "";
    return String(v);
  } catch (e) { console.warn("  ! cannot evaluate {{ " + expr + " }}: " + e.message); return ""; }
}
function interp(str, scope) { return str.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (_, e) => evalExpr(e, scope)); }
function findClose(html, tag, from) {
  const open = new RegExp("<" + tag + "\\b", "g"), close = new RegExp("</" + tag + "\\s*>", "g");
  let depth = 1, pos = from;
  while (depth) {
    open.lastIndex = pos; close.lastIndex = pos;
    const o = open.exec(html), c = close.exec(html);
    if (!c) throw new Error("unclosed <" + tag + ">");
    if (o && o.index < c.index) { depth++; pos = o.index + 1; } else { depth--; pos = c.index + c[0].length; if (!depth) return { inner: html.slice(from, c.index), end: pos }; }
  }
}
function addHidden(html) { return html.replace(/^(\s*<[a-z][\w-]*)/i, "$1 hidden"); }
function expand(html, scope) {
  let out = "", i = 0;
  const re = /<(sc-for|sc-if)\b([^>]*)>/g;
  let m;
  while ((m = re.exec(html))) {
    out += interp(html.slice(i, m.index), scope);
    const { inner, end } = findClose(html, m[1], m.index + m[0].length);
    const attrs = m[2];
    if (m[1] === "sc-for") {
      const list = /list="\{\{\s*([^}]+?)\s*\}\}"/.exec(attrs)[1], as = /\bas="(\w+)"/.exec(attrs)[1];
      const names = Object.keys(scope);
      const arr = new Function(...names, "return (" + list + ");")(...names.map(n => scope[n])) || [];
      arr.forEach((item, idx) => { out += expand(inner, Object.assign({}, scope, { [as]: item, [as + "Index"]: idx })); });
    } else {
      const expr = /value="\{\{\s*([^}]+?)\s*\}\}"/.exec(attrs)[1].trim();
      if (HIDE_IF.has(expr)) out += addHidden(expand(inner, scope));
      else if (SHOW_IF.has(expr) || evalExpr(expr, scope) && evalExpr(expr, scope) !== "false") out += expand(inner, scope);
    }
    i = end; re.lastIndex = end;
  }
  return out + interp(html.slice(i), scope);
}

/* ---------- 3. pseudo-class attributes -> real CSS ---------- */
function pseudoStyles(html) {
  const rules = new Map(); let n = 0;
  const re = /<([a-z][\w-]*)([^>]*?)\sstyle-(hover|focus)="([^"]*)"/i;
  while (re.test(html)) {
    html = html.replace(re, function (whole, tag, before, pseudo, css) {
      const key = pseudo + "|" + css;
      if (!rules.has(key)) rules.set(key, { cls: "s" + pseudo[0] + (n++).toString(36), pseudo, css });
      const cls = rules.get(key).cls;
      return /\sclass="/.test(before) ? "<" + tag + before.replace(/\sclass="([^"]*)"/, ' class="$1 ' + cls + '"') : "<" + tag + ' class="' + cls + '"' + before;
    });
  }
  const css = [...rules.values()].map(r => "." + r.cls + ":" + r.pseudo + "{" + r.css.split(";").filter(Boolean).map(d => d.trim() + " !important").join(";") + "}").join("\n");
  return { html, css };
}
const mergePseudo = pseudoStyles;

/* ---------- 4. per-page build ---------- */
const pages = Object.entries(cfg.pages);
const urlFor = p => BASE + p;
function cleanLinks(html, rel) {
  for (const [name, pg] of pages) {
    const re = new RegExp('(href|action)="' + name + '\\.dc\\.html', "g");
    html = html.replace(re, '$1="' + ((rel + pg.path) || "./"));
  }
  html = html.replace(/(href|src)="assets\//g, '$1="' + rel + "assets/").replace(/url\("assets\//g, 'url("' + rel + "assets/");
  return html;
}
function faqSchema(html) {
  const qs = [...html.matchAll(/<h3 style="font-family:'Source Sans 3'[^"]*">([^<]+)<\/h3>\s*<p>([^<]+)<\/p>/g)];
  if (!qs.length) return null;
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: qs.map(m => ({ "@type": "Question", name: m[1].trim(), acceptedAnswer: { "@type": "Answer", text: m[2].trim() } })) };
}
function businessSchema(L) {
  const bz = Object.assign({}, cfg, (L && L.business) || {});
  const b = {
    "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", "@id": BASE + "#business",
    name: bz.name, alternateName: bz.alternateName, description: bz.description, url: BASE + ((L && L.path) || ""),
    telephone: cfg.telephone, email: cfg.email, image: BASE + cfg.ogImage, logo: BASE + "assets/logo-primary.svg", priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: cfg.address.locality, addressRegion: cfg.address.region, addressCountry: cfg.address.country },
    areaServed: cfg.areasServed.map(n => ({ "@type": n.includes("Shire") ? "AdministrativeArea" : "City", name: n })),
    openingHoursSpecification: cfg.openingHours.map(h => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Services", itemListElement: [
      ["Carpentry and decking", "services/#carpentry"], ["Room additions and conversions", "services/#builds"], ["Bathroom renovations", "services/#bathrooms"],
      ["Minor plumbing", "services/#plumbing"], ["Home care and repairs", "services/#home-care"]
    ].map(([n, u]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, url: BASE + u, areaServed: "Western Sydney, NSW" } })) }
  };
  if (cfg.address.postcode) b.address.postalCode = cfg.address.postcode;
  if (cfg.abn) b.taxID = "ABN " + cfg.abn;
  if (cfg.sameAs && cfg.sameAs.length) b.sameAs = cfg.sameAs;
  return b;
}
const BIZ_JSON = JSON.stringify(businessSchema());
const BIZ_JSON_L = Object.fromEntries(Object.entries(LANGS).map(([c, L]) => [c, JSON.stringify(businessSchema(L))]));

function buildPage(name, pg, code) {
  const L = code ? LANGS[code] : null;
  const outPath = (L ? L.path : "") + pg.path;                       // e.g. "zh/about/"
  const meta = L ? Object.assign({}, pg, (L.pages && L.pages[name]) || {}) : pg;
  const src = fs.readFileSync(path.join(SITE, name + ".dc.html"), "utf8");
  const rel = outPath ? "../".repeat(outPath.split("/").filter(Boolean).length) : "";
  const helmet = /<helmet>([\s\S]*?)<\/helmet>/.exec(src)[1];
  const baseStyle = /<style>([\s\S]*?)<\/style>/.exec(helmet)[1];
  const fontLinks = [...helmet.matchAll(/<link[^>]*fonts\.g[^>]*>/g)].map(m => m[0]).join("\n");
  const script = /<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/.exec(src)[1];
  let body = /<x-dc>([\s\S]*?)<\/x-dc>/.exec(src)[1].replace(/<helmet>[\s\S]*?<\/helmet>/, "");

  const vals = evalVals(script, meta.title);
  body = expand(body, vals);
  body = body.replace(/\s+on[A-Z]\w*="[^"]*"/g, "");                   // React-style handlers
  body = body.replace(/\s+hint-placeholder-\w+="[^"]*"/g, "");
  const ps = mergePseudo(body); body = ps.html;
  body = cleanLinks(body, rel);
  if (cfg.licence || cfg.abn) {
    const extra = [cfg.licence && "NSW Contractor Licence " + esc(cfg.licence), cfg.abn && "ABN " + esc(cfg.abn)].filter(Boolean).join(" · ");
    body = body.replace(/(© \d{4} Johnson Property Solutions\. All rights reserved\.<\/p>)/, "$1\n        <p>" + extra + "</p>");
  }
  const left = body.match(/\{\{[^}]*\}\}/g); if (left) console.warn("  ! unresolved:", left.slice(0, 5));

  // language switcher: EN pages point at the first configured language, translated pages point back to EN
  const first = Object.entries(LANGS)[0];
  if (first) {
    const [fc, FL] = first;
    const target = L ? rel + pg.path : rel + FL.path + pg.path;
    const label = L ? (L.switchLabel || "EN") : FL.label, hl = L ? "en-AU" : FL.lang, aria = L ? "English version" : (FL.switchAria || FL.label);
    body = body.replace(/<a class="(lang-switch[^"]*)"([^>]*?)href="[^"]*"([^>]*?)hreflang="[^"]*" lang="[^"]*" aria-label="[^"]*"([^>]*)>[^<]*<\/a>/,
      '<a class="$1"$2href="' + (target || "./") + '"$3hreflang="' + hl + '" lang="' + hl + '" aria-label="' + aria + '"$4>' + label + "</a>");
  }
  if (L) body = translateHtml(body, code);

  const url = urlFor(outPath), faq = faqSchema(body);
  const alternates = ['<link rel="alternate" hreflang="en-AU" href="' + urlFor(pg.path) + '">', '<link rel="alternate" hreflang="x-default" href="' + urlFor(pg.path) + '">']
    .concat(Object.values(LANGS).map(X => '<link rel="alternate" hreflang="' + X.lang + '" href="' + urlFor(X.path + pg.path) + '">')).join("\n");
  const h1 = (/<h1[^>]*>([\s\S]*?)<\/h1>/.exec(body) || [])[1];
  const head = `<!DOCTYPE html>
<html lang="${L ? L.lang : "en-AU"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}">
<link rel="canonical" href="${url}">
${alternates}
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="${pg.path ? "website" : "website"}">
<meta property="og:site_name" content="${esc(cfg.name)}">
<meta property="og:locale" content="${L ? L.ogLocale || "zh_CN" : "en_AU"}">
<meta property="og:title" content="${esc(meta.title)}">
<meta property="og:description" content="${esc(meta.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${BASE + cfg.ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(meta.title)}">
<meta name="twitter:description" content="${esc(meta.description)}">
<meta name="twitter:image" content="${BASE + cfg.ogImage}">
<meta name="geo.region" content="AU-NSW">
<meta name="geo.placename" content="Western Sydney">
<link rel="icon" href="${rel}assets/mark.svg">
${fontLinks}${L && L.fontLink ? "\n" + L.fontLink : ""}
<link rel="stylesheet" href="${rel}assets/responsive.css">
<style>${baseStyle.replace(/url\("assets\//g, 'url("' + rel + 'assets/')}
[hidden]{display:none !important}
${ps.css}
</style>
<script type="application/ld+json">${L ? BIZ_JSON_L[code] : BIZ_JSON}</script>
${faq ? '<script type="application/ld+json">' + JSON.stringify(faq) + "</script>\n" : ""}<script src="${rel}site.js" defer></script>
</head>
<body>
<!-- Generated by tools/build.js from ${name}.dc.html — edit the source, not this file. -->
`;
  const out = head + body.trim() + "\n</body>\n</html>\n";
  const dir = path.join(SITE, outPath); fs.mkdirSync(dir, { recursive: true });
  if (!EXTRACT) fs.writeFileSync(path.join(dir, "index.html"), out);
  console.log(`✓ ${outPath || "/"}  ${out.length} bytes  h1="${h1 && h1.replace(/<[^>]+>/g, "")}"  faq=${faq ? faq.mainEntity.length : 0}`);
  return { url, name, path: pg.path, code };
}

/* ---------- 5. run ---------- */
const built = pages.map(([n, p]) => buildPage(n, p));
for (const code of Object.keys(LANGS)) pages.forEach(([n, p]) => built.push(buildPage(n, p, code)));

for (const code of Object.keys(LANGS)) {
  const miss = MISSING[code];
  if (EXTRACT) {
    const f = path.join(SITE, "i18n", code + ".json"); fs.mkdirSync(path.dirname(f), { recursive: true });
    const merged = Object.assign({}, DICT[code]); for (const k of miss.keys()) if (!(k in merged)) merged[k] = "";
    fs.writeFileSync(f, JSON.stringify(merged, null, 2) + "\n");
    console.log(`→ i18n/${code}.json: ${Object.keys(merged).length} strings, ${[...miss.keys()].length} new`);
  } else if (miss.size) console.warn(`  ! ${code}: ${miss.size} untranslated strings (shown in English). Run: node tools/build.js --extract`);
}
if (EXTRACT) process.exit(0);

const altLinks = b => ['<xhtml:link rel="alternate" hreflang="en-AU" href="' + urlFor(b.path) + '"/>', '<xhtml:link rel="alternate" hreflang="x-default" href="' + urlFor(b.path) + '"/>']
  .concat(Object.values(LANGS).map(X => '<xhtml:link rel="alternate" hreflang="' + X.lang + '" href="' + urlFor(X.path + b.path) + '"/>')).join("");
fs.writeFileSync(path.join(SITE, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  built.map(b => `  <url><loc>${b.url}</loc><lastmod>${today}</lastmod><changefreq>${b.name === "Home" ? "weekly" : "monthly"}</changefreq><priority>${b.name === "Home" ? "1.0" : b.name === "services" || b.name === "contact" ? "0.9" : "0.7"}</priority>${altLinks(b)}</url>`).join("\n") +
  `\n</urlset>\n`);

fs.writeFileSync(path.join(SITE, "robots.txt"),
`User-agent: *
Allow: /
Disallow: /*.dc.html$
Disallow: /tools/

# AI assistants and their crawlers are welcome
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: OAI-SearchBot
User-agent: ClaudeBot
User-agent: anthropic-ai
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: Bingbot
Allow: /
Disallow: /*.dc.html$

Sitemap: ${BASE}sitemap.xml
`);

const hours = cfg.openingHours.map(h => `${h.days[0].slice(0,3)}–${h.days[h.days.length-1].slice(0,3)} ${h.opens}–${h.closes}`).join(", ");
fs.writeFileSync(path.join(SITE, "llms.txt"),
`# ${cfg.name}

> ${cfg.description}
> Free on-site written quotes. Public liability insured.${cfg.licence ? " NSW Contractor Licence " + cfg.licence + "." : ""}${cfg.abn ? " ABN " + cfg.abn + "." : ""}

## Services
- Carpentry and decking — timber decks, pergolas, framing, custom built-ins: ${BASE}services/#carpentry
- Room additions and conversions — extra rooms, garage and granny flat conversions, walls, plasterboard, doors: ${BASE}services/#builds
- Bathroom renovations, managed end to end (waterproofing, tiling, vanities, fixtures): ${BASE}services/#bathrooms
- Minor plumbing — leaking taps, mixer replacements, toilet repairs, small drainage: ${BASE}services/#plumbing
- Home care and repairs — TV and mirror mounting, flat-pack assembly, sticky doors, plasterboard patching, painting touch-ups, gutter clearing, pressure washing, fence repairs: ${BASE}services/#home-care

## Service area
${cfg.areasServed.join(", ")} and surrounding Western Sydney suburbs (NSW, Australia). ${BASE}contact/#locations

## How pricing works
Priced by the job, not the hour. Free on-site visit, then a written quote; no call-out fee; deposit on larger jobs, balance on completion. Details: ${BASE}faq/#pricing

## Contact
Phone ${cfg.telephoneDisplay} (${hours}) · ${cfg.email} · ${BASE}contact/

## Pages
${built.filter(b => !b.code).map(b => "- " + b.url).join("\n")}
${Object.entries(LANGS).map(([c, X]) => "\n## " + X.label + " (" + X.lang + ")\n" + built.filter(b => b.code === c).map(b => "- " + b.url).join("\n")).join("\n")}
`);
fs.writeFileSync(path.join(SITE, "..", ".nojekyll"), "");
console.log("✓ sitemap.xml, robots.txt, llms.txt, .nojekyll");
