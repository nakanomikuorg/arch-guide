// noinspection JSUnusedGlobalSymbols

import DefaultTheme from "vitepress/theme";
import "./style/theme.css";
import "./style/font.css";
import "./style/vars.css";
import "./style/global.css";

console.log("Code licensed under MIT, documentation under CC BY-SA 4.0.");
console.log("Made with ❤️️ love by all contributors.");

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  }
};
