import { PROJECTS } from "@/domain/user/constant";
import clsx from "clsx";
import React from "react";
import WorkCard from "./WorkCard";

interface Props {}
/**
 * @memo Worksページにて、個人開発内容(仕事内容)を表示するコンポーネント
 * @memo 書いてて、workと個人開発が曖昧になってる気がする。workをprojectに差し替え
 */
const WorkList: React.FC<Props> = () => {
  const projectList = Object.values(PROJECTS);

  return (
    <>
      <div className={clsx(["flex", "justify-center", "flex-wrap", "gap-10"])}>
        {projectList.map((project) => (
          <WorkCard project={project} />
        ))}
        <div className={"w-[300px] h-[300px]"} />
      </div>
    </>
  );
};

export default WorkList;
