import { EXPERIENCES, SIDE_WORKS } from "@/domain/user/constant";
import React from "react";
import ExperienceRowContainer from "./ExperienceRowContainer";

interface Props {}
/**
 * @memo 個人情報(仕事内容)を表示するコンポーネント
 */
const WorkExpeience: React.FC<Props> = () => {
  const experienceList = Object.values(EXPERIENCES);
  const sideWorksList = Object.values(SIDE_WORKS);

  return (
    <>
      <ExperienceRowContainer>
        {experienceList.map(({ NAME, DETAIL, DURING, SKILL, WEB_SITE }) => (
          <>
            <p>{DURING}</p>
            <div>
              <a href={WEB_SITE}>{NAME}</a>
              <p>{DETAIL}</p>
              <p>{SKILL}</p>
            </div>
          </>
        ))}
      </ExperienceRowContainer>

      <h3>side project</h3>
      <ExperienceRowContainer>
        {sideWorksList.map(({ NAME, DETAIL, DURING, SKILL, WEB_SITE }) => (
          <>
            <p>{DURING}</p>
            <div>
              <a href={WEB_SITE}>{NAME}</a>
              <p>{DETAIL}</p>
              <p>{SKILL}</p>
            </div>
          </>
        ))}
      </ExperienceRowContainer>
    </>
  );
};

export default WorkExpeience;
