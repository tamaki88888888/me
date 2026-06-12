export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

export type Note = NoteMeta & {
  content: string;
};
