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

let isOver: boolean | undefined = undefined;

/**
 * @description 発火時にセットしたい関数にセットしたい引数をセットする関数
 * @param setSpringStyles 発火時にセットしたい関数
 * @param initMouse 発火時にセットしたい関数にセットしたい引数
 */
const useMouseMove = (
  initMouse: Mouse,
  setSpringStyles: SpringRef<Mouse>,
  times: number
) => {
  useEffect(() => {
    //listerの内容を即時関数を変数に入れる
    const listener = (e: MouseEvent) => {
      if (isOver) {
        setSpringStyles.start({
          opacity: 100,
          // initMouse.* / 2 は真ん中合わせ
          top: e.y - initMouse.height / (2 / times),
          left: e.x - initMouse.width / (2 / times),
        });
      } else {
        setSpringStyles.start({
          opacity: 100,
          // initMouse.* / 2 は真ん中合わせ
          top: e.y - initMouse.height / 2,
          left: e.x - initMouse.width / 2,
        });
      }
    };

    window.addEventListener("mousemove", listener);

    // EventListenerを追加したら、クリーンアップ関数で忘れずにremoveする(戒め
    return () => {
      window.removeEventListener("mousemove", listener);
    };
  }, [setSpringStyles, initMouse]);
};

/**
 * @description 引数で選択した要素にマウスオーバーした際にアニメーションを付与する
 * @param setSpringStyles セッター
 * @param initMouse 初期値
 * @param times 倍率
 * @param tag ホバー対象要素
 */
const useMouseOver = (
  initMouse: Mouse,
  setSpringStyles: SpringRef<Mouse>,
  times: number,
  tag: string
) => {
  useEffect(() => {
    /**
     * @description ①イベントリスナーを追加する要素の設定
     */
    const elements = document.querySelectorAll(tag);
    /**
     * @description ②ハンドラ（イベントリスナが発火した時に実行される関数）
     */
    const listener = () => {
      setSpringStyles.start({
        width: initMouse.width * times,
        height: initMouse.height * times,
        borderRadius: initMouse.borderRadius * times,
      });
      isOver = true;
    };

    /**
     * @description ③DOM要素に対してイベントリスナーを登録
     */
    elements.forEach((element) => {
      element.addEventListener("mouseover", listener);
    });

    /**
     * @description 　④登録解除
     */
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseover", listener);
      });
    };
  }, []);
};

/**
 * @description 引数で選択した要素からマウスアウトした際にアニメーションを付与する
 * @param setSpringStyles セッター
 * @param initMouse 初期値
 * @param times 倍率
 * @param tag ホバー対象要素
 */
const useMouseOut = (
  initMouse: Mouse,
  setSpringStyles: SpringRef<Mouse>,
  times: number,
  tag: string
) => {
  useEffect(() => {
    /**
     * @description ①イベントリスナーを追加する要素の設定
     */
    const elements = document.querySelectorAll(tag);

    /**
     * @description ②ハンドラ（イベントリスナが発火した時に実行される関数）
     */
    const listener = () => {
      setSpringStyles.start({
        width: initMouse.width,
        height: initMouse.height,
        borderRadius: initMouse.borderRadius,
      });
      isOver = false;
    };

    /**
     * @description ③DOM要素に対してイベントリスナーを登録
     */
    elements.forEach((element) => {
      element.addEventListener("mouseover", listener);
    });

    /**
     * @description 　④登録解除
     */
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseover", listener);
      });
    };
  }, []);
};

export { useMouseMove, useMouseOver, useMouseOut };
