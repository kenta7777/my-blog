---
title: 'Next.js+TypeScriptでブログ作ってみた'
excerpt: 'Next.js+TypeScriptでブログを作って、Vercelにデプロイした'
date: '2023-05-09T15:25:00.000Z'
---

勉強のため、Next.js+TypeScript でブログを実装し、Vercel を使って公開してみた（この記事はテスト投稿の一環）。

## ブログ実装

Next.js の[Blog Starter Kit](https://vercel.com/templates/next.js/blog-starter-kit)を基にしている。
不要な部分を削除し、ブログトップのヘッダーからリンク集に飛べるようにしただけ

## Vercelへのデプロイ

[Next.js の記事](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)に従って簡単にデプロイできた。
GitHub に置いているブログのレポジトリと連携させているので、main ブランチにpushしたタイミングでデプロイが自動的に行われる。

## 展望

Markdownの記事をブログで表示するという最低限の機能しか実装できていないため、以下の機能を今後実装する予定。

- Markdownプレビュー不具合修正（コードブロック、箇条書き等）
- About（自己紹介）画面実装
- [App Router](https://nextjs.org/docs/app)での実装
- ダークモード
- タグ
- 検索
