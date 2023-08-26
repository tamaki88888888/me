import SnsIconGloup from "@/components/domain-components/SnsIconGloup/index";
import clsx from "clsx";
import Layout from "./Layout/index";

/**
 * @description TOPページ
 * @todo Backgroundの実装
 * @todo styleをいい感じに当てる
 */
export default function Home() {
  return (
    <div>
      <Layout>
        {/* コンテナーの役割 */}
        <div className={clsx(["max-w-[720px]", "mx-auto"])}>
          <div
            className={clsx(
              ["flex", "flex-col", "gap-y-4"],
              ["text-white", "z-index-10"]
            )}
          >
            {/* タイトル */}
            <h1 className={clsx(["text-5xl"])}>I'M KO TAMAKI</h1>
            {/* 詳細 */}
            <div>
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
        </div>
      </Layout>
    </div>
  );
}
