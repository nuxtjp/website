import { validateShowcaseFeed } from '@nuxtjp/localized-site/showcase'

const categories = [
  { id: 'all', ja: 'すべて', en: 'All' },
  { id: 'ui', ja: 'UI・操作', en: 'UI & interactions' },
  { id: 'sites', ja: 'サイト構築', en: 'Site building' },
  { id: 'identity', ja: '認証', en: 'Identity' },
  { id: 'runtime', ja: 'ローカル実行', en: 'Local runtimes' },
  { id: 'commerce', ja: 'コマース', en: 'Commerce' },
  { id: 'development', ja: '開発支援', en: 'Development' }
] as const

const categoryById: Record<string, string> = {
  'nuxtjp-site-builder': 'sites',
  'nuxtjp-flow': 'ui',
  'nuxtjp-declarative-ui': 'ui',
  'nuxtjp-nuxtjp-ui': 'ui',
  'nuxtjp-nuxt-vuetify-layer': 'ui',
  'nuxtjp-nuxt-provider-auth': 'identity',
  'nuxtjp-nuxt-identity-client': 'identity',
  'nuxtjp-nuxt-local-runtime': 'runtime',
  'nuxtjp-nuxt-v8-view-worker': 'runtime',
  'nuxtjp-nuxt-commerce': 'commerce',
  'nuxtjp-nuxt-interaction-fixture': 'development'
}

export function useNuxtCatalog() {
  const feed = validateShowcaseFeed(JSON.parse(useRuntimeConfig().public.nuxtJpOssShowcase ?? 'null'))
  function category(id: string) { return categories.find(item => item.id === categoryById[id]) ?? categories[6] }
  return { feed, categories, category }
}
