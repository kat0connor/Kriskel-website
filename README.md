# KrisKel Performance Horses — Website

13 pages total:

**Main site**
- `index.html` — Home
- `about.html` — Kelsey & Alicia
- `services.html` — Breeding / Training / Shows (anchored sections: `services.html#breeding`, `#training`, `#shows`)
- `sponsors.html`
- `gallery.html`
- `contact.html` — farm-wide contact + inquiry form + map

**Required Invitation section** (nested under `/required-invitation/`, with its own secondary nav bar)
- `required-invitation/index.html` — Overview
- `required-invitation/pedigree.html`
- `required-invitation/progeny.html`
- `required-invitation/incentives.html`
- `required-invitation/press.html`
- `required-invitation/contact.html` — breeding-specific contact & terms

## How to preview
Open `index.html` directly, or run a local server from this folder so all relative links work:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Brand system
- Colors: `#e34278` (pink), `#fff7f7` (cream), `#1e1c1d` (ink), `#ffffff` — all defined as CSS variables at the top of `css/style.css` (`:root`), so the whole site recolors from one place if needed.
- Fonts: Playfair Display (headlines), Alex Brush (script accents, echoing the logo's cursive "Required"), Poppins (body/nav), IBM Plex Mono (stats/data).
- Signature motifs pulled from the new logo: the dotted-line accent, and a foil pink gradient (`--pink-gradient`) used on buttons, the pedigree "subject" box, and key headline text.
- Logo: `images/logo.png` — background removed from the white-background version you sent, so it drops cleanly onto both cream and dark sections.

## What's real vs. placeholder
Real content already built in:
- Farm name, location (Kingston, NH), Facebook link
- Kelsey's bio (your text, lightly completed where the sentence trailed off)
- Required Invitation's vitals, color/genetic panel, and both notable get (Call You Later, A Top Gun)
- Contact info: Kelsey Robertson, (978) 828-7683, kelbrobertson@gmail.com

Placeholders to fill in (search for `class="placeholder"` or bracketed text like `[Sponsor Logo 1]`):
- Alicia's bio — I drafted a reasonable placeholder around "Farm Operations Manager," but it has no real details and no last name (assumed to be a Robertson but not stated — confirm/replace)
- Photos throughout (hero, profiles, services, gallery, notable get)
- Sponsor logos
- Required Invitation's pedigree, own show record, stud fee/terms, incentive program names, press releases
- The Google Maps embed on `contact.html` is centered generally on Kingston, NH — swap in the exact farm address once you're ready to make it public

## Visual enhancements (latest pass)
- **Scroll animations:** elements fade/slide in as you scroll, with automatic staggering (siblings cascade in one after another instead of popping in together). Three variants used throughout: `.reveal` (fade up), `.reveal-left` / `.reveal-right` (slide in from the side — used for alternating profile cards), `.reveal-scale` (soft zoom-in — used for photos).
- **Depth:** soft blurred pink "blobs" drift gently behind the hero and dark sections (`.has-blobs` + `.blob-field`), with a subtle parallax effect tied to scroll position.
- **Hover motion:** photos zoom slightly on hover, cards lift with a soft shadow, gallery tiles lift and get a pink border glow.
- **Count-up numbers:** Required Invitation's foal year animates in (0 → 2007) the first time it scrolls into view, both on the Home page and his own Vitals card.
- **Header shadow:** the sticky nav picks up a subtle shadow once you scroll past the top, so it separates from content underneath.
- **Many more photo placeholders:** a photo collage in the Home hero, "Farm Life" / "Behind the Scenes" / "A Day at KrisKel" / "In Action" photo strips added to Home, About, Services, and the Required Invitation overview; the Gallery page now has 12 masonry-style tiles (mixed heights) instead of a flat 9-tile grid; Sponsors got a banner photo slot; Contact got a farm photo above the info card.

All of this is placeholder-photo-driven right now — once real images replace the dashed placeholder tiles, the hover zoom and collage rotation will make them feel a lot more alive.

## Browser note
If you preview via a sandboxed/offline environment, Google Fonts and the Google Maps embed may fail to load (blocked by network rules) — this is an environment restriction, not a site bug. In a normal browser both will load fine.

## Notes
- The contact forms use `mailto:` so they open the visitor's email client — swap for Formspree/Netlify Forms if you want trackable submissions.
- The Required Invitation section carries its own dark secondary nav bar so it can grow (more pages, more get) without cluttering the main site nav.

## Bold & girly glam pass (latest)
- Softer, rounder corners across cards, photos, and tiles for a bolder, more feminine shape language.
- Pink-tinted glow shadows on card hover (instead of plain gray) for a glam lift effect.
- Buttons: a light "shimmer" sweep animates across primary buttons on hover, plus a permanent soft pink glow.
- Sparkle accents (small pink 4-point stars) next to eyebrows and floating gently near hero sections.
- A big script "lead-in" line (Alex Brush, the same script family as the logo's "Required") above the main headline on Home and About — e.g. "Welcome to" / "The Team Behind."
- A pink gradient "ribbon badge" component (rosette icon + bold pill) used to call out "World & Congress Champion Sire" on Home and the Required Invitation hero.
- Headlines are bolder (800/900 weight) and the hero's pink background glow is more saturated.

## Sales Horses page (new)
`sales.html` — two sections:
- **For Sale:** currently featuring EyeGotItFromMyMama / EyeMLikeMyMama "Diana" (2025 AQHA/APHA filly), with an "Inquire About Diana" button that opens a pre-filled email to Kelsey.
- **Recently Sold:** Stylish Suggestion "Joy," A Mightty Good Man "Irving," Required To Be Cool "Kingston" (by Required Invitation — linked to his page), Sleepin Gracefully "Grace," and AllNFavorSayEye "Princeton." Each sold card is grayscale-tinted with a black "Sold" badge to visually separate it from what's actually available.

To list a new horse: duplicate one of the card blocks in `sales.html`, swap the details, and use `card-badge available` (green) instead of `card-badge sold` (black) until it's spoken for.

## Note on index.html
`index.html` currently matches the version you uploaded directly (plus the invisible no-js safety script) — I didn't re-add the photo collage/blob/sparkle decorations from the "bold & girly" pass to this specific file, so it's intentionally simpler than the rest of the site right now. Say the word if you want that treatment brought back to Home, or if you'd rather the rest of the site match this simpler style instead.
