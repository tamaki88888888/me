import LogoIcon from "@/components/ui-components/LogoIcon/index";
import React from "react";
import clsx from "clsx"; // node_module内にあるものをパス指定しようとしても vscodeが解決してくれないみたいなので、模索中

interface Props {}
/**
 * @description ヘッダー
 * @todo アイコンのhref src 持ってくる
 * @todo レイアウト整える
 */
const Header: React.FC<Props> = () => {
  return (
    <div className={clsx(["flex", "justify-center"])}>
      <div
        className={clsx(
          ["flex", "justify-between", "items-center"],
          ["h-[200px]", "w-[720px]"]
        )}
      >
        <LogoIcon href="/" src="/svg/Logo.svg" />

        <div className={"flex gap-x-10"}>
          <a href="/about">// about</a>
          <a href="/experience">// experience</a>
          <a href="/works">// works</a>
          <a href="/notes">// notes</a>
          <a href="/contact">// contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
