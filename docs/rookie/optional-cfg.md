---
title: 可选配置
---

# 其它可选配置

## 字体设置

笔者的设置是英文使用 Hack，中文使用 Noto Sans CJK SC。可以在 `系统设置` > `字体` 中进行设置。

有关用户全局级别更改日文异型字的设置，可参考 [archWiki 相关说明](<https://wiki.archlinux.org/index.php/Localization_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)/Simplified_Chinese_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E4%BF%AE%E6%AD%A3%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E6%98%BE%E7%A4%BA%E4%B8%BA%E5%BC%82%E4%BD%93%EF%BC%88%E6%97%A5%E6%96%87%EF%BC%89%E5%AD%97%E5%BD%A2>)。

## 休眠（hibernate）设置（可选）

KDE 自身提供开箱即用的睡眠功能（sleep），即将系统挂起到内存，消耗少量的电量。休眠（hibernate）则会将系统挂起到交换分区或交换文件，几乎不消耗电量。如果睡眠功能已可满足你的需求，不需要休眠到硬盘的功能，则可略过此步。

挂起到硬盘的映像大小一般最大为物理内存的 2/5,其值在 `/sys/power/image_size` 中确定，故如果想使用休眠功能，Swap 大小一般设置为物理内存的 60% 即可。

首先确认 swap 文件所在分区的 UUID 以及 swap 文件的偏移值

```bash
sudo findmnt -no UUID -T /swapfile # 确认 UUID
sudo filefrag -v /swapfile # 确认物理偏移值。第一行数据中的 physical_offset 一列的值即为所需要的数据
```

随后将这两个参数加入内核启动参数中

```bash
sudo vim /etc/default/grub
```

找到 `GRUB_CMDLINE_LINUX_DEFAULT` 一行，在其值后添加类似如下两项数据，内容根据你自身的 UUID 以及偏移值确定。参数以空格分隔。

```conf
resume=UUID=9a940a0a-fa72-4973-9ccc-3eb93ad73b37 resume_offset=6418432
```

配置完成后需要更新 grub 配置：

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

除此之外，还需配置 initranfs 的 resume 钩子：

添加 resume 钩子，编辑 `/etc/mkinitcpio.conf` ，在 HOOKS 行添加 `resume` 值，注意，`resume` 需要加入在 udev 后。若使用了 LVM 分区，`resume` 需要加入在 lvm2 后。

使用 Intel CPU 并且为触摸板加载 `intel_lpss_pci` 模块的笔记本电脑，可能会在唤醒时发生内核崩溃（Caps Lock 灯闪烁），黑屏并无法成功唤醒。此时需要编辑 `/etc/mkinitcpio.conf`，在 MODULES 行添加 `intel_lpss_pci` 值

```conf
MODULES=(intel_lpss_pci)
```

最后重新生成 initramfs 镜像：

```bash
sudo mkinitcpio -P
```

## rEFind

## 输入法

## zsh
