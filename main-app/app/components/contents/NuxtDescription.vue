<script setup lang="ts">

</script>
<template>
  <v-stepper-vertical
    rounded
    multiple
    next-text="↓"
    prev-text="↑"
    :model-value="[1]"
  >
    <v-stepper-vertical-item
      :complete="false"
      icon="mdi-application"
      color="blue"
      title="Your App"
      :model-value="0"
    >
      Nuxtを使用してアプリケーションを作成するためには、Vue、Node.js、そしてNuxt独自の仕組みを理解する必要があります。
      その分、SSRやSPA、静的サイト生成といった要件を柔軟に満たす構成を、最小限の記述で実現できます。

      <template #prev></template>
    </v-stepper-vertical-item>

    <v-stepper-vertical-item
      :complete="false"
      icon="mdi-nuxt"
      title="Nuxt"
      id="test"
      color="green-accent-3"
      :model-value="1"
    >
      <p><strong>Nuxtは直感的にフルスタックのWebアプリケーションを構築するためのVue.js用フレームワークです。</strong></p>
      <p>Vueの柔軟性に加え、ディレクトリベースの自動ルーティングやミドルウェア、SSR機能が標準で備わっており、ReactやNext.jsと比較しても、初期構築の手間を抑えつつ高度な構成が可能です。</p>
      <p>NuxtJPはNuxt周辺の技術スタックを含む様々な情報を、日本のシステム開発環境を踏まえながら、実践的な情報として提供することを目的としています。</p>
    </v-stepper-vertical-item>

    <v-stepper-vertical-item
      :complete="false"
      icon="mdi-vuejs"
      title="Vuejs"
      color="green-darken-1"
      :model-value="2"
    >
      <p><strong>Vue.jsは、シンプルかつコンポーネント指向で、学習コストが低いことが特徴のJavaScriptフレームワークです。</strong></p>
      <p>ReactのJSXやAngularの複雑な構成に比べ、HTMLベースのテンプレートと双方向データバインディングにより、UI構築を直感的に行うことができます。</p>
    </v-stepper-vertical-item>

    <v-stepper-vertical-item
      :complete="false"
      icon="mdi-nodejs"
      title="NodeJS"
      color="green-lighten-1"
      :model-value="3"
    >
      <p><strong>Node.jsは、JavaScriptでサーバーサイドを扱える実行環境です。</strong></p>
      <p>NuxtにおけるSSRやAPIルートの実行はNode.js上で動作します。Expressなどと異なり、Nuxtではこれらが抽象化されており、開発者はフロントエンドの感覚でバックエンドの処理を書くことができます。</p>

      <template #next></template>
    </v-stepper-vertical-item>
  </v-stepper-vertical>
</template>
