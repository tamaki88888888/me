import Header from "@/components/domain-components/Header";
import WorkExpeience from "@/components/domain-components/WorkExpeience";
import PageContainer from "@/components/ui-components/PageContainer/index";
import { clsx } from "clsx";
import Layout from "../Layout/index";

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <PageContainer>
          <div
            className={clsx(
              ["flex", "flex-col", "gap-y-4"],
              ["text-white", "z-index-10"]
            )}
          >
            <h2 className={clsx(["text-3xl"])}>Work Experience</h2>
            <WorkExpeience />
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
