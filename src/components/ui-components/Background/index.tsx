import React from "react";
import clsx from "clsx";

/**
 * @description 背景UIを表現するコンポーネント
 */
const Background: React.FC = () => {
  return (
    <div>
      <div
        className={clsx(
          ["absolute", "-z-10"],
          ["h-screen", "w-full"],
          ["custom-background"]
        )}
      />
      <div className={"background-border"} />
    </div>
  );
};

export default Background;
