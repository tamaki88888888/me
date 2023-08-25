import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 元の画像のURLと新しい幅・高さを指定
    const originalImageUrl = "/test.png";
    const newWidth = 3000;
    const newHeight = 3000;

    // 画像を読み込む
    const img = new Image();
    img.src = originalImageUrl;

    console.log("実行された？");

    // 画像が読み込まれた後の処理
    img.onload = function () {
      // 新しいキャンバスを作成
      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;

      // コンテキストを取得
      const ctx = canvas.getContext("2d");

      // 元の画像を新しいサイズにリサイズして描画
      ctx && ctx.drawImage(img, 0, 0, newWidth, newHeight);

      // リサイズ後の画像を表示（例: ページ内の要素に追加）
      document.body.appendChild(canvas);

      // リサイズ後の画像を画像ファイルとして保存
      const resizedImageUrl = canvas.toDataURL("image/jpeg"); // または 'image/png'

      // ダウンロード用のリンクを作成
      const downloadLink = document.createElement("a");
      downloadLink.href = resizedImageUrl;
      downloadLink.download = "resized_image.jpg"; // ファイル名を設定

      // リンクをクリックしてダウンロードをトリガー
      downloadLink.click();
    };
  });
  return (
    <div>
      <div>top</div>
    </div>
  );
}
