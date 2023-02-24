import type { DefaultTheme } from "vitepress";
import algolia from "./algolia";
import nav from "./nav";
import sidebar from "./sidebar";
import { LOGO as logo, REPO } from "./info";

const themeConfig: DefaultTheme.Config = {
  algolia,
  editLink: {
    pattern:
      `${REPO}/edit/main/docs/:path`,
    text: "在 GitHub 上编辑此页"
  },
  footer: {
    message:
      "Code licensed under MIT, documentation under <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh\" class=\"grabient-text\">CC BY-SA 4.0</a>.",
    copyright:
      `Made with ❤️️ love by <a href="${REPO}/graphs/contributors" class="grabient-text">all contributors</a>.`
  },
  lastUpdatedText: "📑 最后更新",
  logo,
  nav,
  sidebar,
  siteTitle: false,
  socialLinks: [
    { icon: "github", link: REPO }
  ]
};

export default themeConfig;
