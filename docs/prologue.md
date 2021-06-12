---
next: /prepare/head-on-blow.md
---

# 序章

## 🚧 文档施工中

> ### 🎐 千里之行始于足下
>
> 本指南包含从 archlinux 安装、显卡驱动、日常软件配置、多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！

## 📕 相关信息

<p class="shields normal-img-p">
  <a
    href="https://github.com/NakanoMikuOrg/arch-guide"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="Lines of code"
      src="https://img.shields.io/tokei/lines/github/NakanoMikuOrg/arch-guide"
    />
  </a>&nbsp;
  <a
    href="https://github.com/NakanoMikuOrg/arch-guide"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="arch-guide"
      src="https://travis-ci.com/NakanoMikuOrg/arch-guide.svg?branch=main"
    />
  </a>&nbsp;
  <a
    href="https://github.com/NakanoMikuOrg/arch-guide"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/NakanoMikuOrg/arch-guide"
    />
  </a>&nbsp;
  <a
    href="https://github.com/NakanoMikuOrg/arch-guide"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="GitHub Repo stars"
      src="https://img.shields.io/github/stars/NakanoMikuOrg/arch-guide?style=social"
    />
  </a>&nbsp;
  <a
    href="https://gitee.com/nakano-miku/arch-guide/stargazers"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://gitee.com/nakano-miku/arch-guide/badge/star.svg?theme=white"
      alt="Gitee Repo stars"
    />
  </a>&nbsp;
  <a
    href="https://tongji.baidu.com/web/welcome/ico?s=e7059486ad3b16e21ea7058836c51b9b"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://img.shields.io/badge/Baidu-%E7%BB%9F%E8%AE%A1-blue"
      alt="百度统计"
    />
  </a>
</p>

本指南是 [Arch Linux 安装使用教程](https://github.com/ArchLinuxStudio/ArchLinuxTutorial) 的下游文档，相比原教程，本指南进行了如下更改：

1. 📖 格式优化 —— 由 VuePress 驱动，相对原教程格式进行优化
2. 🎏 详细介绍 —— 对安装的细节和原理进行了更为详细的说明，知其然知其所以然
3. 🏝️ 图文丰富 —— 增加了更多可视化内容，更加生动形象
4. ❎ 内容和谐 —— 删除了部分不和谐的内容，如有需要请参阅原文档
5. ✅ 实用至上 —— 遵循 arch 实用性原则，避免意识形态问题，对非自由软件更加包容

## 📑 章节信息

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash{4-5}
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh{4-5}
brew install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```bat{5-6}
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::::

其它系统请参阅 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 安装 `Yarn`。

## 🔔 隐私提醒

本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。

## 🌱 参与贡献

欢迎对指南内容以及网站源码做出贡献，也欢迎对本指南的上游文档做出贡献。

目前指南存在的问题包括但不限于：

1. 文档部分格式依然未完成优化
2. 由于使用 VuePress V2 Beta 版本导致兼容性问题缺失了部分插件（评论）
3. 缺失外语翻译

更多信息请参阅 [贡献指南](/contribute.md) 章节。

## 🎋 版权说明

[![by-sa](./static/svg/by-sa.svg)](http://creativecommons.org/licenses/by-sa/4.0/)

网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-sa/4.0/) 进行许可。

### 特殊说明

#### 字体

- [Segoe UI Emoji](https://docs.microsoft.com/zh-cn/typography/font-list/segoe-ui-emoji) © 2018 Microsoft Corporation. All Rights Reserved.

更多信息请参阅 [关于指南](/about.md#版权声明) 章节。
