# Incentral Website

Production-ready Next.js starter with shadcn/ui, Tailwind CSS, and SEO defaults.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** shadcn/ui (base-nova) + Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/              # Routes, layouts, SEO files (sitemap, robots, manifest)
├── components/
│   ├── layout/       # Header, footer, container, mobile nav
│   ├── seo/          # JSON-LD structured data
│   └── ui/           # shadcn/ui components
├── config/           # Site config and navigation
└── lib/              # Shared utilities (metadata helpers)
```

## SEO

- Centralized metadata via `constructMetadata()` in `src/lib/metadata.ts`
- Dynamic `sitemap.xml`, `robots.txt`, and web app manifest
- Open Graph and Twitter card tags
- JSON-LD organization schema on the root layout
- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for production

## Adding UI components

```bash
npx shadcn@latest add [component-name]
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node.js host. Set `NEXT_PUBLIC_SITE_URL` to your production domain before deploying.
