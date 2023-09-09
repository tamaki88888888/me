import LogoIcon from "@/components/ui-components/LogoIcon/index";
import React from "react";
import clsx from "clsx";

const HEADER_H = 160;
const classHeaderHeight = "h-[" + HEADER_H + "px]";

/**
 * @description ヘッダー
 * @todo もし共有したい記事が増えてきたら、notesページへのリンク先を追加する
 */
const Header: React.FC = () => {
  return (
    <>
      <div className={clsx(classHeaderHeight)} />
      <div
        className={clsx(
          ["flex", "justify-center"],
          ["fixed", "w-full", "top-0"],
          ["bg-[#26262600]", "backdrop-blur"],
          "z-10"
        )}
      >
        <div
          className={clsx(
            ["flex", "justify-between", "items-center"],
            [classHeaderHeight, "w-[720px]"]
          )}
        >
          <LogoIcon href="/" src="/svg/Logo.svg" />

          <div className={"flex gap-x-10"}>
            <a href="/about">About</a>
            <a href="/experience">Experience</a>
            <a href="/work">Work</a>
            <a
              href="https://tamaki88888888.github.io/docs/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
