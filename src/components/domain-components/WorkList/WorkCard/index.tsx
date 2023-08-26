import { Project } from "@/domain/user/model";
import clsx from "clsx";
import React from "react";

interface Props {
  project: Project;
}
/**
 * @memo 一つ一つのwork内容を表現する
 */
const WorkCard: React.FC<Props> = ({ project }) => {
  return (
    <>
      <div
        className={clsx(["bg-white"], ["w-[300px]", "h-[300px]", "rounded-lg"])}
      ></div>
    </>
  );
};

export default WorkCard;
