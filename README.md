# ScreenX — landing page, downloads, and update feed

Public website for **ScreenX**, a native macOS window manager for quick layouts,
per-screen grids, live drag previews, and saved workspaces.

- Live site: https://screenx.scrubmac.app
- App source: https://github.com/SyntaxFear/screenX
- License: MIT

This repo contains the marketing page, release archive, download redirect, and
machine-readable update endpoints for the macOS app.

## For Non-Technical Visitors

ScreenX is the Mac app. This repository is the website around it:

- The home page explains what ScreenX does.
- `/download` redirects to the latest DMG.
- `/releases` lists release notes.
- `/api/update` and `/api/releases` expose update metadata for the app/site.

You do not need this repository to install ScreenX. Download the app from
https://screenx.scrubmac.app instead.

## Commands

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
vercel deploy --prod --yes
```

Copy `.env.example` to `.env.local` if you need to override the canonical public
site URL during local or preview deployments.

## Release Layout

- Latest DMG: `public/releases/1.0.2/ScreenX-1.0.2.dmg`
- Update feed: `/api/update`
- Full release archive: `/api/releases`
- Latest download redirect: `/download`

When publishing a new version, add a new folder under `public/releases/<version>/`, update `src/lib/releases.ts`, and keep older versions in place.

## Analytics

The site uses Vercel Web Analytics and Speed Insights.

- Page views, visitors, referrers, countries, devices, and popular pages come from Vercel Web Analytics.
- Real-user loading and web-vitals data comes from Vercel Speed Insights.
- `Section Viewed` events show which homepage and release-page sections visitors actually reach.
- `CTA Click`, `Navigation Click`, and `External Link Click` events show how visitors move through the page.
- `Download Click` tracks visible download button clicks.
- `Download Started` is emitted by `/download` before redirecting to the DMG, including version, source, and whether it is the latest release.

Enable Web Analytics and Speed Insights for the Vercel project dashboard after deployment if they are not already enabled.

## Open Source Notes

This repo is open source so users can inspect the download flow, release
metadata, and update feed. Please read `CONTRIBUTING.md` before proposing
changes and `SECURITY.md` before reporting security-sensitive issues.
