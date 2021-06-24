# 制作系统盘

> ### 🥀 落红不是无情物，化作春泥更护花
>
> 本节介绍在 archlinux 下如何制作系统安装盘（启动盘）

> ### 🔖 这一节将会讨论：
>
> [[toc]]

## 通用方法

### Ventoy

[Ventoy](https://www.ventoy.net/cn/index.html)<sup>cn / aur</sup> 是一个制作可启动 U 盘的开源工具。

Ventoy 有诸多优点：

- **无需反复地格式化 U 盘**，只需要把 ISO / WIM / IMG / VHD(x) / EFI 等类型的文件拷贝到 U 盘里面就可以启动了，无需其它操作
- 可以一次性拷贝多个不同类型的镜像文件，Ventoy 会在启动时显示一个菜单来供用户进行选择
- 同一个 U 盘可以同时支持 x86 Legacy BIOS、IA32 UEFI、x86_64 UEFI、ARM64 UEFI 和 MIPS64EL UEFI 模式

Ventoy 支持 [大部分常见类型的操作系统](https://www.ventoy.net/cn/isolist.html)。

安装 Ventoy：

:::: code-group
::: code-group-item cn

```bash
sudo pacman -S ventoy-bin
```

:::
::: code-group-item aur

```bash
yay -S aur/ventoy-bin
```

:::
::::

#### 命令行模式

1. 制作

2. 拷贝镜像文件

#### 图形化模式

### balenaEtcher

[balenaEtcher](https://www.balena.io/etcher/)<sup>aur</sup> 界面更加傻瓜一点。但是只支持对单个完整 U 盘进行制作，即使还有剩余的空间也无法使用。

1. 安装 balenaEtcher：

   :::: code-group
   ::: code-group-item aur

   ```bash
   yay -S etcher-bin
   ```

   :::
   ::: code-group-item aur（git）

   ```bash
   yay -S etcher-git
   ```

   :::
   ::::

   ![balena-etcher-1](../static/advanced/make-install-disk/balena-etcher-1.png)

   ::: tip ℹ️ 提示

   [`balena-etcher`](https://aur.archlinux.org/packages/balena-etcher) 打开后会白屏，无法正常使用。

   请安装 [`etcher-bin`](https://aur.archlinux.org/packages/etcher-bin/) 或 [`etcher-git`](https://aur.archlinux.org/packages/etcher-git/)。

   :::

2. 打开 balenaEtcher，按提示操作即可：

   ![balena-etcher-2](../static/advanced/make-install-disk/balena-etcher-2.png)

## 手动制作

### dd 命令

### win10 / win11 安装盘

以往在 Linux 下手动制作一个 win10 / win11 安装盘还是很简单的，但是随着近几年微软的更新，其 iso 安装镜像中存在一个名为`install.wim`的文件，其大小已经超出了 4GB（fat32 要求的单个文件最大 4GB）的限制。这使得必须用额外的步骤才能制作一个启动盘。

这里依旧使用 fat32 格式是因为其兼容性是最好的，NTFS 的 UEFI 安装盘很多情况下不被识别。

1. 首先用 `parted` 命令创建 U 盘的分区。`label type` 输入 `gpt`：

   ```bash
   sudo parted /dev/sdx # 执行 parted，进行磁盘类型变更
   (parted) mktable # 输入 mktable
   新的磁盘卷标类型？ gpt # 输入 gpt，将磁盘类型转换为 GPT 类型。如磁盘有数据会警告，输入 Yes 即可
   (parted) quit # 退出 parted 命令行交互
   ```

   ![win-1](../static/advanced/make-install-disk/win-1.png)

   ::: danger ☢️ 警告

   重建分区表会使 U 盘所有数据丢失，请事先确认。

   :::

   ::: tip ℹ️ 提示

   也可以使用图形化的分区工具如 [KDE 分区管理器](https://apps.kde.org/partitionmanager/)。

   :::

2. 接下来类似 [7-1. 分区](../rookie/basic-install.md#_7-1-分区)，用 `cfdisk` 命令创建新分区。在 `Type` 中选择 `Microsoft 基本数据`：

   ```bash
   sudo cfdisk /dev/sdx
   ```

   ![win-2](../static/advanced/make-install-disk/win-2.png)

3. 接下来使用 `mkfs.vfat` 命令格式化所创建的分区，这样 U 盘就准备好了：

   ```bash
   sudo mkfs.vfat /dev/sdxn
   ```

   ![win-3](../static/advanced/make-install-disk/win-3.png)

4. 接下来下载 win10 / win11 的 iso 镜像并解压。由于 Ark 尚不支持 UDF 文件系统的 ISO 文件，我们需要手动挂载并将其中的内容复制出来：

   ![win-4](../static/advanced/make-install-disk/win-4.png)

   ```bash
   sudo mount -o loop /path/of/windows_iso_name.iso /mnt/mount_point
   cp -a /mnt/mount_point /path/of/some_folder
   ```

   ![win-5](../static/advanced/make-install-disk/win-5.png)

5. 得到复制出来的文件后，最后要进行的就是压缩 `install.wim` 文件（在 `sources` 文件夹下）。这里需要首先安装一个包 [`wimlib`](https://archlinux.org/packages/community/x86_64/wimlib/)（可能已经作为依赖安装了）：

   ```bash
   sudo pacman -S wimlib
   ```

6. 接下来进行压缩。这一步会持续较长时间，耐心等待。完成后可以看到文件已经被压缩到了 3.x GB：

   ```bash
   cd /path/of/some_folder/sources
   sudo wimlib-imagex optimize install.wim --solid
   ls -hl install.wim
   ```

   ![win-6](../static/advanced/make-install-disk/win-6.png)

7. 最后把全部文件复制到 U 盘中即可：

   ```bash
   sudo umount /mnt/mount_point # 卸载掉镜像
   sudo mount /dev/sdxn /mnt/mount_point # 挂载 U 盘
   sudo cp -r /path/of/some_folder/* /mnt/media # 复制全部文件
   ```

   ![win-7](../static/advanced/make-install-disk/win-7.png)

8. 复查一下并卸载 U 盘：

   ```bash
   ls -hl /mnt/mount_point # 复查一下
   sudo umount /mnt/mount_point # 卸载 U 盘
   ```

   ![win-8](../static/advanced/make-install-disk/win-8.png)

自此，一个 win10 / win11 安装盘便制作完成了。
