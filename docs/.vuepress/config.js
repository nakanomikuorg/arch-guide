module.exports = {
  base: "/",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    [
      "meta",
      {
        name: "keywords",
        href: "archlinux 安装,archlinux 教程,archlinux 指南,archlinux,Arch Linux,显卡驱动,Linux",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0",
      },
    ],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }],
    [
      "link",
      { rel: "stylesheet", type: "text/css", href: "/static/css/font.css" },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e7059486ad3b16e21ea7058836c51b9b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-MQRPJQK9SC");`,
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "archlinux 简明指南",
      description:
        "本指南包含从 archlinux 安装、显卡驱动、日常软件配置、多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "archGuide",
    //   description:
    //     "This guide contains everything you may need from archlinux installation, graphics driver, daily software configuration, multimedia production, programming, etc. Let archlinux be your common system!",
    // },
  },
  themeConfig: {
    logo: "/static/svg/arch-logo.svg",
    displayAllHeaders: true,
    sidebar: [
      {
        isGroup: true,
        text: "千里之行",
        children: ["/prologue.md"],
      },
      {
        isGroup: true,
        text: "尝试之前",
        children: ["/prepare/head-on-blow.md", "/prepare/understand.md"],
      },
      {
        isGroup: true,
        text: "新手上路",
        children: [
          "/rookie/preInstall.md",
          "/rookie/basicInstall.md",
          "/rookie/DE&App.md",
          "/rookie/graphicDriver.md",
        ],
      },
      {
        isGroup: true,
        text: "进阶话题",
        children: [
          "/advanced/systemCtl.md",
          "/advanced/debug.md",
          "/advanced/powerCtl.md",
          "/advanced/beauty.md",
        ],
      },
      {
        isGroup: true,
        text: "办公娱乐",
        children: [
          "/play&office/office.md",
          "/play&office/media.md",
          "/play&office/play.md",
          "/play&office/android.md",
        ],
      },
      {
        isGroup: true,
        text: "专有领域",
        children: ["/exclusive/media.md", "/exclusive/code.md"],
      },
      {
        isGroup: true,
        text: "写在后面",
        sidebarDepth: 0,
        children: ["/contribute.md", "/about.md"],
      },
    ],
    sidebarDepth: 1,
    smoothScroll: true,
    activeHeaderLinks: false,
    lastUpdatedText: "📑 最后更新",
    contributorsText: "🎨 参与贡献",
    repo: "https://github.com/NakanoMikuOrg/archGuide",
    docsDir: "docs",
    docsBranch: "main",
    repoLabel: "Github",
    editLinks: true,
    editLinkText: "📝 编辑本文",
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
      "@vuepress/plugin-google-analytics",
      {
        id: "G-MQRPJQK9SC",
      },
    ],
  ],
};
