# Snapper 相关配置

> ### 🧊 使用快照保护你的系统
>
> 本文档介绍在 Arch 上使用 Snapper 的常见流程与最佳实践：安装、创建配置、自动快照（timeline）、与 `pacman/limine` 集成、回滚与恢复、以及常见的调优项。

### 🔖 本节将讨论
- Snapper 是什么，何时使用
- 准备工作（Btrfs / LVM、子卷布局）
- 安装与创建配置（`create-config`）
- 自动快照（systemd timers / cron）
- 与 `pacman` 集成（hook / snap-pac）
- 与 GRUB 集成（例如 `grub-btrfs`, `snap-pac-grub`）
- 与 Limine 集成（例如 `limine-snapper-sync`）
- 查看、管理与回滚快照
- 常见问题与优化建议

[[toc]]

---

## 简短说明
Snapper 是由 openSUSE 发起的快照管理工具，主要用于管理 Btrfs 子卷（也支持 LVM thin）。它能自动定期生成“timeline”快照、支持 pre/post 快照（适合软件更新前后对比）、提供差异查询并协助文件级或子卷级恢复。相比 desktop-centric 的 timeshift，snapper 在 Btrfs 环境下更灵活、也更适合系统级快照管理。

## 与 Timeshift 的对比

一句话：Timeshift 更面向 Ubuntu / 非btrfs文件系统 桌面用户，强调开箱即用的图形化体验；而 Snapper 更适合像 Arch / btrfs 这样高度可定制的发行版，更灵活并便于进行系统级的精细化配置与自动化回滚。
并且，btrfs和snapper的关系相比Timeshift 更为紧密，snapper是btrfs的官方快照管理工具，而timeshift是独立的快照管理工具，支持多种文件系统。

以下为补充说明：

- 功能定位：
  - Timeshift 更偏向桌面用户的图形化恢复工具，支持 `rsync` 模式（适用于任意文件系统）和 Btrfs 模式（但是需要ubuntu-style的子卷布局 `@`/`@home`）。
  - Snapper 更偏系统级的快照管理器，原生面向 Btrfs（并支持 LVM thin），适合做系统更新前后的 `pre/post` 快照与时间线管理。

---

## 前置条件
- 使用 Btrfs（或 LVM thin），并理解子卷（subvolume）概念。
- 推荐分区/子卷布局（示例）：
  - `@` -> `/`
  - `@home` -> `/home`
  - `@snapshots` -> `/.snapshots` （方便把快照存放到单独子卷，便于恢复 `/`）
  - 另外可将 `/var`, `/var/log`, docker 卷等单独做子卷，从而避免快照包含不必要的变动

检查子卷例子：
```arch-guide/docs/guide/rookie/snapper.md#L1-6
# 查看当前子卷
sudo btrfs subvolume list -p /
lsblk -f
```

注意：如果你的安装流程（比如旧版 archinstall 惯例）已经在 `/` 下挂载了 `@.snapshots`，`snapper create-config` 可能会失败；文后会说明如何处理这类情况。

---

## 安装
在 Arch 上安装 snapper（以及常见辅助包）：
```arch-guide/docs/guide/rookie/snapper.md#L7-11
sudo pacman -Syu snapper btrfs-progs
# 可选（AUR）：snapper-gui、grub-btrfs、snap-pac 等

#如果你是limine(比grub轻量的现代化引导程序)用户
# yay -S limine-snapper-sync
```

说明：
- `snapper` 是主包。
- 可选：`grub-btrfs`（将快照自动加入 GRUB 菜单，适合需要从快照启动恢复的场景）、`snapper-gui`（图形界面，通常在 AUR）。

---

## GUI

安装 snapper-gui：
```arch-guide/docs/guide/rookie/snapper.md#L14-18
sudo pacman -Syu snapper-gui
# snapper-gui
```
除了snapper-gui
还有btrfs-assistant-launcher

---

## 创建配置（示例：root）
为要管理的子卷创建 snapper 配置（首次创建）：
```arch-guide/docs/guide/rookie/snapper.md#L12-16
# 为根子卷创建配置（通常在根子卷挂载点 /）
sudo snapper -c root create-config /
# 或为 /home 创建单独配置：
sudo snapper -c home create-config /home
```

这条命令会：
- 在 `/etc/snapper/configs/` 下生成配置文件（如 `root`）。
- 在被管理的子卷下创建 `.snapshots` 子卷（如果采用默认行为）。
- 将配置加入 Snapper 的配置列表中（`SNAPPER_CONFIGS`）。

常见问题：
- 如果 `/.snapshots` 已经存在且不是由 snapper 管理的子卷，`create-config` 可能失败。解决思路通常是：
  1. 先卸载（`umount /.snapshots`）并移除该目录（或临时重命名）；
  2. 运行 `snapper -c root create-config /`；
  3. 根据需要删除 snapper 创建的子卷并重新把原来的 `@snapshots` 挂回到 `/.snapshots`（见 ArchWiki 的详细步骤）。

---

## 推荐的配置项（示例）
编辑 `/etc/snapper/configs/root`，重点关注 timeline 与 cleanup 设置。下面给出一个常见的示例（请根据磁盘空间与使用场景调整）：
```arch-guide/docs/guide/rookie/snapper.md#L17-28
# /etc/snapper/configs/root (示例片段)
TIMELINE_CREATE="yes"
TIMELINE_CLEANUP="yes"
TIMELINE_MIN_AGE="1800"           # 保证快照存在最短时间（秒）
TIMELINE_LIMIT_HOURLY="24"
TIMELINE_LIMIT_DAILY="7"
TIMELINE_LIMIT_WEEKLY="4"
TIMELINE_LIMIT_MONTHLY="12"
TIMELINE_LIMIT_YEARLY="0"
ALLOW_USERS=""
ALLOW_GROUPS=""
```

说明：
- `TIMELINE_CREATE=yes`：开启自动时间线快照（通常每小时一次，除非你改 timer）。
- `TIMELINE_CLEANUP=yes`：开启自动清理机制，避免快照无限制增长。
- 根据子卷重要程度和可用空间，调整各时间段保留数量。

---

## 启用自动服务 / 定时器
Snapper 提供 systemd timers，也能通过 cron（如果系统上有 cron）触发。启用常见 timer：
```arch-guide/docs/guide/rookie/snapper.md#L29-34
# 启用 timeline 与 cleanup 定时器
sudo systemctl enable --now snapper-timeline.timer snapper-cleanup.timer

# 可选：在开机时自动做一次快照
sudo systemctl enable --now snapper-boot.timer
```

注意：
- 如果你的系统同时有 cron 服务与 systemd timers，可能会造成重复快照。选择其中一种机制并关闭另一种或通过配置避免冲突。

---

## 与 pacman 集成（建议）

推荐使用社区工具 `snap-pac`（AUR / GitHub）。`snap-pac` 会在 pacman 事务中自动创建配套的 pre/post 快照并处理细节（也能配合 `grub-btrfs` / `limine-snapper-sync` 更新引导项），因此通常不需要你手动创建 pacman hook。

如果你确实不使用 `snap-pac`，也可以用 `snapper -c root create --command "pacman -Syu"` 来包装单次更新，但手写 hook 容易漏掉边缘情况，不是推荐的默认做法。

如果你希望快照出现在启动菜单以便直接从快照启动，考虑同时安装 `grub-btrfs`（或 limine/其他引导器的集成工具）。

## 与 GRUB 集成

将快照加入 GRUB 菜单并能直接从快照启动的常见工具是 `grub-btrfs`（通常在 AUR）。它包含后台守护进程 `grub-btrfsd`，会监听 `.snapshots` 的变化并自动更新 GRUB 配置。

安装与使用（示例）：

```docs/guide/rookie/snapper.md#L140-146
# 从 AUR 安装（示例）
# 使用 AUR 辅助工具：
yay -S grub-btrfs
# 或手动：
git clone https://aur.archlinux.org/grub-btrfs.git
cd grub-btrfs
makepkg -si

# 可选：inotify-tools（守护进程自动检测快照变更所需）
sudo pacman -S inotify-tools

# 启用守护进程
sudo systemctl enable --now grub-btrfsd.service

# 如需手动更新 GRUB 菜单
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

注意事项：
- Snapper 的快照默认是只读的，从只读快照启动会导致某些服务（需要写入 `/var` 或 `/run`）启动失败。`grub-btrfs-overlayfs` 提供了一个 `mkinitcpio` hook，可在启动时用 overlayfs 为只读快照提供可写层（类似 live CD 的行为），但该 hook 与 systemd initramfs 在某些场景下存在兼容性问题（部分情况下建议使用 BusyBox initramfs）。若使用该方案，请参阅 `grub-btrfs-overlayfs` 文档并在测试环境中验证。
- 若希望在每次快照后自动更新引导项，可配合 `snap-pac-grub`（AUR）或在 pacman hook 中调用相应更新脚本。

## 与 Limine 集成

Limine 引导器也可以与 Snapper 快照集成。社区提供的 `limine-snapper-sync`（AUR）可以在快照变更后将快照条目同步到 Limine 启动菜单。通常的使用方式是把同步脚本加入 pacman hooks 或作为 `snap-pac` 的后处理步骤，使快照创建后自动更新 Limine 配置。

安装与使用（示例）：

```docs/guide/rookie/snapper.md#L147-152
# 从 AUR 安装（示例）
yay -S limine-snapper-sync

# 按包说明配置（通常提供 hook 或脚本来自动更新 Limine 菜单）
# 使用前务必阅读 AUR 包的 README 并在测试环境验证引导项是否正确

limine-snapper-sync

# limine-update # 或者使用这个命令

```

注意：同样适用于 Limine 的快照引导，快照通常为只读，可能需要 overlayfs/其他机制来提供可写层；具体实现与兼容性视所选方案而定，务必在测试环境中验证。

---

## 常用命令（查看 / 管理）
```arch-guide/docs/guide/rookie/snapper.md#L52-63
# 列出所有配置
snapper list-configs

# 列出某个配置的快照
snapper -c root list

# 创建临时快照（单次）
snapper -c root create --description "手动快照"

# 创建 pre/post（手动）
snapper -c root create -t pre -p
# 执行操作后：
snapper -c root create -t post --pre-number <PRE_NUMBER>

# 查看两个快照之间的差异
snapper -c root status <from> <to>

# 删除快照
snapper -c root delete <NUM>
snapper -c root delete --sync <NUM>   # 删除并立即释放空间
```

---

## 恢复与回滚
文件级恢复（常见流程）：
1. 用 `snapper -c <config> list` 找到合适的快照号（或 pre/post 配对）。
2. 用 `snapper -c <config> status <from> <to>` 查看具体变更。
3. 使用 `snapper -c <config> undochange <from> <to> <path>` 恢复文件（该命令会把指定路径恢复到之前的状态）。

系统级（/）回滚（比较敏感，推荐在 Live 环境下操作）：
```arch-guide/docs/guide/rookie/snapper.md#L64-82
# 大致步骤（示例）
# 1) 使用 Arch Live 启动，挂载 Btrfs 顶层 subvolume（subvolid=5）
mount -t btrfs -o subvolid=5 /dev/sdXN /mnt
cd /mnt

# 2) 找到目标快照的编号（检查 info.xml 的 <date>）
grep -r '<date>' @snapshots/*/info.xml

# 3) 将当前 @（root 子卷）移走或备份
mv @ @.broken

# 4) 从 desired snapshot 创建新的 @ 子卷
btrfs subvolume snapshot @snapshots/<NUM>/snapshot @

# 5) 恢复 /etc/fstab、bootloader 配置（如使用 subvolid 的话需要调整）
# 6) 根据需要 chroot，重新生成 initramfs、更新 grub 等
```

要点：
- 恢复 `/` 通常需要通过 Live 环境直接操作子卷，或使用专门工具（例如社区的 `snapper-rollback` 脚本）。
- 如果使用 `grub-btrfs`、`limine-snapper-sync` 等工具，结合引导菜单可能会更方便，但仍要注意只读快照引导可能导致某些服务（需要写入 `/var`）失败（见 ArchWiki 关于 overlayfs 的说明）。

---

## 过滤与排除
- Snapper 提供 `filters` 文件（`/etc/snapper/filters` 与 `/usr/share/snapper/filters`），用于在 diff/restore 时忽略某些路径（例如 `/proc`, `/sys`, `/run` 等）。
- 注意：Filter 不会阻止文件被包含进快照，它只影响比较/恢复行为。如果你不想把目录包含在快照，考虑把该目录放到单独子卷。

---

## 性能与常见问题
- updatedb/locate 可能会遍历 `.snapshots`，导致性能问题。建议在 `/etc/updatedb.conf` 中加入：
```arch-guide/docs/guide/rookie/snapper.md#L83-85
PRUNENAMES = ".snapshots"
```
- 如果 `snapper ls` 或相关操作非常慢，可能是 qgroup（配额组）导致。查询与关闭配额示例：
```arch-guide/docs/guide/rookie/snapper.md#L86-90
sudo btrfs qgroup show /
# 如果确认可行：
sudo btrfs quota disable /
```
- 计算快照数量：
```arch-guide/docs/guide/rookie/snapper.md#L91-92
btrfs subvolume list -s / | wc -l
```
- orphaned snapshots（存在于 btrfs 上但未在 snapper 数据库中登记）会占用空间，可通过对比 `snapper -c <config> list` 与 `btrfs subvolume list` 来发现并手动删除。

---

## 多用户 / 非 root 使用场景
你可以为用户目录创建单独配置并授予权限：
```arch-guide/docs/guide/rookie/snapper.md#L93-99
# 为某用户的 /home 创建配置并允许该用户查看
sudo snapper -c userhome create-config /home/username
sudo snapper -c userhome set-config "ALLOW_USERS=username" SYNC_ACL="yes"
# 设置 .snapshots 权限便于非 root 列出
sudo chmod a+rx /home/username/.snapshots
sudo chown :users /home/username/.snapshots
```
注意：需要启用 ACL 支持的挂载选项（通常 Btrfs 默认支持）。

---

## 参考与延伸阅读
- ArchWiki: Snapper — https://wiki.archlinux.org/title/Snapper

---
