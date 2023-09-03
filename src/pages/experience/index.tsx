import Header from "@/components/domain-components/Header";
import WorkExpeience from "@/components/domain-components/WorkExpeience";
import PageContainer from "@/components/ui-components/PageContainer/index";
import { clsx } from "clsx";
import Layout from "../Layout/index";

/**
 * @description EXPERIENCEページ
 */
export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        {/* コンテナーの役割 */}
        <PageContainer>
          <div
            className={clsx(
              ["flex", "flex-col", "gap-y-4"], // レイアウト的にいらないはず
              ["text-white", "z-index-10"]
            )}
          >
            {/* 見出し */}
            <h2 className={clsx(["text-3xl"])}>Work Experience</h2>

            {/* 詳細 */}
            <WorkExpeience />
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
