# Design Rules

## サイト全体

- **ダークテーマ固定**。背景は黒に近い暗色、文字は白（`text-white`）
- 背景はカラフルなラジアルグラデーション（`custom-background`）＋グリッド線（`background-border`）を重ねたもの
- カーソルストーカー（白い点＋白いリング）が追従する
- フォント・カラーは Tailwind のユーティリティクラスで指定、CSS 変数は使わない

## レイアウト

- `Layout` → `Background` + children
- `PageContainer` → `max-w-[720px] mx-auto` で中央寄せ
- メインページはラジアルメニュー（円状に広がるアイコン）が中央に配置される SPA 構成

## 記事ページ（`/notes/[slug]`）— 現状

```
Layout > PageContainer > div.flex.flex-col.gap-y-6.text-white
  ← Notes リンク（text-sm text-gray-400）
  日付（text-sm text-gray-400）
  タイトル（text-3xl）
  本文（prose prose-invert max-w-none）
```

- `@tailwindcss/typography` の `prose-invert` をそのまま使用
- **課題**: prose のデフォルトスタイルがサイトのデザインと合っていない（フォントサイズ・行間・見出し色など）

## 記事一覧（メインページ内 Blog パネル）

- 記事行: `border-b border-white/20`、タイトル `text-sm`、日付 `text-xs text-white/50`
- hover で `opacity-70`

## カラーパレット（現状使用中）

| 用途 | 値 |
|------|----|
| 本文 | `text-white` |
| サブテキスト・日付 | `text-gray-400` / `text-white/50` |
| ボーダー | `border-white/20` |
| 背景グラデーション | dodger blue / hot pink / cyan / lime / yellow / orange-red / purple |

## これから変えたいこと

- 記事本文（prose）の色味・フォントサイズ・行間をサイトのテーマに合わせてカスタマイズする
