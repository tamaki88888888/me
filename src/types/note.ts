export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  published: boolean;
};

export type Note = NoteMeta & {
  content: string;
};
