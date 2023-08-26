import React from "react";
import Image from "../../../../node_modules/next/image";

interface Props {
  href: string;
  src: string;
}

/**
 * @memo ポートフォリオでよく見かける個人のSNSに遷移するアイコン
 */
const SnsIcon: React.FC<Props> = ({ href, src }) => {
  return (
    <span>
      <a href={href}>
        <Image src={src} alt={"logo"} width={20} height={20} />
      </a>
    </span>
  );
};

export default SnsIcon;
