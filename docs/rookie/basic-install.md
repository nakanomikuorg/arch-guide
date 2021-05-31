# archlinux 基础安装

> ### ⛵ 万事俱备，只欠东风
>
> 经过了上一节的准备工作，我们可以开始正式安装 archlinux 了。如果你还没有完成前面的阅读，请先仔细阅读上一节。如果对本节的步骤不理解或者有疑问，请阅读下一节

> ### 🔖 这一节将会讨论：
>
> 1. 安装基础的 archlinux 系统

本节从安装最基础的、无图形化界面的 archlinux 系统开始。如有需要也可以同时参阅 [官方安装指南](<https://wiki.archlinux.org/title/Installation_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)。

::: tip ℹ️ 提示

本节中的截图来自虚拟机和已经安装好的 archlinux。不用担心！和你在实体机看到的是一样的

:::

## 1.禁用 reflector 服务

2020 年，archlinux 安装镜像中加入了 `reflector` 服务，它会自己更新 `mirrorlist`（软件包管理器 `pacman` 的软件源）。在特定情况下，它会误删某些有用的源信息。这里联网后的第一件事就是将其禁用。也许它是一个好用的工具，但是很明显，因为地理上造成的特殊网络环境，它并不适合启用。

```zsh
systemctl stop reflector.service
```

1. 通过如上命令将该服务禁用

```zsh
systemctl status reflector.service
```

2. 通过如上命令查看该服务是否被禁用

## 2. 再次确认是否为 UEFI 模式

禁用 reflector 服务后，我们再来确认以下是否为 `UEFI` 模式

```zsh
ls /sys/firmware/efi/efivars
```

若输出了一堆东西（`efi` 变量），则说明已在 `UEFI` 模式。否则请确认你的启动方式是否为 `UEFI`。

## 3. 连接网络

### 无线连接：

无线连接使用 `iwctl` 进行连接：

```zsh
iwctl # 进入交互式命令行
device list # 列出无线网卡设备名，比如无线网卡看到叫 wlan0
station wlan0 scan # 扫描网络
station wlan0 get-networks # 列出网络 比如想连接CMCC-5AQ7这个无线
station wlan0 connect CMCC-5AQ7 # 进行连接 输入密码即可
exit #成功后退出
```

### 有线连接：

正常来说，只要插上一个已经联网的路由器分出的网线（DHCP），直接就能联网。

可以等待几秒等网络建立连接后再进行下一步测试网络的操作。

## 4. 测试网络连通性

```zsh
ping www.baidu.com
```

稍等片刻，若能看到数据返回，即说明已经联网，ctrl+c 终止退出当前命令。如果还是无法连接，使用 `ip link set xxx up` 命令确认你已经激活了对应的网卡，再重新继续网络链接与测试。若看到类似`Operation not possible due to RF-kill`的报错，继续尝试`rfkill unblock wifi`来解锁无线网卡。[[1]](https://wiki.archlinux.org/index.php/Network_configuration/Wireless#Check_the_driver_status)

## 5.更新系统时钟

```bash
timedatectl set-ntp true    #将系统时间与网络时间进行同步
timedatectl status          #检查服务状态
```

## 6.更换国内镜像源加快下载速度

```bash
vim /etc/pacman.d/mirrorlist    #不会vim的同学，此处注意视频中的vim操作步骤
```

放在最上面的是会使用的更新源,把中科大 ustc 的或者清华的放在最上面。

## 7.分区

这里总共设置三个分区，可以满足绝大多数人的需求。此步骤会清除磁盘中全部内容，请事先确认。

- EFI 分区： `/efi` 800M
- 根目录： `/` 100G
- 用户主目录： `/home` 剩余全部 越大越好

> 这里根目录的大小仅为参考，一般来说日常使用的 linux 分配 100G 已经够用了。根目录最小建议不小于 50G，根目录过小会造成无法更新系统软件包等问题。

首先将磁盘转换为 gpt 类型

```bash
lsblk                       #显示分区情况
parted /dev/sdx             #执行parted，进行磁盘类型变更
(parted)mktable             #输入mktable
New disk label type? gpt    #输入gpt 将磁盘类型转换为gpt 如磁盘有数据会警告，输入yes即可
quit                        #最后quit退出parted命令行交互

```

接下来使用 cfdisk 命令对磁盘分区

```bash
cfdisk /dev/sdx #来执行分区操作,分配各个分区大小，类型
fdisk -l #复查磁盘情况
```

cfdisk 分区的详细操作见视频中的操作。一般建议将 EFI 分区设置为磁盘的第一个分区，据说有些主板如果不将 EFI 设置为第一个分区，可能有不兼容的问题。

## 8.格式化

这里的 sdax 只是例子，具体根据你的实际情况来，请注意视频中的操作。

```bash
#磁盘若有数据会问 'proceed any way?' y回车 即可
mkfs.ext4  /dev/sdax            #格式化根目录和home目录的两个分区
mkfs.vfat  /dev/sdax            #格式化efi分区
```

## 9.挂载

在挂载时，挂载是有顺序的，需要从根目录开始挂载  
这里的 sdax 只是例子，具体根据你的实际情况来，请注意视频中的操作。

```bash
mount /dev/sdax  /mnt
mkdir /mnt/home
mount /dev/sdax /mnt/home
mkdir /mnt/efi
mount /dev/sdax /mnt/efi
```

## 10.安装系统

基础包

```bash
pacstrap /mnt base base-devel linux linux-firmware  #base-devel在AUR包的安装是必须的
```

功能性软件

```bash
pacstrap /mnt dhcpcd iwd vim sudo bash-completion   #一个有线所需 一个无线所需 一个编辑器  一个提权工具 一个补全工具 iwd也需要dhcpcd
```

## 11.生成 fstab 文件

fstab 用来定义磁盘分区

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

复查一下 /mnt/etc/fstab 确保没有错误

```bash
cat /mnt/etc/fstab
```

## 12.change root

把环境切换到新系统的/mnt 下

```bash
arch-chroot /mnt
```

## 13.设置主机名与时区

首先在`/etc/hostname`设置主机名

```bash
vim /etc/hostname
```

加入你想为主机取的主机名，这里比如叫 myarch。

接下来在`/etc/hosts`设置与其匹配的条目。

```
vim /etc/hosts
```

加入如下内容

```bash
127.0.0.1   localhost
::1         localhost
127.0.1.1   myarch.localdomain	myarch
```

> 某些情况下如不设置主机名，在 KDE 下可能会存在网络情况变更时无法启动 GUI 应用的问题，在终端中出现形如`No protocol specified qt.qpa.xcb: could not connect to display`的错误。这种情况极为少见，群主只遇到过一次网友反馈。相关参考链接:[[1]](https://bbs.archlinux.org/viewtopic.php?id=241338)，[[2]](https://bbs.archlinux.org/viewtopic.php?id=243674)

---

随后设置时区，在/etc/localtime 下用/usr 中合适的时区创建符号连接。

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

## 14.硬件时间设置

将系统时间同步到硬件时间

```bash
hwclock --systohc
```

## 15.设置 Locale

Locale 决定了软件使用的语言、书写习惯和字符集。

编辑 /etc/locale.gen，去掉 en_US.UTF-8 行以及 zh_CN.UTF-8 的注释符号（#）。

然后使用如下命令生成 locale。

```bash
locale-gen
```

向 /etc/locale.conf 输入内容

```bash
echo 'LANG=en_US.UTF-8'  > /etc/locale.conf
```

## 16.为 root 用户设置密码

```bash
passwd root
```

## 17.安装微码

```bash
pacman -S intel-ucode   #Intel
pacman -S amd-ucode     #AMD
```

## 18.安装引导程序

```bash
pacman -S grub efibootmgr   #grub是启动引导器，efibootmgr被 grub 脚本用来将启动项写入 NVRAM。
grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=GRUB #取名为GRUB 并将grubx64.efi安装到之前的指定位置
```

接下来编辑/etc/default/grub 文件，去掉`GRUB_CMDLINE_LINUX_DEFAULT`一行中最后的 quiet 参数，同时把 log level 的数值从 3 改成 5。这样是为了后续如果出现系统错误，方便排错。同时加入 nowatchdog 参数，这可以显著提高开关机速度。不会 vim 的同学注意视频中的操作。

```bash
vim /etc/default/grub
```

最后生成 GRUB 所需的配置文件

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

> 在某些主板安装完成后，你会发现没有启动条目。这是因为某些主板的 UEFI 固件在显示 UEFI NVRAM 引导条目之前，需要在特定的位置存放可引导文件，不支持自定义存放 efi 文件(如微星 Z170-A Gaming PRO)。解决方案是在默认启动路径下安装 GRUB。重新插入安装优盘，挂载目录，chroot 到/mnt，然后你可以直接把已经生成好的 efi 文件移动到默认目录下，如下代码所示。只有安装完成后你的主板不出现启动条目才需要尝试如下命令，正常安装无需执行。[官方参考文档](https://wiki.archlinux.org/index.php/GRUB#Default/fallback_boot_path)

```bash
mkdir -p /efi/EFI/BOOT
mv /efi/EFI/GRUB/grubx64.efi /efi/EFI/BOOT/BOOTX64.EFI
```

## 19.完成安装

```bash
exit                # 退回安装环境#
umount -R  /mnt     # 卸载新分区
reboot              # 重启
```

注意，重启前要先拔掉优盘，否则你重启后还是进安装程序而不是安装好的系统。重启后，开启 dhcp 服务，即可连接网络

```bash
systemctl start dhcpcd  #立即启动dhcp
ping www.baidu.com      #测试网络连接
```

若为无线链接，则还需要启动 iwd 才可以使用 iwctl 连接网络

```bash
systemctl start iwd #立即启动iwd
iwctl               #和之前的方式一样，连接无线网络
```

到此为止，一个基础的，无 UI 界面的 Arch Linux 已经安装完成了。紧接着下一节，我们来安装图形界面。

> archlinux 在 2021 年 4 月在安装镜像中内置了一个[安装脚本](https://archlinux.org/packages/extra/any/archinstall/)，其就是类似一个一键安装脚本，提供一些选项，即可快速安装。其和所有一键安装脚本类似，提供自动化，且不灵活的安装过程。缺陷为：只提供有限的文件系统格式、只可限定在一个磁盘、不能指定源、只提供有限的桌面选择、自动分区不可手动干预、输入错误直接崩溃退出、仅支持 UEFI 等。不建议使用这种安装脚本，除了以上各种原因，初学者也无法在这种安装过程中学到任何东西。如果你因为任何原因需要快速启动一个基础的 archlinux 环境，那么可以尝试此脚本。
