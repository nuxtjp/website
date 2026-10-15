import { fileURLToPath } from 'node:url'
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
  nitro: { publicAssets: [{ dir: fileURLToPath(new URL('../content/nuxtjp/public', import.meta.url)), maxAge: 0 }], prerender: { failOnError: true } }
})
