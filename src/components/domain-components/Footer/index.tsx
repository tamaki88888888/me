import React from "react";
import clsx from "clsx";
import SnsIconGloup from "../SnsIconGloup";

interface Props {}
/**
 * @description ヘッダー
 * @todo もし共有したい記事が増えてきたら、notesページへのリンク先を追加する
 */
const Footer: React.FC<Props> = () => {
  return (
    <>
      <div
        className={clsx(
          ["flex", "justify-center"],
          ["fixed", "w-full", "bottom-0"]
        )}
      >
        <div
          className={clsx(
            ["flex", "justify-between", "items-center"],
            ["h-[200px]", "w-[720px]"]
          )}
        >
          <SnsIconGloup />
        </div>
      </div>
    </>
  );
};

export default Footer;
