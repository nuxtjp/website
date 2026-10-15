import sitePages from './site/module'
import siteBranding from './branding'
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    siteBranding,
    ['@nuxtjp/localized-site', {
      contentRoot: '../content/nuxtjp',
      maintenance: false,
      presentation: { theme: 'nuxtjp', scope: 'organization' }
    }],
    sitePages
  ],
  nitro: { prerender: { failOnError: true } }
})
