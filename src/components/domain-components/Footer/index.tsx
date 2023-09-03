import React from "react";
import clsx from "clsx";
import SnsIconGloup from "../SnsIconGloup";

/**
 * @description フッター
 */
const Footer: React.FC = () => {
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
