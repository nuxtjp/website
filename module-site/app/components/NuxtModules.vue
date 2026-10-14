<script setup lang="ts">
import { metricState, summarizeDownloads } from '@nuxtjp/localized-site/showcase'
const site = useLocalizedSite()
const ja = computed(() => site.locale.value === 'ja')
const { feed, categories, category } = useNuxtCatalog()
const query = ref(''), selectedCategory = ref('all'), now = Date.now()
const entries = computed(() => feed.entries.filter(entry =>
  (selectedCategory.value === 'all' || category(entry.id).id === selectedCategory.value) &&
  `${entry.id} ${entry.name.ja} ${entry.name.en} ${entry.summary.ja} ${entry.summary.en} ${entry.metrics.map(metric => metric.package).join(' ')}`.toLowerCase().includes(query.value.trim().toLowerCase())
))
const totals = summarizeDownloads(feed, now)
useHead(() => ({ title: `${ja.value ? 'モジュールとライブラリ' : 'Modules & libraries'} · NuxtJP` }))
</script>

<template>
  <div class="nj-catalog nj-container">
    <header class="nj-catalog-heading"><p class="nj-eyebrow">NUXTJP / MODULES & LIBRARIES</p><h1>{{ ja ? '機能から、見つけよう。' : 'Find your next building block.' }}</h1><p>{{ ja ? 'UI、認証、サイト構築、ローカル実行。NuxtJPが保守するモジュールと関連ライブラリを、用途から探せます。' : 'UI, identity, site building and local execution. Explore NuxtJP modules and companion libraries by purpose.' }}</p><a class="nj-text-link" href="https://nuxt.com/modules">{{ ja ? 'Nuxt全体の公式モジュール一覧' : 'Official directory for the wider Nuxt ecosystem' }} ↗</a></header>
    <div class="nj-catalog-controls">
      <label class="nj-search"><span>{{ ja ? 'モジュールを検索' : 'Search modules' }}</span><input v-model="query" type="search" maxlength="200" :placeholder="ja ? '名前・機能・パッケージ名' : 'Name, purpose or package'" /></label>
      <div class="nj-filters" :aria-label="ja ? '用途で絞り込む' : 'Filter by purpose'"><button v-for="item in categories" :key="item.id" type="button" :aria-pressed="selectedCategory === item.id" @click="selectedCategory = item.id">{{ item[site.locale.value] }}</button></div>
    </div>
    <p class="nj-result-count" role="status">{{ entries.length }} {{ ja ? '件のプロジェクト' : 'projects' }}</p>
    <div class="nj-module-grid">
      <article v-for="entry in entries" :key="entry.id" class="nj-module-card">
        <div class="nj-card-labels"><span>{{ category(entry.id)[site.locale.value] }}</span><span>{{ entry.metrics.length ? 'npm' : 'Source' }}</span></div>
        <h2><NuxtLink :to="site.localePath(site.locale.value, `/oss/${entry.id}`)">{{ entry.name[site.locale.value] }}</NuxtLink></h2><p>{{ entry.summary[site.locale.value] }}</p>
        <ul v-if="entry.metrics.length" class="nj-package-list"><li v-for="metric in entry.metrics" :key="metric.package"><code>{{ metric.package }}</code><span>{{ metricState(metric, now) === 'available' ? metric.downloads?.toLocaleString(site.locale.value) : (ja ? '未取得 / 期限切れ' : 'Unavailable / stale') }} <small>{{ ja ? '期間内DL' : 'period downloads' }}</small></span></li></ul>
        <p v-else class="nj-source-only">{{ ja ? '公開ソースと利用例をリポジトリで確認できます。' : 'Explore the public source and examples in the repository.' }}</p>
        <div class="nj-card-links"><NuxtLink :to="site.localePath(site.locale.value, `/oss/${entry.id}`)">{{ ja ? '詳細・使い方' : 'Details & usage' }} →</NuxtLink><a v-if="entry.repository" :href="entry.repository">GitHub ↗</a></div>
      </article>
    </div>
    <div v-if="!entries.length" class="nj-empty"><p>{{ ja ? '条件に合うプロジェクトが見つかりません。' : 'No projects match these filters.' }}</p><button type="button" @click="query = ''; selectedCategory = 'all'">{{ ja ? '絞り込みを解除' : 'Clear filters' }}</button></div>
    <section class="nj-catalog-observations"><h2>{{ ja ? '公開パッケージのダウンロード' : 'Published package downloads' }}</h2><p v-for="group in totals" :key="`${group.registry}:${group.start}:${group.end}`"><strong>{{ group.available ? group.downloads.toLocaleString(site.locale.value) : '—' }}</strong> {{ group.registry }} · {{ group.start }} — {{ group.end }} <span>{{ ja ? '取得済み' : 'Observed' }} {{ group.available }} / {{ ja ? '未取得' : 'Unavailable' }} {{ group.unavailable }} / {{ ja ? '期限切れ' : 'Stale' }} {{ group.stale }}</span></p><small>{{ ja ? '一覧全体の期間付きスナップショットです。未取得は0件とは異なり、ダウンロード数は利用者数ではありません。' : 'A dated snapshot of the full catalog. Unavailable is different from zero; downloads are not unique users.' }}</small></section>
  </div>
</template>
