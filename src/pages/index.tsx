import Header from "@/components/domain-components/SnsIconGloup/Header";
import SnsIconGloup from "@/components/domain-components/SnsIconGloup/index";
import PageContainer from "@/components/ui-components/PageContainer/index";
import clsx from "clsx";
import Layout from "./Layout/index";

/**
 * @description TOPページ
 * @todo typing animation
 * @todo fix layout to unrelated about header style
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
            <h2
              className={clsx(["text-2xl", "text-center", "blinking-cursor"])}
            >
              @koukoukokoko
            </h2>

            {/* 詳細 */}
            <div
              className={clsx("text-[14px]", "w-[70px]", "m-auto", [
                "flex",
                "flex-col",
                "gap-y-4",
              ])}
            >
              <a href="/about">about</a>
              <a href="/work">work</a>
              <a href="/resume">resume</a>
            </div>
            {/* SNS */}
            <SnsIconGloup />
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
