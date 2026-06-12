import NoteList from "@/components/domain-components/NoteList";
import Header from "@/components/domain-components/Header";
import PageContainer from "@/components/ui-components/PageContainer/index";
import { clsx } from "clsx";
import Layout from "../Layout/index";
import { getAllNotes } from "@/lib/notes";
import { NoteMeta } from "@/types/note";
import { GetStaticProps } from "next";

type Props = {
  notes: NoteMeta[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const notes = getAllNotes();
  return { props: { notes } };
};

export default function NotesPage({ notes }: Props) {
  return (
    <div>
      <Header />
      <Layout>
        <PageContainer>
          <div
            className={clsx(
              ["flex", "flex-col", "gap-y-4"],
              "text-white",
              "pb-[100px]"
            )}
          >
            <h2 className={clsx(["text-3xl"])}>Notes</h2>
            <NoteList notes={notes} />
            <a href="/works">what's next ? click ! →</a>
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
