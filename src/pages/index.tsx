import Header from "@/components/domain-components/SnsIconGloup/Header/index";
import SnsIconGloup from "@/components/domain-components/SnsIconGloup/index";
import Background from "@/components/ui-components/Background/index";

/**
 * @description TOPページ
 * @todo Backgroundの実装
 * @todo 共通部分をまとめて Layout に移動
 * @todo styleをいい感じに当てる
 */
export default function Home() {
  return (
    <div>
      <Background />
      <Header />
      <SnsIconGloup />
      <div>
        <h1>I'M KO TAMAKI</h1>
        <p>I'm frontend engineer and ~~~~~~~</p>
        <a href="/about">see and more about me →</a>
      </div>
    </div>
  );
}
