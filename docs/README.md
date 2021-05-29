---
home: true
heroImage: "/static/svg/arch.svg"
heroText: archlinux 简明指南
tagline: 📖 让 archlinux 成为你的常用系统吧！ ❤️️
actions:
  - text: 🍕 开始阅读
    link: "/prologue.html"
    type: primary
  - text: 🍺 Github
    link: "https://github.com/NakanoMikuOrg/arch-guide"
    type: secondary
navbar: true
features:
  - title: 1. 📖 格式优化
    details: 由 VuePress 驱动，相对原教程格式进行优化
  - title: 2. 🎏 详细介绍
    details: 对安装的细节和原理进行了更为详细的说明，知其然知其所以然
  - title: 3. 🏝️ 图文丰富
    details: 增加了更多可视化内容，更加生动形象
  - title: 4. ❎ 内容和谐
    details: 删除了部分不和谐的内容，如有需要请参阅原文档
  - title: 5. ✅ 实用至上
    details: 遵循 arch 实用性原则，避免意识形态问题，对非自由软件更加包容
  - title: 6. 🌱 参与贡献
    details: 目前指南有许多需要改进的地方，参阅贡献章节帮助完善
footer: '<p style="font-size: 8px">
  Code licensed under MIT, documentation under
  <a
    href="http://creativecommons.org/licenses/by-sa/4.0/"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >CC BY-SA 4.0</a
  >. Made with ❤️️ love by
  <a
    href="https://github.com/ice-kylin"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >icekylin</a
  >.
</p>'
footerHtml: true
---

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh
brew install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```cmd
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

1. 文档部分内容格式依然为完成优化
2. 由于使用 VuePress V2 Beta 版本导致兼容性问题缺失了部分插件（评论）
3. 缺失外语翻译

更多信息请参阅 [贡献](/contribute.md) 章节。

## 🪴 版权说明

[![by-sa](./static/svg/by-sa.svg)](http://creativecommons.org/licenses/by-sa/4.0/)

网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-sa/4.0/) 进行许可。

### 特殊说明

#### 字体

- [Segoe UI Emoji](https://docs.microsoft.com/zh-cn/typography/font-list/segoe-ui-emoji) © 2018 Microsoft Corporation. All Rights Reserved.
