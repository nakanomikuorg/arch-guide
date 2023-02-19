# 序章

## 🚧 文档施工中

> ### 🎐 千里之行始于足下
>
> 本指南包含从 archlinux 安装、显卡驱动、日常软件配置、多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！

## 📕 相关信息

本指南派生自 [Arch Linux 安装使用教程](https://github.com/ArchLinuxStudio/ArchLinuxTutorial)，相比原教程，本指南进行了如下更改：

1. 📖 格式优化 —— 由 VitePress 驱动，相对原教程格式进行优化
2. 🎏 详细介绍 —— 对安装的细节和原理进行了更为详细的说明，知其然知其所以然
3. 🏝️ 图文丰富 —— 增加了更多可视化内容，更加生动形象
4. ❎ 内容和谐 —— 删除了部分不和谐的内容，如有需要请参阅原文档
5. ✅ 实用至上 —— 遵循 arch 实用性原则，避免意识形态问题，对非自由软件更加包容

## 📑 章节信息

## 💻 本地运行

::: code-group

```bash{4-5} [Pacman]
sudo pacman -S nodejs pnpm # 安装 nodejs 和 pnpm
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

```zsh{4-5} [HomeBrew]
brew install pnpm # 安装 pnpm
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

```bat{5-6} [Scoop]
scoop install nodejs # 安装 nodejs
scoop install pnpm # 安装 pnpm
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
pnpm install
pnpm docs:dev
```

:::

其它系统请参阅 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 安装 `Yarn`。

## 🔔 隐私提醒

本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。

## 🌱 参与贡献

欢迎对指南内容以及网站源码做出贡献，也欢迎对本指南的上游文档做出贡献。

目前指南存在的问题包括但不限于：

1. 文档部分格式依然未完成优化
2. 由于使用 VitePress V1 Alpha 版本导致兼容性问题缺失了部分插件（评论）
3. 缺失外语翻译

更多信息请参阅 [贡献指南](/postscript/contribute.md)。

## 💎 版权说明

[![by-sa](./static/svg/by-sa.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)

网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 进行许可。

更多信息请参阅 [版权说明](/postscript/copyright.md)。
