<script setup lang="ts">
const site = useLocalizedSite()
const ja = computed(() => site.locale.value === 'ja')
</script>

<template>
  <div class="nj-site">
    <a class="nj-skip" href="#main-content">{{ ja ? '本文へ' : 'Skip to content' }}</a>
    <header class="nj-header">
      <div class="nj-container nj-header-inner">
        <NuxtLink class="nj-brand" :to="site.localePath(site.locale.value, '/')" aria-label="NuxtJP home">
          <img src="/brand/icon.png" alt="" width="40" height="40">
          <span>Nuxt<span class="nj-green">JP</span></span>
        </NuxtLink>
        <nav :aria-label="ja ? '主要メニュー' : 'Main navigation'">
          <NuxtLink :to="site.localePath(site.locale.value, '/docs')">{{ ja ? 'Nuxtとは' : 'Discover Nuxt' }}</NuxtLink>
          <NuxtLink :to="site.localePath(site.locale.value, '/docs/getting-started')">{{ ja ? 'はじめる' : 'Get started' }}</NuxtLink>
          <NuxtLink :to="site.localePath(site.locale.value, '/oss')">{{ ja ? 'モジュール' : 'Modules' }}</NuxtLink>
        </nav>
        <div class="nj-header-tools">
          <NuxtJpLocalizedLanguageSwitcher />
          <a class="nj-github" href="https://github.com/nuxtjp">GitHub ↗</a>
        </div>
      </div>
    </header>
    <main id="main-content"><slot /></main>
    <footer class="nj-footer nj-container">
      <div><NuxtLink class="nj-brand" :to="site.localePath(site.locale.value, '/')">Nuxt<span class="nj-green">JP</span></NuxtLink><p>{{ ja ? 'Nuxtを知る。試す。モジュールで広げる。' : 'Discover Nuxt. Start building. Extend with modules.' }}</p></div>
      <nav :aria-label="ja ? '関連リンク' : 'Related links'">
        <a href="https://nuxt.com">Nuxt ↗</a>
        <a href="https://github.com/nuxtjp">GitHub ↗</a>
        <NuxtLink :to="site.localePath(site.locale.value, '/docs/security')">{{ ja ? 'このサイトについて' : 'About this site' }}</NuxtLink>
      </nav>
      <p class="nj-footer-note">{{ ja ? 'NuxtJPによる日本語の導入ガイドと独自モジュールの紹介サイトです。Nuxtの仕様・互換性は公式ドキュメントをご確認ください。' : 'Japanese guidance and independently maintained NuxtJP modules. See the official Nuxt documentation for framework specifications and compatibility.' }}</p>
    </footer>
  </div>
</template>
