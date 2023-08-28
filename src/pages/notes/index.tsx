import NoteList from "@/components/domain-components/NoteList";
import PageContainer from "@/components/ui-components/PageContainer/index";
import { clsx } from "clsx";
import Layout from "../Layout/index";

/**
 * @description NOTESページ
 */
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
            <h2 className={clsx(["text-3xl"])}>Notes</h2>

            {/* 詳細 */}
            <NoteList />

            {/* 次のページ */}
            <a href="/works">what's next ? click ! →</a>
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
