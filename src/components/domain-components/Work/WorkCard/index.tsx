import Card from "@/components/ui-components/Card";
import Tag from "@/components/ui-components/Tag";
import { Project } from "@/domain/user/model";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import WorkRowContainer from "../../WorkCard/WorkRowContainer";

type Props = Project;

/**
 * @memo 一つ一つのwork内容を表現する
 */
const WorkCard: React.FC<Props> = ({
  href,
  thumbnail,
  name,
  skillList,
  detailList,
  during,
}) => {
  return (
    <Card>
      <WorkRowContainer>
        {/* 左 */}
        <div>
          <Image src={thumbnail} width={300} height={300} alt={name} />
        </div>

        {/* 右 */}
        <div>
          <div>{during}</div>
          <div className={clsx(["flex", "flex-col", "gap-y-2"])}>
            <div>
              <a href={href}>{name}</a>
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
        </div>
      </WorkRowContainer>
    </Card>
  );
};

export default WorkCard;
