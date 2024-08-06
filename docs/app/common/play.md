---
sidebarDepth: 2
---

# 游戏娱乐

> ### 🕹️ 人生得意须尽欢，莫使金樽空对月
>
> 本小节讨论如何在 archlinux 上 👾 玩游戏以及相关的信息，如游戏手柄、管理外配的 RGB 光效等。

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

::: tip ℹ️ 提示

阅读本章前请确认已安装好显卡驱动，否则请先参阅章节 [显卡驱动](../../guide/rookie/graphic-driver.md) 完成显卡驱动的安装。

:::

## 🚂 Steam

<p class="shields normal-img-p">
  <a
    href="https://steamcommunity.com/id/ice-kylin/"
    target="_blank"
    rel="noopener noreferrer"
    ><img
      alt="mySteamFriend"
      src="https://img.shields.io/badge/dynamic/json?label=Steam%20Friends&amp;query=%24.data.totalSubs&amp;url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DsteamFriends%26queryKey%3D76561198392223813&amp;logo=steam&amp;color=0b1a37&amp;labelColor=134375&amp;longCache=true"
  /></a>
</p>

> 🔗 相关链接：
>
> - [ArchWiki 相关内容](<https://wiki.archlinux.org/title/Steam_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

::: tip ℹ️ 提示

在步骤 [6. 安装基础功能包](../../guide/rookie/desktop-env-and-app.md#_6-安装基础功能包) 中若已安装，则无需重复安装。

:::

[Steam](https://store.steampowered.com/) 是 [维尔福公司（Valve）](https://www.valvesoftware.com/zh-cn/) 推出的著名游戏分发平台。在 Steam 上购买并安装游戏不仅仅是支持正版的做法，更是简化了游玩流程、节省了时间。

2018 年 8 月 22 日，Steam [宣布](https://steamcommunity.com/games/221410/announcements/detail/1696055855739350561) 要给 Steam Play 增加一个新组件 Proton，用于支持在 Linux 平台上玩 Windows 的游戏，这个组件是 Wine 的一个分支。经过这些年的发展，体验已经很不错了。关于非 Linux 平台原生的游戏，通过 Steam Play 运行的兼容性列表可在 [ProtonDB](https://www.protondb.com/) 查询。

1. 安装 [Steam](https://archlinux.org/packages/multilib/x86_64/steam/)<sup>EULA</sup>：

安装时需要注意选择显卡所对应的 vulkan，i+n 选择 vulkan-intel，amd 选择 amdvlk

```sh
sudo pacman -S steam
```

![steam-1](../../assets/app/common/play/steam-1.png)

2. 为了能够安装 Windows 下的游戏，还需要在菜单栏 `查看` > `设置` > 侧边栏 `Steam Play` > 勾选 `为所有其他产品启用 Steam Play`，在 `运行其他产品时使用` 中选择 `Proton Experimental`（最新版本）：

   ![steam-2](../../assets/app/common/play/steam-2.png)

   随后即可安装 Windows 平台上的游戏，Steam 会自动下载并安装相关组件：

   ![plants-vs-zombies](../../assets/app/common/play/plants-vs-zombies.png)

::: tip ℹ️ 提示

如果某些游戏启动或者游玩有问题，可以用终端使用 `steam` 命令启动 Steam 客户端，并观察游戏崩溃时的终端报错。一般都是缺少某种依赖造成的，可以根据具体情况自行安装依赖。

同时，ArchWiki 也提供了一个 [查错页面](https://wiki.archlinux.org/title/Steam/Game-specific_troubleshooting)，记录了一些游戏问题的解决方式。

:::

::: tip ℹ️ 提示

此外还有官方 Proton 的派生版本，如 [Proton GE](https://github.com/GloriousEggroll/proton-ge-custom)。可以支持一些额外的，官方暂不支持或支持不完善的游戏。

:::

::: tip ℹ️ 提示

可以在[protondb](https://www.protondb.com/)查看游戏在 linux 的支持情况（如是否可游玩，运行所需要的基本设置等等）

:::

## 👾 Lutris

[Lutris](https://lutris.net/) 是 Linux 上的开源游戏平台。可以使用 Lutris 安装、移除、配置、启动和管理游戏。它可以在一个单一界面中管理的 Linux 游戏、Windows 游戏、仿真控制台游戏和浏览器游戏。它还包含社区编写的安装脚本，使得游戏的安装过程更加简单。

Lutris 支持超过 20 个模拟器并且提供了从七十年代到现在的大多数游戏系统。目前支持的游戏系统包括但不限于：

::: details 支持列表

- Linux 原生
- Windows
- Steam（Linux 和 Windows）
- MS-DOS
- 街机
- Amiga 电脑
- Atari 8 和 16 位计算机和控制器
- 浏览器（Flash 或者 HTML5 游戏）
- Commmodore 8 位计算机
- 基于 SCUMM 的游戏和其它点击式冒险游戏
- Magnavox Odyssey²、Videopac+
- Mattel Intellivision
- NEC PC-Engine Turbographx 16、Supergraphx、PC-FX
- Nintendo NES、SNES、Game Boy、Game Boy Advance、DS
- Game Cube 和 Wii
- Sega Master Sytem、Game Gear、Genesis、Dreamcast
- SNK Neo Geo、Neo Geo Pocket
- Sony PlayStation
- Sony PlayStation 2
- Sony PSP

:::

1. 安装 [Lutris](https://archlinux.org/packages/extra/any/lutris/)<sup>extra / aur</sup>：

   ::: code-group

   ```sh [extra]
   sudo pacman -S lutris
   ```

   ```sh [aur]
   yay -S aur/lutris
   ```

   ```sh [aur (git)]
   yay -S lutris-git
   ```

   :::

2. 参考 [🍷 Wine](daily.md#🍷-wine) 安装 Wine

3. 登录 [Lutris 官方网站](https://lutris.net/) > 在右上角 🔍 搜索框中搜索你想玩的游戏 > 进入搜索到的游戏页面后，可以看到在相应版本右侧有一个 `Install` 按钮，点击后即可拉起 Lutris 进行安装

   ::: tip ℹ️ 提示

   还应仔细阅读相同位置下方的安装说明。

   :::

## 🍷 原生 Wine

通过原生 Wine 也可运行简单的 Windows 小游戏，但是很多情况下需要自行处理 Windows 下的依赖问题。常用的工具是 [Winetricks](https://archlinux.org/packages/multilib/x86_64/winetricks/)。但是这种方式费时费力，只运行无需处理依赖的小游戏或者 GalGame 还好。

详细步骤请参阅 [🍷 Wine](daily.md#🍷-wine)。

## ⛏️ 我的世界

> 🔗 相关链接：
>
> - [ArchWiki 相关内容](<https://wiki.archlinux.org/title/Minecraft_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

我的世界（Minecraft）是一个关于击毁和放置方块的游戏。游戏一开始玩家的主要目的是搭建各种结构使自己免遭夜晚出没的怪物的攻击并生存下来，但随着游戏的进行，玩家们可以合作创造出一些不可思议的、富有想象力的东西。

1. 安装 [Minecraft Launcher（我的世界官服启动器）](https://aur.archlinux.org/packages/minecraft-launcher/)<sup>EULA / cn / aur</sup>：

   ::: code-group

   ```sh [cn]
   sudo pacman -S minecraft-launcher
   ```

   ```sh [aur]
   yay -S aur/minecraft-launcher
   ```

   :::

   ::::: tip ℹ️ 提示

   除了官方启动器，还有第三方启动器 [HMCL（Hello Minecraft! Launcher）](https://hmcl.huangyuhui.net/)，支持模组管理、游戏定制、自动安装（Forge、LiteLoader 和 OptiFine）、模组包创建、UI 定制等。同时，国产第三方启动器如 hmcl 一般支持使用国内镜像源下载游戏，而非使用在国内访问不稳定的官方源下载游戏。

   安装 [HMCL](https://aur.archlinux.org/packages/hmcl/)<sup>cn / aur</sup>：

   ::: code-group

   ```sh [cn]
   sudo pacman -S hmcl
   ```

   ```sh [aur]
   yay -S aur/hmcl
   ```

   :::

   出于安全性的考虑，hmcl 仅在官方提供的构建版本才会包含微软登录功能。为了登陆正版账户，我们可以使用[hmcl-bin](https://aur.archlinux.org/packages/hmcl-bin)<sup>aur</sup>作为启动器：

   ```sh [aur]
   yay -S hmcl-bin
   ```

​ 使用[hmcl-bin](https://aur.archlinux.org/packages/hmcl-bin)<sup>aur</sup>在让我们获取良好的官方支持以外，还能够让其自身使用系统的 java-openjfx 包，符合「低耦合、高内聚」的软件工程原则。

2. 打开 `Minecraft Launcher` > 根据提示登录帐号并下载主程序后即可畅玩：

   ![minecraft-1](../../assets/app/common/play/minecraft-1.png)

   ![minecraft-2](../../assets/app/common/play/minecraft-2.png)

### Minecraft 服务器

1. 安装管理脚本与服务端文件本体
   <sup>EULA / aur</sup>：

   ::: code-group

   ```sh[Java 版]
   yay -S minecraft-server
   ```

   ```sh[基岩版]
   yay -S minecraft-bedrock-server
   ```

   :::

2. 启动服务端

   手动启动服务端：

   ```sh
   minecraftd start
   ```

   设为开机自启：

   ```sh
   systemctl enable minecraftd
   ```

3. 同意 EULA

   修改 `/srv/minecraft/eula.txt`，将其中内容改为：

   ```text
   eula=true
   ```

4. 再次启动服务器

   这次你会发现，启动成功了。

5. 调整服务器

   通过编辑`/etc/conf.d/minecraft`来做一些小的调整 (比如：最大内存，线程数之类的)。

6. 命令介绍
   - `minecraftd start`：启动服务器。
   - `minecraftd restart`：重启服务器。
   - `minecraftd console`：进入服务器控制台，本质是 tmux，所以按`Ctrl + B`再按`D`来退出。你也可以直接在这里输入游戏中的命令。
   - `minecraftd stop`：停止服务器。
   - `minecraftd status`：显示服务器状态统计信息。
   - `minecraftd backup`：备份服务器存档，只能存储 10 个。
   - `minecraftd restore`：从备份恢复服务器文件。

::::: tip ℹ️ 提示

使用`MCSManager`的方式，由于其文档已经很完善，此处不再介绍。

:::::

## 🎮 游戏手柄

一般情况下手柄通过数据线连接计算机即可直接使用。支持无线的手柄（DUALSHOCK® 3、DUALSHOCK® 4、Xbox 360、Xbox One、8BitDo 等）也可以通过蓝牙直接连接，无需额外操作。

### Xbox 无线适配器

虽然无线手柄一般情况下可以通过蓝牙直连，但是通常这样会有较大的延迟。推荐使用 [Xbox 无线适配器](https://www.microsoftstore.com.cn/accessories/microsoft-xbox-wireless-adapter) 以获得近乎有线的低延迟体验。

为了在 archlinux 下使用 Xbox 无线适配器，需要安装第三方开源驱动 [xow](https://github.com/medusalix/xow)。

1. 安装 [xow](https://aur.archlinux.org/packages/xow-git/)<sup>cn / aur</sup>：

   ::: code-group

   ```sh [cn (git)]
   sudo pacman -S xow-git
   ```

   ```sh [aur]
   yay -S xow
   ```

   ```sh [aur (git)]
   yay -S aur/xow-git
   ```

   :::

2. 启动 `xcow` 服务：

   ```sh
   sudo systemctl enable xow.service
   ```

3. 重启计算机，插入 Xbox 无线适配器并和 🕹️ Xbox 手柄配对即可

实际体验和 Windows 下并无差异。对延迟敏感的音游（如 [喵斯快跑](https://store.steampowered.com/app/774171/Muse_Dash/)）在游戏设置中微调偏移值即可。

## 🎛️ 性能监控

类似 Windows 下的 [微星 Afterburner](https://cn.msi.com/Landing/afterburner/graphics-cards)<sup>EULA</sup> 性能显示的部分，Linux 上也有一款同类软件可以监控游戏中的电脑性能（CPU 占用率、帧数等等），名为 [MangoHud](https://github.com/flightlessmango/MangoHud)。

1. 安装 [MangoHud](https://aur.archlinux.org/pkgbase/mangohud/)<sup>aur</sup>：

   ::: code-group

   ```sh [aur]
   yay -S mangohud lib32-mangohud
   ```

   ```sh [aur (git)]
   yay -S mangohud-git lib32-mangohud-git
   ```

   :::

2. 通过以下方法使用 MangoHud：

   - 通用方法

     在启动的游戏前面添加 `mangohud` 前缀：

     ```sh
     mangohud game_command
     ```

   - Steam

     对于 Steam 游戏，在 Steam 库中右键游戏封面 > 点击 `属性...` > 侧边栏 `通用` > 在 `启动选项` 中添加 `MANGOHUD=1 %command%`：

     ![mangohud-1](../../assets/app/common/play/mangohud-1.png)

   - Lutris

     对于 Lutris 游戏，点击右上角的 `更多按钮`（三个点） > 点击 `System preferences`（系统设置） > 选项卡 `System preferences`（系统选项） > 勾选 `Show advanced options`（显示高级选项）> 在 `Command prefix`（命令前缀）中添加 `mangohud`：

     ![mangohud-2](../../assets/app/common/play/mangohud-2.png)

![mangohud-3](../../assets/app/common/play/mangohud-3.png)

::: tip ℹ️ 提示

部分游戏可能不支持 MangoHud。

:::

## 🔥 性能提升

在游戏之前，如果有强烈的性能需要，可先确保 CPU 处于性能模式，可采取两种方式，分别为使用[GameMode](https://github.com/FeralInteractive/gamemode)和手动控制

自动方式

1. 安装[GameMode](https://archlinux.org/packages/extra/x86_64/gamemode/)

   ```sh
   # 安装配置文件
   sudo pacman -S meson systemd git dbus libinih
   # 安装gamemode
   sudo pacman -S gamemode lib32-gamemode
   ```

2. 进行配置，配置模板可以参考[此处](https://github.com/FeralInteractive/gamemode/blob/master/example/gamemode.ini)

   ```sh
   # 进入下载配置文件的文件夹
   sudo cp gamemode.ini ~/.config/gamemode.ini
   # 注意：需要将当前用户名添加到gamemode用户组
   sudo usermod -aG gamemode username
   ```

3. 进行测试，运行`gamemoded -t`

   ```sh
   # 有可能这个测试会失败，可以不用理会
   gamemoded -t
   ```

   ::: tip ℹ️ 在 steam 中使用

   在 steam 的启动选项设置`gamemoderun %command%`,即可以 gamemode 启动游戏，gamemode 会自动进行防熄屏设置，更多设置（如显卡自动超频）请看官方文档！

   如果是配合 i+n 卡使用，可以在`/etc/environment`中设置`GAMEMODERUNEXEC=prime-run`，在使用 gamemode 启动游戏时会自动调用独显运行。

   :::

手动方式

1. 执行以下命令使电源处于 `High Performance` 模式：

   ```sh
   echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
   ```

   ::: tip ℹ️ 提示

   此模式会让 CPU 处于最高性能状态，风扇狂转，如果散热撑不住甚至会降频，得不偿失。请斟酌使用。

   :::

2. 如果希望将设置改回 `Power Save` 模式，那么只需要执行以下命令即可：

   ```sh
   echo powersave | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
   ```

## 🚀 网游加速

对于在 Linux 上玩网游，网络加速一直是一个难题，尤其是在玩一些外服网游的时候。这里提供一些在 Linux 下对网游加速的思路：

- 一些 ✈️ 场会提供网游游戏节点，这些节点专门为游戏优化，限制流量并且提高倍率，一般可以得到较好的加速效果。在 Linux 中配合 [透明代理](../../guide/rookie/transparent.md)，同时开启对 UDP 流量的代理加速，即可以得到优化网游网速的效果
- 购买内置市面上内置或可安装常见的网游加速器插件的中高端 [路由器](https://uu.163.com/router/crossover.html)（似乎确凿只能加速主机）

## 🐧 Fsync 内核

维尔福公司发布了一个可以帮助提升大量多线程应用运行帧率的特殊内核补丁。这对改善游戏性能有很大帮助。简单的方法是更换为 [linux-zen](https://archlinux.org/packages/extra/x86_64/linux-zen/) 内核，其从 5.2 版本开始已包括 Fsync 补丁。

详细步骤请参阅 [🐧 更换可选内核](../../guide/advanced/optional-cfg-2.md#🐧-更换可选内核)。

## 🌈 RGB 光污染

通过 [OpenRGB](https://openrgb.org/)，无论是键盘、鼠标、CPU 风扇、AIO，还是其它连接的外围设备或组件，都可以统一进行 RGB 灯光控制。

1. 安装 [OpenRGB](https://aur.archlinux.org/packages/openrgb/)<sup>cn / aur</sup>：

   ::: code-group

   ```sh [cn]
   sudo pacman -S openrgb
   sudo pacman -S openrazer-driver-dkms # 雷蛇用户需要安装
   ```

   ```sh [aur]
   yay -S aur/openrgb
   sudo pacman -S openrazer-driver-dkms # 雷蛇用户需要安装
   ```

   ```sh [aur (git)]
   yay -S openrgb-git
   yay -S openrazer-driver-dkms-git # 雷蛇用户需要安装
   ```

   :::

2. 为了让内核能够识别到设备文件，需要下载 [60-openrgb.rules](https://gitlab.com/CalcProgrammer1/OpenRGB/-/blob/master/60-openrgb.rules)，并将它复制到 `/etc/udev/rules.d` 文件夹下：

   ```sh
   sudo cp /path/to/60-openrgb.rules /etc/udev/rules.d
   ls -ahl /etc/udev/rules.d # 复查一下
   ```

   ![openrgb-1](../../assets/app/common/play/openrgb-1.png)

3. 重启计算机或者通过以下命令重新载入 udev 规则（`.rules` 文件）：

   ```sh
   sudo udevadm control --reload-rules
   sudo udevadm trigger # 强制内核触发设备事件，主要用于重放内核初始化过程中的冷插（coldplug）设备事件
   ```

   ![openrgb-2](../../assets/app/common/play/openrgb-2.png)

4. 若显卡、内存条或者主板等带有 RGB 需要控制，则还需要载入额外的驱动：

   ::: code-group

   ```sh [Intel]
   sudo modprobe i2c-dev # 显卡、内存条
   sudo modprobe i2c-i801 # 芯片组
   ```

   ```sh [AMD]
   sudo modprobe i2c-dev # 显卡、内存条
   sudo modprobe i2c-piix4 # 芯片组
   ```

   :::

   ![openrgb-3](../../assets/app/common/play/openrgb-3.png)

5. 为了验证驱动载入情况，还需要安装 [I<sup>2</sup>C Tools](https://archlinux.org/packages/extra/x86_64/i2c-tools/)<sup>extra / aur</sup>：

   ::: code-group

   ```sh [extra]
   sudo pacman -S i2c-tools
   ```

   ```sh [aur (git)]
   yay -S i2c-tools-git
   ```

   :::

   ![openrgb-4](../../assets/app/common/play/openrgb-4.png)

6. 验证驱动载入情况：

   ```sh
   sudo i2cdetect -l
   ```

   查看输出是否带有以下字段：

   - `nvkm` 字段 —— 带有光污染的 NVIDIA 显卡
   - `PIIX4` 字段 —— AMD 芯片组
   - `I801` 字段 —— Intel 芯片组

7. 打开 `OpenRGB`，将自动检测支持的外设，然后便可以进行灯光控制了

---

> 📔 本节参考资料：
>
> - [在 Linux 上使用 Lutries 管理你的游戏](https://linux.cn/article-10200-1.html)
