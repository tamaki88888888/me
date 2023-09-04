export interface Me {
  name: string;
  detail: string;
}

export interface Project {
  during: string;
  shouldShow: boolean;
  name: string;
  thumbnail: string;
  href: string;
  detailList: Array<string>;
  skillList: Array<string>;
  referenceLinks?: Array<{ text: string; url: string }>;
}
