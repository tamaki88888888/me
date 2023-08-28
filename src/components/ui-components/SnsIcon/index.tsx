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
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={"logo"} width={20} height={20} />
    </a>
  );
};

export default SnsIcon;
