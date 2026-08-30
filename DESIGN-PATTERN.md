# Landing page design pattern — contractor brief

**Project:** Trusting Hands Domestic Workers — website  
**Stack:** Next.js App Router + React + Tailwind CSS  
**Purpose of this document:** Preserve the visual identity of Trusting Hands across every section while editing copy, images, or content. Do not invent a new look. Do not import patterns from corporate HR platforms or generic service directories.

Trusting Hands is a Lilongwe-based domestic worker placement agency. They screen, train and deploy reliable workers — house helpers, cooks, cleaners, nannies, care support staff — to both private households and institutional clients including hotels, hospitals, schools, offices, restaurants and banks. They are a young business with a Facebook-first presence. This website is their first professional web presence. The design must feel warm, trustworthy, and approachable — qualities that directly mirror the service they sell. A family hiring a house helper is placing a deep trust in this agency. The site must earn that trust in the first scroll.

This page is **not** a job board, a worker directory, or a staffing marketplace. It is **a service agency presence**: clear, human, and confidence-building.

---

## 1. Core Philosophy: The Antigravity Vibe

**Pattern:** Highly interactive, spatial, and weightless web interfaces.

The design must feel warm, trustworthy, but incredibly premium and dynamic. 
- **Weightlessness:** UI cards and elements should appear to float. Use layered, soft, diffused drop-shadows.
- **Spatial Depth:** Utilize Z-axis layering. Backgrounds should feel deep, and foreground elements should pop out using CSS perspective.
- **Glassmorphism:** Use subtle translucency, background blur, and semi-transparent borders to create a glassy, premium feel.
- **Motion:** Never snap instantly. All state changes (hover, focus, active) must have smooth transitions (minimum `0.3s ease-out`). Use GSAP ScrollTrigger for buttery-smooth scroll-linked motion, parallax, and staggered entrances.

If an edit would look at home on a generic flat styling template, it is the wrong direction. We lean into the GSAP + 3D CSS aesthetic.

---

## 2. Page architecture (do not reorder without approval)

Single long-scroll page. Section order is fixed:

| Order | Component file | ID | Surface |
|-------|----------------|----|---------|
| 1 | `components/navigation.tsx` | — | Overlay → solid on scroll |
| 2 | `components/hero.tsx` | — | Full-viewport image + deep green overlay |
| 3 | `components/trust-bar.tsx` | — | Golden yellow strip — three trust statements |
| 4 | `components/services-section.tsx` | `#services` | Light — what they deploy workers for |
| 5 | `components/how-it-works.tsx` | `#how` | Muted (`--muted`) — three steps |
| 6 | `components/audiences-section.tsx` | `#clients` | Light — tabbed, accordion items |
| 7 | `components/editorial-break.tsx` | — | Full-bleed image + brand statement |
| 8 | `components/about-section.tsx` | `#about` | **Inverted** (deep forest green) |
| 9 | `components/contact-section.tsx` | `#contact` | **Inverted** (deep forest green) |
| 10 | `components/footer.tsx` | — | Light |
| — | `components/whatsapp-button.tsx` | — | Fixed float, always visible |

**Rhythm:** light → yellow strip → light → muted → light → full-bleed → **dark** → **dark** → light.

The two dark chapters are About and Contact — the trust and reach chapters. They sit together at the bottom intentionally: by the time a visitor reaches them, they have already understood what Trusting Hands does and who it is for. The dark surface signals: this is where you take action.

**Why the TrustBar is golden yellow, not dark:**  
The hero is dark. A second dark section immediately after would kill the page's energy. The yellow strip is the brand's warmest color — using it here as a high-contrast accent after the hero creates visual momentum and immediately signals the brand's warmth before the visitor reads a single word of service copy.

**Why How It Works gets the muted surface:**  
Process content (steps, numbered sequences) needs to breathe. A light surface would merge it visually with the Services section above. The muted background creates a gentle chapter break without the weight of a dark section.

---

## 3. Color system (strict)

Source of truth: CSS variables in `app/globals.css`. `--radius` is **`0rem`**.

All tokens are derived directly from the Trusting Hands logo mark.

| Token | Hex | Role |
|-------|-----|------|
| `--background` | `#ffffff` | Page base, light section fills |
| `--foreground` | `#0a2d12` | Primary text, inverted fills, hero overlay — deep forest green from logo background |
| `--accent-gold` | `#d4b82a` | TrustBar background, active nav indicator, numbered step accents — golden yellow of the logo house outline |
| `--accent-green` | `#2d7a2d` | Heart element in logo, hover states on light sections, secondary accent |
| `--muted` | `#f2f5f2` | How It Works background — a barely-there green tint, not pure grey |
| `--muted-foreground` | `#5a6b5a` | Secondary copy, labels, step descriptors — green-tinted grey |
| `--border` | `#dde8dd` | All hairline rules, 1px dividers — green-tinted border |
| Selection | `--foreground` bg / white text | `::selection` |

```css
:root {
  --background: #ffffff;
  --foreground: #0a2d12;
  --accent-gold: #d4b82a;
  --accent-green: #2d7a2d;
  --muted: #f2f5f2;
  --muted-foreground: #5a6b5a;
  --border: #dde8dd;
  --radius: 0rem;
}
```

**Why green-tinted neutrals, not pure grey:**  
Pure grey neutrals (`#f4f4f4`, `#666666`) belong to a corporate or SaaS palette. Trusting Hands is a nature-rooted, human brand. Every neutral on the page carries a whisper of the forest green — subtle enough that most visitors won't notice consciously, but present enough that the site feels cohesive rather than generic.

**On inverted sections (`bg-[--foreground]`):**
- Eyebrow: `text-white/40`
- Body: `text-white/70`
- Rules: `border-white/10`
- CTA underlines: `border-white/50`

**TrustBar (`bg-[--accent-gold]`):**
- All text: `text-[--foreground]` — deep green on gold reads cleanly and is on-brand
- No white text on gold — contrast is insufficient and feels off-brand

Hero overlay: `bg-[--foreground]/60` over a full-bleed photograph. Deep green overlay over a warm domestic scene keeps the brand color present while the photography does its emotional work.

**Forbidden without approval:**  
Blues, teals, oranges, red CTAs, purple accents, pure grey neutrals, white text on gold, colored badge pills, gradient backgrounds on content sections.

---

## 4. Typography

**Display face:** `Playfair Display` — regular (400) and medium (500) for headlines. Loaded via Google Fonts in `app/layout.tsx`.

**Why Playfair, not a geometric sans:**  
Trusting Hands is a personal service. The people who hire through this agency are placing their home and family in someone else's care. Playfair Display is warm, literary, and carries a sense of domestic elegance — it feels like a trusted recommendation from a friend, not a corporate directory. It sits naturally alongside the brand's hand-and-heart imagery.

**Body / UI face:** `Inter` — regular (400) and medium (500). Navigation, labels, body copy, step numbers, form fields.

**Note on Inter vs Cormorant (Golden Acres distinction):**  
Golden Acres uses Cormorant Garamond — a high-contrast editorial serif suited to luxury property. Trusting Hands uses Playfair Display — a warmer, more accessible serif suited to personal care services. Do not swap these between projects.

| Role | Family | Size | Weight | Tracking | Transform |
|------|--------|------|--------|----------|-----------|
| Eyebrow / meta | Inter | `text-[11px]` | 400 | `0.2em` | uppercase |
| Wordmark (nav) | Inter | `text-xs` | 500 | `0.25em` | uppercase |
| Hero H1 | Playfair Display | `clamp(2.25rem, 6vw, 5rem)` | 400 | `-0.01em` | none |
| Section H2 | Playfair Display | `text-3xl md:text-4xl` | 400 | `-0.01em` | none |
| Service / step title | Playfair Display | `text-xl` | 500 | tight | none |
| Body | Inter | `text-sm` | 400 | normal | none |
| Step number | Inter | `text-[11px]` | 500 | `0.15em` | uppercase |
| CTA label | Inter | `text-xs` | 500 | `0.15em` | uppercase |

Line height: display `1.1–1.2`. Body `1.75`. Apply `text-balance` to all headlines.

Do not introduce a condensed face, a second serif, a sans-serif display, or a handwritten/script font. Playfair + Inter is the complete system.

---

## 5. Layout and spacing

**Horizontal padding (site-wide):** `px-6` → `md:px-12` → `lg:px-20`

**Section vertical padding:**
- Standard sections (Services, Audiences, About, Contact): `py-24 md:py-32`
- TrustBar: `py-8` — tight, punchy
- How It Works: `py-24 md:py-32`
- Editorial break: `py-0` — full-bleed, no padding, image edge-to-edge
- Footer: `py-14`

**Section header block:** eyebrow → H2 → `mb-16 pb-5 border-b border-[--border]`.

**Services grid:** `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` — service type tiles separated by `gap-px bg-[--border]` hairlines. Each tile: icon (Lucide, 20px, `text-[--accent-green]`), service name in Inter `text-sm font-medium`, zero radius. Compact — these are labels, not cards.

**Why a tight service grid, not large cards:**  
Trusting Hands deploys workers across eleven different venue types. Large cards would require too much vertical scroll and give equal visual weight to "Banks" and "Houses" — which are not equally important to most visitors. A compact grid lets the eye scan all service types in one pass.

**How It Works steps:** Three columns on desktop (`grid-cols-3`), stacked on mobile. Each step: large step number in Inter `text-[11px] uppercase tracking-[0.15em] text-[--accent-gold]` above a `w-6 h-px bg-[--accent-gold]` rule, then Playfair Display step title, then Inter body. No numbered circles, no icon badges — the hairline rule and the gold number carry the sequence.

**Audiences section:** Two columns, `lg:grid-cols-2`, divided by a `border-r border-[--border]` hairline on desktop. Left: households. Right: institutions. Each column has its own eyebrow, H3 in Playfair, body copy, and a list of client types as hairline-separated rows (not bullet points).

**Footer:** Three columns: brand `col-span-2` (wordmark + tagline + logo mark), contact `col-span-1` (phones, email, address), nav `col-span-1` (section anchors).

**Max widths:** Hero copy `max-w-2xl`. Body columns `max-w-prose`. CTA blocks `max-w-sm`.

---

## 6. Recurring UI motifs (reuse these; do not invent new ones)

1. **Hairline rule as ornament** — `w-8 h-px`. `bg-[--border]` on light, `bg-white/15` on dark, `bg-[--foreground]/20` on gold. Under section headers, between step numbers and titles, as row separators in audience lists.

2. **Zero radius** — `--radius: 0rem` everywhere. No `rounded-*` on images, tiles, or any container. The logo mark itself has a square frame — the site follows suit.

3. **Gold step accent** — step numbers and their hairline rules use `text-[--accent-gold]` and `bg-[--accent-gold]` exclusively. This is the only content-area use of the gold outside the TrustBar. Do not use gold on body copy, card titles, or CTAs.

4. **Underline CTA** — `border-b border-current`. Used for all inline actions: "Get in touch", "Call us", "WhatsApp us", email address. Never a filled button.

5. **WhatsApp floating button** — the one filled element. Deep forest green circle (`bg-[--foreground]`), 56px, fixed bottom-right. WhatsApp icon in white. On hover: `scale-110`, `300ms ease`. This is not the gold accent — it is the foreground color, keeping it grounded and serious.

6. **Service tile hover** — `bg-[--muted]` fill appears on hover, `300ms ease`. The tile itself does not scale. Subtle acknowledgment, not a dramatic effect.

7. **Photo hover** — editorial break image only: `brightness-90 → brightness-100`, `600ms ease` on scroll entry. No scale on the editorial break — it is full-bleed and fixed.

8. **Mobile menu** — full-width white drawer. Links in Playfair Display `text-2xl font-normal`. Contact number at drawer bottom in 11px uppercase Inter. `50ms` stagger.

**There are no primary filled buttons anywhere on this site** except the WhatsApp floating button. Contact actions are underline CTAs. The two phone numbers and the email address are the conversion mechanisms — they must be scannable, not hidden behind a button.

---

## 7. Component details

### Navigation
- Desktop: `TRUSTING HANDS` wordmark left. Links right: Services, How It Works, Clients, About, Contact. WhatsApp icon (`MessageCircle`, Lucide, 18px) far right.
- On hero (transparent): white text. After 60px scroll: `bg-white/95 backdrop-blur-md` + `border-b border-[--border]`, text to `text-[--foreground]`.
- Mobile: hamburger → full-width white drawer. Playfair Display `text-2xl` links, contact number at bottom.

### Hero
- Full-viewport, warm domestic scene — ideally a professional carer or a clean, well-kept home interior. No stock photos of suited HR professionals.
- Overlay: `bg-[--foreground]/60`.
- H1: one strong statement. Example: *"Reliable Workers. Trusted Homes."* or *"Care You Can Count On."*
- Sub-copy: `max-w-sm`, Inter `text-sm text-white/75`. One sentence. "Screened, trained and deployed across Malawi."
- Two underline CTAs side by side: "For Households" (scrolls to `#clients`) and "For Businesses" (scrolls to `#clients`). White, underline style.
- Bottom: `Scroll to explore` + `w-8 h-px bg-white/30` hairline.

### TrustBar
- Background: `bg-[--accent-gold]`.
- Three statements separated by `border-r border-[--foreground]/15`: "Screened & Verified Workers", "Full-Time or Part-Time", "Serving All of Malawi".
- Each: 11px uppercase Inter eyebrow label above, Inter `text-sm font-medium text-[--foreground]` statement below.
- No icons. The words carry the weight.

### Services Section
- Eyebrow: "What We Cover". H2: "Workers for Every Setting."
- Compact `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` tile grid, `gap-px bg-[--border]`.
- Eleven tiles, one per venue type: Hotels, Lodges, Hospitals, Hostels, Schools, Offices, Houses, Business Areas, Restaurants, Bars, Banks.
- Each tile: `p-5`, Lucide icon `20px text-[--accent-green]`, Inter `text-sm font-medium` label below. On hover: `bg-[--muted]`.

### How It Works
- Eyebrow: "Our Process". H2: "Simple. Reliable. Fast."
- Three steps across desktop: (1) "Tell Us What You Need", (2) "We Match and Screen", (3) "Your Worker Is Deployed".
- Each step: gold step number in 11px uppercase, gold `w-6 h-px` hairline rule, Playfair Display step title, Inter `text-sm` descriptor.
- No icons, no numbered circles, no connecting lines between steps.

### Audiences Section

Eyebrow: "Who We Serve". H2: "Households and Businesses."

**Tab bar:** Two tabs side by side — "For Households" and "For Businesses". Tabs sit on a `border-b border-[--border]` baseline. The active tab has a `border-b-2 border-[--foreground]` underline indicator and `text-[--foreground]`. The inactive tab is `text-[--muted-foreground]`. No filled tab backgrounds, no rounded tab pills. Tab switching is instant — no animation between panels, just a clean swap.

**Why tabs, not two columns:** Two full columns of eyebrows, headings, body copy and lists side by side created visual congestion that competed with the section header. One panel visible at a time gives each audience the full width and focused attention they deserve.

**Each tab panel contains an accordion.** Items expand on click to reveal detail. Only one accordion item open at a time per panel. This keeps the section compact on load while allowing visitors to explore at their own pace.

**Accordion behaviour:**
- Collapsed state: item label in Inter `text-sm font-medium text-[--foreground]` + `ChevronDown` icon (Lucide, 16px, `text-[--muted-foreground]`) right-aligned. Full-width `border-b border-[--border]` hairline below.
- Expanded state: label stays visible. `ChevronDown` rotates `180deg`, `300ms ease`. Body content fades in below the label — `opacity: 0 → 1` + `height: 0 → auto`, `250ms ease-out`. Another `border-b border-[--border]` closes the item.
- No filled backgrounds on expanded items. No color change on the label. The chevron rotation is the only visual signal.

**For Households tab — accordion items:**

| Item | Expanded content |
|------|-----------------|
| House Helpers | General household assistance — cleaning, errands, day-to-day home management. Full-time or part-time. |
| Cooks | Meal preparation for families. Able to follow dietary preferences and cooking styles on request. |
| Cleaners | Dedicated cleaning staff for regular or one-off deep cleans. |
| Nannies | Childcare support for working parents. Screened for safety and reliability. |
| Care Support | Assistance for elderly or family members who need daily support at home. |

**For Businesses tab — accordion items:**

| Item | Expanded content |
|------|-----------------|
| Hotels & Lodges | Housekeeping, laundry, and general facility staff for hospitality properties. |
| Hospitals | Cleaning and support staff trained for healthcare environment standards. |
| Schools & Hostels | Caretaking, cleaning, and general support for educational and residential institutions. |
| Offices & Business Areas | Office cleaners and support staff for commercial premises. |
| Restaurants & Bars | Kitchen helpers, cleaners, and general floor support staff. |
| Banks | Professional cleaning and premises support for financial institutions. |

**Bottom of each panel:** WhatsApp underline CTA — "Enquire for Households →" or "Enquire for Businesses →". Arrow shifts `translate-x-0.5 -translate-y-0.5` on hover, `300ms ease`.

**Data lives in `components/audiences-section.tsx`** as two typed arrays at the top of the file — one per tab. Adding or editing an accordion item means editing those arrays only; do not restructure the JSX.

### Editorial Break
- Full-bleed image, `aspect-[21/9]` on desktop, `aspect-[4/3]` on mobile. Edge-to-edge, no padding.
- `bg-[--foreground]/50` overlay, bottom-left positioned brand statement in Playfair Display italic `text-2xl text-white`, `max-w-xs`, `p-10`.
- Attribution: `— Trusting Hands, Lilongwe` in 11px uppercase Inter `text-white/60` below.

### About Section (inverted)
- Background: `bg-[--foreground]`.
- Two columns on desktop: left is short company story (who they are, what makes them different — screened workers, flexible hours, city and beyond), right is three key stats separated by `border-b border-white/10` hairlines.
- Office address and founding location (Area 38, near Kaphiri Market, M1, Lilongwe) in 11px uppercase at the bottom.

### Contact Section (inverted)
- Background: `bg-[--foreground]`.
- Eyebrow: "Get in Touch". H2: "We're Ready to Help."
- Three contact items as underline CTAs with arrow-up-right:
  - Phone: `0994 217 990`
  - Phone: `0891 542 420`
  - Email: `trustedhands@gmail.com`
- WhatsApp CTA below: "Chat with us on WhatsApp →" underline style.
- Note: The dataset shows a third number (0993713103) appearing in one post. Confirm the canonical contact numbers with the client before going live — do not hardcode all three without verification.

### Footer
- Light surface, `py-14`.
- Logo mark (icon only, SVG) left with wordmark `TRUSTING HANDS` in Inter uppercase below.
- Tagline: "Reliable Workers, Everywhere." in Inter `text-xs text-[--muted-foreground]`.
- Nav links and contact details in two right columns.
- Bottom strip: `border-t border-[--border]`, copyright left, "Lilongwe, Malawi" right.

---

## 8. Motion

All motion is slow and purposeful.

- **Nav:** Hide on scroll down past 400px, reappear on scroll up. Solid bg after 60px. `500ms ease`.
- **Hero:** Fade in at load — overlay `opacity: 0 → 1` over `800ms`. H1 slides up at `200ms` delay, sub-copy at `500ms`, CTAs at `700ms`. No Ken-Burns on the hero photo — the domestic warmth of the image should be still, not cinematic.
- **Scroll reveal:** IntersectionObserver, fires once. `opacity: 0 + translateY(20px) → rest`, `700ms ease-out`. Sibling stagger `100ms`.
- **Service tile hover:** `bg-[--muted]` fill, `300ms ease`. No scale.
- **Editorial break:** `brightness-90 → brightness-100`, `600ms ease` on scroll entry.
- **WhatsApp button:** `scale 1.10`, `300ms ease` on hover.
- **CTA arrows:** `translate-x-0.5 -translate-y-0.5`, `300ms ease` on parent hover.

**Why no Ken-Burns on the hero:**  
Golden Acres uses Ken-Burns because property photography benefits from a slow reveal — the scale suggests aspiration and grandeur. Trusting Hands' hero shows people and homes. A moving hero here would feel unsettling rather than aspirational. Still image, moving text is the right balance.

Do not add parallax, marquees, Lottie, or auto-playing video. Wrap all transitions in `@media (prefers-reduced-motion: no-preference)`.

---

## 9. Photography rules

- **Hero:** A warm domestic scene — a professional helper in a clean home, a carer with a family, or a well-kept institutional interior. Real and human. Not a stock photo of a suited HR professional or a generic office handshake.
- **Editorial break:** A wide, warm image — a home exterior, a well-run hotel kitchen, or a carer and employer in comfortable conversation. Full-bleed, `aspect-[21/9]` on desktop.
- **No listing photography needed:** Unlike Golden Acres, Trusting Hands has no product catalogue. Photography is used only in the hero and the editorial break.
- **Alt text:** Precise. "A domestic worker preparing a meal in a clean, modern kitchen" — not "image1" or "worker photo."
- **Placeholder rule:** If no real photography is available, use a solid `bg-[--muted]` fill with the brand tagline centered in Playfair Display italic. Never use stock photos that feel corporate, posed, or non-Malawian.

---

## 10. Content voice

**Site-wide (warm and direct):**
- "We deploy reliable, screened workers to homes and businesses across Malawi."
- "Whether you need a house helper for your family or cleaning staff for your hotel, we have the right person for you."
- Short sentences. Active voice. No jargon.

**For households (personal, reassuring):**
- "Your home deserves someone you can trust."
- "Every worker we place has been screened, trained, and verified."

**For institutions (professional, efficient):**
- "We supply trained staff to hotels, hospitals, schools, and businesses across Malawi."
- "Full-time or part-time — we match workers to your operational needs."

**Preserve from Facebook voice:** The warmth ("Your home, our priority"), the directness (plain lists of what they do), and the community-rootedness (Area 38, Kaphiri Market — real Lilongwe landmarks, not vague "central location" language).

**Leave behind from Facebook:** Emoji in body copy, all-caps section headers, repeated exclamation marks. The design carries the energy — the copy should be calm and confident.

---

## 11. Contact architecture

All contact actions resolve to one of three channels. No backend required.

**WhatsApp (primary):** `https://wa.me/265994217990`  
Pre-filled message: `Hello Trusting Hands. I am looking for a worker for [my home / my business]. Please get in touch.`

**Phone:** `0994 217 990` and `0891 542 420` — displayed as `tel:` links.

**Email:** `trustedhands@gmail.com` — displayed as `mailto:` link.

**TODO before go-live:** Confirm canonical phone numbers with client. Three numbers appear across posts (0994217990, 0891542420, 0993713103). Confirm which are active and which to display on the site.

All contact items built in `lib/contact.ts` — one source of truth. All components import from there.

---

## 12. Data architecture

No listing catalogue. Content is static copy only. All editable content lives as `const` objects at the top of each component file.

```typescript
// components/services-section.tsx
const services = [
  { label: 'Hotels', icon: 'Hotel' },
  { label: 'Lodges', icon: 'Trees' },
  { label: 'Hospitals', icon: 'Cross' },
  { label: 'Hostels', icon: 'BedDouble' },
  { label: 'Schools', icon: 'GraduationCap' },
  { label: 'Offices', icon: 'Building2' },
  { label: 'Houses', icon: 'Home' },
  { label: 'Business Areas', icon: 'Store' },
  { label: 'Restaurants', icon: 'UtensilsCrossed' },
  { label: 'Bars', icon: 'Wine' },
  { label: 'Banks', icon: 'Landmark' },
]

// components/how-it-works.tsx
const steps = [
  { number: '01', title: 'Tell Us What You Need', body: '...' },
  { number: '02', title: 'We Match and Screen', body: '...' },
  { number: '03', title: 'Your Worker Is Deployed', body: '...' },
]

// lib/contact.ts
export const contact = {
  phone1: '0994217990',
  phone2: '0891542420',
  email: 'trustedhands@gmail.com',
  whatsapp: '265994217990',
  address: 'Area 38, near Kaphiri Market, M1, Lilongwe',
}
```

---

## 13. File map for edits

```
app/
  layout.tsx                        fonts (Playfair Display + Inter), metadata, theme-color #0a2d12
  globals.css                       live design tokens — source of truth
  page.tsx                          single scroll page — section order

components/
  navigation.tsx
  hero.tsx
  trust-bar.tsx                     three trust statements — edit array at top of file
  services-section.tsx              services array at top of file
  how-it-works.tsx                  steps array at top of file
  audiences-section.tsx
  editorial-break.tsx
  about-section.tsx
  contact-section.tsx
  footer.tsx
  whatsapp-button.tsx               do not restyle

lib/
  contact.ts                        all contact details — source of truth, all components import from here

hooks/
  use-scroll-reveal.ts              do not adjust timing
```

Edit copy and data at the top of each component file. Do not restructure JSX unless the layout is visually broken.

---

## 14. What contractors may change vs must not

**Safe without design review**
- Copy in any section (headlines, body, step descriptions, service labels)
- Contact details in `lib/contact.ts`
- Hero and editorial break photography (keep aspect ratios)
- Stats in the About section as the business grows
- Adding or removing a service tile (keep the same tile pattern)

**Requires design approval**
- Section reordering
- Any color outside the six defined tokens
- Adding a second typeface
- Rounded corners anywhere (`--radius` must stay `0`)
- Replacing underline CTAs with filled buttons
- Adding a filter, search, or directory feature
- Changing service tiles to large cards
- Adding a worker profile or job listing feature
- Changing the WhatsApp button color from `--foreground` to gold

**Do not touch unless explicitly instructed**
- `app/globals.css` token values — palette is locked to the logo
- `--radius` — must stay `0rem`
- `components/whatsapp-button.tsx` — color and sizing are fixed
- `hooks/use-scroll-reveal.ts` — animation timing is calibrated
- `components/ui/**` — shadcn kit; this site does not use them

---

## 15. Acceptance checks (before calling a change done)

- [ ] Color palette within the six defined tokens — no new hues
- [ ] Zero radius everywhere (`--radius: 0`)
- [ ] Eyebrow labels: `text-[11px]`, Inter, uppercase, `tracking-[0.2em]`
- [ ] Display headlines: Playfair Display, weight 400 or 500 only
- [ ] TrustBar: `bg-[--accent-gold]`, all text `text-[--foreground]` — no white text on gold
- [ ] Gold used only in: TrustBar background, step numbers, step hairline rules
- [ ] Green-tinted neutrals used for muted background and border — not pure grey
- [ ] No Ken-Burns on hero image — still photo, animated text only
- [ ] Section padding matches values in section 5
- [ ] Service tiles: compact grid with `gap-px bg-[--border]` hairlines, not large cards
- [ ] Audiences section: tabbed layout — no two-column split, no filled tab backgrounds, no rounded tab pills
- [ ] Active tab indicator: `border-b-2 border-[--foreground]` underline only
- [ ] Accordion items: collapsed by default, one open at a time per panel
- [ ] Accordion expanded state: chevron rotates `180deg`, content fades in — no background color change on label
- [ ] WhatsApp CTA present at bottom of each tab panel
- [ ] Dark chapters: About + Contact only
- [ ] No filled buttons except the WhatsApp floating button
- [ ] WhatsApp button color: `bg-[--foreground]` — not gold, not accent-green
## 1. Core Philosophy: The Antigravity Vibe
The design should feel **highly interactive, spatial, and weightless**. 
- **Weightlessness:** UI cards and elements should appear to float. Use layered, soft, diffused drop-shadows.
- **Spatial Depth:** Utilize Z-axis layering. Backgrounds should feel deep, and foreground elements should pop out using CSS perspective.
- **Glassmorphism:** Use subtle translucency, background blur, and semi-transparent borders to create a glassy, premium feel.
- **Motion:** Never snap instantly. All state changes (hover, focus, active) must have smooth transitions (minimum `0.3s ease-out`). Use GSAP ScrollTrigger for buttery-smooth scroll-linked motion, parallax, and staggered entrances.

## 2. Global Styling & Tokens
- **Backgrounds:** Deep greens (e.g. `#0A2D12`) for depth, contrasting with stark whites for content sections.
- **Borders:** We use a `0.75rem` border radius (`--radius: 0.75rem`) to complement the soft, floating aesthetic.
- **Shadows:** Use the custom `--shadow-float` for elevated cards and `--shadow-glow` for subtle accents.
- **Typography:**
  - **Headlines:** Playfair Display (serif), tracking slightly tight (`tracking-tight`), often staggered in animation.
  - **Body/UI:** Inter (sans-serif), crisp, legible, with generous line height (`leading-relaxed`).

- [ ] Hero type readable at `bg-[--foreground]/60` over actual photography

---

## 16. One-line spec for a designer

Deep forest green and golden yellow single-scroll service page, Playfair Display warm serif display, Inter utility, zero radius, 1px green-tinted hairline rules, still domestic photography, two inverted chapters, one deep green WhatsApp button — a care agency presence that earns trust before it asks for a phone call.