<!--suppress HtmlDeprecatedAttribute -->
<p align="center">
  <a href="https://arch.icekylin.online/">
    <img alt="logo" src="./docs/public/images/arch.svg"/>
  </a>
</p>

<p align="center">
  <a
    href="https://actions-badge.atrox.dev/nakanomikuorg/arch-guide/goto?ref=main"
   >
    <img
      alt="Build Status"
      src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fnakanomikuorg%2Farch-guide%2Fbadge%3Fref%3Dmain&style=flat"
    />
  </a>
  <a
    href="https://hits.seeyoufarm.com"
  >
    <img
      src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fnakanomikuorg%2Farch-guide&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"
    />
  </a>
  <a
    href="https://github.com/nakanomikuorg/arch-guide"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/nakanomikuorg/arch-guide"
    />
  </a>
  <a
    href="https://github.com/nakanomikuorg/arch-guide"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="GitHub Repo stars"
      src="https://img.shields.io/github/stars/nakanomikuorg/arch-guide?style=social"
    />
  </a>
  <a
    href="https://github.com/nakanomikuorg/arch-guide/blob/main/LICENSE"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="GitHub"
      src="https://img.shields.io/github/license/nakanomikuorg/arch-guide"
    >
  </a>
  <a
    href="https://arch.icekylin.online/postscript/contributor-covenant.html"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      alt="Contributor Covenant"
      src="https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg"
    />
  </a>
</p>

# archlinux 简明指南

> [📖 阅读地址](https://arch.icekylin.online/)
>
> 让 archlinux 成为你的日常系统吧！

- 📖 VitePress 驱动，格式优化
- 📚 细节和原理进行了详细的说明，知其然知其所以然
- 🏝️ 增加了更多可视化内容，生动形象
- ❎ 删除了部分内容，如有需要请参阅原文档
- ✅ 遵循 arch 实用性原则，避免意识形态问题，对非自由软件更加包容
- 🌱 目前指南有许多需要改进的地方，参阅贡献章节帮助完善

📚 本指南包含 archlinux 安装、配置、维护等，帮助新手快速上手。

## 文档施工中

## 相关信息

本指南派生自 [Arch Linux 安装使用教程](https://github.com/ArchLinuxStudio/ArchLinuxTutorial)。

## 本地运行

### Pacman

```shell
sudo pacman -S nodejs pnpm # 安装 nodejs 和 PnpM
git clone https://github.com/nakanomikuorg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

### HomeBrew

```shell
brew install pnpm # 安装 PnpM
git clone https://github.com/nakanomikuorg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

### Scoop

```powershell
scoop install nodejs # 安装 nodejs
scoop install pnpm # 安装 PnpM
git clone https://github.com/nakanomikuorg/arch-guide.git
cd ./arch-guide
pnpm i
pnpm docs:dev
```

### Docker

```shell
git clone https://github.com/nakanomikuorg/arch-guide.git
cd ./arch-guide
# 如需使用代理请取消注释 Dockerfile 中的 ENV 并适当修改
docker compose up -d
```

其它系统请参阅 [PnpM 中文文档](https://pnpm.io/zh/installation) 安装 `PnpM`。

## 隐私提醒

本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。

## 参与贡献

欢迎对指南内容以及网站源码做出贡献，也欢迎对本指南的上游文档做出贡献。

更多信息请参阅 [贡献指南](https://arch.icekylin.online/postscript/contribute)。

## 版权说明

网站源代码采用 MIT
许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)
进行许可。

更多信息请参阅 [版权说明](https://arch.icekylin.online/postscript/copyright)。

## 贡献者

<a href="https://github.com/nakanomikuorg/arch-guide/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nakanomikuorg/arch-guide" alt="contributors"/>
</a>

## Star 历史

[![Star History](https://starchart.cc/nakanomikuorg/arch-guide.svg)](https://starchart.cc/nakanomikuorg/arch-guide)
