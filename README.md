# docs.orcastration.ai

[![Primary](https://github.com/jcuffney/docs.orcastration.ai/actions/workflows/primary.yml/badge.svg)](https://github.com/jcuffney/docs.orcastration.ai/actions/workflows/primary.yml) [![Release](https://github.com/jcuffney/docs.orcastration.ai/actions/workflows/deploy.yml/badge.svg)](https://github.com/jcuffney/docs.orcastration.ai/actions/workflows/deploy.yml)

Documentation site for the Orca AI agent orchestration platform, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Setup

```sh
pnpm install
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start dev server at `localhost:4321` |
| `pnpm build`      | Build static site to `./dist/`       |
| `pnpm preview`    | Preview production build locally     |
| `pnpm test`       | Run tests                            |
| `pnpm test:watch` | Run tests in watch mode              |
| `pnpm test:cover` | Run tests with coverage              |
| `pnpm lint`       | Type-check and lint                  |
| `pnpm lint:fix`   | Auto-fix lint issues                 |
| `pnpm verify`     | Full CI pipeline (lint + test:cover) |
