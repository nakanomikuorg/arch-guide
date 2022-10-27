---
sidebarDepth: 2
prev: /advanced/btrfs.md
---

# 聊天通讯

> ### 🍻 海上生明月，天涯共此时
>
> 这一小节讨论在 archlinux 上安装常用的聊天通讯软件

> ### 🔖 这一节将会讨论：
>
> ::: details 目录
>
> [[toc]]
>
> :::

::: tip ℹ️ 提示

指南中带有 <sup>aur</sup> 角标的软件代表是在 [AUR](https://aur.archlinux.org/)（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。

指南中带有 <sup>cn</sup> 角标的软件代表是在 [archlinuxcn](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。

指南中带有 <sup>EULA</sup> 角标的软件代表是 [专有软件](https://www.gnu.org/proprietary/proprietary.html)。请自行斟酌是否使用。

:::

## 💬 即时通讯

### Telegram

Telegram（电报）是跨平台的即时通信软件。其客户端是自由软件（桌面端在 [GPLv3](https://github.com/telegramdesktop/tdesktop/blob/dev/LICENSE) 协议下发布），但服务器是专有软件。

Telegram 有两种加密模式：

- 一般聊天 —— 使用**端到端**的加密通信，但服务端会有访问密钥的权限，而且可以经由多重设备登录
- 秘密聊天 —— 使用**端对端**的加密通信，而且只能经由两个特定设备登录

官方宣称当两名用户进行通信时，第三方包含管理人员皆无法访问用户的通信内容。当用户在进行秘密聊天时，消息包含多媒体皆可以被指定为自毁消息，当消息被用户阅读之后，消息在指定的时间内会自动销毁。一旦消息过期，消息会消失在用户的设备上。

1. 安装 `Telegram`<sup>community / cn / aur</sup>：

   :::: code-group
   ::: code-group-item community

   ```sh
   sudo pacman -S telegram-desktop
   ```

   :::
   ::: code-group-item cn (git)

   ```sh
   sudo pacman -S telegram-desktop-git
   ```

   :::
   ::: code-group-item aur

   ```sh
   yay -S telegram-desktop-bin
   ```

   :::
   ::: code-group-item aur（dev）

   ```sh
   yay -S telegram-desktop-bin-dev
   ```

   :::
   ::::

   ![telegram](../static/apps/communication/telegram.png)

2. 调整隐私权限以及自动下载：

   - 在 `Settings`（设置） > `Advanced`（高级） > `Automatic media download`（自动媒体下载） 中分别将 `In private chats`（私聊中）、`In groups`（群组中） 和 `In channels`（频道中） 的 `Files`（文件） 关掉，以避免下载病毒以及垃圾文件
   - 在 `Settings`（设置） > `Privacy and Security`（隐私和安全） > `Privacy`（隐私） 中将 `Phone number`（电话号码） 改为 `Nobody`（仅联系人可见）、将 `Forwarded messages`（转发的消息）、`Calls`（语音通话） 和 `Groups & channels`（邀请权限） 分别改为 `My contacts`（仅联系人）

     ::: tip ℹ️ 提示

     更进一步，可将 `Phone number` 中的 `Who can find me by my number` 改为 `My contacts`，这将使只有双向联系人（即双方手机都有对方的电话号码）才可以通过电话号码添加您为好友。这可以在一定程度增加安全性。

     :::

> #### 💕 相关链接：archlinux Telegram 相关群组
>
> - [#archlinux-cn](https://t.me/archlinuxcn_group)
> - [#archlinux-cn-offtopic](https://t.me/archlinuxcn_offtopic)
> - [篝ノ雾枝的咕咕小屋 | ArchLinux Studio](https://t.me/kdwu1fan)

::: tip ℹ️ 提示

目前官方中文语言包还不完整，可以通过点击第三方语言包链接设置 Telegram 为中文：

- 简体：
  - [聪聪](https://t.me/setlanguage/zhcncc)
  - [江湖](https://t.me/setlanguage/jianghu)
  - [langCN](https://t.me/setlanguage/zhlangcn)
  - [zh-hans](https://t.me/setlanguage/zh-hans-beta)
  - [Moecn](https://t.me/setlanguage/moecn)
- 繁体：
  - [繁體一](https://t.me/setlanguage/hongkong)
  - [繁體二](https://t.me/setlanguage/zhhant-hk)

:::

::: tip ℹ️ 提示

虽然 Telegram 很“自由”，但也带来了很多问题：

- 牵涉恐怖活动 —— 2015 年 11 月，由于伊斯兰国（ISIS）相关组织使用频繁，Telegram 移除了近 250 个所使用广播频道，并屏蔽其所属账号并且持续每天移除近百频道
- 非法出售个人信息 —— 2020 年 3 月中旬，中华人民共和国江苏园区公安分局网安大队在“净网 2020”专项行动的网络巡查中获取了一条网民通过 Telegram 出售公民个人信息的线索，并于 4 月 22 日在广东东莞和湖南衡阳逮捕 6 名嫌疑犯，查获过百万条公民个人信息
- 传播钓鱼木马 —— 2020 年 12 月 26 日，金山毒霸安全团队通过“捕风”威胁感知系统捕获一类新的钓鱼木马，该类木马在 Telegram 群组中传播，通过命名成各种时政热点消息的标题或者更改图标伪装成正规软件，诱使用户点击
- 传播色情、侵犯著作权的内容 —— 2018 年下半年至 2020 年 3 月间，韩国有人通过 Telegram 组建多个聊天室并收取费用，进行了有组织的、大规模的性虐待事件，即震惊韩国社会的 N 号房事件
- 颠覆国家政权 —— 2019 年 6 月，“反修例运动”期间，香港很多“抗议者”使用 Telegram 来逃避电子监视

使用 Telegram 时注意安全，保护好个人隐私；同时也要注意谨言慎行。

:::

> #### 🍧 碎碎念
>
> 道也者，不可须臾离也；可离，非道也。是故君子戒慎乎其所不睹，恐惧乎其所不闻。莫见乎隐，莫显乎微，故君子慎其独也。

### QQ

QQ 在 Linux 下确实有官方原生的版本 `linuxqq`，但是体验极差，不建议安装。

推荐使用基于 [`deepin-wine5`](https://aur.archlinux.org/packages/deepin-wine5)<sup>EULA / community / cn / aur</sup> 的 QQ。

1. 安装 [`deepin-wine-qq`](https://aur.archlinux.org/packages/deepin-wine-qq/)<sup>aur</sup>：

   ```sh
   yay -S deepin-wine-qq
   ```

   ![qq-1](../static/apps/communication/qq-1.png)

2. 参考 [deepin-wine5 相关](../advanced/debug.md#deepin-wine5-相关) 完成配置：

   ![qq-2](../static/apps/communication/qq-2.png)

#### 其它版本

以下为其它的 QQ 版本，但体验一般：

- [`linuxqq`](https://aur.archlinux.org/packages/linuxqq/)<sup>EULA / cn / aur</sup> —— 腾讯官方的原生 QQ，体验极差

  :::: code-group
  ::: code-group-item cn

  ```sh
  sudo pacman -S linuxqq
  ```

  :::
  ::: code-group-item aur

  ```sh
  yay -S aur/linuxqq
  ```

  :::
  ::::

#### 第三方

以下为第三方版本 QQ

- Icalingua [`Icalingua`](https://aur.archlinux.org/packages/icalingua/)<sup>aur</sup> - electron 开发的第三方~~QQ~~ ([~~github~~](https://github.com/Icalingua/Icalingua))(作者已删库)
  ```sh
  yay -S icalingua
  ```
- Icalingua++ [`Icalingua++`](https://aur.archlinux.org/packages/icalingua++/)<sup>aur</sup> - electron 开发的第三方 QQ ([github](https://github.com/Icalingua/Icalingua++))(为 icalingua 升级版)
  ```sh
  yay -S icalingua++
  ```

### 微信

推荐使用基于 `deepin-wine5` 的微信。

1. 安装 [`com.qq.weixin.deepin`](https://aur.archlinux.org/packages/com.qq.weixin.deepin/)<sup>EULA / aur</sup>：

   ```sh
   yay -S com.qq.weixin.deepin
   ```

   ![wechat-1](../static/apps/communication/wechat-1.png)

2. 参考 [deepin-wine5 相关](../advanced/debug.md#deepin-wine5-相关) 完成配置：

   ![wechat-2](../static/apps/communication/wechat-2.png)

#### 其它版本

以下为其它的微信版本，但体验一般：

- [`wechat-uos`](https://aur.archlinux.org/packages/wechat-uos/)<sup>aur</sup> —— UOS 版本原生微信的移植版本

  ```sh
  yay -S wechat-uos
  ```

### Skype

Skype 是一款通信应用软件，可通过互联网为电脑、平板电脑和移动设备提供与其它联网设备或传统电话 / 智能手机间进行视频通话和语音通话的服务。用户也可通过 Skype 收发即时通讯信息、传输文件、收发多媒体信息、进行视频会议。

目前 Skype 归微软所有。

安装 [Skype](https://www.skype.com/zh-Hans/)<sup>EULA / cn / aur</sup>：

:::: code-group
::: code-group-item cn

```sh
sudo pacman -S skypeforlinux-stable-bin
```

:::
::: code-group-item aur

```sh
yay -S aur/skypeforlinux-stable-bin
```

:::
::: code-group-item cn（preview）

```sh
sudo pacman -S skypeforlinux-preview-bin
```

:::
::: code-group-item aur（preview）

```sh
yay -S aur/skypeforlinux-preview-bin
```

:::
::::

![skype](../static/apps/communication/skype.png)

### Discord

[Discord](https://discord.com/) 是一款专为社区设计的免费网络实时通话软件与数字发行平台，主要针对游戏玩家、教育人士及商业人士，用户之间可以在其中的聊天频道通过信息、图片、视频和音频进行互动。

安装 [Discord](https://archlinux.org/packages/community/x86_64/discord/)：

```sh
sudo pacman -S discord
```

![discord](../static/apps/communication/discord.png)

::: tip ℹ️ 提示

类似 Telegram，Discord 同样存在诸多不正当内容（包括但不限于种族歧视、色情内容等）。

请注意安全、保护好隐私、文明上网。
:::

### TeamSpeak 3

一款代替 `YY语音` `Discord` 等游戏语音聊天软件，有占用资源低、连接快捷、自带 Opus 音频解码器、无广告、全平台、语音加密传输、可自建服务器、可随意调节的“语音感应激活”功能告别通讯底噪和键盘噪音。

```sh
sudo pacman -S teamspeak3
```

![teamspeak3](../static/apps/communication/teamspeak3.png)
::: tip ℹ️ 提示

1. [中文汉化](https://www.wevg.org/archives/fix-ts3-linux-plugin/) 没有目录就创建目录，脚本需要给执行权限

2. 直接 `/opt/teamspeak3/package_inst Chinese_Translation_zh-CN.ts3_translation`

3. 以上汉化 二选一

:::

## 🤝🏻 团队合作

### Slack

[Slack](https://slack.com/intl/zh-cn/features) 是一款基于云端运算的即时通讯软件。为团队和工作提供一个单一的平台。类似 Discord，也分有许多频道，通过频道组织工作。

安装 [Slack](https://aur.archlinux.org/packages/slack-desktop/)<sup>EULA / cn / aur</sup>：

:::: code-group
::: code-group-item cn

```sh
sudo pacman -S slack-desktop
```

:::
::: code-group-item aur

```sh
yay -S aur/slack-desktop
```

:::
::::

![slack](../static/apps/communication/slack.png)

## 📹 网络会议

### Zoom

安装 [Zoom](https://aur.archlinux.org/packages/zoom/)：

```sh
yay -S zoom
```

![zoom](../static/apps/communication/zoom.png)

### 腾讯会议

1. 安装 [`com.tencent.meeting.deepin`](https://aur.archlinux.org/packages/com.tencent.meeting.deepin/)<sup>EULA / aur</sup>：

   ```sh
   yay -S com.tencent.meeting.deepin
   ```

   ![meeting-1](../static/apps/communication/meeting-1.png)

2. 参考 [deepin-wine5 相关](../advanced/debug.md#deepin-wine5-相关) 完成配置：

   ![meeting-2](../static/apps/communication/meeting-2.png)

## ✉️ 电子邮件

### Thunderbird

Mozilla Thunderbird（雷鸟）是由 Mozilla 基金会研发的一款自由开源的跨平台电子邮件客户端、新闻阅读器、聚合器以及即时通信软件。

安装 [Thunderbird](https://archlinux.org/packages/extra/x86_64/thunderbird/)：

```sh
sudo pacman -S thunderbird
```

![thunderbird](../static/apps/communication/thunderbird.png)

### KMail

KMail 是一款功能先进的电子邮件客户端，能与 GMail 等常用电子邮件服务提供商进行整合。KMail 支持各种电子邮件协议，包括 POP3、IMAP、Microsoft Exchange（EWS）等。

安装 [KMail](https://archlinux.org/packages/extra/x86_64/kmail/)：

```sh
sudo pacman -S kmail
```

![kmail](../static/apps/communication/kmail.png)

### Mailspring

MailSpring 是一款界面简约、操作便捷、功能出众的邮件管理工具。MailSpring 官方版可以帮助用户管理多个邮箱，提高工作效率，同时还能够对重要事项进行提醒，并可以编辑自己的签名，给大家带来了不一样的感受和体验。其客户端在 github 上开源，但使用时需要注册 mailspring 账户。

KDE 用户使用 mailspring 前需要安装`gnome-keyring`

安装 [mailspring](https://github.com/Foundry376/Mailspring)<sup>EULA / cn / aur</sup>：

:::: code-group
::: code-group-item cn

```sh
sudo pacman -S mailspring
```

:::
::: code-group-item aur

```sh
yay -S aur/mailspring
```

:::
::::

![mailspring](https://raw.githubusercontent.com/Foundry376/Mailspring/master/screenshots/hero_graphic_mac%402x.png)
