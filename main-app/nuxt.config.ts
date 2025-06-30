import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  content: {
    build: {
      markdown: {
      }
    },
    renderer: {
      anchorLinks: false
    }
  },
  build: {
    transpile: ['vuetify'],
    
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})