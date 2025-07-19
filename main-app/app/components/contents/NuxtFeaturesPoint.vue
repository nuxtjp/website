<script setup lang="ts">

const topics = [
  {
    title: '構造の最適化',
    summary: 'ディレクトリ・役割の明確化で属人化を防ぎ、再現性のある設計を実現。',
    icon: 'mdi-view-grid-plus-outline',
    //link: '/reason/structure',
    link: '/',
  },
  {
    title: '多様なレンダリング制御',
    summary: 'SSR, SPA, SSG, ISR などにプロジェクト単位で柔軟に対応可能。',
    icon: 'mdi-lan',
    //link: '/reason/rendering',
    link: '/',
  },
  {
    title: 'ロジックの抽象化',
    summary: 'ビジネスロジックとUI処理を分離し、ドメイン主導設計が自然にできる構造。',
    icon: 'mdi-cube-outline',
    //link: '/reason/ddd-architecture',
    link: '/',
  },
  {
    title: '拡張性と保守性の共存',
    summary: 'モジュール設計と型の安全性により、長期運用に耐えるプロジェクト構造を実現。',
    icon: 'mdi-puzzle-outline',
    //link: '/reason/maintainability',
    link: '/',
  },
]
</script>
<template>
  <v-row dense>
    <v-col v-for="item in topics" :key="item.title">
      <v-card outlined min-width="400">
        <v-card-title>
          <v-icon color="primary">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-card-title>
        <v-card-text>{{ item.summary }}</v-card-text>
        <v-card-actions>
          <v-btn :to="item.link" variant="text" color="primary">
            詳しく見る
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>