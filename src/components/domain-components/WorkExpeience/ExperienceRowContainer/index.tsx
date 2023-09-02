import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * @memo 個人情報(仕事内容)を表示するコンポーネント
 */
export const ExperienceRowContainer: React.FC<Props> = ({ children }) => {
  return <div className={clsx("grid", "grid-cols-[1fr_3fr]")}>{children}</div>;
};

export default ExperienceRowContainer;
