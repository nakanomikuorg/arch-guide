# 了解 archlinux

> ### 🌸 知己知彼，百战不殆
>
> 上一小节，我们已经讨论了萌新是否应该将 archlinux 作为 TA 们的入门发行版，以及 archlinux 是否能满足你的需求的相关话题
>
> 这一小节，笔者则重新 🔥 点燃大家安装使用 archlinux 的信心，来讨论一下 archlinux 的独特之处

## archlinux 的历史

![Judd Vinet](../../assets/guide/prepare/understand/vinet.png)

- `2001 ~ 2002` —— 加拿大程序员兼吉他手 [Judd Vinet](https://github.com/jvinet) 从 2001 年初开始开发 archlinux，并在 2002
  年 3 月 11 日正式发行 0.1 版。它受到 Slackware、BSD、PLD Linux 和 CRUX 的启发。但是那时候这些发行版缺少软件包管理器。所以
  Judd Vinet 以同样的简洁原则建立了 archlinux 发行版，并编写了 `pacman` 软件包管理器，自动处理软件包的安装、删除和更新。
- `2005` —— 2005 年 7 月 8 日，用 MediaWiki
  搭建的 [ArchWiki](<https://wiki.archlinux.org/title/Main_page_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>) 开始运行。
- `2007` —— 2007 下半年，Judd Vinet 退出了 archlinux 的开发，并把统治权交给美国程序员 Aaron Griffin。
- `2012 ~ 2013` —— 2012 年 7 月发行的 archlinux 安装 ISO 映像开始放弃安装框架而转为使用不同的辅助脚本 [arch-install-scripts](https://archlinux.org/packages/extra/any/arch-install-scripts/)
  。并逐步开始将初始化系统迁移至 Systemd。
- `2017` —— archlinux 抛弃 32 位镜像和除 [Multilib 仓库](https://archlinux.org/packages/?sort=&repo=Multilib&q=&maintainer=&flagged=) 外的所有 32 位包的维护。
- `2020` —— Arch 开始用新的流程选择未来的领袖，Aaron Griffin 决定不再担任项目领导，因此 Arch [通过选举方式正式确认 Levente Polyak 为新的领导](https://archlinux.org/news/the-future-of-the-arch-linux-project-leader/)。

值得说明的是，archlinux 从早期开始就树立起了开放、友好和社区互助的形象。早期 archlinux 用户 Ben Mazer 在 2003
年发表的 [这篇文章](https://www.osnews.com/story/4827/) 可以看出这一点。

> _I think the best thing about ArchLinux is its “support”. Even though ArchLinux is not profit, it has got lots of
> people willing to help you._
>
> _There are active forums at both Archlinux.org and linuxquestions.org._
>
> _There is a very active IRC room where the developers (and other users) are always willing to lend a hand. I always
> learn something new when talking to them._
>
> -- Ben Mazer (2003-10-15)

## archlinux 的特点

archlinux 的许多特点如同双刃剑，既是优点，也是缺点。

### 1. 简洁

archlinux 将简洁定义为：避免任何不必要的添加、修改和复杂增加。简单来说，archlinux 是一个可以让用户自己动手打造的操作系统。从安装到管理，archlinux
放手让用户处理一切。

用户可以自己决定使用哪种桌面环境、安装哪些组件和服务。这种精细化的控制能够赋予你一个精简的操作系统，可以让用户自由选择所需的组件来构建属于用户自己的系统。

但也正因为此配置 archlinux 相对于其它 Linux 发行版来说是繁琐。但繁琐是自由的代价。如果你是一个 DIY 爱好者，那么相信你会爱上
archlinux 的 ❤️。

### 2. 滚动更新（现代）

滚动更新（rolling update）是指软件开发中经常性将更新发送到软件的概念。相较于滚动发行，有标准版本和小数点版本的版本号开发模式，必需通过重新安装以取代先前的发行版。archlinux
是没有版本概念的，它始终保持最新的状态，通俗地理解就相当于把发行版比喻为一部车，ubuntu 更新就是换一部新的，而 archlinux
就是把车里面旧的配件换成新的。

archlinux 是一个滚动发行版，这意味着：

1. 新的内核和应用程序版本一经发布，就会立即向用户推送
2. 当大多数其它 Linux 发行版还在提供旧的 Linux 内核版本时，archlinux 会迅速向用户提供最新的内核
3. 而软件也是如此。如果 archlinux 仓库中的软件发布了新版本，archlinux 用户通常会比其他用户先获得新版本
4. 在滚动发行模式下，一切都是新鲜和前沿的。用户不必把操作系统从一个版本升级到另一个版本，只要使用 `pacman`
   的升级命令，便会始终保持最新的版本

### 3. 实用

archlinux 注重实用性，避免意识形态之争。最终的设计决策都是由开发者的共识决定。开发者依赖基于事实的技术分析和讨论，避免政治因素，不会被流行观点左右。

archlinux 的仓库中包含大量的软件包和编译脚本。用户可以按照需要自由选择。仓库中既提供了开源、自由的软件，**也提供了闭源软件**
（大部分闭源软件在 `AUR` 仓库中）。**实用性大于意识形态**。

### 4. 以用户为中心

许多 Linux 发行版都试图变得更“用户友好”，archlinux 则一直是且永远会是“以用户为中心”。archlinux
是为了满足贡献者的需求，而不是为了吸引尽可能多的用户。archlinux 适用于乐于自己动手的用户，他们愿意花时间阅读文档，解决自己的问题。

archlinux
鼓励每一个用户 [参与](<https://wiki.archlinux.org/title/Getting_involved_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)
和贡献，报告和帮助修复 [bugs](https://bugs.archlinux.org/)，提供软件包补丁和参加核心 [项目](https://git.archlinux.org/) ——
archlinux 开发者都是志愿者，通过持续的贡献成为团队的一员。

Archers
可以自行贡献软件包到 [Arch 用户仓库](<https://wiki.archlinux.org/title/Arch_User_Repository_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)（`AUR`
）；提升 [ArchWiki 文档质量](<https://wiki.archlinux.org/title/Main_page_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)
；在 [论坛](https://bbs.archlinux.org/)、[邮件列表](https://lists.archlinux.org/listinfo/)
或者 [IRC](<https://wiki.archlinux.org/title/Arch_IRC_channels_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)
中给其他用户提供技术支持。archlinux
是全球很多用户的选择，已经有很多 [国际社区](<https://wiki.archlinux.org/title/International_communities_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)
提供帮助和文档翻译。

同样的，若希望为本指南做出贡献，以帮助更多的人，请参阅 [贡献指南](../../postscript/contribute.md)。

::: info 💕 相关链接：archlinux 中文社区

- [Arch Linux 中文社区](https://www.archlinuxcn.org/)
- [Arch Linux 中文论坛](https://bbs.archlinuxcn.org/)
- [archlinux 百度贴吧](https://tieba.baidu.com/f?kw=archlinux)
- [Telegram 交流群](https://t.me/archlinuxcn_group)

:::

::: info 🍧 碎碎念

“用户友好” 和 “以用户为中心” 是不一样的，对吧？

:::

### 5. Arch 用户仓库（AUR）

`AUR` 即 Arch 用户仓库（Arch User Repository）。它包含名为 `PKGBUILD` 的包描述，它可让用户使用 `makepkg`
从源代码编译软件包，然后通过 `pacman` 安装。

创建 `AUR` 的目的是组织和共享社区中的新软件包，并帮助加速将流行的软件包纳入社区仓库。进入官方仓库的大量新软件包都从 `AUR`
开始。在 `AUR` 中，用户可以贡献自己的软件包构建（`PKGBUILD` 和相关文件）。`AUR` 社区可以对 `AUR`
中的软件包进行投票。如果一个软件包变得足够流行（且具有兼容的许可证和良好的打包技术），那么可以将其加入 `pacman` 直接访问的社区仓库中。

### 6. 激进的内核更新机制

archlinux 在更新内核的时候会立即删除旧内核（因为内核也是一个软件包 `linux` / `linux-zen`...，由 `pacman` 更新）

立即删除旧的内核要求 archlinux 必须重启来加载新的内核，否则容易发生诡异的问题。这是因为 Linux
所谓的“内核”包含有大量的动态加载模块，如果在某次启动后，某个模块没有被加载过，然后系统内核更新了并且删除了旧的内核，那么这些模块将永远不能被加载了——因为它们随着旧内核被删掉了。除非用户重启系统以完整切换到新的内核以使用新版的动态加载模块。

笔者曾经就因为在升级内核后插上声卡无法工作而感到困惑，后来才意识到问题所在。所以建议在更新内核后重新启动系统以避免问题的产生。（win10
更新也要重启，对吧？）

> #### 📑 相关资料：什么是内核？
>
> _内核是计算机操作系统的核心组件，对系统有完全的控制。开机时最先启动，然后负责后续的启动工作。它负责处理其它软件的请求，将这些请求转化为中央处理器的数据处理请求。内核还负责管理内存，管理系统和其它打印机、扬声器等外围设备的通讯，是操作系统最基础的部分_
>
> -- Wikipedia

### 7. 软件包管理体系

不同于 Debian 系列的 `apt / dpkg` 和 Red Hat 系列的 `dnf（yum）/ rpm` 包管理体系，archlinux 只用了一个工具 pacman
就解决了获取和安装两个功能。这降低了为 archlinux 制作软件包的门槛，这也是 AUR 几乎能涵盖整个 Linux 软件生态的主要原因。但是这也导致
pacman 不支持虚包（virtual package）。

::: info 📑 相关资料：什么是虚包？

虚包是一个通用名称，适用于一组提供类似的基本功能的包中的任何一个包。

:::

### 8. 由社区创建、支持和拥有

Ubuntu 由 [Canonical](https://canonical.com/) 支持，Fedora 来自 [Red Hat](https://www.redhat.com/zh)（现在是 IBM
的一部分），openSUSE 来自 [SUSE](https://www.suse.com/zh-cn/)。这些主流发行版都是企业支持的。

这本身并不是坏事或过错，但是有一些人不喜欢企业参与开源项目。

正如 Debian 一样，archlinux 是为数不多的仅由社区创建、支持和拥有的的 Linux 发行项目之一。

## 与众不同的 archlinux

> 了解 archlinux 与其它的发行版之间的区别，有助于判断 archlinux 是否能满足个人的需求

### ![Ubuntu](../../assets/guide/prepare/understand/os-ubuntu.png) Ubuntu / Kubuntu

- Ubuntu 基于 Debian，由 Canonical 公司提供商业支持；而 archlinux 是由社区创建、支持和拥有的
- Ubuntu 提供自动配置好的系统（包括桌面环境），对用户来说更“友好”；而 archlinux 设计了一个最小化的基础系统，然后严重依赖用户按自己的特定需求进行定制
- Ubuntu 每 6 个月发布一次新版本；而 archlinux 采用滚动升级
- archlinux 提供类 ports 的软件包构建系统和 Arch User Repository（`AUR`），用户可以分享源代码编译脚本，然后用 `pacman`
  安装管理；而 Ubuntu 使用更复杂的 `apt`，可以通过 PPA 分发软件

### ![Linux Mint](../../assets/guide/prepare/understand/os-linuxmint.png) Linux Mint

- 基于 Ubuntu 的 Linux Mint
  - Linux Mint 主要运行 Cinnamon 和 MATE 作为它的图形界面，也可以选择 KDE 或者 Xfce4，同时这些桌面环境是开箱即用的；而
    archlinux 需要手动选择并安装桌面环境
  - 基于 Ubuntu 的 Linux Mint 每 6 个月发布一次新版本，时间大约是在新的 Ubuntu 版本发布一个月以后；而 archlinux 采用滚动升级
  - Linux Mint 几乎与 Ubuntu 软件仓库完全兼容，采用 `apt` 管理和 `.deb` 软件包
- 基于 Debian 的 Linux Mint（LMDE）
  - LMDE 基于 Debian 稳定版，并且采取不间断的对于 bug 和安全性问题进行修复的方式，同时间也会保持 Mint 其它组件的更新；而
    archlinux 采用滚动升级
- Linux Mint 提供一种更为开箱即用的用户体验，免去用户在安装系统后还要自己安装一系列满足基本使用需求的软件

### ![Manjaro Linux](../../assets/guide/prepare/understand/os-manjaro.png) Manjaro Linux

- Manjaro Linux 基于 archlinux
- Manjaro Linux 提供自动配置好的系统（包括桌面环境），对用户来说更“友好”；而 archlinux 设计了一个最小化的基础系统，然后严重依赖用户按自己的特定需求进行定制
- Manjaro Linux 和 archlinux 一样采用滚动更新；**但是 Manjaro 的更新策略不如 archlinux 激进，它的软件版本一般都落后于
  archlinux 若干周，而对于这类滚动更新的发行版来说，若干周的版本差距足以造成严重的兼容性问题**
- Manjaro Linux 虽然基于 archlinux，但拥有自己独立的软件仓库，**并且值得注意的是，Manjaro Linux 的软件源，早已不和 archlinux
  的相兼容**
- Manjaro Linux 本身使用三个软件仓库：
  1. 不稳定库，即含有那些不成熟的 archlinux 包，这些包与 archlinux 源有 1-2 天的延后
  2. 测试库，每周同步一次，包含那些 archlinux 不稳定源的包
  3. 稳定库，包含那些由开发团队确认稳定的软件
- Manjaro Linux 确实可以使用 `AUR`，**但是可能会经常遭遇问题**，因为：
  1. `AUR` 实际上不提供现成的软件包，而是提供一个 `PKGBUILD` 和少量的相关文件，让用户自己获取、编译（有时候不需要）、打包一个软件包，而该过程对其构建依赖和依赖项的要求是很严格的
  2. 一旦 Manjaro Linux 提供的仓库里的包名称不同，或版本不符合要求，包构建就会失败
  3. 某些包即使能如愿构建（或修改 `PKGBUILD` 来构建），也无法正常工作，而这通常也是基础软件包的区别造成的
- Manjaro Linux
  的一些做法已经不符合 [arch 之道](<https://wiki.archlinux.org/title/Arch_Linux_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

::: tip ℹ️ 提示

1. Manjaro Linux 和 Arch 是两个完全不同的发行版（为什么有人觉得 Manjaro Linux 是 archlinux 而不觉得 Ubuntu 是 Debian 呢？）
2. 很多 Manjaro Linux 的问题，不能用 archlinux 的解决方案解决
3. 和平共处两项原则：
   - archlinux 用户不觉得自己高人一等，劝导 Manjaro Linux 用户前往对应的社区是善意的行为
   - 不要攻击 archlinux 配置繁琐。繁琐是自由的代价。这是 archlinux 的选择，也是 arch 之道的一部分

:::

> 📔 本节参考资料：
>
> - [ArchWiki](<https://wiki.archlinux.org/title/Arch_compared_to_other_distributions_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)
> - [Why People Are Crazy About Arch Linux? What’s so Special About it?](https://itsfoss.com/why-arch-linux/)
> - [What is Arch User Repository (AUR)? How to Use AUR on Arch and Manjaro Linux?](https://itsfoss.com/aur-arch-linux/)
> - [Linux 服务器几乎从不采用 Arch Linux？](https://www.linuxprobe.com/linux-arch-linux.html)
