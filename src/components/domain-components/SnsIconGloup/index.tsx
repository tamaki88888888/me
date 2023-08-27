import SnsIcon from "@/components/ui-components/SnsIcon/index";
import { SNS } from "@/domain/user/constant";
import React from "react";
import clsx from "clsx";

interface Props {
  flexDirection?: "column" | "row";
}

const SNS_ICON_PROP_LIST: Array<React.ComponentProps<typeof SnsIcon>> = [
  { href: SNS.GITHUB.URL, src: "/svg/github-icon.svg" },
  {
    href: SNS.INSTAGRAM.URL,
    src: "/svg/instagram-icon.svg",
  },
  { href: SNS.X.URL, src: "/svg/twitter-icon.svg" },
  { href: SNS.MY_BLOG.URL, src: "/svg/clip-icon.svg" },
];

/**
 * @memo SNSICONのリストを表示するためのコンポーネント
 */
const SnsIconGloup: React.FC<Props> = ({ flexDirection }) => {
  return (
    <div
      className={clsx([
        "flex",
        "gap-4",
        flexDirection === "column" && "flex-col",
      ])}
    >
      {SNS_ICON_PROP_LIST.map(({ href, src }) => (
        <SnsIcon href={href} src={src} />
      ))}
    </div>
  );
};

export default SnsIconGloup;
