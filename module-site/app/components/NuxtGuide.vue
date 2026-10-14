<script setup lang="ts">
const site = useLocalizedSite()
const ja = computed(() => site.locale.value === 'ja')
const id = computed(() => site.pageId.value === 'gettingStarted' ? 'gettingStarted' : site.pageId.value === 'security' ? 'security' : 'overview')
const document = computed(() => site.content.value.docs[id.value])
const links = [
  { id: 'overview', path: '/docs', ja: 'Nuxtとは', en: 'Discover Nuxt' },
  { id: 'gettingStarted', path: '/docs/getting-started', ja: 'はじめる', en: 'Get started' },
  { id: 'modules', path: '/oss', ja: 'モジュールを探す', en: 'Explore modules' },
  { id: 'security', path: '/docs/security', ja: 'このサイトについて', en: 'About this site' }
]
</script>

<template>
  <div class="nj-guide nj-container">
    <aside><nav :aria-label="ja ? 'ガイド' : 'Guide'"><NuxtLink v-for="link in links" :key="link.id" :to="site.localePath(site.locale.value, link.path)" :aria-current="id === link.id ? 'page' : undefined">{{ link[site.locale.value] }}</NuxtLink></nav><a class="nj-text-link" href="https://nuxt.com/docs">{{ ja ? '公式ドキュメント' : 'Official documentation' }} ↗</a></aside>
    <article><p class="nj-eyebrow">NUXTJP / GUIDE</p><h1>{{ document.title }}</h1><p class="nj-guide-summary">{{ document.summary }}</p>
      <section v-for="section in document.sections" :key="section.id"><h2>{{ section.title }}</h2><p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p><NuxtCommand v-if="id === 'gettingStarted' && section.id === 'create'" command="npm create nuxt@latest my-app&#10;cd my-app&#10;npm run dev" /></section>
      <div class="nj-guide-next"><a v-if="id === 'gettingStarted'" class="nj-text-link" href="https://nuxt.com/docs/4.x/getting-started/installation">{{ ja ? '環境要件と詳細な導入方法を公式で確認' : 'Check requirements and installation details' }} ↗</a><NuxtLink class="nj-button nj-button-primary" :to="site.localePath(site.locale.value, '/oss')">{{ ja ? 'モジュールを探す' : 'Explore modules' }} →</NuxtLink></div>
    </article>
  </div>
</template>
