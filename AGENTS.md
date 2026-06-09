# AGENTS.md

## Cursor Cloud specific instructions

### Services

| Service | Command | Port |
|---------|---------|------|
| Next.js dev server | `npm run dev` | 3000 |

### If the UI looks unstyled / broken

A corrupted `.next` cache causes **Tailwind CSS to 404** (page renders as plain HTML). Fix:

```bash
pkill -f "next dev" || true
rm -rf .next
npm run dev
```

Verify CSS loads: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/_next/static/css/app/layout.css` should return `200`.

### Primary route

`http://localhost:3000/diamond-search`

### Diamond images

Product photos live in `public/diamonds/` (snapshotted from Rare Carat). Mapped via `lib/diamond-images.ts`.
