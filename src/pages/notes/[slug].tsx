import PageContainer from "@/components/ui-components/PageContainer/index";
import Layout from "../Layout/index";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { Note } from "@/types/note";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { clsx } from "clsx";

type Props = {
  note: Note;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = getAllNotes();
  return {
    paths: notes.map((n) => ({ params: { slug: n.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const note = getNoteBySlug(params!.slug as string);
  return { props: { note } };
};

export default function NotePage({ note }: Props) {
  const router = useRouter();
  return (
    <div>
      <Layout>
        <PageContainer>
          <div className={clsx("flex", "flex-col", "gap-y-6", "text-white", "pb-[100px]")}>
            <button onClick={() => router.back()} className="text-sm text-gray-400 hover:underline text-left bg-transparent border-none cursor-pointer">← Notes</button>
            <p className="text-sm text-gray-400">{note.date}</p>
            <h1 className="text-3xl">{note.title}</h1>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
          </div>
        </PageContainer>
      </Layout>
    </div>
  );
}
