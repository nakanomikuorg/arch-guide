import { defineConfig } from "vitepress";
import themeConfig from "./config/theme";
import head from "./config/head";
import { DESCRIPTION as description, LANG as lang, TITLE as title } from "./config/info";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  description,
  head,
  ignoreDeadLinks: true, // TODO: remove this line when all links are fixed
  lang,
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig,
  title
});
