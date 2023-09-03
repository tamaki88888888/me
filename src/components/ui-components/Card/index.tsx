import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * @memo hover時にアニメーションがついた paper のようなもの
 */
export const Card: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={clsx(
        "rounded-md",
        "hover:shadow-md",
        "hover:bg-[#7d7d7d12]",
        "border-t-[1px]",
        "border-[transparent]",
        "hover:border-[#c3c3c31a]",
        "hover:border-opacity-40",
        "transition-all"
      )}
    >
      <div className={"p-4"}>{children}</div>
    </div>
  );
};

export default Card;
