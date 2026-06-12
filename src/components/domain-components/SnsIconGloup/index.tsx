import SnsIcon from "@/components/ui-components/SnsIcon/index";
import { SNS } from "@/domain/user/constant";
import React from "react";
import clsx from "clsx";

interface Props {
  flexDirection?: "column" | "row";
}

const SNS_ICON_PROP_LIST: Array<React.ComponentProps<typeof SnsIcon>> = [];

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
        <SnsIcon key={href} href={href} src={src} />
      ))}
    </div>
  );
};

export default SnsIconGloup;
