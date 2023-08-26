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
