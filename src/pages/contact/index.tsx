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
            <h2 className={clsx(["text-3xl"])}>Please Get in touch !!</h2>

            {/* 詳細 */}
            <div>
              <p>最後まで見ていただきありがとうございます。</p>
              <p>
                もし気になっていただけたのなら、メールにて連絡いただけると嬉しいです。
              </p>
              <p>
                また、少しでも多く私の開発や記事について気になる点やアドバイスいただける方がいたらぜひコメントください。
              </p>
              ここに影響を受けた本とか書きたい。
            </div>

            <a href="mailto:">get in touch !!</a>

            {/* 次のページ */}
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
