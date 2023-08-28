import { Project } from "@/domain/user/model";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = Project;

/**
 * @memo 一つ一つのwork内容を表現する
 */
const WorkCard: React.FC<Props> = ({ href, thumbnail, name }) => {
  return (
    <a href={href}>
      <div
        className={clsx("relative", [
          "w-[300px]",
          "h-[300px]",
          "rounded-lg",
          "overflow-hidden",
        ])}
      >
        <Image src={thumbnail} width={300} height={300} alt={name} />
        <div
          className={clsx(
            ["w-[300px]", "h-[300px]"],
            ["absolute", "top-0"],
            ["opacity-0 hover:opacity-100"],
            "bg-[#3d3d3d54]",
            ["flex", "justify-center", "items-center"]
          )}
        >
          <p className={"text-white"}>{name}</p>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
