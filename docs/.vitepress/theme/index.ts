import DefaultTheme from "vitepress/theme";
import "./style/theme.css";
import "./style/font.css";
import "./style/vars.css";
import "./style/grabient.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
};
