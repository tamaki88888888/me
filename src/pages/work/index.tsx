import Header from "@/components/domain-components/Header";
import Work from "@/components/domain-components/Work";
import PageContainer from "@/components/ui-components/PageContainer";
import clsx from "clsx";
import Layout from "../Layout/index";

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        {/* コンテナーの役割 */}
        <PageContainer>
          <div
            className={clsx(
              ["flex", "flex-col", "gap-y-4"],
              "text-white",
              "pb-[100px]"
            )}
          >
            {/* 見出し */}
            <h2 className={clsx(["text-3xl"])}>Work</h2>
            <p>99%個人開発紹介ページです</p>

            {/* 詳細 */}
            <Work />
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
