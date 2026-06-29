
# We Will Fix It — Premium Redesign

A full visual rebuild inspired by wewillfixit.com, reimagined as a luxury home-maintenance brand. Phase 1 covers the home page and the 8 service pages. Phase 2 (Annual Contract, About + sub-pages, FAQ, How We Compare, Testimonials) lands after you approve the direction.

## Design Direction

**Palette — Emerald Prestige**
- Deep emerald `#064e3b` (background / dark sections)
- Forest `#0d7a5f` (primary actions, accents)
- Champagne gold `#c9a84c` (luxury accent, dividers, numerals)
- Warm ivory `#f5f0e0` (light surfaces, body bg)
- Off-black `#0a0f0d` and soft cream `#fbf8f0` as supporting neutrals

**Typography — Architectural**
- Urbanist for display/headlines (tight tracking, large weights up to 800)
- Epilogue for body and UI (400/500/600)
- Champagne-gold numerals for the big stat counters

**Motion — butter-smooth, restrained**
- Framer Motion throughout: page-load fade+rise, section reveal on scroll (IntersectionObserver), staggered children
- Custom cubic-bezier easing `[0.22, 1, 0.36, 1]` for that "butter" deceleration
- Magnetic hover on primary CTAs, gold underline grow on links, subtle image parallax in hero and service cards
- Animated counters for stats (Jobs since 2008, customers, teams on road, warranty months)
- Smooth scroll via Lenis; respects `prefers-reduced-motion`

**Visual identity moves**
- Split-screen home hero: left = bold editorial headline + CTAs over emerald, right = full-bleed service imagery with a gold-rule overlay and floating trust badge ("Rated from 2K+ Google reviews")
- Gold hairline dividers and serial numbers (01 — 08) on service listings
- Sticky glass nav with emerald tint, gold underline on active link
- Dark emerald footer with gold accents

## Information Architecture (Phase 1)

```text
/                          Home (split-screen hero, stats, services bento, story teaser, testimonial strip, CTA)
/services/ac               AC Services
/services/electrical       Electrical
/services/plumbing         Plumbing
/services/handyman         Handyman
/services/carpentry        Carpenters
/services/drainage         Drainage
/services/painting         Painting
/services/pools            Swimming Pools + Waterproofing
```

Each service page shares one premium template: split hero (service name + tagline left, hero image right), "What's included" checklist, process timeline (Book → Diagnose → Fix → Warranty), pricing/contract teaser, FAQ accordion specific to the service, related services strip, CTA band.

Header nav reflects the full site map you provided (Services dropdown, Annual Contract dropdown, About dropdown, FAQ, How We Compare, Testimonials) — Phase 2 routes render a styled "Coming next" placeholder so nav never breaks.

## Content

All copy adapted from wewillfixit.com: company story (Colin Thomas & Dan Garner, 2008), trust stats, service descriptions, warranty messaging. No fabricated claims; numbers and named people stay as on the source site.

## Tech Plan

- **Routes**: TanStack Start file-based under `src/routes/` (`index.tsx`, `services.ac.tsx`, `services.electrical.tsx`, etc.). Each route sets its own `head()` with unique title, description, og:title, og:description.
- **Design tokens**: defined in `src/styles.css` `@theme` (emerald/gold/ivory as `--color-*`, custom `--ease-butter`, gradients, gold shadow). All components use semantic tokens — no hardcoded hex in JSX.
- **Fonts**: `@fontsource-variable/urbanist` and `@fontsource-variable/epilogue` installed via bun and imported in `src/start.ts`.
- **Components** (`src/components/`):
  - `site/Header.tsx`, `site/Footer.tsx`, `site/MobileMenu.tsx`
  - `site/Hero.tsx`, `site/StatsCounter.tsx`, `site/ServiceBento.tsx`, `site/StoryTeaser.tsx`, `site/TestimonialStrip.tsx`, `site/CTABand.tsx`
  - `service/ServiceHero.tsx`, `service/IncludedList.tsx`, `service/ProcessTimeline.tsx`, `service/ServiceFAQ.tsx`, `service/RelatedServices.tsx`
  - `ui/MagneticButton.tsx`, `ui/Reveal.tsx` (scroll-reveal wrapper), `ui/AnimatedCounter.tsx`, `ui/GoldDivider.tsx`
- **Libraries to add**: `framer-motion`, `lenis` (smooth scroll), `@fontsource-variable/urbanist`, `@fontsource-variable/epilogue`. Lucide icons (already available) for service iconography.
- **Imagery**: generated per service via the image tool (1280×960 jpg, emerald/gold-tinted editorial photography style), saved under `src/assets/services/`. Hero image generated at 1600×1200.
- **SEO**: per-route head() with unique title/description/og text. og:image set at leaf routes once hero images are generated. Semantic H1 per page, alt text on all images.
- **Accessibility**: AA contrast verified for emerald/gold combos, focus rings in gold, motion-reduce variants on all framer-motion components.

## Out of Scope (Phase 2 — after you approve direction)

Annual Contract (Residential / Commercial), About → Our Story / Meet the Team / Careers / Contact, FAQ page, How We Compare, Testimonials page. Header links to them are stubbed with a styled placeholder route in Phase 1.

## Deliverable for this build

Home + 8 service pages, header + footer, full motion system, generated imagery, all design tokens wired. Approve and I'll implement.
