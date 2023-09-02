import { useEffect } from "react";
import { SpringRef } from "react-spring";

export type Mouse = {
  width: number;
  height: number;
  borderRadius: number;
  opacity: number;
  top: number;
  left: number;
};

/**
 * @description 発火時にセットしたい関数にセットしたい引数をセットする関数
 * @param setSpringStyles 発火時にセットしたい関数
 * @param initMouse 発火時にセットしたい関数にセットしたい引数
 */
const useMouseMove = (initMouse: Mouse, setSpringStyles: SpringRef<Mouse>) => {
  useEffect(() => {
    //listerの内容を即時関数を変数に入れる
    const listener = (e: MouseEvent) => {
      setSpringStyles.start({
        opacity: 100,
        // initMouse.* / 2 は真ん中合わせ
        top: e.y - initMouse.height / 2,
        left: e.x - initMouse.width / 2,
      });
    };

    window.addEventListener("mousemove", listener);

    // EventListenerを追加したら、クリーンアップ関数で忘れずにremoveする(戒め
    return () => {
      window.removeEventListener("mousemove", listener);
    };
  }, [setSpringStyles, initMouse]);
};

export { useMouseMove };
