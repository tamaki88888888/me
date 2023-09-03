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
        <div className={clsx(["flex", "flex-col", "gap-y-2"])}>
          <div>
            <a href={href}>{title}</a>
          </div>
          <div>
            <ul>
              {detailList.map((detail) => (
                <li key={detail}>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
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
