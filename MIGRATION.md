# InCentral HTML → Next.js Migration Log

Source: `InCentral-Portal-Compatibility-Logic-Rebuilt`  
Target: `INCENTRAL-WEBSITE`

---

## Phase 1 — Foundation (Navbar + Footer)

### ✅ Assets copied

| Asset | Source | Destination |
|-------|--------|-------------|
| `favicon.png` | ref root | `public/images/brand/favicon.png` |
| `intangles-logo-grey-horizontal.png` | ref root | `public/images/brand/intangles-logo-grey-horizontal.png` |
| `hero-*-concept.webp` (5 files) | ref root | `public/images/hero/` |

### ✅ Dummy content removed

- Removed placeholder pages: `/about`, `/services`, `/contact`
- Removed starter hero, feature cards, and generic shadcn layout
- Replaced generic site config with InCentral brand data

### ✅ Frontend config

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Brand, SEO, company, contact |
| `src/config/navigation.ts` | Primary nav links, header actions |
| `src/config/plans.ts` | Plans mega menu, products, accent tokens |
| `src/config/footer.ts` | Footer columns, support, social links |
| `src/config/hero.ts` | Hero copy, CTAs, capability cards |

### Component conventions

Every UI section follows the same flow:

1. **Content + tokens in `src/config/`** — copy, links, colors, accent hex values
2. **Component renders config** — Tailwind classes live in the component file only
3. **Icon maps inside the component** — wire config `id` → SVG component (not in config)
4. **No separate style lib files** — no `*.css` files; shared layout tokens in `globals.css` only
5. **Shared primitives** — `Container`, `Logo`, `NavLink` reused across layout

### ✅ Theme (Tailwind + `globals.css` tokens)

- `src/app/globals.css` — `@theme` design tokens (colors, fonts, layout)
- All component styling uses **Tailwind CSS utility classes** (no separate `.css` files)
- Icons from **lucide-react**

### ✅ Reusable components

| Component | Path | Status |
|-----------|------|--------|
| Container | `src/components/common/container.tsx` | Done |
| Logo | `src/components/common/logo.tsx` | Done |
| SiteHeader | `src/components/layout/site-header/` | Done |
| SiteFooter | `src/components/layout/site-footer/` | Done |

### ✅ Hero section (Phase 2)

| Component | Path | Status |
|-----------|------|--------|
| Hero config | `src/config/hero.ts` | Done |
| HeroSection | `src/components/home/hero-section.tsx` | Done |
| IntelligencePanel | `src/components/home/intelligence-panel.tsx` | Done |
| Capability icons | `src/components/home/capability-icons.tsx` | Done (reference SVGs) |

### ⏳ Pending (next phases)

| Feature | Reference | Notes |
|---------|-----------|-------|
| Plans section | `#plans` `.h139-plans` | Phase 3 |
| Compatibility checker | `#check-compatibility` | Phase 4 |
| Remaining pages | `*.html` files | Per-page migration |

---

## Route mapping (planned)

| HTML | Next.js route |
|------|---------------|
| `index.html` | `/` |
| `incert.html` | `/incert` |
| `insight.html` | `/insight` |
| `ingenious.html` | `/ingenious` |
| `invision-plus.html` | `/invision-plus` |
| `invision.html` | `/invision` |
| `ais-140-guide.html` | `/ais-140-guide` |
| `help.html` | `/help` |
| `support.html` | `/support` |
| `sign-in.html` | `/sign-in` |
| `cart.html` | `/cart` |

---

## Breakpoints preserved

| Breakpoint | Behavior |
|------------|----------|
| 1099px | Mobile nav replaces desktop nav |
| 1040px | Plans mega menu hidden (mobile accordion) |
| 800px | Footer desktop grid → mobile accordions |
| 1160px | Header call button → icon only |
