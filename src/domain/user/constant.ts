import { Project } from "./model";

export const ME = {
  NAME: "ko tamaki",
  DETAIL: "hi, im ko tamaki",
  THUMBNAIL: "/image/thumbnail2.png",
} as const;

export const SNS = {
  INSTAGRAM: { URL: "https://www.instagram.com/koutamakiii" },
  GITHUB: { URL: "https://github.com/tamaki88888888" },
  X: { URL: "https://x.com/koukoukokoko" },
  MY_BLOG: { URL: "https://developer-blog-xi.vercel.app/" },
};

export const EXPERIENCES = {
  WANO: {
    NAME: "Wano株式会社",
    POSITION: "Frontend Engineer",
    DURING: "2022.2 - present",
    WEB_SITE: "https://group.wano.co.jp/",
    DETAIL: [
      `中長規模のフロントエンド設計、開発を担当し、Figma React Next TypeScript などを用いて実装しました。`,
      `自社サービスのフロントエンド保守を担当しました。`,
      `next -> 小規模開発にてライブラリの選定〜実装までを担当いたしました。 `,
    ],
    SKILL: ["React", "Recoil", "Next", "TS", "Perl"],
  },

  PLACOLE: {
    NAME: "株式会社プラコレ",
    POSITION: "Frontend Engineer",
    DURING: "2020.4 - 2021.10",
    WEB_SITE: "https://pla-cole.co/",
    DETAIL: [
      `クライアントのウェブサイト開発と保守を担当し、主にHTML、CSS、Sass、JavaScript、jQueryを使用して本番コードを提供しました。さまざまなサイトに対するクロスブラウザの互換性とモバイル対応を確保するための品質保証テストを実施しました。`,
      `自社メディアのSEO向上に向けた開発や運用保守を担当、Wordpressにおける amp の導入や、pageSpeed Insite などを用いた改善立案などを行いました。`,
      `中規模(1y)サービスのフロントエンド設計〜開発を担当し、主にReact Redux (ReactN) を用いて実装しました。`,
    ],
    SKILL: ["React", "Redux", "WordPrss", "JQuery", "AMP"],
  },
};

export const SIDE_WORKS = {
  AKITSU: {
    NAME: "秋津道路株式会社コーポレートサイト",
    POSITION: "Frontend Engineer",
    DURING: "2022",
    WEB_SITE: "https://akitsudoro.com/",
    DETAIL: [`秋津道路株式会社のコーポーレートサイト`],
    SKILL: ["WordPrss", "Sass"],
  },
};

export const NOTES = {};

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
};
