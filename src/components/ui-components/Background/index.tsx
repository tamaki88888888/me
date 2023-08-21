import React from "react";
import LogoIcon from "../LogoIcon/index";

interface Props {}
/**
 * @description 背景UIを表現するコンポーネント
 * @todo アイコンのhref src 持ってくる
 * @todo レイアウト整える
 */
const Background: React.FC<Props> = () => {
  return (
    <div className={"flex"}>
      <LogoIcon href="" src="" />
      <div className={"flex"}>
        <a href="/about">// about</a>
        <a href="/experience">// experience</a>
        <a href="/works">// works</a>
        <a href="/notes">// notes</a>
        <a href="/contact">// contact</a>
      </div>
    </div>
  );
};

export default Background;
