import Card from "@/components/ui-components/Card";
import React from "react";
import ExperienceRowContainer from "../WorkExpeience/ExperienceRowContainer";

interface Props {
  during: string;
  title: string;
  detailList: Array<string>;
  href: string;
  skillList: Array<string>;
}
/**
 * @description workExperinece 展示用　Card
 * @wisper 自分のサービスはこういうpaperみたいなやつは card って呼ぼうかな...
 */
const WorkCard: React.FC<Props> = ({
  during,
  title,
  detailList,
  href,
  skillList,
}) => {
  return (
    <Card>
      <ExperienceRowContainer>
        <div>{during}</div>
        <div>
          <a href={href}>{title}</a>
          {detailList.map((detail) => (
            <p>{detail}</p>
          ))}
          {skillList.map((item) => (
            <p>item</p>
          ))}
        </div>
      </ExperienceRowContainer>
    </Card>
  );
};

export default WorkCard;
