import type { ViteConfig } from 'nuxt/schema'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: ViteConfig) => {
        if(config && config.plugins) {
          config.plugins.push(vuetify({ autoImport: true }))
        }
      })
    },
  ],
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