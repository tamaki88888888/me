import React from "react";
import Image from "../../../../node_modules/next/image";

interface Props {
  href: string;
  src: string;
}

/**
 * @memo ロゴを表示するためのアイコン
 */
const LogoIcon: React.FC<Props> = ({ href, src }) => {
  return <Image src={src} alt={"logo"} width={100} height={100} />;
};

export default LogoIcon;
