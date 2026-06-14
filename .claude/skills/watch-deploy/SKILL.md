---
name: watch-deploy
description: main にマージ・push した後、Vercel のビルドが READY になるまで監視して結果を通知する。「デプロイ見ておいて」「ビルド通るまで watch して」「リリース後の確認して」のような指示で使う。
---

# watch-deploy

main への push 後、Vercel デプロイの完了（READY または ERROR）まで監視して結果を報告する。

## 前提情報

- Vercel プロジェクト名: `me`
- teamId: `tamaki88888888`（個人アカウントのスラッグ）
- 監視対象: `target: production` かつ最新の deployment

## 手順

### 1. 最新のデプロイを取得

`mcp__plugin_vercel_vercel__list_deployments` で projectId=`me`, teamId=`tamaki88888888` を呼び、
リストの先頭（最新）のデプロイ ID を取得する。

### 2. ステータスを確認

`mcp__plugin_vercel_vercel__get_deployment` で取得した ID のステータスを確認する。

| state | 意味 |
|-------|------|
| `QUEUED` / `BUILDING` / `INITIALIZING` | まだビルド中 |
| `READY` | 成功 |
| `ERROR` | 失敗 |
| `CANCELED` | キャンセル |

### 3. ループ監視

- ステータスが `QUEUED` / `BUILDING` / `INITIALIZING` の間は `ScheduleWakeup` で **60秒後** に再確認するよう設定して待機する。
- ユーザーには「ビルド中です、完了したら通知します」と一言伝える。

### 4. 結果を報告

**READY の場合:**
```
ビルド成功しました。
URL: https://<deployment-url>
inspectorUrl: <inspectorUrl>
```

**ERROR の場合:**
1. `mcp__plugin_vercel_vercel__get_deployment_build_logs` でログを取得（limit: 100）
2. エラー原因を特定して報告
3. 修正が必要な箇所を具体的に提示する

```
ビルドが失敗しました。
原因: <エラー内容>
対処: <修正方法>
```

## 注意

- `ScheduleWakeup` を使うときは `/watch-deploy` を prompt に渡して再起動できるようにする
- ループ監視は最大 10 回（約 10 分）まで。それを超えたらユーザーに手動確認を促す
- ビルドログが長い場合は重要な部分だけ抜粋して伝える
