import Header from "@/components/domain-components/SnsIconGloup/Header/index";
import SnsIconGloup from "@/components/domain-components/SnsIconGloup/index";
import Background from "@/components/ui-components/Background/index";
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
        <div>
          <h1>I'M KO TAMAKI</h1>
          <p>I'm frontend engineer and ~~~~~~~</p>
          <a href="/about">see and more about me →</a>
        </div>
      </Layout>
    </div>
  );
}
