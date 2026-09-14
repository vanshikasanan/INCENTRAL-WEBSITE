# Incentral Website

Production-ready Next.js starter with shadcn/ui, Tailwind CSS, and SEO defaults.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** shadcn/ui (base-nova) + Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React
- **HTTP Client:** Axios

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
├── config/           # Site config, env, and navigation
└── lib/
    ├── api/          # Axios client, errors, typed helpers
    └── metadata.ts   # SEO metadata helpers
```

## SEO

- Centralized metadata via `constructMetadata()` in `src/lib/metadata.ts`
- Dynamic `sitemap.xml`, `robots.txt`, and web app manifest
- Open Graph and Twitter card tags
- JSON-LD organization schema on the root layout
- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for production

## API (Axios)

Pre-configured axios client at `src/lib/api/` with interceptors and typed helpers.

```ts
import { apiGet, apiPost, ApiError } from "@/lib/api";

// GET request
const users = await apiGet<User[]>("/users");

// POST request
const created = await apiPost<User, CreateUserDto>("/users", { name: "Jane" });

// Error handling
try {
  await apiGet("/protected");
} catch (error) {
  if (error instanceof ApiError) {
    console.error(error.status, error.message);
  }
}
```

Set `NEXT_PUBLIC_API_URL` in `.env.local` to point at your backend.

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
