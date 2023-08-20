import React from "react";

interface Props {
  tableList: Array<{ title: string; detail: React.ReactNode | string }>;
}

/**
 * @memo Aboutページで個人情報を表示するためのテーブルレイアウト
 */
const ProfileTable: React.FC<Props> = ({ tableList }) => {
  return <>ProfileTable</>;
};

export default ProfileTable;
