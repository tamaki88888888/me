import LogoIcon from "@/components/ui-components/LogoIcon/index";
import React from "react";
import clsx from "../../../../../node_modules/clsx/clsx";

interface Props {}
/**
 * @memo ヘッダー
 */
const Header: React.FC<Props> = () => {
  return (
    <div
      className={clsx([
        "flex",
        "justify-between",
        "items-center",
        "h-[200px]",
        "p-5",
      ])}
    >
      <LogoIcon href="" src="" />

      <div className={"flex "}>
        <a href="/about">// about</a>
        <a href="/experience">// experience</a>
        <a href="/works">// works</a>
        <a href="/notes">// notes</a>
        <a href="/contact">// contact</a>
      </div>
    </div>
  );
};

export default Header;
