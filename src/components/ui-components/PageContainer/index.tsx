import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}
/**
 * @memo Pageレベルのコンテナ
 * @todo 大中小設定して、Pageって単語外す
 */
const PageContainer: React.FC<Props> = ({ children }) => {
  return <div className={clsx(["max-w-[720px]", "mx-auto"])}>{children}</div>;
};

export default PageContainer;
