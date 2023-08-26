import clsx from "clsx";
import React from "react";
import Image from "../../../../node_modules/next/image";

interface Props {
  src: string;
}
/**
 * @memo ABOUTページのサムネイルに利用
 * @todo サムネイル、SNS、LOGOは似たようなコンポーネントなので、共通化するか検討する
 */
const Thumbnail: React.FC<Props> = ({ src }) => {
  const diameter = 150;

  return (
    <span className={clsx("relative", `w-[${diameter}px]`)}>
      <div>
        <Image
          className={clsx("rounded-full", "p-2")}
          src={src}
          alt={"thumbnail"}
          width={diameter}
          height={diameter}
        />
      </div>

      {/* インスタっぽいリング */}
      <div className={clsx("absolute", "top-0", "animate-rotate-center")}>
        <Image
          className={"rounded-full"}
          src={"/svg/color-ring.svg"}
          alt={"color-ring"}
          width={diameter}
          height={diameter}
        />
      </div>
    </span>
  );
};

export default Thumbnail;
