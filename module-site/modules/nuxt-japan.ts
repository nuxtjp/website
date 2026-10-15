import { createResolver, defineNuxtModule, extendPages } from 'nuxt/kit'

// Site-owned presentation; shared localization, catalog validation and SEO stay
// in the registry module. These hooks run after its routes have been registered.
export default defineNuxtModule({
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    extendPages(pages => {
      for (const page of pages) {
        page.meta = { ...page.meta, layout: 'nuxt-japan' }
        if (['/', '/en'].includes(page.path)) {
          page.file = resolver.resolve('../app/components/NuxtIntroduction.vue')
        } else if (['/oss', '/en/oss'].includes(page.path)) {
          page.file = resolver.resolve('../app/components/NuxtModules.vue')
        } else if (/^\/(en\/)?docs(\/|$)/.test(page.path)) {
          page.file = resolver.resolve('../app/components/NuxtGuide.vue')
        }
      }
    })
    nuxt.options.css.push(resolver.resolve('../app/assets/nuxt-japan.css'))
    nuxt.options.nitro.publicAssets ??= []
    nuxt.options.nitro.publicAssets.push({
      dir: resolver.resolve('../../content/nuxtjp/public/oss'),
      baseURL: '/oss',
      maxAge: 0,
      fallthrough: true
    })
  }
})
