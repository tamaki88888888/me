import Header from "@/components/domain-components/Header";
import PageContainer from "@/components/ui-components/PageContainer/index";
import Thumbnail from "@/components/ui-components/Thumbnail";
import { ME } from "@/domain/user/constant";
import { clsx } from "clsx";
import Layout from "../Layout/index";

/**
 * @description ABOUTページ
 * @todo clsxの解消 - できたのですが、ちゃんと理解できてないため、後学実施
 * @todo border周りのtailwindジェネレーター作成したい
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
              ["flex", "flex-col", "gap-y-4"],
              ["text-white", "z-index-10"],
              "pb-[100px]"
            )}
          >
            {/* 見出し */}
            <h2 className={clsx(["text-3xl"])}>About</h2>

            {/* サムネイル */}
            <div className={clsx("flex", "justify-center")}>
              <Thumbnail src={ME.THUMBNAIL} />
            </div>

            {/* 詳細 */}
            <div className={"text-[14px]"}>
              <div className={"mb-4"}>
                <p>はじめまして、こうです</p>
                <p>
                  思いついたものや真似したいものはとにかく作ってみる人です。
                  ピザとドクターペッパーがすきです。
                </p>
              </div>

              <div className={"mb-4"}>
                <p>好きなピザ</p>
                <p>ミモザの木さんの小谷ピザ</p>
              </div>

              <div className={"mb-4"}>
                <p>ハマってること</p>
                <p>
                  とあるスマホゲーム
                  <a
                    href="https://supercell.com/en/games/brawlstars/"
                    target={"_blank"}
                  >
                    (ブロスタ)
                  </a>
                </p>
              </div>

              <div className={"mb-4"}>
                <p>開発環境など</p>
                <p>エディタ：vscode / ブラウザ：Arc / ターミナル：wrap</p>
              </div>

              <div className={"mb-4"}>
                <p>業務で関わることが多い</p>
                <p>
                  React / Next.js / Recoil / CSS / react-hook-form / Tailwind
                  CSS / Perl / WordPress
                </p>
              </div>

              <div className={"mb-4"}>
                <p>挨拶はした</p>
                <p>Redux / Ruby / Babel</p>
              </div>

              <div className={"mb-4"}>
                <p>今身に付けたいこと</p>
                <p>Go / react-spring</p>
              </div>
            </div>
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
