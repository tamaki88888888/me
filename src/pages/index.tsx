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
        <div className={clsx(["flex", "justify-center"], ["w-[720px]"])}>
          <div>
            <h1>I'M KO TAMAKI</h1>
            <p>I'm frontend engineer and ~~~~~~~</p>
            <a href="/about">see and more about me →</a>
          </div>
        </div>
      </Layout>
    </div>
  );
}
