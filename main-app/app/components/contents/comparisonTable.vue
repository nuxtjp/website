<script setup lang="ts">

const comparisonData = [
  {
    label: '言語モデル',
    vue: 'テンプレート + Composition API',
    react: 'JSX / TSX + Hooks',
  },
  {
    label: '公式フレームワーク',
    vue: 'Nuxt',
    react: 'Next.js',
  },
  {
    label: 'レンダリング対応',
    vue: 'SPA / SSR / SSG / ISR',
    react: 'SPA / SSR / SSG / ISR',
  },
  {
    label: '構造ガイド',
    vue: 'ディレクトリ構成が標準化',
    react: '自由。構成はプロジェクト依存',
  },
  {
    label: '学習コスト',
    vue: '中程度（初学者向き）',
    react: 'やや高め（慣れると強力）',
  },
  {
    label: '柔軟性',
    vue: '拡張性は高いが標準的設計を推奨',
    react: '柔軟性が非常に高い',
  },
  {
    label: 'エコシステム',
    vue: 'Vueエコシステム中心',
    react: '圧倒的に広い',
  },
  {
    label: '型安全性',
    vue: 'TypeScript対応 (強化中)',
    react: 'TypeScriptに完全対応',
  },
]

</script>
<template>

  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold">
          Vue × Nuxt と React × Next の比較
        </h2>
        <p class="text-body-1">
          フロントエンド主要技術を比較し、目的に応じた適切な選定を支援します。
        </p>
      </v-col>
    </v-row>
    <v-table density="compact" class="elevation-1 rounded">
      <thead>
        <tr>
          <th>項目</th>
          <th class="text-center text-success">Vue / Nuxt</th>
          <th class="text-center text-primary">React / Next</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in comparisonData" :key="item.label">
          <td class="font-weight-medium">{{ item.label }}</td>
          <td class="text-center">{{ item.vue }}</td>
          <td class="text-center">{{ item.react }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-row class="mt-6">
      <v-col cols="12" md="6">
        <v-alert type="success" border-color="success" elevation="1">
          <v-icon start>mdi-vuejs</v-icon>
          Vue/Nuxt はテンプレートベースで習得が早く、構造化された開発に向いています。
        </v-alert>
      </v-col>
      <v-col cols="12" md="6">
        <v-alert type="info" border-color="primary" elevation="1">
          <v-icon start>mdi-react</v-icon>
          React/Next は柔軟性とエコシステムの広さが強みです。
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>