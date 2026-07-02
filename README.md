# ScreenX Landing

Landing page, public release downloads, and update feed for ScreenX.

## Commands

```bash
pnpm install
pnpm lint
pnpm build
vercel deploy --prod --yes
```

## Release Layout

- Latest DMG: `public/releases/1.0.0/ScreenX-1.0.0.dmg`
- Update feed: `/api/update`
- Full release archive: `/api/releases`
- Latest download redirect: `/download`

When publishing a new version, add a new folder under `public/releases/<version>/`, update `src/lib/releases.ts`, and keep older versions in place.
