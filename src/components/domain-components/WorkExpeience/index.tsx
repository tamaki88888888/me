import { EXPERIENCES, SIDE_WORKS } from "@/domain/user/constant";
import clsx from "clsx";
import React from "react";
import ExperienceRowContainer from "./ExperienceRowContainer";

interface Props {}
/**
 * @memo work experinece
 */
const WorkExpeience: React.FC<Props> = () => {
  const experienceList = Object.values(EXPERIENCES);
  const sideWorksList = Object.values(SIDE_WORKS);

  return (
    <>
      {experienceList.map(({ NAME, DETAIL, DURING, SKILL, WEB_SITE }) => (
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
          <ExperienceRowContainer>
            <p>{DURING}</p>
            <div>
              <a href={WEB_SITE}>{NAME}</a>
              <p>{DETAIL}</p>
              <p>{SKILL}</p>
            </div>
          </ExperienceRowContainer>
        </div>
      ))}

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
