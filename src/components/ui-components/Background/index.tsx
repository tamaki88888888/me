import React from "react";
import clsx from "clsx";

interface Props {}
/**
 * @description 背景UIを表現するコンポーネント
 */
const Background: React.FC<Props> = () => {
  return (
    <div
      className={clsx("absolute", "h-screen", "w-full", "custom-background")}
    >
      Background
    </div>
  );
};

export default Background;
