import { defineConfig } from "vitepress";

export default defineConfig({
  description:
    "本指南包含从 archlinux 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！",
  head: [
    [
      "meta",
      {
        name: "title",
        content: "archlinux 简明指南 —— Arch Linux 安装使用教程",
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
      "script",
      {},
      `var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e7059486ad3b16e21ea7058836c51b9b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
    ],
    [
      "script",
      {},
      `(function () {
  var bp = document.createElement("script");
  var curProtocol = window.location.protocol.split(":")[0];
  if (curProtocol === "https") {
    bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
  } else {
    bp.src = "http://push.zhanzhang.baidu.com/push.js";
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();`,
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-MQRPJQK9SC",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
    
gtag('config', 'G-MQRPJQK9SC');`,
    ],
  ],
  ignoreDeadLinks: true,
  lang: "zh-CN",
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/images/logo.svg",
    siteTitle: false,
    footer: {
      message:
        'Code licensed under MIT, documentation under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh" class="grabient-text">CC BY-SA 4.0</a>.',
      copyright:
        'Made with ❤️️ love by <a href="https://github.com/NakanoMikuOrg/arch-guide/graphs/contributors" class="grabient-text">all contributors</a>.',
    },
    editLink: {
      pattern:
        "https://github.com/NakanoMikuOrg/arch-guide/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    sidebar: {
      "/guide/": [
        {
          text: "🎐 千里之行",
          link: "/guide/",
        },
        {
          text: "ℹ️ 尝试之前",
          items: [
            {
              text: "archlinux 真的适合我吗？",
              link: "/guide/prepare/head-on-blow",
            },
            { text: "了解 archlinux", link: "/guide/prepare/understand" },
          ],
        },
        {
          text: "🌱 新手上路",
          items: [
            {
              text: "💾 基础安装",
              items: [
                { text: "安装前的准备", link: "/guide/rookie/pre-install" },
                { text: "虚拟机安装前的准备", link: "/guide/rookie/pre-virt" },
                {
                  text: "archlinux 基础安装",
                  link: "/guide/rookie/basic-install",
                },
                {
                  text: "基础安装详解",
                  link: "/guide/rookie/basic-install-detail",
                },
              ],
            },
            {
              text: "🔩 进阶安装",
              items: [
                {
                  text: "桌面环境与常用应用安装",
                  link: "/guide/rookie/desktop-env-and-app",
                },
                { text: "显卡驱动", link: "/guide/rookie/graphic-driver" },
                { text: "透明代理", link: "/guide/rookie/transparent" },
              ],
            },
          ],
        },
        {
          text: "🛠️ 进阶话题",
          items: [
            {
              text: "⚙️ 可选配置",
              items: [
                {
                  text: "可选配置（基础篇）",
                  link: "/guide/advanced/optional-cfg-1",
                },
                {
                  text: "可选配置（进阶篇）",
                  link: "/guide/advanced/optional-cfg-2",
                },
                { text: "功耗控制", link: "/guide/advanced/power-ctl" },
              ],
            },
            {
              text: "🌸 系统美化",
              items: [
                {
                  text: "系统美化（布局）",
                  link: "/guide/advanced/beauty-1",
                },
                {
                  text: "系统美化（主题）",
                  link: "/guide/advanced/beauty-2",
                },
                {
                  text: "系统美化（终端）",
                  link: "/guide/advanced/beauty-3",
                },
              ],
            },
            {
              text: "🧰 系统管理",
              items: [
                {
                  text: "合格的系统管理员",
                  link: "/guide/advanced/system-ctl",
                },
                { text: "常见问题", link: "/guide/advanced/debug" },
                {
                  text: "制作系统盘",
                  link: "/guide/advanced/make-install-disk",
                },
                { text: "Btrfs 相关", link: "/guide/advanced/btrfs" },
              ],
            },
          ],
        },
      ],
      "/app/": [
        {
          text: "💽 常用软件",
          items: [
            {
              text: "📐 日常办公",
              items: [
                { text: "常用软件", link: "/app/apps/daily.md" },
                { text: "聊天通讯", link: "/app/apps/communication.md" },
                { text: "办公软件", link: "/app/apps/office.md" },
                { text: "多屏协同", link: "/app/apps/collaboration.md" },
              ],
            },
            {
              text: "🎯 其它内容",
              items: [
                { text: "视频影音", link: "/app/apps/media.md" },
                { text: "游戏娱乐", link: "/app/apps/play.md" },
                { text: "远程连接", link: "/app/apps/remote.md" },
                { text: "安卓刷机", link: "/app/apps/android.md" },
              ],
            },
          ],
        },
        {
          text: "🔬 专有领域",
          items: [
            {
              text: "🎹 媒体创作",
              items: [
                { text: "视频制作", link: "/app/exclusive/vedio.md" },
                { text: "图像制作", link: "/app/exclusive/image.md" },
                { text: "音频制作", link: "/app/exclusive/audio.md" },
                { text: "其它内容", link: "/app/exclusive/media.md" },
              ],
            },
            {
              text: "🖥️ 信息技术",
              items: [{ text: "编程软件", link: "/app/exclusive/code.md" }],
            },
          ],
        },
      ],
    },
    nav: [
      {
        text: "📚 指南",
        items: [
          { text: "🎐 千里之行", link: "/guide/" },
          { text: "ℹ️ 尝试之前", link: "/guide/prepare/head-on-blow" },
          {
            text: "🌱 新手上路",
            items: [
              { text: "💾 基础安装", link: "/guide/rookie/pre-install" },
              {
                text: "🔩 进阶安装",
                link: "/guide/rookie/desktop-env-and-app",
              },
            ],
          },
          {
            text: "🛠️ 进阶话题",
            items: [
              { text: "⚙️ 可选配置", link: "/guide/advanced/optional-cfg-1" },
              { text: "🌸 系统美化", link: "/guide/advanced/beauty-1" },
              { text: "🧰 系统管理", link: "/guide/advanced/system-ctl" },
            ],
          },
        ],
      },
      {
        text: "📦 应用参考",
        items: [
          {
            text: "💽 常用软件",
            items: [
              { text: "📐 日常办公", link: "/apps/daily" },
              { text: "🎯 其它内容", link: "/apps/media" },
            ],
          },
          {
            text: "🔬 专有领域",
            items: [
              { text: "🎹 媒体创作", link: "/exclusive/vedio" },
              { text: "🖥️ 信息技术", link: "/exclusive/code" },
            ],
          },
        ],
      },
      {
        text: "🍰 写在后面",
        items: [
          { text: "贡献者公约", link: "/postscript/contributor-covenant.md" },
          { text: "贡献指南", link: "/postscript/contribute.md" },
          { text: "版权说明", link: "/postscript/copyright.md" },
          { text: "附录", link: "/postscript/about.md" },
        ],
      },
    ],
    lastUpdatedText: "📑 最后更新",
    socialLinks: [
      { icon: "github", link: "https://github.com/NakanoMikuOrg/arch-guide" },
    ],
  },
  title: "archlinux 简明指南 — Arch Linux 安装使用教程",
});
