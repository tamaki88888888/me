import clsx from "clsx";
import React from "react";

interface Props {
  name: string;
}

const Tag: React.FC<Props> = ({ name }) => {
  return (
    <span
      className={clsx(
        ["border", "border-white"],
        ["px-4", "py-2"],
        "rounded-3xl",
        "min-w-[30px]"
      )}
    >
      {name}
    </span>
  );
};

export default Tag;
