# Tasks

## markdown の色味変更

記事詳細ページ（`/notes/[slug]`）の markdown レンダリングにスタイルが当たっていない。

### 現状
- `src/pages/notes/[slug].tsx` で `prose prose-invert` クラスを使用
- しかし `@tailwindcss/typography` が未インストールのため prose スタイルが効いていない
- `globals.css` は Tailwind v4 (`@import "tailwindcss"`)

### やること
- [ ] `@tailwindcss/typography` をインストール
- [ ] Tailwind v4 向けに typography プラグインを設定（`globals.css` に `@plugin "@tailwindcss/typography"` を追加）
- [ ] 色味をサイトのテーマ（ダーク背景・白文字）に合わせてカスタマイズ
  - 見出し（h1〜h3）
  - 本文
  - コードブロック
  - リンク
  - 画像
- [ ] ローカルで確認 → push → Vercel でビルド確認
