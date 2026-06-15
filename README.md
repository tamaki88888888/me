# me

個人サイト。ラジアルメニューの SPA + ノート機能。

## ディレクトリ構成

```
~/life/me/
├── app/              ← このリポジトリ（Next.js プロジェクト）
│   ├── src/          ← ソースコード
│   ├── data/notes/   ← 記事 Markdown ファイル
│   ├── public/notes/ ← 記事内の画像
│   └── docs/adr/     ← 設計記録
├── data/
│   └── notes → app/data/notes  ← symlink（どちらからでも編集可）
└── resume/           ← 別プロジェクト（レジュメ生成）
```

## 開発

```bash
cd ~/life/me/app
npm run dev
```

## 記事を書く

`data/notes/` に Markdown ファイルを作成する（`~/life/me/data/notes/` も symlink で同じ場所）。

```yaml
---
title: タイトル
date: "2026-01-01"
description: 説明文
published: true   # false だと非公開
---
```

画像は `public/notes/` に置いて `/notes/filename.png` で参照する。

## デプロイ

`main` ブランチへの push で Vercel が自動デプロイ。
