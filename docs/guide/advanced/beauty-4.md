# archlinux 系统美化（引导篇）

> ### 🌺 爱美之心，人皆有之
>
> 美化这个话题是永恒的。有些人用 Linux 的原因就是一开始被美化后桌面的截图惊艳到了
>
> 这一小节将会介绍如何对引导进行美化。受限于篇幅，本小节分为上下篇
>
> 从本章开始，过程将不会讲述的特别细节，根据界面提示操作即可

需要说明的是，不要过度美化！过度美化可能导致系统稳定性和性能下降等后果。

当然，尊重用户的个人选择，这也是 arch 之道。

本节介绍的步骤建议按顺序进行，**您可以选择在任何一步收手**，因为剩下的步骤可能显得多余，甚至可能适得其反。

同时，本小节将介绍两种引导方式的美化 —— 一种是传统的 Grub，另一种是 rEFInd。

::: tip ℹ️ 提示

如果要使用 rEFInd，请先参照[可选配置（进阶篇](/guide/advanced/optional-cfg-2.md)里的方式安装 rEFInd

:::

## 1. Grub

1. 更换 Grub 主题：

开机时有个漂亮的 GRUB 也是很舒服的。

在[这里](https://www.pling.com/p/1482847/)下载 Distro 的 GRUB 主题并解压。接下来 `cd` 进解压出来的文件夹，打开 konsole 输入

```bash
sudo cp . /usr/share/grub/themes/Distro -rf
```

以将主题放置在系统的 GRUB 默认文件夹内。

接着编辑 `/etc/default/grub` 文件，找到 `#GRUB_THEME=` 一行，将前面的注释去掉，并指向主题的 `theme.txt` 文件。即

```bash
#GRUB_THEME=
GRUB_THEME="/usr/share/grub/themes/Distro/theme.txt" #修改后
```

然后再在终端输入

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

更新 GRUB 即可。

::: tip ℹ️ 提示

如果下载慢，可以按照[透明代理](/guide/rookie/transparent.md)里的方式配置好代理

:::

## 2. rEFInd

1. 更换 rEFInd 主题：

在[这里](https://github.com/topics/refind-theme)下载一个喜欢的 rEFInd 主题（直接克隆仓库即可），例如笔者这里选择 [rEFInd-glassy](https://github.com/Pr0cella/rEFInd-glassy)
解压到 /boot/efi/EFI/refind/themes/ 下主题作者指定的文件夹（通常是仓库名称，注意不带分支名），例如 rEFInd-glassy 就为 /boot/efi/EFI/refind/themes/rEFInd-glassy/

::: tip ℹ️ 提示

若您不是按照本指南章节 archlinux 基础安装 安装的 archlinux，请确认您 rEFInd 的安装位置。

:::

使用 vim 编辑 /boot/efi/EFI/refind/refind.conf 文件：

```sh
sudo vim /boot/efi/EFI/refind/refind.conf
```

在最后追加 ```include <相对路径>/theme.conf```，例如 rEFInd-glassy 就为 ```include themes/rEFInd-glassy/theme.conf```
