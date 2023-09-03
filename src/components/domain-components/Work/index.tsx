import { PROJECTS } from "@/domain/user/constant";
import clsx from "clsx";
import React from "react";
import WorkCard from "./WorkCard";

/**
 * @memo work が個人の活動リスト
 * @todo work workExperience project がごっちゃになってるのでその辺り整理する
 * @todo workCardが二つ存在する
 */
const WorkList: React.FC = () => {
  const projectList = Object.values(PROJECTS);

  return (
    //TODO: padding32pxは極力同じものをpageコンポーネントに適用したい
    <div className={"pb-8"}>
      <div className={clsx(["flex", "justify-center", "flex-wrap", "gap-10"])}>
        {projectList.map((project) => (
          <WorkCard {...project} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
