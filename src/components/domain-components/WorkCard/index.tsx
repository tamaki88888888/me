import Card from "@/components/ui-components/Card";
import Tag from "@/components/ui-components/Tag";
import clsx from "clsx";
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
            <p key={detail}>{detail}</p>
          ))}
          <div className={clsx(["flex", "gap-4"])}>
            {skillList.map((item) => (
              <Tag key={item} name={item} />
            ))}
          </div>
        </div>
      </ExperienceRowContainer>
    </Card>
  );
};

export default WorkCard;
