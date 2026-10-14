# NuxtJP website

`nuxtjp/website` is the canonical source for the public NuxtJP site at
<https://nuxt.jp>, including module introductions, documentation and public
distribution metrics. Hosting uses Cloudflare directly; NuxtHub is retired.

The existing `main-app/` is the legacy application. `content/nuxtjp/` preserves
the reviewed Japanese/English content and license notices migrated from the
retired `nuxtjp-site` repository. `module-site/` is the new static presentation app; the legacy application is retained until production replacement is accepted.
Its source-provenance file records historical provenance, not the live deploy.

See [the hosting and site structure policy](docs/cloudflare-site-policy.ja.md).
This policy does not claim a completed application migration or a new deploy.

The shared site implementation remains maintained in
[`site-builder`](https://github.com/nuxtjp/site-builder).
Module source repositories own their package documentation and distribution
metadata; this repository owns site composition and hosting configuration.

[OSS responsibility and source completion](docs/oss-source-contract.md) defines the supported package boundary and required acceptance. It does not declare unexecuted source, distribution or production checks complete.

Dependency updates: [repository policy](docs/dependency-updates.md).

The site-owned NuxtJP theme uses the existing navy/green NJ icon and introduces
Nuxt, installation, and a searchable module/library directory. Official framework
guidance links to nuxt.com; the directory contains NuxtJP-owned projects and
their dated registry observations. Shared locale routes, SEO and catalog
validation remain in the registry module, with presentation in
`module-site/app/` and route composition in `module-site/modules/nuxt-japan.ts`.

Local checks: `cd module-site`, `pnpm install --frozen-lockfile`,
`pnpm typecheck`, `pnpm generate`. Static output: `.output/public`.
The icon retains separate brand terms in `public/brand/NOTICE.txt`.
