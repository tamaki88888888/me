import React from "react";
import Link from "next/link";
import { NoteMeta } from "@/types/note";
import { clsx } from "clsx";

type Props = {
  notes: NoteMeta[];
};

const NoteList: React.FC<Props> = ({ notes }) => {
  if (notes.length === 0) return <p className="text-gray-400">記事がありません</p>;

  return (
    <ul className={clsx("flex", "flex-col", "gap-y-4")}>
      {notes.map((note) => (
        <li key={note.slug}>
          <Link href={`/notes/${note.slug}`} className="group block">
            <p className="text-sm text-gray-400">{note.date}</p>
            <h3 className="text-lg group-hover:underline">{note.title}</h3>
            {note.description && (
              <p className="text-sm text-gray-300">{note.description}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
