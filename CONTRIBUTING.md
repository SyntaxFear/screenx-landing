# Contributing to ScreenX Landing

Thanks for helping make the ScreenX website clearer and safer.

## Good First Contributions

- Improve copy for non-technical Mac users.
- Clarify download or release notes.
- Improve accessibility, metadata, or SEO.
- Add tests for release/download behavior.
- Improve `.env.example` when a new environment variable is added.

## Local Development

```sh
pnpm install
cp .env.example .env.local
pnpm dev
```

## Verification

```sh
pnpm lint
pnpm typecheck
pnpm build
```

## Pull Requests

Please keep changes focused. For behavior changes, describe:

- What changed
- Why it is safer or clearer
- How you tested it

Do not include `.env`, `.env.local`, Vercel credentials, Apple account
credentials, notarization secrets, or signing certificates.
