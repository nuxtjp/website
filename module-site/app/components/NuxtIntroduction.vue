<script setup lang="ts">
const site = useLocalizedSite()
const ja = computed(() => site.locale.value === 'ja')
const { feed } = useNuxtCatalog()
const manager = ref<'npm' | 'pnpm'>('npm')
const command = computed(() => `${manager.value} create nuxt@latest my-app\ncd my-app\n${manager.value === 'npm' ? 'npm run dev' : 'pnpm dev'}`)
const example = '<script setup lang="ts">\nconst message = ref("Hello, Nuxt!")\n</' + 'script>\n\n<template>\n  <h1>{{ message }}</h1>\n</template>'
const selected = feed.entries.filter(entry => ['nuxtjp-site-builder', 'nuxtjp-declarative-ui', 'nuxtjp-nuxt-local-runtime'].includes(entry.id))
const features = computed(() => ja.value ? [
  { number: '01', title: 'ファイルから、ページへ。', text: 'Vueコンポーネントをページとして配置。ルーティングやコンポーネントの読み込みをNuxtが支えます。', link: 'https://nuxt.com/docs/4.x/getting-started/routing', label: 'ルーティングを知る' },
  { number: '02', title: '届け方を、選べる。', text: 'サーバー描画、クライアント描画、静的生成。アプリケーションの用途に合わせて選べます。', link: 'https://nuxt.com/docs/4.x/guide/concepts/rendering', label: 'レンダリングを知る' },
  { number: '03', title: 'VueとTypeScriptで。', text: 'Vueの書き方を生かしながら、型情報と開発ツールを利用してWebアプリケーションを組み立てます。', link: 'https://nuxt.com/docs/4.x/guide/concepts/typescript', label: 'TypeScriptを知る' }
] : [
  { number: '01', title: 'From files to pages.', text: 'Turn Vue components into pages. Nuxt takes care of routing and component discovery.', link: 'https://nuxt.com/docs/4.x/getting-started/routing', label: 'Explore routing' },
  { number: '02', title: 'Choose how to render.', text: 'Server rendering, client rendering or static generation. Match the rendering strategy to your application.', link: 'https://nuxt.com/docs/4.x/guide/concepts/rendering', label: 'Explore rendering' },
  { number: '03', title: 'Vue meets TypeScript.', text: 'Build with familiar Vue components, type information and integrated development tools.', link: 'https://nuxt.com/docs/4.x/guide/concepts/typescript', label: 'Explore TypeScript' }
])
</script>

<template>
  <section class="nj-hero">
    <div class="nj-container nj-hero-grid">
      <div class="nj-hero-copy">
        <p class="nj-eyebrow"><span class="nj-status-dot" /> NUXT · JAPANESE GUIDES & MODULES</p>
        <h1 v-if="ja"><span>Nuxt</span>から、<br>次のWeb体験へ。</h1>
        <h1 v-else>Build your next<br>web experience<br>with <span>Nuxt.</span></h1>
        <p class="nj-hero-description">{{ ja ? 'Vueを基盤に、ページも、データも、サーバーも。Nuxtの導入から、必要な機能をモジュールで広げるところまで。' : 'Pages, data and servers, built on Vue. Get started with Nuxt, then extend your application with the modules you need.' }}</p>
        <div class="nj-actions">
          <NuxtLink class="nj-button nj-button-primary" :to="site.localePath(site.locale.value, '/docs/getting-started')">{{ ja ? 'Nuxtをはじめる' : 'Get started with Nuxt' }} <span aria-hidden="true">→</span></NuxtLink>
          <NuxtLink class="nj-button nj-button-outline" :to="site.localePath(site.locale.value, '/oss')">{{ ja ? 'モジュールを探す' : 'Explore modules' }}</NuxtLink>
        </div>
        <p class="nj-hero-caption">{{ ja ? '日本語で学ぶ / オープンソースで組み立てる' : 'Learn in Japanese / Build with open source' }}</p>
      </div>
      <div class="nj-workspace" :aria-label="ja ? 'NuxtのVueコンポーネント例' : 'A Vue component in Nuxt'">
        <div class="nj-workspace-bar"><span class="nj-window-dots" aria-hidden="true">● ● ●</span><span>app/app.vue</span><span class="nj-code-tag">Vue</span></div>
        <pre class="nj-example"><code>{{ example }}</code></pre>
        <div class="nj-example-output"><img class="nj-preview-brand" src="/brand/icon.png" width="60" height="60" alt=""><span class="nj-eyebrow">PREVIEW</span><p>Hello, Nuxt<span>!</span></p><small>Vue + TypeScript + Nuxt</small></div>
        <div class="nj-workspace-status"><span class="nj-status-dot" /> {{ ja ? '小さなコンポーネントから、はじめよう。' : 'Start with a small component.' }}</div>
      </div>
    </div>
  </section>

  <section id="discover" class="nj-section nj-container">
    <div class="nj-section-heading"><div><p class="nj-eyebrow">01 / DISCOVER NUXT</p><h2>{{ ja ? 'Web開発の土台を、ひとつに。' : 'One foundation for the web.' }}</h2></div><a class="nj-text-link" href="https://nuxt.com">{{ ja ? 'Nuxt公式サイト' : 'Official Nuxt website' }} ↗</a></div>
    <div class="nj-feature-grid"><article v-for="feature in features" :key="feature.number"><img class="nj-feature-icon" :src="`/brand/icons/${({ '01': 'flow', '02': 'layers', '03': 'code' } as Record<string, string>)[feature.number]}.svg`" width="36" height="36" alt="" loading="lazy"><span class="nj-feature-number">{{ feature.number }} /</span><h3>{{ feature.title }}</h3><p>{{ feature.text }}</p><a class="nj-text-link" :href="feature.link">{{ feature.label }} ↗</a></article></div>
  </section>

  <section class="nj-start-section">
    <div class="nj-container nj-start-grid">
      <div><p class="nj-eyebrow">02 / GET STARTED</p><h2>{{ ja ? 'まずは、動かしてみる。' : 'Start with something running.' }}</h2><p>{{ ja ? 'Node.jsを用意して、プロジェクトを作成。Vueのページを編集しながら、Nuxtの開発を体験できます。' : 'Install Node.js, create a project and start exploring Nuxt by editing a Vue page.' }}</p><NuxtLink class="nj-text-link" :to="site.localePath(site.locale.value, '/docs/getting-started')">{{ ja ? '導入ガイドを読む' : 'Read the setup guide' }} →</NuxtLink></div>
      <div><div class="nj-manager-tabs" :aria-label="ja ? 'パッケージマネージャー' : 'Package manager'"><button v-for="item in (['npm', 'pnpm'] as const)" :key="item" type="button" :aria-pressed="manager === item" @click="manager = item">{{ item }}</button></div><NuxtCommand :command="command" /></div>
    </div>
  </section>

  <section class="nj-section nj-container">
    <div class="nj-section-heading"><div><p class="nj-eyebrow">03 / EXTEND WITH MODULES</p><h2>{{ ja ? '必要な機能を、組み合わせる。' : 'Compose the capabilities you need.' }}</h2><p>{{ ja ? 'NuxtJPが保守するモジュールと関連ライブラリ。用途から選び、各リポジトリで使い方を確認できます。' : 'Modules and companion libraries maintained by NuxtJP. Find a purpose, then explore the source and usage guide.' }}</p></div><NuxtLink class="nj-text-link" :to="site.localePath(site.locale.value, '/oss')">{{ ja ? 'すべて見る' : 'View all' }} →</NuxtLink></div>
    <div class="nj-module-grid"><NuxtLink v-for="entry in selected" :key="entry.id" class="nj-featured-module" :to="site.localePath(site.locale.value, `/oss/${entry.id}`)"><span class="nj-module-symbol" aria-hidden="true"><img :src="`/brand/icons/${entry.id.endsWith('site-builder') ? 'document' : entry.id.endsWith('declarative-ui') ? 'layers' : 'code'}.svg`" width="32" height="32" alt="" loading="lazy"></span><h3>{{ entry.name[site.locale.value] }}</h3><p>{{ entry.summary[site.locale.value] }}</p><span class="nj-text-link">{{ ja ? '構成と利用情報' : 'Explore the project' }} →</span></NuxtLink></div>
    <div class="nj-ecosystem-link"><p>{{ ja ? 'Nuxt全体のモジュールも探したいですか？' : 'Looking for the wider Nuxt ecosystem?' }}</p><a class="nj-text-link" href="https://nuxt.com/modules">{{ ja ? '公式モジュールディレクトリへ' : 'Official module directory' }} ↗</a></div>
  </section>
</template>
