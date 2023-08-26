import SnsIconGloup from "@/components/domain-components/SnsIconGloup/index";
import PageContainer from "@/components/ui-components/PageContainer/index";
import clsx from "clsx";
import Layout from "./Layout/index";

/**
 * @description TOPページ
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
            {/* タイトル */}
            <h2 className={clsx(["text-5xl"])}>I'M KO TAMAKI</h2>

            {/* 詳細 */}
            <div className={"text-[14px]"}>
              <p className={"mb-4"}>
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and I'm frontend engineer and I'm frontend engineer and
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and
              </p>

              <p>
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and I'm frontend engineer and I'm frontend engineer and
                I'm frontend engineer and I'm frontend engineer and I'm frontend
                engineer and
              </p>
            </div>
            {/* 次のページ */}
            <a href="/about">see and more about me →</a>
            {/* SNS */}
            <SnsIconGloup />
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
