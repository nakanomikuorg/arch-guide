# 基础安装步骤详解

> ### 🏵 知其然，知其所以然
>
> 这一节对上一节 [archlinux 基础安装](./basic-install.md) 中关键的几步做出了更进一步的解释，知其然知其所以然。此节没有特定顺序，可根据需要选择性阅读
>
> 需要说明的是，本指南假定你有一定的 Linux 基础知识，基础知识相关的话题**不会**被讨论

## 分区和格式化步骤详解

> 1. 因本指南介绍使用的文件系统是 `Btrfs`，很多萌新可能有些不理解。这里有必要说明一下
> 2. 若**执意要用传统的 `ext4` 文件系统**，本指南也给出了示例
> 3. 对于全盘格式化后**全新安装**的（单 archlinux 系统）同学，这里也给出了需要做的额外步骤的说明
> 4. 对于 **Swap 分区还是 Swap File** 的话题，也会在此讨论

### 关于 Btrfs 文件系统

### 传统 ext4 文件系统说明

### 全新安装

#### 1. 建立新的 GPT 分区表

若为全新安装（单 archlinux 系统），首先要对磁盘建立新的 GPT 分区表（这一步在 [7. 分区和格式化（使用 Btrfs 文件系统）](./basic-install.md#_7-分区和格式化-使用-btrfs-文件系统) 步骤之前）：

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

### Swap 分区和 Swap File

## 安装环境和新系统之间的关系
