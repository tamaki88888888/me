import Footer from "@/components/domain-components/Footer";
import SnsIconGloup from "@/components/domain-components/SnsIconGloup/index";
import PageContainer from "@/components/ui-components/PageContainer/index";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Layout from "./Layout/index";

const title = "@koukoukokoko";

/**
 * @description TOPページ
 * @todo creator cursor with focusing arrow and open link with enter
 * @todo watch this link and make typing abnimation more beautiful
 * @link https://www.youtube.com/watch?v=N4899I-tAW4
 */
export default function Home() {
  const [typeTitle, setTypeTitle] = useState("");
  useEffect(() => {
    /**
     * ①タイトルを一文字ずつスライスして追加
     */
    const timeout = setTimeout(() => {
      setTypeTitle(title.slice(0, typeTitle.length + 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [typeTitle]);

  return (
    <div>
      <Footer />
      <Layout>
        {/* コンテナーの役割 */}
        <PageContainer>
          <div
            className={clsx("h-screen", [
              "flex",
              "items-center",
              "justify-center",
            ])}
          >
            <div
              className={clsx(
                ["flex", "flex-col", "gap-y-8"],
                ["text-white", "z-index-10"]
              )}
            >
              {/* タイトル */}
              <h2
                className={clsx([
                  "tracking-[4px]",
                  "text-center",
                  "blinking-cursor",
                ])}
              >
                {typeTitle}
              </h2>

              <div
                className={clsx("text-[14px]", "w-[70px]", "m-auto", [
                  "flex",
                  "flex-col",
                  "gap-y-4",
                ])}
              >
                <a href="/about" className={"hover:underline"}>
                  about
                </a>
                <a href="/work" className={"hover:underline"}>
                  work
                </a>
                <a href="/resume" className={"hover:underline"}>
                  resume
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
