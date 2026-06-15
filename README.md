# Ted Nyaoke Portfolio

Personal portfolio for Ted Nyaoke, Senior Product Designer and Product Manager based in Nairobi, Kenya.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS with custom design tokens
- Motion (motion/react)
- shadcn/ui (Button, Dialog, Sheet)
- Geist Sans/Mono + Instrument Serif

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Screenshots

Drop real screenshots into `public/work/[slug]/` using the filenames referenced in `src/content/projects.ts`:

| File | Usage |
|------|-------|
| `cover.png` | Project cards and work index thumbnails |
| `hero.png` | Case study hero and next-project link |
| `screen-1.png`, `screen-2.png`, `screen-3.png` | Case study gallery |

Slugs: `kijani-flow`, `mediacommand`, `pulse`, `agile-hub`, `stanbic-bank-south-sudan`, `ola-energy`, `dunkit-nba-africa`

Missing images fall back to `public/work/_placeholder.svg`.

## Content

All copy and project data lives in `src/content/`. Edit those files to update site content without touching components.
