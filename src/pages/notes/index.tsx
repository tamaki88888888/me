import Layout from "../Layout/index";
import { getAllNotes } from "@/lib/notes";
import { NoteMeta } from "@/types/note";
import { GetStaticProps } from "next";
import Link from "next/link";

type Props = {
  notes: NoteMeta[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const notes = getAllNotes();
  return { props: { notes } };
};

export default function NotesPage({ notes }: Props) {
  return (
    <Layout>
      <div className="fixed left-0 right-0 px-8 max-w-lg mx-auto" style={{ top: "140px", bottom: "40px", overflowY: "auto" }}>
        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="flex justify-between items-center py-3 border-b border-white/20 text-white no-underline hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span className="text-sm">{note.title}</span>
              <span className="text-xs text-white/50">{note.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
