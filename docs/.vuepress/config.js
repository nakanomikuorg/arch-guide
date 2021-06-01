module.exports = {
  base: "/",
  head: [
    [
      "meta",
      {
        name: "title",
        content: "archlinux 简明指南 —— Arch Linux 安装使用教程",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: "/favicon-128x128.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        href: "archlinux 安装,archlinux 教程,archlinux 指南,archlinux,Arch Linux,Linux",
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
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://arch.icekylin.online/" }],
    [
      "meta",
      {
        property: "og:title",
        content: "archlinux 简明指南 — Arch Linux 安装使用教程",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "本指南包含从 archlinux 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://arch.icekylin.online/image-400x400.png",
      },
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      { property: "twitter:url", content: "https://arch.icekylin.online/" },
    ],
    [
      "meta",
      {
        property: "twitter:title",
        content: "archlinux 简明指南 — Arch Linux 安装使用教程",
      },
    ],
    [
      "meta",
      {
        property: "twitter:description",
        content:
          "本指南包含从 archlinux 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: "https://arch.icekylin.online/image.jpg",
      },
    ],
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
      title: "archlinux 简明指南 — Arch Linux 安装使用教程",
      description:
        "本指南包含从 archlinux 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！",
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
        text: "🎐 千里之行",
        children: ["/prologue.md"],
      },
      {
        isGroup: true,
        text: "ℹ️ 尝试之前",
        children: ["/prepare/head-on-blow.md", "/prepare/understand.md"],
      },
      {
        isGroup: true,
        text: "🌱 新手上路",
        children: [
          "/rookie/pre-install.md",
          "/rookie/pre-virt.md",
          "/rookie/basic-install.md",
          "/rookie/basic-install-detail.md",
          "/rookie/desktop-env-and-app.md",
          "/rookie/graphic-driver.md",
        ],
      },
      {
        isGroup: true,
        text: "🛠️ 进阶话题",
        children: [
          "/advanced/systemCtl.md",
          "/advanced/debug.md",
          "/advanced/powerCtl.md",
          "/advanced/beauty.md",
        ],
      },
      {
        isGroup: true,
        text: "📐 办公娱乐",
        children: [
          "/play&office/office.md",
          "/play&office/media.md",
          "/play&office/play.md",
          "/play&office/android.md",
        ],
      },
      {
        isGroup: true,
        text: "🔬 专有领域",
        children: ["/exclusive/media.md", "/exclusive/code.md"],
      },
      {
        isGroup: true,
        text: "🍰 写在后面",
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
    repoLabel: "🍺 Github",
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
      "@vuepress/plugin-medium-zoom",
    ],
  ],
};
