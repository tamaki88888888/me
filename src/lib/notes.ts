import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Note, NoteMeta } from "@/types/note";

const notesDir = path.join(process.cwd(), "data/notes");

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(notesDir)) return [];

  return fs
    .readdirSync(notesDir)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(notesDir, fileName), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description,
        published: data.published ?? false,
      };
    })
    .filter((n) => n.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNoteBySlug(slug: string): Note {
  const raw = fs.readFileSync(path.join(notesDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description,
    published: data.published ?? false,
    content: marked(content) as string,
  };
}
