# 常见问题排除与解决

> ### 🏔️ 山重水复疑无路，柳暗花明又一村
>
> 本节介绍日常使用 archlinux 时可能会遇到的问题以及解决方法
> 更多问题请前往[Arch wiki](<https://wiki.archlinux.org/title/Table_of_contents_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

## 硬件相关

### 系统没有声音

可以尝试安装 pipewire-pulse pipewire-alsa pipewire-jack

```bash
sudo pacman -S pipewire-pulse pipewire-alsa pipewire-jack
```

或者尝试安装 alsa-utils pulseaudio pavucontrol

```bash
sudo pacman -S alsa-utils pulseaudio pavucontrol
```

重启系统即可

另外，部分装有Nvidia显卡的笔记本（如dell g3-3590）可能会出现`aplay -l`只有Nvidia HDMI，无法识别内置音频的现象，这是soh驱动程序的问题~~从19年到现在还没修好~~<u>我们可以通过在内核启动时添加参数</u>解决这个问题：

```bash
snd_hda_intel.dmic_detect=0
```

::: tip ℹ️ 提示

各个boot-loader有自己的配置文件，如`grub`的配置文件在`/etc/default/grub`，修改内核启动参数在`GRUB_CMDLINE_LINUX_DEFAULT`，更改完成后需要运行`grub-mkconfig -o /boot/grub/grub.cfg`，请查阅您的boot-loader的配置说明。

:::

### 键盘没有反应

若为联想小新 Pro14 / YOGA 14s 2021 或相似机型，可能发现笔记本内建键盘没有反应。

另外，机械革命的内置键盘也存在问题，原因是其 BIOS 固件把一个 `ActiveHigh` 写为了 `ActiveLow` ，部分主板的强制修复代码（加入特殊的主板判断代码来强制覆盖 acpi 行为）已经在 6.5 以后加入内核（如蛟龙15系列），但是仍然有部分主板未被修复，比如翼龙15系列，需要我们自行修改 DSDT 解决问题。

请参阅 [🥙 杂七杂八](../rookie/basic-install-detail.md#🥙-杂七杂八) 解决。

## 服务相关

### 无法连接蓝牙设备（错误提示：br-connection-profile-unavailable,详见[Arch 社区](https://bbs.archlinux.org/viewtopic.php?id=270465)）

首先确保[系统已开启蓝牙服务](../rookie/desktop-env-and-app.md#_12-启动蓝牙-若有)

安装 bluez,bluez-utils 和 pulseaudio-bluetooth

```bash
sudo pacman -S bluez bluez-utils pulseaudio-bluetooth
```

然后重启系统即可

> 更多蓝牙相关问题见[Arch wiki](<https://wiki.archlinux.org/title/Bluetooth_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E7%96%91%E9%9A%BE%E8%A7%A3%E7%AD%94>)

### 关闭出错服务（错误启动项）

### 关机时卡住很久才能关机

一般屏幕会出现形如 `A stop job is running for...(1m30s)` 的信息，这是经常会遇到的关机卡住 1 分 30 秒的问题，一般来说这种情况是出现了某个进程在关机时不愿停止，需要等到超时时间到达强行停止。

通用的解决办法是调整缩短这个等待时间，建议从 1 分 30 秒调整至 30 秒，30 秒已经足够几乎所有进程正常结束。

1. 编辑 `/etc/systemd/system.conf`：

   ```bash
   sudo vim /etc/systemd/system.conf
   ```

   找到其中 `DefaultTimeoutStopSec` 一项，将其前方的井号去掉，并赋值为 30s 即可

2. 最后执行 daemon-reload 使其生效。

```bash
sudo systemctl daemon-reload
```

上述解决方案其实只是将这个等待时间缩小了，并没有解决实际问题。如果你想排查问题真正的原因所在，耐心等待其结束关机，然后重新启动电脑，执行以下命令：

```bash
journalctl -p5
```

按/(斜杠键)搜索`Killing`关键字，找到你关机的时间附近所在的匹配行，你可以在附近看到到底是哪一个进程导致了 timeout,然后再去排查这个进程有什么问题即可。

## 软件包相关

### 软件包降级

在 archlinux 上偶尔会出现某一个包的最新版本有各种问题的情况，此时需要降级该包以正常使用，包可以是普通软件，也可以是内核。

```bash
yay -S downgrade
```

安装此包即可，使用方法也很简单，downgrade 后加上需要降级的包名即可，随后会提示你选择需要降级到的版本，点选即可。

### 升级系统时

可能存在升级系统时异常关机或程序异常退出的情况，移除 pacman 的 db 锁即可

```bash
sudo rm /var/lib/pacman/db.lck
```

## KDE 桌面环境相关

### 手动开关显示特效混合器（混成器）

有时显示特效混合器会因为某些原因需要手动开启或关闭，但是目前在 KDE 下显示特效混合器在设置里无法在不关机的情况下直接关闭，下面命令提供手动开关混成器的效果：

```bash
qdbus org.kde.KWin /Compositor suspend # 禁用
qdbus org.kde.KWin /Compositor resume # 开启
```

## deepin-wine5 相关

## 滚挂了怎么办

### 为什么会滚挂

较长时间段内没有升级可能会造成各种问题（俗称`滚挂了`），这是因为 archlinux 的软件包更新速度很快，如果你的系统没有及时升级，可能会出现各种问题，比如软件包依赖问题，软件包冲突问题等等。

### 怎么解决

多看官网公告，勤滚，一般就不会挂。

To be continued...
