import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * @memo 個人情報(仕事内容)を表示するコンポーネント
 * @todo コピペー部分の検討 n delete
 */
export const ExperienceRowContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={clsx(
        // "m-auto",
        "grid",
        "grid-cols-[1fr_3fr]"
        // "sm:gap-x-1",
        // "justify-center",
        // "items-center"
      )}
    >
      {children}
    </div>
  );
};

export default ExperienceRowContainer;
