import LogoIcon from "@/components/ui-components/LogoIcon/index";
import React from "react";
import clsx from "clsx";

interface Props {}
/**
 * @description ヘッダー
 * @todo もし共有したい記事が増えてきたら、notesページへのリンク先を追加する
 */
const Header: React.FC<Props> = () => {
  return (
    <>
      <div className={"h-[200px]"} />
      <div
        className={clsx(
          ["flex", "justify-center"],
          ["fixed", "w-full", "top-0"]
        )}
      >
        <div
          className={clsx(
            ["flex", "justify-between", "items-center"],
            ["h-[200px]", "w-[720px]"]
          )}
        >
          <LogoIcon href="/" src="/svg/Logo.svg" />

          <div className={"flex gap-x-10"}>
            <a href="/about">About</a>
            <a href="/experience">Experience</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
