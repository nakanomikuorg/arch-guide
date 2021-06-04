# 基础安装详解

> ### 🔭 知其然，知其所以然
>
> 这一节对上一节 [archlinux 基础安装](./basic-install.md) 中关键的几步做出了更进一步的解释，知其然知其所以然。此节没有特定顺序，可根据需要选择性阅读
>
> 需要说明的是，本指南假定你有一定的 Linux 基础知识，基础知识相关的话题**不会**被讨论

> ### 🔖 这一节将会讨论：
>
> 1. 安装基础的 archlinux 系统步骤详解

## 💾 分区和格式化

> 1. 因本指南介绍使用的文件系统是 `Btrfs`，很多萌新可能有些不理解。这里有必要说明一下
> 2. 若**执意要用传统的 `ext4` 文件系统**，本指南也给出了示例
> 3. 对于全盘格式化后**全新安装**的（单 archlinux 系统）同学，这里也给出了需要做的额外步骤的说明
> 4. 对于 **Swap 分区还是 Swap File** 的话题，也会在此讨论

### 💾 关于 Btrfs 文件系统

#### 了解 Btrfs 文件系统

#### 为什么要用 Btrfs 文件系统

### 💾 传统 ext4 文件系统说明

若使用传统的 `ext4` 文件系统，那么分区的建议为：

1. 若 archlinux 安装分区小于 `256GB`：

   - `/` 根目录：`全部空间`（用户主目录不单独分区）
   - `/boot/efi` EFI 分区：`256MB`
   - Swap 分区：`>= 电脑实际运行内存的 60%`

2. 若 archlinux 安装分区大于 `256GB`：

   - `/` 根目录：`128GB`
   - `/home` 用户主目录：`剩余的全部空间`
   - `/boot/efi` EFI 分区：`256MB`
   - Swap 分区：`>= 电脑实际运行内存的 60%`

分区同样使用 `cfdisk` 工具，具体操作类似上一节 [7-1. 分区](./basic-install.html#_7-1-分区) 所述，这里不再赘述。

- 使用以下命令格式化 `ext4` 分区：

:::: code-group
::: code-group-item SATA

```zsh
mkfs.ext4 /dev/sdax
```

:::
::: code-group-item NVME

```zsh
mkfs.ext4 /dev/nvmexn1pn
```

:::
::::

- 使用以下命令挂载 `ext4` 分区：

:::: code-group
::: code-group-item SATA

```zsh
mount /dev/sdxn /mnt
mkdir /mnt/home # 若 /home 目录单独分区
mount /dev/sdxn /mnt/home # 若 /home 目录单独分区
mkdir -p /mnt/boot/efi
mount /dev/sdxn /mnt/boot/efi
```

:::
::: code-group-item NVME

```zsh
mount /dev/nvmexn1pn /mnt
mkdir /mnt/home # 若 /home 目录单独分区
mount /dev/nvmexn1pn /mnt/home # 若 /home 目录单独分区
mkdir -p /mnt/boot/efi
mount /dev/nvmexn1pn /mnt/boot/efi
```

:::
::::

### 🆕 全新安装

若为全新安装（单 archlinux 系统），首先要对磁盘建立新的 GPT 分区表；同时，由于没有现存的 EFI 分区，所以我们还需要手动创建它（这一步在 [7. 分区和格式化（使用 Btrfs 文件系统）](./basic-install.md#_7-分区和格式化-使用-btrfs-文件系统) 步骤之前）：

#### 1. 建立新的 GPT 分区表

1. 同样的，先通过 `lsblk` 命令，区分要全新安装 archlinux 的磁盘（通过观察磁盘的大小等判断）：

```zsh
lsblk # 显示当前分区情况
```

2. 通过以下命令将磁盘转换为 `gpt` 类型：

:::: code-group
::: code-group-item SATA

```zsh
parted /dev/sdx # 执行 parted，进行磁盘类型变更
(parted)mktable # 输入 mktable
New disk label type? gpt # 输入 gpt，将磁盘类型转换为 GPT 类型。如磁盘有数据会警告，输入 yes 即可
quit # 退出 parted 命令行交互
```

:::
::: code-group-item NVME

```zsh
parted /dev/nvmexn1 # 执行 parted，进行磁盘类型变更
(parted)mktable # 输入 mktable
New disk label type? gpt # 输入 gpt，将磁盘类型转换为 GPT 类型。如磁盘有数据会警告，输入 yes 即可
quit # 退出 parted 命令行交互
```

:::
::::

::: danger ☢️ 警告

重建分区表会使磁盘所有数据丢失，请事先确认。

:::

#### 2. 建立 EFI 分区

进入 `cfdisk` 分区工具之后，类似上一节步骤 [7-1. 分区](./basic-install.md#_7-1-分区) 的分区说明，建立 EFI 分区：

1. 选中 `Free space` > 再选中操作 `[New]` > 然后按下回车 `Enter` 以新建 `EFI` 分区

2. 输入 `分区大小`（建议 >= `256MB`、<= `1024MB`；推荐 `512MB`）> 然后按下回车 `Enter`

3. 选中操作 `[Type]` > 然后按下回车 `Enter` > 通过方向键 `↑` 和 `↓` 选中 `EFI System` > 最后按下回车 `Enter`

4. 接下来可以按照上一节 [7-1. 分区](./basic-install.md#_7-1-分区) 的步骤创建其它分区

#### 3. 格式化 EFI 分区

:::: code-group
::: code-group-item SATA

```zsh
mkfs.vfat /dev/sdxn
```

:::
::: code-group-item NVME

```zsh
mkfs.vfat /dev/nvmexn1pn
```

:::
::::

### 💾 Swap 分区和 Swap 文件

如果希望使用 Swap 文件替换 Swap 分区，那么在分区和挂载中不必创建和开启 Swap 分区。

::: tip ℹ️ 提示

但是，使用 Swap 文件会更加复杂。因为若使用 Swap 文件在 `Btrfs` 文件系统中设置休眠（hibernate）的时候需要额外的步骤，而且可能有兼容性问题。若没有动态改变 Swap 大小的需求，建议使用 Swap 分区。

:::

通过以下步骤创建和挂载 Swap 文件（这一步在 [18. 完成安装](./basic-install.md#_18-完成安装) 步骤之后）：

1. 通过以下命令创建 Swap File：

```bash
sudo dd if=/dev/zero of=/swapfile bs=1M count=16384 status=progress # 创建 16G 的交换空间（大小 >= 电脑实际运行内存的 60%）
sudo chmod 600 /swapfile # 设置正确的权限
sudo mkswap /swapfile # 格式化 Swap 文件
sudo swapon /swapfile # 挂载 Swap 文件
```

2. 通过以下命令开启 Swap 文件：

```bash
swapon /swapfile
```

3. 使用 `free` 命令复查 Swap 文件挂载情况：

```zsh
free -h # -h 选项会使输出以人类可读的单位显示
```

4. 最后，向 `/etc/fstab` 中追加如下内容：

```fstab
/swapfile  none  swap  defaults  0 0
```

## 💽 安装环境和新系统的关系

> 理解安装环境和新系统的关系，对于理解 archlinux 安装时所做的步骤具有重大意义。可以说，理解了它们的关系基本上就理解了 archlinux 的安装

为了生动形象的理解安装环境和新系统的关系，我们可以将安装系统的过程想象成搬家 🏠。

## 🥙 杂七杂八

其它琐碎的问题不在一一展开叙述，这里通过列表统一说明：

1. EFI 分区（又称 esp 分区）不一定要在 `/boot/efi` 目录下；也可以是 `/boot` 或者 `/efi` 等等（若为 `/boot` 则 `/boot` 目录中的文件会和 EFI 分区的文件混杂在一起）
2. 若为**联想小新 Pro14 / YOGA 14s 2021** 机型，发现安装前后键盘都无法正常工作。此时安装时请使用外接键盘。为了解决该问题，在 [17. 安装引导程序](/basic-install.html#_17-安装引导程序) 步骤中编辑 `/etc/default/grub` 文件时添加额外的 GRUB 参数 —— 在 `GRUB_CMDLINE_LINUX_DEFAULT` 这一行中添加参数 `i8042.dumbkbd`

修改后复查：

```bash
head /etc/default/grub
```

输出如下：

```grub {8}
# GRUB boot loader configuration

GRUB_DEFAULT_SUBMENU=y
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
GRUB_TIMEOUT=2
GRUB_DISTRIBUTOR="Arch"
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=5 nowatchdog i8042.dumbkbd"
GRUB_CMDLINE_LINUX=""
```
