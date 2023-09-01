import WorkList from "@/components/domain-components/WorkList";
import PageContainer from "@/components/ui-components/PageContainer";
import clsx from "clsx";
import Layout from "../Layout/index";
import ReactCropperComponent from "./ReactCropperComponent";

export default function Home() {
  return (
    <div>
      <Layout>
        {/* コンテナーの役割 */}
        <PageContainer>
          <ReactCropperComponent />
        </PageContainer>
      </Layout>
    </div>
  );
}
