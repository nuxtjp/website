# NuxtJP のサイト・Cloudflare 配備方針

2026-10-11 のユーザー決定。NuxtHub は使用せず、`nuxt.jp` を公開ドメインとする。
保守正本は `nuxtjp/website` に統一する。`nuxt`、`nuxt.com`、`hello`、
`nuxtjp-site` はリポジトリごと廃止し、サイト用の別リポジトリを再作成しない。

## 現行のページ構成（2026-10-15）

| パス | 内容 |
|---|---|
| `/` | Nuxtの特徴、導入コマンド、NuxtJPの代表モジュール |
| `/docs/` | Nuxtの概要と公式情報への入口 |
| `/docs/getting-started/` | Node.js環境、プロジェクト作成、最初のVueページ |
| `/oss/` | 自組織のモジュール・関連ライブラリ、用途別絞り込み、検索、期間付きDL |
| `/oss/<id>/` | 各リポジトリの役割、README・配布元・利用情報 |
| `/docs/security/` | 運営主体、観測データ、プライバシー |
| `/oss/showcase.json` | 共通showcase/v1の公開データ |

日本語はprefixなし、英語は`/en/`。Nuxt全体の説明・公式モジュール一覧はnuxt.comへ案内し、自組織の成果と区別する。製品LPや独自データAPIの未実装pathを公開済みとして案内しない。

## 実装と共有

日英ルート、SEO、公開データの検証と個別リポジトリ詳細は公式registryの`@nuxtjp/localized-site`を使う。NuxtJPの複数ページ・モジュール検索・導入ガイドは`module-site/site/`に置き、`site/module.ts`が公開manifestからrouteとHTML/XML sitemapを生成する。Coelaや他組織のテーマを変更せず、共有schemaや新しいnpm packageを増やさない。

既存NJアイコンの紺・緑を軸に、開発者向けのコード例、導入、モジュール選択のUIとする。ソフトウェアとブランド素材のライセンスを分け、icon出典/hashは`module-site/public/brand/NOTICE.txt`で保持する。

共通公開feedをCoelaの全体集計でも利用する。DL観測の期間と取得元を維持し、未取得・期限切れを0にしない。閲覧時のregistry/GitHub認証やアクセス解析は追加しない。

## Cloudflare の配備

初期構成は単一の Worker と Workers Static Assets。現在の `nuxt.jp` が接続する
`nuxtjp-website` を移行対象とし、各モジュールは同一ドメインのパスで公開する。
紹介・ドキュメント・フィードを静的生成し、SSR/API が必要になった部分だけ
Worker に追加する。モジュールごとの Worker やサブドメインは初期には増やさない。

PR では content 検証・型検査・ビルドを行い、配備と分離する。直接配備は
固定した Wrangler で行い、GitHub environment 内の Cloudflare 資格情報を使用する。
成果物には source SHA・digest・ツール版を記録する。preview で確認後、
production の既存接続に配備し、直前の成果物/version を rollback 対象として保持する。
既存本番 Worker の内容を、この方針整理だけで置き換えない。

2026-10-11 10:33 UTC の read-only inventory は `nuxt.jp → nuxtjp-website` を確認した。
Worker の deployed source SHA は未照合。`hello.nuxt.jp` は DNS NXDOMAIN だったが、
Worker `hello` と custom domain 登録は残存していた。リポジトリ削除とは別に、
この不要な配備リソースを cleanup 対象として追跡する。

## 移行の順序

1. 紹介内容・license notice・必要な差分を保存し、廃止リポジトリを削除する。
2. 共通モジュールの dashboard/LP/theme/data 契約を拡張し、正式配布する。
3. `website` に新構成を実装し、既存ページの内容・URL を移行する。
4. Cloudflare の対象 account、既存 version、source SHA と CI の接続を確認する。
5. preview 検証・production 配備後、不要な旧アプリと `hello` の配備資産を整理する。

参考: [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)、
[Nuxt on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/more-web-frameworks/nuxt/)。
