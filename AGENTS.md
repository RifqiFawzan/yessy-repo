<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- **Next.js 16.3.3** (App Router) — version-specific APIs; check `node_modules/next/dist/docs/` before using unfamiliar patterns
- **React 19.2.8**
- **Tailwind CSS 4** — CSS-first config, no `tailwind.config.js`. Custom styles use `@theme inline` in `app/globals.css`
- **ESLint 9** — flat config (`eslint.config.mjs`), not legacy `.eslintrc`
- **TypeScript 5** — strict mode enabled
- **shadcn/ui** — base-nova style, RSC-enabled. Components in `components/ui/`, utils in `lib/utils.ts`

## Commands

```
npm run dev        # dev server on localhost:3000
npm run build      # production build
npm run lint       # eslint (no fix flag; add --fix manually if needed)
npm run start      # serve production build
npx tsc --noEmit   # type checking (no script defined)
```

No test runner is configured.

## Project structure

Single-package project. No monorepo, no workspaces.

```
app/
  layout.tsx        # root layout (Raleway, Noto_Serif, Geist_Mono fonts)
  page.tsx          # home page
  globals.css       # Tailwind import + shadcn theme + custom palette
  about/page.tsx    # about / story page
  place1/page.tsx   # restaurant location 1 (fine dining menu)
  place2/page.tsx   # restaurant location 2 (bistro / comfort food menu)
  reservation/page.tsx  # reservation page (client component — "use client")
components/
  navbar.tsx        # sticky nav (client component, mobile hamburger)
  footer.tsx        # site footer
  ui/button.tsx     # shadcn Button (base-ui primitive)
lib/
  utils.ts          # cn() helper (clsx + tailwind-merge)
```

## Conventions

- Path alias `@/*` maps to project root (set in `tsconfig.json`)
- Fonts: Raleway (`--font-sans`), Noto_Serif (`--font-heading`), Geist_Mono (`--font-geist-mono`)
- Dark mode via `prefers-color-scheme` media query in `globals.css` — no class-based toggle
- Custom color palette defined in `@theme inline`: `cream`, `camel`, `sand`, `brown`, `darkbrown` — use these, not arbitrary hex values
- shadcn components use `@base-ui/react` primitives (not Radix) — check `components.json` for aliases
