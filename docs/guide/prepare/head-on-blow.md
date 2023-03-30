# archlinux 真的适合我吗？

> ### 🍉 三思而后行
>
> 对于萌新（特别是对于 Linux 还是萌新的萌新）来说尝试安装 archlinux 之前，有必要了解 archlinux 是否真正适合 TA 们

## 判断标准

> 这里，笔者自作主张的设立了 3 个判断标准，按照重要程度排列

### 判断标准一：你是否具有一定的 Linux 基础？

不少 Linux 萌新可能从不同渠道听过一种说法，那就是选择 archlinux 作为 TA 们的入门发行版。理由包括但不限于：

1. 通过安装和使用 archlinux 我可以更好的了解 Linux 底层运作的原理
2. archlinux 的软件很多
3. 遇到问题好好看 [ArchWiki](<https://wiki.archlinux.org/title/Main_page_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>) 就好啦

这些理由所叙述的事实单独来看确实没有任何问题，但作为推荐 Linux 萌新选择 archlinux 作为入门发行版就显得不太合适了。理由有下：

1. 了解 Linux 底层运作的原理对于学习 Linux 的人来说无疑是一个进阶的话题了；脚踏实地，先**从 Linux 基础甚至基本的计算机常识开始掌握才是正确的学习姿势**。否则知识体系就如同空中楼阁，摇摇欲坠
2. archlinux 的软件确实很多，甚至由于 arch 之道中实用性大于意识形态的原则，包含有不开源甚至非自由软件；但是对于其它发行版来说，日常使用的大部分软件也都在软件仓库中存在
3. [ArchWiki](<https://wiki.archlinux.org/title/Main_page_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>) 的内容的确包含面非常广，甚至非常细节的问题也有说明和解答。但也正是由于这种特性，导致其指引性较差，让用户容易迷失方向，更不用说对于 Linux 萌新了

对于这一部分同学，笔者的建议是先去阅读相关的书籍，在掌握了扎实的 Linux 基础之后，再来尝试 archlinux 吧！这里推荐一本由刘遄老师编写的 Linux 入门 📖 书籍 [《Linux 就该这么学》](https://www.linuxprobe.com/docs/LinuxProbe.pdf)，并且作者本着开源精神让广大读者可以免费下载阅读，直接点击链接即可跳转下载（linuxprobe）。此外，掌握基础的英语阅读水平也是很有必要的，例如经常有一些同学在安装 archlinux 的时候由于看不懂英语的报错信息在已经发生错误的情况下继续执行下一步命令导致安装失败。

> #### 🍧 趣事
>
> 笔者曾经遇到过很多对于 Linux 毫无基础（包括曾经试用过“新手”发行版如 Ubuntu 但是依然不具备 Linux 基础知识）的人想要尝试 archlinux，却在安装时遇到“匪夷所思”的问题，对此略举一二（并没有）：
>
> 1. 某同学在 win10 下经过一上午的努力，终于用 [DiskGenius](https://www.diskgenius.cn/)<sup>EULA</sup>（win 下的磁盘分区工具）将 💾 磁盘分出了一部分空间以供安装 archlinux，但是却发现使用 `lsblk` 命令在安装环境无法看到分出来的空白空间！“问题”当然显而易见，因为没有分区的空白空间并不是块设备，自然无法用 `lsblk` 命令看到了
>
> 对于那些 `sudo` 命令输密码时看不到输出以为键盘坏了的，这些都是老生常谈了，就不多说了 QAQ

### 判断标准二：你是否愿意花费时间在折腾系统上？

archlinux 是简洁的操作系统。arch 将简洁定义为：避免任何不必要的添加、修改和复杂增加。这样做的好处显而易见：你可以自己决定使用哪种桌面环境、安装哪些组件和服务。这种精细化的控制能够赋予你一个精简的操作系统，可以让你自由选择所需的组件来构建属于你自己的系统。

但也正因为此，配置 archlinux 相对于其它 Linux 发行版来说是繁琐。首先，安装 archlinux 需要在命令行手动输入至少 20 多条命令，并且要保证正确：

```bash
systemctl stop reflector.service
iwctl
device list
station wlan0 scan
station wlan0 get-networks
station wlan0 connect wifi-name
exit
ping arch.icekylin.online
timedatectl set-ntp true
timedatectl status
vim /etc/pacman.d/mirrorlist
# 分区和挂载系列命令
pacstrap /mnt base base-devel linux linux-firmware
pacstrap /mnt dhcpcd iwd vim sudo bash-completion
genfstab -U /mnt > /mnt/etc/fstab
cat /mnt/etc/fstab
arch-chroot /mnt
vim /etc/hostname
vim /etc/hosts
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
hwclock --systohc
locale-gen
echo 'LANG=en_US.UTF-8'  > /etc/locale.conf
passwd root
pacman -S intel-ucode
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=ARCH
vim /etc/default/grub
grub-mkconfig -o /boot/grub/grub.cfg
exit
umount -R /mnt
reboot
```

其次，安装好的系统只是最基本的系统，不包含图形界面，还需要安装和配置更多的设置项（很多需要手动编辑配置文件）才可以正常使用。最后，日常维护 archlinux 可能也需要大量时间和精力（如 archlinux 更新后挂了，如何解决）。有的时候可能半天时间就这样“浪费”了。

::: info 🍧 碎碎念

不过对此也不用过于担心。本指南的目的之一就是为了减少不必要的排错成本。不少问题别人（包括笔者）也出现过，乐于助人的人也会将 TA 们的解决方法分享出来，何况还有 archlinux 开放、友好的强大社区生态呢！正所谓前人栽树后人乘凉嘛。

:::

### 判断标准三：在遇到难以解决的复杂问题时，能否冷静应对？

archlinux 作为现代的滚动发行版，遇到问题是非常正常的。其中大部分问题经过简单排查便可解决，但也不排除遇到重大问题导致系统崩溃，无法进入桌面环境甚至系统。部分萌新的解决方法简单粗暴 —— 直接重装。这个方法可能确实有效，但是有多少人会经得起重新安装的折腾呢？多重装几次可能“心态就炸了”。

实际上，即使系统无法正常进入了，我们依然可以使用安装盘 `arch-chroot` 进入原系统修复（如果暂时听不懂没有关系，后面会讲解，这里只要知道有办法解决就可以了）。例如大多数情况下可能只是启动引导出现了问题而已，如果为此而直接重新安装系统则显得有些小题大做了。

总而言之，在遇到难以解决的复杂问题时，不要慌张；静下心来好好想一想问题到底出在哪里，**对症下药、冷静应对才是正确的姿势**。
