import { HeadConfig } from "vitepress";
import { KEYWORDS, META_TITLE } from "./info";

const headConfig: HeadConfig[] = [
  [
    "script",
    {
      src: "/js/google.js"
    }
  ],
  [
    "script",
    {
      src: "/js/baidu.js"
    }
  ],
  [
    "meta",
    {
      name: "title",
      content: META_TITLE
    }
  ],
  [
    "meta",
    {
      name: "keywords",
      href: KEYWORDS
    }
  ]
];

export default headConfig;
