# Cloudflare Pages setup

Cloudflare Pages で `portfolio.meggumi.com` を公開し、Pages Functions で Basic 認証をかけるための手順です。

## 1. Pages プロジェクトを作成する

Cloudflare Dashboard で `Workers & Pages` を開き、GitHub 連携からこのリポジトリを選択します。

設定値:

| 項目 | 値 |
| --- | --- |
| Project name | `gumigumih-portfolio` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |

作成後、Production URL が `*.pages.dev` になっていることを確認します。この URL は Cloudflare Pages の標準URLとして残ります。

## 2. Basic 認証の secret を設定する

Pages プロジェクトの `Settings` > `Variables and Secrets` で、以下を production / preview の両方に設定します。

| Name | Type | 備考 |
| --- | --- | --- |
| `BASIC_AUTH_USERNAME` | Secret | Basic 認証のユーザー名 |
| `BASIC_AUTH_PASSWORD` | Secret | Basic 認証のパスワード |
| `BASIC_AUTH_REALM` | Text | 任意。未設定なら `Portfolio` |

`BASIC_AUTH_USERNAME` と `BASIC_AUTH_PASSWORD` が未設定の場合、公開されないように `500` を返します。

## 3. カスタムドメインを確認する

Pages プロジェクトの `Custom domains` に、以下が追加されていることを確認します。

```text
portfolio.meggumi.com
```

`portfolio.meggumi.com` だけを使う場合、`meggumi.com` 全体の nameserver を Cloudflare に変更する必要はありません。

AWS Route 53 で `portfolio.meggumi.com` の CNAME を Cloudflare Pages の標準URLへ向けます。

| Type | Name | Content |
| --- | --- | --- |
| CNAME | `portfolio` | `<your-pages-project>.pages.dev` |

Cloudflare Pages では、DNS レコードだけを先に手動追加せず、必ず Pages プロジェクト側の `Custom domains` からドメインを関連付けます。関連付けなしで CNAME だけを向けると、Cloudflare 側で `522` になることがあります。

## 4. デプロイを確認する

Cloudflare Pages の Git連携を使うため、`main` へ push すると Cloudflare 側で自動デプロイされます。

デプロイ後、`portfolio.meggumi.com` と `*.pages.dev` の両方で Basic 認証ダイアログが出ることを確認します。

期待される状態:

| 表示 | 意味 |
| --- | --- |
| Basic 認証ダイアログが出る | 正常 |
| `Basic auth is not configured` | secret 名か Production 環境設定が違う |
| 認証なしでサイトが見える | `functions/_middleware.js` がまだデプロイに含まれていない |

## 5. GitHub Pages から移行する場合

このリポジトリには GitHub Pages 用の `CNAME` が残っています。

```text
portfolio.meggumi.com
```

Cloudflare Pages の配信ではこのファイルは使いません。GitHub Pages を完全に使わなくなったタイミングで削除してかまいません。

GitHub Pages 用の workflow は削除済みです。Cloudflare Pages は GitHub 連携で `main` への push を検知して自動デプロイします。

## 6. ローカル確認

Wrangler を使うと Pages Functions を含めてローカル確認できます。

```sh
cp .dev.vars.example .dev.vars
npm run build
npx wrangler pages dev dist
```

`.dev.vars` には本物のユーザー名とパスワードを書きます。このファイルは git 管理しません。
