---
title: 'Nuxtとはなにか'
description: 'meta description of the page'
---

# 🚀 Nuxtとはなにか

> **Nuxt**は、Vue.jsアプリケーションの開発を効率化するためのフレームワークで、**サーバーサイドレンダリング（SSR）**や**静的サイト生成（SSG）**をサポートしています。

---

## 🧩 Nuxtの概要と特徴

Nuxtは、Vue.jsをベースとした**オールインワンのフルスタックフレームワーク**です。以下のような特徴を持ちます：

- ✅ **ゼロコンフィグ**で始められる
- 📦 **ファイルベースルーティング**
- 🌍 **SSR / SSG / SPA / ISR 対応**
- ⚡️ ViteやWebpackに対応した高速ビルド
- 🔌 **モジュールエコシステム**が豊富（i18n, PWA, Authなど）

```shell
# プロジェクトの作成
npx nuxi init my-app
cd my-app
npm install
npm run dev
```

---

## 🌀 SPA / SSR / SSG / ISR の違い

| モード  | 説明 | 利点 | 主な用途 |
|--------|------|------|---------|
| **SPA** (Single Page Application) | クライアント側で完全に描画されるアプリ | 高速なページ遷移、柔軟なUX | ダッシュボード、管理画面など |
| **SSR** (Server-Side Rendering) | ページがサーバーでHTMLとして生成される | SEOに強く初回表示が高速 | ブログ、ECサイトのTOPページなど |
| **SSG** (Static Site Generation) | ビルド時にHTMLを生成して配信 | パフォーマンスが高く安定 | ドキュメント、マーケティングサイト |
| **ISR** (Incremental Static Regeneration) | 静的生成 + 時間経過による再生成 | 柔軟性と高速性の両立 | 頻繁に更新される情報ページなど |

---

## 🧬 Vueとの関係性

NuxtはVue.jsを**拡張する形**で構築されています。

- `pages/` ディレクトリを使った**ルーティングの自動生成**
- Vueコンポーネント (`*.vue`) をそのまま利用可能
- Vue 3ベースで、Composition APIもそのまま使える
- Vue RouterやPiniaなどのエコシステムとシームレスに統合

```vue
<!-- pages/index.vue -->
<template>
  <h1>こんにちは、Nuxt!</h1>
</template>

<script setup lang="ts">
definePageMeta({ layout: "default" })
</script>
```

> Vueを知っていれば、Nuxtはすぐに使いこなせるはずです！

---

📘 **参考リンク**
- [Nuxt公式サイト](https://nuxt.com/)
- [Vue.js公式サイト](https://vuejs.org/)
