import { EXPERIENCES, SIDE_WORKS } from "@/domain/user/constant";
import React from "react";
import WorkCard from "../WorkCard";

/**
 * @memo work experinece が 仕事経験
 */
const WorkExpeience: React.FC = () => {
  const experienceList = Object.values(EXPERIENCES);
  const sideWorksList = Object.values(SIDE_WORKS);

  return (
    <div className={"pb-8"}>
      {experienceList.map(({ NAME, DETAIL, DURING, SKILL, WEB_SITE }) => (
        <WorkCard
          key={NAME}
          during={DURING}
          title={NAME}
          detailList={DETAIL}
          href={WEB_SITE}
          skillList={SKILL}
        />
      ))}

      <h3>side project</h3>

      {sideWorksList.map(({ NAME, DETAIL, DURING, SKILL, WEB_SITE }) => (
        <WorkCard
          key={NAME}
          during={DURING}
          title={NAME}
          href={WEB_SITE}
          detailList={DETAIL}
          skillList={SKILL}
        />
      ))}
    </div>
  );
};

export default WorkExpeience;
