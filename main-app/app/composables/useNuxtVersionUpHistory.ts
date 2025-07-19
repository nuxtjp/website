export default(() => {
  const versions = [
    {
      version: 'v1 (2016)',
      title: 'Nuxt 初期リリース',
      description:
        'Vue アプリケーションに SSR 機能を統合するための最初の試み。直感的なルーティングと構成が注目を集める。',
      link: 'https://github.com/nuxt/nuxt.js/releases/tag/v1.0.0',
      color: 'grey',
    },
    {
      version: 'v2 (2018)',
      title: '安定版としての確立',
      description:
        '静的サイト生成（SSG）やモジュールエコシステムの拡充により、商用利用が急増。多数のプロジェクトで採用される。',
      link: 'https://nuxt.com/blog/announcing-nuxt2',
      color: 'blue',
    },
    {
      version: 'v3 (2022)',
      title: 'Nuxt 3 / Vue 3 対応',
      description:
        'Composition API、TypeScript、Vite、Nitro エンジンの導入で構造が刷新。大規模開発や高速開発に対応可能な設計に。',
      link: 'https://nuxt.com/blog/nuxt-3-is-now-available',
      color: 'green',
    },
    {
      version: 'v3.10+ (2024)',
      title: '安定運用とエンタープライズ対応強化',
      description:
        '開発者体験の改善、モジュール管理の刷新、サーバーレスやクラウド対応の向上により、企業・官公庁レベルの採用事例も多数。',
      link: 'https://nuxt.com/blog',
      color: 'teal',
    },
  ]
  return versions
})
