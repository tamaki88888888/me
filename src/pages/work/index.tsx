import WorkList from "@/components/domain-components/WorkList";
import PageContainer from "@/components/ui-components/PageContainer";
import clsx from "clsx";
import Layout from "../Layout/index";

export default function Home() {
  return (
    <div>
      <Layout>
        {/* コンテナーの役割 */}
        <PageContainer>
          <div
            className={clsx(
              ["flex", "flex-col", "gap-y-4"],
              ["text-white", "z-index-10"]
            )}
          >
            {/* 見出し */}
            <h2 className={clsx(["text-3xl"])}>Work Experience</h2>
            <p>99%個人開発紹介ページです</p>

            {/* 詳細 */}
            <WorkList />

            {/* 次のページ */}
            <a href="/works">what's next ? click ! →</a>
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
