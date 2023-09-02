import { useSpring } from "react-spring";
//useSpringはより複雑な動きを表現することに使える
import { Mouse, useMouseMove, useMouseOut, useMouseOver } from "./mouseEvent";

/**
 * @description ??
 * @param frequency ??
 * @param damping ??
 * @returns
 */
export type SpringConfig = {
  frequency: number;
  damping: number;
};

/**
 * @description springValueを値にもつプロパティーの集合体を返却する
 * @param initMouse マウスの位置情報
 * @param mouseConfig
 * @returns
 */
const useMouseStalker = (
  initMouse: Mouse,
  mouseConfig: SpringConfig,
  titmes: number
) => {
  const [springStyles, setSpringStyles] = useSpring(() => ({
    to: initMouse,
    config: mouseConfig,
  }));

  //listnerMouseMove とかが正しくない？
  useMouseMove(initMouse, setSpringStyles, 2);
  useMouseOver(initMouse, setSpringStyles, titmes, "a");
  useMouseOut(initMouse, setSpringStyles, titmes, "a");

  return springStyles;
};

export default useMouseStalker;
