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
          <Image
            className={clsx("h-[160px]", "object-cover")}
            src={thumbnail}
            width={300}
            height={300}
            alt={name}
          />
        </div>

        {/* 右 */}
        <div>
          <div className={clsx(["flex", "flex-col", "gap-y-2"])}>
            <div>
              <a href={href}>{name}</a>
              {/* <span className={"opacity-5"}>{during}</span> */}
            </div>
            <div>
              <ul className={"min-h-[70px]"}>
                {detailList.map((detail) => (
                  <li key={detail}>
                    <p className={clsx("text-[#8c8c8c]", "text-sm")}>
                      {detail}
                    </p>
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
