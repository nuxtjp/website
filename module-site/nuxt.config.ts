export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    ['@nuxtjp/localized-site', {
      contentRoot: '../content/nuxtjp',
      maintenance: false,
      presentation: { theme: 'nuxtjp', scope: 'organization' }
    }],
    './modules/nuxt-japan'
  ],
  nitro: { prerender: { failOnError: true } }
})
