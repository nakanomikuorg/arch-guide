# 序章

> ### 🎐 千里之行始于足下
>
> 本指南包含从 archlinux 安装、显卡驱动、日常软件配置、多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！

::: warning

🚧 文档施工中

:::

## 📕 相关信息

本指南派生自 [Arch Linux 安装使用教程](https://github.com/ArchLinuxStudio/ArchLinuxTutorial)。

## 💻 本地运行

::: code-group

```bash{4-5} [Pacman]
sudo pacman -S nodejs pnpm # 安装 nodejs 和 PnpM
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

```zsh{4-5} [HomeBrew]
brew install pnpm # 安装 PnpM
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

```powershell{5-6} [Scoop]
scoop install nodejs # 安装 nodejs
scoop install pnpm # 安装 PnpM
git clone https://github.com/NakanoMikuOrg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

:::

其它系统请参阅 [PnpM 中文文档](https://pnpm.io/zh/installation) 安装 `PnpM`。

## 🔔 隐私提醒

本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。

## 🌱 参与贡献

欢迎对指南内容以及网站源码做出贡献，也欢迎对本指南的上游文档做出贡献。

更多信息请参阅 [贡献指南](../postscript/contribute.md)。

## 💎 版权说明

网站源代码采用 MIT
许可证；未经特殊说明，本作品采用[知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)进行许可。

更多信息请参阅 [版权说明](../postscript/copyright.md)。
