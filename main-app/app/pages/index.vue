<script setup lang="ts">
import useNuxtVersionUpHistory from '~/composables/useNuxtVersionUpHistory';

const versions = useNuxtVersionUpHistory()

</script>
<template>
  <h2 class="text-h5 mt-4">Nuxtとは</h2>
  <v-container>
    <ContentsNuxtDescription></ContentsNuxtDescription>
  </v-container>
  <h2 class="text-h5 mt-4">Nuxtの特徴</h2>
  <v-container>
    <ContentsNuxtFeaturesPoint></ContentsNuxtFeaturesPoint>
  </v-container>

  <!-- Nuxt バージョンの進化 -->
  <h2 class="text-h5 mt-4">
    Nuxtの進化と大規模開発への適応
  </h2>

  <v-container class="my-4">
     <v-alert type="success" border-color="green" elevation="1">
      <v-icon start>mdi-domain</v-icon>
      <p>Nuxt 3 は <strong>TypeScript 対応、柔軟なレンダリング戦略、拡張可能なモジュール構成</strong> を備え、大規模開発においても信頼できる選択肢となっています。</p>
    </v-alert>
    <v-timeline side="end" density="compact">
      <v-timeline-item
        v-for="item in versions"
        :key="item.version"
        :dot-color="item.color"
        size="small"
      >
        <template #opposite>
          
        </template>
        <v-card variant="outlined">
          <v-card-title class="text-subtitle-1 font-weight-bold">{{ item.title }}{{ item.version }}</v-card-title>
          <v-card-text class="text-body-2">
            {{ item.description }}
            <div class="mt-2">
              <v-btn
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noopener"
                size="small"
                variant="text"
                color="primary"
              >
                詳細を見る
                <v-icon end>mdi-open-in-new</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>

  <h2 class="text-h5 mt-4">今Nuxtを採用する理由</h2>
  <p>静かに進行する技術的負債 ― それにどう向き合うか？という課題に対して</p>

  <v-container>
    <v-alert type="warning" elevation="1" class="ma-4">
      <p>アプリケーションの開発では様々な課題が発生します。そのすべてを事前に把握し対策を立てることも現実的とは言えないでしょう。</p>
      <p>設計の混乱・保守性の低下・拡張性の限界、初期フェーズでは見過ごされがちなものほど、気づいたときには取り返しのつかない技術的負債として残ります。</p>
    </v-alert>


    <v-alert type="info" elevation="1" class="ma-4">
      <p>Nuxtの本質的な価値は、Vue.jsの柔軟さを保ち（ReactのようなJavaScript主体の構文ではなく、HTMLの構文を維持し）つつ、プロジェクトを自然に<strong>構造化</strong>し、アプリケーションの開発に<strong>秩序</strong>を与えることにあります。</p>
      <p>そのため設計段階のみでなく、すでに稼働しているシステムであっても、移行を通してデータの構造化に自然と目が行くようになるのです。</p>
    </v-alert>
  </v-container>

</template>