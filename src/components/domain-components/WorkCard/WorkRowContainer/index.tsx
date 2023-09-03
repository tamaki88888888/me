import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * @todo ExperienceRowContainer と分ける必要があったか、共通化できるかどうかの検討
 */
export const WorkRowContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className={clsx("grid", "grid-cols-[1fr_2fr]", "gap-4")}>
      {children}
    </div>
  );
};

export default WorkRowContainer;
