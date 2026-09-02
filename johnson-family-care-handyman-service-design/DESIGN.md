---
name: "Johnson family care handyman service"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#D9D9D9"
    shade-3: "#B3B4B4"
    shade-4: "#818282"
    shade-5: "#4E5050"
    shade-6: "#1C1E1E"
    shade-7: "#030506"
    white: "#FFFFFF"
  stromboli:
    shade-1: "#EAEEED"
    shade-2: "#D5DEDB"
    shade-3: "#6C8D83"
    shade-4: "#2E5D4E"
    shade-5: "#244A3E"
    shade-6: "#12251F"
    shade-7: "#0D1B17"
  whiskey:
    shade-1: "#FAF5F1"
    shade-2: "#F6ECE3"
    shade-3: "#E0BE9D"
    shade-4: "#D4A373"
    shade-5: "#A9825C"
    shade-6: "#54412E"
    shade-7: "#3F3022"
  merino:
    shade-1: "#FEFDFC"
    shade-2: "#FDFBFA"
    shade-3: "#F8F3ED"
    shade-4: "#F5EFE6"
    shade-5: "#C4BFB8"
    shade-6: "#625F5C"
    shade-7: "#494745"
  east-bay:
    shade-1: "#EBEEF1"
    shade-2: "#D7DEE4"
    shade-3: "#758BA0"
    shade-4: "#3A5A78"
    shade-5: "#2E4860"
    shade-6: "#172430"
    shade-7: "#111B24"

typography:
  heading:
    fontFamily: "Alata"
    fontWeight: 400
  body:
    fontFamily: "Source Sans 3"
    fontWeight: 400
  sizes:
    desktop:
      h1: 72px
      h2: 52px
      h3: 44px
      h4: 36px
      h5: 28px
      h6: 22px
      text-large: 22px
      text-medium: 18px
      text-regular: 16px
      text-small: 14px
      text-tiny: 12px
    mobile:
      h1: 44px
      h2: 40px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 12px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "default"
  buttonRadius: 12px
  tagRadius: 6px
  inputRadius: 12px

cards:
  style: "flat"
  borderWidth: 0px
  dividerWidth: 1px
  radiusLarge: 16px
  radiusMedium: 16px
  radiusSmall: 16px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#F2F2F2"
    textHex: "#030506"
    accentHex: "#2E5D4E"
    borderValue: "#03050626"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#FFFFFF"
    textHex: "#030506"
    accentHex: "#2E5D4E"
    borderValue: "#03050626"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "chromatic1-shade-1"
    backgroundHex: "#EAEEED"
    foregroundHex: "#D5DEDB"
    textHex: "#030506"
    accentHex: "#2E5D4E"
    borderValue: "#03050626"
    useLogoVariant: light
    cssClass: "scheme-3"
---

# Johnson family care handyman service — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 4 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Stromboli** — primary shade: `#2E5D4E`
- **Whiskey** — primary shade: `#D4A373`
- **Merino** — primary shade: `#F5EFE6`
- **East Bay** — primary shade: `#3A5A78`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Alata** at weight 400. Body text uses **Source Sans 3** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **default** with button radius 12px. Cards use the **flat** style with border-width 0px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral White (#FFFFFF) | #030506 | #2E5D4E | light | `.scheme-1` |
| Scheme 2 | Neutral Lightest (#F2F2F2) | #030506 | #2E5D4E | light | `.scheme-2` |
| Scheme 3 | Stromboli Lightest (#EAEEED) | #030506 | #2E5D4E | light | `.scheme-3` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
