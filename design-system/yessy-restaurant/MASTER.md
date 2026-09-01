# Yessy Restaurant — Design System

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Yessy Restaurant
**Style:** Nature Distilled — warm, organic, artisanal
**Updated:** 2026-08-30

---

## Color Palette

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Background | `cream` | `#f3e9d7` | Page background |
| Foreground | `darkbrown` | `#3b2a22` | Body text |
| Primary | `camel` | `#b08968` | CTAs, links, active states |
| Primary Foreground | white | `#ffffff` | Text on primary |
| Secondary | `sand` | `#d6bfa6` | Borders, muted backgrounds |
| Secondary Foreground | `darkbrown` | `#3b2a22` | Text on secondary |
| Accent | `brown` | `#7a553a` | Headings, emphasis |
| Accent Foreground | `cream` | `#f3e9d7` | Text on accent |
| Card | white | `#ffffff` | Card surfaces |
| Muted | `sand` | `#d6bfa6` | Subtle backgrounds |
| Destructive | red | `#b91c1c` | Errors, alerts |
| Border | `sand` | `#d6bfa6` | Dividers, outlines |
| Ring | `camel` | `#b08968` | Focus rings |

---

## Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Heading | **Playfair Display** | 400, 500, 600, 700 | Hero, section titles, menu headers |
| Body | **Karla** | 300-700 | Descriptions, paragraphs, UI text |
| Mono | Geist Mono | 400 | Code, technical info |

**CSS Variables:**
- `--font-heading` → Playfair Display
- `--font-sans` → Karla
- `--font-geist-mono` → Geist Mono

---

## Spacing Scale

| Token | Value | Use |
|-------|-------|-----|
| `--space-xs` | 4px | Tight gaps |
| `--space-sm` | 8px | Inline spacing |
| `--space-md` | 16px | Component padding |
| `--space-lg` | 24px | Section gaps |
| `--space-xl` | 32px | Section padding |
| `--space-2xl` | 48px | Major sections |
| `--space-3xl` | 64px | Hero spacing |

---

## Shadows

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images |

---

## Effects

- **Grain overlay:** SVG noise texture at `opacity: 0.04` for warmth
- **Hover lift:** `translateY(-4px)` + shadow expansion (200ms ease-out)
- **Press feedback:** `scale(0.98)` (100ms)
- **Fade-in:** `opacity: 0 → 1`, `translateY(12px → 0)` (400ms ease-out)
- **Reduced motion:** All animations disabled via `prefers-reduced-motion: reduce`

---

## Component Patterns

### Buttons
- Primary: `bg-camel hover:bg-brown text-white` with shadow on hover
- Outline: `border-sand/50 text-cream hover:bg-brown/50`
- All clickable elements: `transition-all duration-200`

### Cards
- `bg-white rounded-2xl shadow-lg border border-sand/30`
- Hover: `hover-lift` utility class
- Inner gradient overlay on hero images

### Navigation
- Sticky, `bg-darkbrown/95 backdrop-blur-md`
- Active state: `bg-camel text-white`
- Mobile: slide-down/up animation with click-outside close

---

## Anti-Patterns (Do NOT Use)

- No emojis as icons — use SVG (Phosphor, Heroicons)
- No cold grays (`#6b7280`) — always use warm muted tones
- No pure black (`#000000`) — use `#3b2a22` instead
- No sharp corners — keep 12-20px minimum border-radius
- No mixed filled/outline icons at the same hierarchy level
- No layout-shifting hover transforms

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (use SVG)
- [ ] All icons from consistent set (Phosphor or Heroicons)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast >= 4.5:1 in both light and dark
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
