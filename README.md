# NuxtJP website

`nuxtjp/website` is the canonical source for the public NuxtJP site at
<https://nuxt.jp>, including module introductions, documentation and public
distribution metrics. Hosting uses Cloudflare directly; NuxtHub is retired.

The existing `main-app/` is the legacy application. `content/nuxtjp/` preserves
the reviewed Japanese/English content and license notices migrated from the
retired `nuxtjp-site` repository. This content is not yet wired into `main-app/`.
Its source-provenance file records historical provenance, not the live deploy.

See [the hosting and site structure policy](docs/cloudflare-site-policy.ja.md).
This policy does not claim a completed application migration or a new deploy.

The shared site implementation remains maintained in
[`nuxt-localized-site`](https://github.com/nuxtjp/nuxt-localized-site).
Module source repositories own their package documentation and distribution
metadata; this repository owns site composition and hosting configuration.

[OSS responsibility and source completion](docs/oss-source-contract.md) defines the supported package boundary and required acceptance. It does not declare unexecuted source, distribution or production checks complete.
