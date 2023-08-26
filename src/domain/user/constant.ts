import { Project } from "./model";

export const ME = {
  NAME: "ko tamaki",
  DETAIL: "hi, im ko tamaki",
  THUMBNAIL: "/image/thumbnail2.png", // pathは含めない方がいのかな
} as const;

export const SNS = {
  INSTAGRAM: { URL: "https://www.instagram.com/koutamakiii" },
  GITHUB: { URL: "https://github.com/tamaki88888888" },
  X: { URL: "https://twitter.com/koukoukokoko" },
};

//定数なんだけどマップした時にめちゃめちゃ違和感ある
export const EXPERIENCES = {
  WANO: {
    NAME: "Wano株式会社", //en ja した方がいいかな
    DURING: "2022.2 - present",
    WEB_SITE: "https://group.wano.co.jp/",
    DETAIL: ``,
    SKILL: "React Recoil Next TS Perl",
  },
  PLACOLE: {
    NAME: "株式会社プラコレ",
    DURING: "2020.4 - 2021.10",
    WEB_SITE: "https://pla-cole.co/",
    DETAIL: ``,
    SKILL: "React Redux WordPrss JQuery AMP",
  },
};

export const SIDE_WORKS = {
  AKITSU: {
    NAME: "秋津道路株式会社コーポレートサイト",
    DURING: "2022",
    WEB_SITE: "https://akitsudoro.com/",
    DETAIL: `秋津道路株式会社のコーポーレートサイト`,
    SKILL: "WordPrss Sass",
  },
};

//よくよく考えたら、そこまで紹介したい記事がなくて草
export const NOTES = {};

//オブジェクトのキーをキャピタルにするかキャメルケースにするか悩み中。
//ただ、これはマップするためのものだから小文字でいいかも
//コンストがあって、型にコンストを依存させるべきか、型が先なのかがわからない
export const PROJECTS: { [K in string]: Project } = {
  AKITSU: {
    shouldShow: true,
    name: "秋津道路株式会社コーポレートサイト",
    thumbnail: "/image/thumbnail1.png",
    href: "https://akitsudoro.com/",
    detail: `秋津道路株式会社のコーポーレートサイト`,
    skill: "WordPrss Sass",
  },
  PORTFOLIO: {
    shouldShow: true,
    name: "ko - introduce",
    thumbnail: "/image/thumbnail1.png",
    href: "",
    detail: "自分の自己紹介サイトです。",
    skill: "TS React Next React-spring",
  },
  BLOG: {
    shouldShow: true,
    name: "blog",
    thumbnail: "/image/thumbnail1.png",
    href: "https://developer-blog-xi.vercel.app/",
    detail:
      "開発ブログ。今までははてなブログをしようすることが多かったのですが、もっと詳細部分のデザインを変更したくなってしまい。。。自分用に開発いたしました。",
    skill: "TS React Next Netlify",
  },
} as const;
