# NuxtJP のサイト・Cloudflare 配備方針

2026-10-11 のユーザー決定。NuxtHub は使用せず、`nuxt.jp` を公開ドメインとする。
保守正本は `nuxtjp/website` に統一する。`nuxt`、`nuxt.com`、`hello`、
`nuxtjp-site` はリポジトリごと廃止し、サイト用の別リポジトリを再作成しない。

## ページ構成

| パス案 | 内容 |
| --- | --- |
| `/` | NuxtJP の紹介、代表モジュール、製品、最近のリリース |
| `/modules/` | OSS カタログ、配布元別ダウンロード指標、検索・絞り込み |
| `/modules/<id>/` | モジュール紹介、提供状態、導入方法、配布指標、Source/Docs |
| `/products/<id>/` | 製品 LP。課題、利用場面、機能、画面、提供状態、導入への導線 |
| `/docs/` | 導入・運用ガイドへの入口 |
| `/data/showcase.v1.json` | Coela などで再描画できる公開紹介データ |
| `/data/metrics.v1.json` | 集計期間・取得日時・取得元を伴う公開指標 |

モジュールの例は `ui`、`local-runtime`、`localized-site`、`provider-auth`、
`dependency-security`。URL と npm 名は対応表で管理し、サイト ID を
リポジトリ名と同一視しない。これらのパスとフィードは実装予定であり、現在の公開ルートではない。
日本語・英語を維持し、上流 Nuxt の説明・配布実績は自組織の成果と区別する。

## 実装と共有

各モジュールの正本から、公開可能な紹介・ライセンス・配布先を対応付けて収集する。
サイトの JSON は紹介内容、指標、許可した表示部品と順序を宣言する。
共通のページ、部品、翻訳、SEO、テーマ機構は `@nuxtjp/localized-site` 側で拡張する。
現行版は固定構成であり、ダッシュボード・任意 LP・テーマ切替は未実装。
パッケージ改名はこの決定に含めず、拡張版を正式配布してからサイトで参照する。
ローカル配布物やフォークした Nuxt を本番依存として復活させない。

Coela は公開フィードを自身のテーマで描画し、各モジュールの正本ページへのリンクを残す。
公開フィードは内部の管理台帳とは分離する。初期は静的生成を優先し、統計取得は
CI で実行する。閲覧時に GitHub/registry の認証情報を使わない。
npm・crates.io の期間別取得回数と GitHub Release asset の累計は別指標とし、
未公開・取得失敗をゼロにしない。取得日時と前回値の状態を表示する。

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
