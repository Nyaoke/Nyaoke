# AGENTS.md

## Cursor Cloud specific instructions

### Repository layout

`main` currently contains only `README.md`. The Next.js application lives on branch `cursor/active-filter-chip-row-8bc8`. Check out that branch (or whichever branch has `package.json`) before installing dependencies or running commands.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Next.js dev server | `npm run dev` | 3000 | Only service required for full UI testing |

No database, Docker, or `.env` configuration is needed. All diamond data is in-memory mock data (`lib/mock-diamonds.ts`).

### Common commands

See `package.json` scripts:

- `npm run dev` — development server (use this, not `npm start`)
- `npm run build` — production build
- `npm run lint` — ESLint via `next lint`
- `npm run typecheck` — `tsc --noEmit`

### Primary route

Open `http://localhost:3000/diamond-search` for the diamond search prototype. The root path has no landing page.

### Hello-world smoke test

1. Start `npm run dev`
2. Visit `/diamond-search`
3. Apply filters in the sidebar (shape, carat, color)
4. Confirm filter chips appear and results update
5. Remove a chip via its X button
