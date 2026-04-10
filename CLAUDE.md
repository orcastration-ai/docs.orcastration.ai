# docs.orcastration.ai

Documentation site for the Orca platform. Built with Astro + Starlight.

## Commands

Requires Node 22 (see `.nvmrc`) and pnpm 10.33.0.

```sh
pnpm install       # install dependencies
pnpm dev           # dev server on localhost:4321
pnpm build         # build to dist/
pnpm lint          # astro check + eslint
pnpm lint:fix      # eslint with auto-fix
pnpm test          # run vitest
pnpm verify        # lint + test with coverage (run before pushing)
```

## Structure

- `src/content/docs/` — documentation pages (MDX/Markdown, file-based routing)
- `src/components/` — custom Astro components
- `src/styles/custom.css` — Starlight theme overrides
- `public/` — static assets (favicon, robots.txt)
- `terraform/` — per-site IaC (S3 + CloudFront via shared module)

## Deployment

- Push to `main` deploys to **dev** (`docs.dev.orcastration.ai`)
- Git tag `v*` creates a GitHub Release and deploys to **prod** (`docs.orcastration.ai`)
- Site ID for SSM parameter lookups: `docs-orcastration-ai`
