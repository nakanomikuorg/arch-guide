import {defineConfig} from "vitepress";

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
        ["meta", {"http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1"}],
        ["meta", {property: "og:type", content: "website"}],
        ["meta", {property: "og:url", content: "https://arch.icekylin.online/"}],
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
        ["meta", {property: "twitter:card", content: "summary_large_image"}],
        [
            "meta",
            {property: "twitter:url", content: "https://arch.icekylin.online/"},
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
            "meta",
            {
                name: "baidu-site-verification",
                content: "code-CJJd7gooWE",
            },
        ],
        [
            "meta",
            {
                name: "msvalidate.01",
                content: "5F7926C2A8770A498525E9E64994663C",
            },
        ],
        [
            "meta",
            {
                name: "360-site-verification",
                content: "87416cd673fcfd727db0aeb869a17caf",
            },
        ],
        [
            "link",
            {rel: "stylesheet", type: "text/css", href: "/static/css/font.css"},
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
        sidebar: [
            {
                text: "🎐 千里之行",
                collapsed: true,
                items: [{text: "序章", link: "/prologue"}],
            },
            {
                text: "ℹ️ 尝试之前",
                collapsed: true,
                items: [
                    {text: "archlinux 真的适合我吗？", link: "/prepare/head-on-blow"},
                    {text: "了解 archlinux", link: "/prepare/understand"},
                ],
            },
            {
                text: "🌱 新手上路",
                collapsed: true,
                items: [
                    {
                        text: "💾 基础安装",
                        items: [
                            {text: "安装前的准备", link: "/rookie/pre-install"},
                            {text: "虚拟机安装前的准备", link: "/rookie/pre-virt"},
                            {text: "archlinux 基础安装", link: "/rookie/basic-install"},
                            {text: "基础安装详解", link: "/rookie/basic-install-detail"},
                        ],
                    },
                    {
                        text: "🔩 进阶安装",
                        items: [
                            {
                                text: "桌面环境与常用应用安装",
                                link: "/rookie/desktop-env-and-app",
                            },
                            {text: "显卡驱动", link: "/rookie/graphic-driver"},
                            {text: "透明代理", link: "/rookie/transparent"},
                        ],
                    },
                ],
            },
            {
                text: "🛠️ 进阶话题",
                collapsed: true,
                items: [
                    {
                        text: "⚙️ 可选配置",
                        items: [
                            {
                                text: "可选配置（基础篇）",
                                link: "/advanced/optional-cfg-1",
                            },
                            {
                                text: "可选配置（进阶篇）",
                                link: "/advanced/optional-cfg-2",
                            },
                            {text: "功耗控制", link: "/advanced/power-ctl"},
                        ],
                    },
                    {
                        text: "🌸 系统美化",
                        items: [
                            {
                                text: "系统美化（布局）",
                                link: "/advanced/beauty-1",
                            },
                            {
                                text: "系统美化（主题）",
                                link: "/advanced/beauty-2",
                            },
                            {
                                text: "系统美化（终端）",
                                link: "/advanced/beauty-3",
                            },
                        ],
                    },
                    {
                        text: "🧰 系统管理",
                        items: [
                            {text: "合格的系统管理员", link: "/advanced/system-ctl"},
                            {text: "常见问题", link: "/advanced/debug"},
                            {text: "制作系统盘", link: "/advanced/make-install-disk"},
                            {text: "Btrfs 相关", link: "/advanced/btrfs"},
                        ],
                    },
                ],
            },
            {
                text: "💽 常用软件",
                collapsed: true,
                items: [
                    {
                        text: "📐 日常办公",
                        items: [
                            {text: "常用软件", link: "/apps/daily.md"},
                            {text: "聊天通讯", link: "/apps/communication.md"},
                            {text: "办公软件", link: "/apps/office.md"},
                            {text: "多屏协同", link: "/apps/collaboration.md"},
                        ],
                    },
                    {
                        text: "🎯 其它内容",
                        items: [
                            {text: "视频影音", link: "/apps/media.md"},
                            {text: "游戏娱乐", link: "/apps/play.md"},
                            {text: "远程连接", link: "/apps/remote.md"},
                            {text: "安卓刷机", link: "/apps/android.md"},
                        ],
                    },
                ],
            },
            {
                text: "🔬 专有领域",
                collapsed: true,
                items: [
                    {
                        text: "🎹 媒体创作",
                        items: [
                            {text: "视频制作", link: "/exclusive/vedio.md"},
                            {text: "图像制作", link: "/exclusive/image.md"},
                            {text: "音频制作", link: "/exclusive/audio.md"},
                            {text: "其它内容", link: "/exclusive/media.md"},
                        ],
                    },
                    {
                        text: "🖥️ 信息技术",
                        items: [{text: "编程软件", link: "/exclusive/code.md"}],
                    },
                ],
            },
            {
                text: "🍰 写在后面",
                collapsed: true,
                items: [
                    {text: "贡献者公约", link: "/postscript/contributor-covenant.md"},
                    {text: "贡献指南", link: "/postscript/contribute.md"},
                    {text: "版权说明", link: "/postscript/copyright.md"},
                    {text: "附录", link: "/postscript/about.md"},
                ],
            },
        ],
        siteTitle: "archlinux 简明指南",
        lastUpdatedText: "📑 最后更新",
        socialLinks: [
            {icon: "github", link: "https://github.com/NakanoMikuOrg/arch-guide"},
        ],
    },
    title: "archlinux 简明指南 — Arch Linux 安装使用教程",
});
