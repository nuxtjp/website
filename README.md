# NuxtJP website

`nuxtjp/website` is the canonical source for the public NuxtJP site at
<https://nuxt.jp>, including module introductions, documentation and public
distribution metrics. Hosting uses Cloudflare directly; NuxtHub is retired.

`module-site/` is the current static presentation app, deployed at `nuxt.jp`.
`content/nuxtjp/` retains reviewed content and license notices migrated from the
retired `nuxtjp-site` repository. Historical application Markdown and the favicon
are preserved with byte hashes in `content/nuxtjp/knowledge/`; the retired Vue
application and its dependency/build configuration have been removed.
Source provenance records describe history, not the live deployment.

The module-site production replacement was accepted as version `0.1.12`, source
`42b78e5f8396db20835c7e2b7da11edec06330af`, by
[the owned release workflow](https://github.com/nuxtjp/website/actions/runs/40601636040).
It verified 129 public assets and all 30 Markdown routes, preserved DNS and domain
bindings, and kept workers.dev and preview URLs disabled. This source cleanup
preserves the deployed application tree and does not claim a new deployment.
See [the hosting and site structure policy](docs/cloudflare-site-policy.ja.md).

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
`module-site/site/`, with its reviewed bilingual manifest and route composition in `module-site/site/module.ts`.

Local checks: `cd module-site`, `pnpm install --frozen-lockfile`,
`pnpm typecheck`, `pnpm generate`. Static output: `.output/public`.
The icon retains separate brand terms in `public/brand/NOTICE.txt`.


サイトの独立したタグ公開・承認・有効化条件: [公開手順](docs/site-release.ja.md)。
