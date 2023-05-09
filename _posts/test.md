---
title: 'Next.js+TypeScriptでブログ作ってみた'
excerpt: 'Next.js+TypeScriptでブログを作って、Vercelにデプロイした'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2023-05-09T15:25:00.000Z'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

勉強のため、Next.js+TypeScriptでブログを実装し、Vercel を使って公開してみた（この記事はテスト投稿の一環）。

## ブログ実装

Next.js の[Blog Starter Kit](https://vercel.com/templates/next.js/blog-starter-kit)を基にしている。
不要な部分を削除し、ブログトップのヘッダーからリンク集に飛べるようにしただけ

## Vercelへのデプロイ

[Next.js の記事](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)に従って簡単にデプロイできた。
GitHub に置いているブログのレポジトリと連携させているので、main ブランチにpushしたタイミングでデプロイが自動的に行われる。
