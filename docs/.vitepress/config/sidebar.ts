import { DefaultTheme } from "vitepress";

const sidebarConfig:DefaultTheme.Sidebar = {
  "/guide/": [
    {
      text: "🎐 千里之行",
      link: "/guide/"
    },
    {
      text: "ℹ️ 尝试之前",
      items: [
        {
          text: "archlinux 真的适合我吗？",
          link: "/guide/prepare/head-on-blow"
        },
        { text: "了解 archlinux", link: "/guide/prepare/understand" }
      ]
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
              link: "/guide/rookie/basic-install"
            },
            {
              text: "基础安装详解",
              link: "/guide/rookie/basic-install-detail"
            }
          ]
        },
        {
          text: "🔩 进阶安装",
          items: [
            {
              text: "桌面环境与常用应用安装",
              link: "/guide/rookie/desktop-env-and-app"
            },
            { text: "显卡驱动", link: "/guide/rookie/graphic-driver" },
            { text: "透明代理", link: "/guide/rookie/transparent" }
          ]
        }
      ]
    },
    {
      text: "🛠️ 进阶话题",
      items: [
        {
          text: "⚙️ 可选配置",
          items: [
            {
              text: "可选配置（基础篇）",
              link: "/guide/advanced/optional-cfg-1"
            },
            {
              text: "可选配置（进阶篇）",
              link: "/guide/advanced/optional-cfg-2"
            },
            { text: "功耗控制", link: "/guide/advanced/power-ctl" }
          ]
        },
        {
          text: "🌸 系统美化",
          items: [
            {
              text: "系统美化（布局）",
              link: "/guide/advanced/beauty-1"
            },
            {
              text: "系统美化（主题）",
              link: "/guide/advanced/beauty-2"
            },
            {
              text: "系统美化（终端）",
              link: "/guide/advanced/beauty-3"
            }
          ]
        },
        {
          text: "🧰 系统管理",
          items: [
            {
              text: "合格的系统管理员",
              link: "/guide/advanced/system-ctl"
            },
            { text: "常见问题", link: "/guide/advanced/debug" },
            {
              text: "制作系统盘",
              link: "/guide/advanced/make-install-disk"
            },
            { text: "Btrfs 相关", link: "/guide/advanced/btrfs" }
          ]
        }
      ]
    },
    {
      text: "🛡️ 安全",
      items: [
        {
          text: "📄 写在前面",
          items: [
            { text: "概览", link: "/guide/security/summary" }
          ]
        },
        {
          text: "🔐 数据加密",
          items: [
            { text: "磁盘加密", link: "/guide/security/encryption" }
          ]
        },
        {
          text: "🪪 安全启动",
          items: [
            { text: "安全启动", link: "/guide/security/secureboot" }
          ]
        },
        {
          text: "🧱 LSM",
          items: [
            { text: "AppArmor 配置和使用", link: "/guide/security/apparmor" }
          ]
        }
      ]
    }
  ],
  "/app/": [
    {
      text: "💽 常用软件",
      items: [
        {
          text: "📐 日常办公",
          items: [
            { text: "常用软件", link: "/app/common/daily" },
            { text: "聊天通讯", link: "/app/common/communication" },
            { text: "办公软件", link: "/app/common/office" },
            { text: "多屏协同", link: "/app/common/collaboration" }
          ]
        },
        {
          text: "🎯 其它内容",
          items: [
            { text: "视频影音", link: "/app/common/media" },
            { text: "游戏娱乐", link: "/app/common/play" },
            { text: "远程连接", link: "/app/common/remote" },
            { text: "安卓刷机", link: "/app/common/android" }
          ]
        }
      ]
    },
    {
      text: "🔬 专有领域",
      items: [
        {
          text: "🎹 媒体创作",
          items: [
            { text: "视频制作", link: "/app/exclusive/video" },
            { text: "图像制作", link: "/app/exclusive/image" },
            { text: "音频制作", link: "/app/exclusive/audio" },
            { text: "其它内容", link: "/app/exclusive/media" }
          ]
        },
        {
          text: "🖥️ 信息技术",
          items: [{ text: "编程软件", link: "/app/exclusive/code" }]
        }
      ]
    }
  ]
};

export default sidebarConfig;
