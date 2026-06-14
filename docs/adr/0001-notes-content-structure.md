# ADR 0001: 記事コンテンツの管理構造

## 状態

採用済み（2026-06-15）

## 背景

個人サイト（me リポジトリ）に Notes 機能を追加するにあたり、markdown ファイルと画像をどこに置くかを決める必要があった。

## 決定

- **markdown ファイル** → `data/notes/*.md`
- **画像** → `public/notes/` （Next.js の static serving を使う）
- `src/lib/notes.ts` が `data/notes/` を読み、`published: true` の記事だけを表示する

## 記事を書くときのチェックリスト

1. `data/notes/` に `<slug>.md` を作成
2. frontmatter を記載する

   ```yaml
   ---
   title: タイトル
   date: "YYYY-MM-DD"
   description: 一行説明
   published: false   # 公開するときに true に変える
   ---
   ```

3. 画像は `public/notes/` に置いて、markdown 内では `/notes/ファイル名` で参照する
4. 公開するときは `published: true` に変更してコミット・push

## 却下した選択肢

- `data/notes/` を `app/` の外に置く → git 管理できないため却下
- `public/notes/` に markdown ごと置く → Next.js のファイルシステム API と相性が悪いため却下
