import SnsIcon from "@/components/ui-components/SnsIcon/index";
import { SNS } from "@/domain/user/constant";
import React from "react";

interface Props {
  display?: "flex";
}

const SNS_ICON_PROP_LIST: Array<React.ComponentProps<typeof SnsIcon>> = [
  { href: SNS.GITHUB.URL, src: "/svg/github-icon.svg" },
  {
    href: SNS.INSTAGRAM.URL,
    src: "/svg/instagram-icon.svg",
  },
  { href: SNS.X.URL, src: "/svg/twitter-icon.svg" },
];

/**
 * @memo SNSICONのリストを表示するためのコンポーネント
 */
const SnsIconGloup: React.FC<Props> = () => {
  return (
    <div>
      {SNS_ICON_PROP_LIST.map(({ href, src }) => (
        <SnsIcon href={href} src={src} />
      ))}
    </div>
  );
};

export default SnsIconGloup;
