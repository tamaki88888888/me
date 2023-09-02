import React, { useEffect } from "react";

interface Props {
  title: string;
}

/**
 * @deprecated というか学習用コンポーネントなので、cursorchaserreactspringを使う。
 * @todo 削除 or studyディレクトリに移動
 */
const CursorChaser: React.FC<Props> = () => {
  useEffect(() => {
    //マウスストーカー用のdivを取得
    const stalker = document.getElementById("stalker");
    const stalker2 = document.getElementById("stalker2");

    //上記のdivタグをマウスに追従させる処理
    document.addEventListener("mousemove", function (e) {
      if (stalker) {
        stalker.style.transform =
          "translate(" + e.clientX + "px, " + e.clientY + "px)";
      }
      if (stalker2) {
        stalker2.style.transform =
          "translate(" + e.clientX + "px, " + e.clientY + "px)";
      }
    });
  }, []);

  return (
    <>
      <div id="stalker"></div>
      <div id="stalker2"></div>
    </>
  );
};

export default CursorChaser;
