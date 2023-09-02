import Header from "@/components/domain-components/Header/index";
import Background from "@/components/ui-components/Background/index";

interface Props {
  children: React.ReactNode;
}
/**
 * @description Pageレベルのコンポーネントで共通利用する部分をまとめている
 */
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Background />
      {children}
    </div>
  );
};

export default Layout;
