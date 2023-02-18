// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style/font.css";
import "./style/vars.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
};
