# 磁盘加密

## 什么是磁盘加密，它是干什么的？

磁盘加密是一种通过将信息转换为无法识别的编码来保护信息的技术，这些编码无法被未经授权的人轻易破译，最终防止未经授权访问数据存储。

## Linux 上的加密选项

1. Loop-AES # 存在时间最长的；可能是最快的；适用于传统系统
2. dm-crypt +/- LUKS # Linux 上块设备加密的标准；非常灵活
3. VeraCrypt # TrueCrypt 的受维护分支，支持 TrueCrypt 和 VeraCrypt 卷
4. fscrypt # 默认用于 Chrome OS 和 Android 加密

::: warning ⚠️ 注意

此文章只介绍 dm-crypt 和 fscrypt 这两种加密方式

:::

# 使用 cryptsetup 进行全盘加密 (dm-crypt +/- LUKS)

::: danger ☢️ 警告

此操作只能在[全新安装](../rookie/basic-install-detail.md#-全新安装)的时候进行

[GRUB 对 LUKS2 的支持有限](https://wiki.archlinux.org/title/GRUB#Encrypted_/boot)

:::

## 1. 创建加密分区

::: tip ℹ️ 提示

请先完成磁盘分区，否则无法执行这一步哦

:::

::: code-group

```zsh [SATA]
cryptsetup luksFormat --type luks2 /dev/sdxn

WARNING!
========
This will overwrite data on /dev/sdxn irrevocably.

Are you sure? (Type uppercase yes): YES # 这里要用全大写输入YES
Enter passphrase:
Verify passphrase:
```

```zsh [NVME]
cryptsetup luksFormat --type luks2 /dev/nvmexn1pn

:::

WARNING!
========
This will overwrite data on /dev/nvmexn1pn irrevocably.

Are you sure? (Type uppercase yes): YES # 这里要用全大写输入YES
Enter passphrase:
Verify passphrase:
```

:::

::: tip ℹ️ 提示

为了避免密码被其他人看到，输入密码时不会显示

:::

::: danger ☢️ 警告

严禁加密 EFI 分区，否则系统将无法启动

加密分区时会清除分区里面的数据

请妥善保管好密码，否则你将无法解锁你的加密分区

:::

## 2. 打开加密的分区

使用 `cryptsetup open` 命令解密磁盘

::: code-group

```zsh [SATA]
cryptsetup open /dev/sdxn cryptlvm

🔐 Please enter current passphrase for disk /dev/sdxn # 这里输入你刚才设置的密码
```

```zsh [NVME]
cryptsetup open /dev/nvmexn1pn cryptlvm

🔐 Please enter current passphrase for disk /dev/nvmexn1pn: # 这里输入你刚才设置的密码
```

:::

::: tip ℹ️ 提示

打开后，此分区设备地址将是 `/dev/mapper/cryptlvm` 而不是分区

命令后面的 `cryptlvm` 可以修改成任何名称，假设改成 `root`，则此分区设备地址将是 `/dev/mapper/root`

:::

## 3. 设置 LVM 逻辑卷

```zsh
pvcreate /dev/mapper/cryptlvm

vgcreate vg /dev/mapper/cryptlvm

lvcreate -l 100%FREE vg -n root
```

::: tip ℹ️ 提示

此时会多出 `/dev/vg/root` 的设备，这个就是要挂载到根目录的设备

:::

## 4. 挂载逻辑分区

4-1. 格式化逻辑分区：

```zsh
mkfs.btrfs /dev/vg/root
```

4-2. 挂载逻辑分区到 /mnt 目录：

```zsh
mount /dev/vg/root /mnt
```

然后[继续完成安装](../rookie/basic-install.md#10-生成-fstab-文件)

## 5. (可选) 使用 TPM 自动解锁 LUKS 分区

::: warning ⚠️ 注意

开始之前，请先确定你的电脑存在并启用了 TPM (Trusted Platform Moudle) 模块 (如Intel PTT、AMD fTPM 技术)

:::

5-1. 安装所需软件

```bash
sudo pacman -S tpm2-tools tpm2-tss 
```

5-2. 重新安装内核以生成 initramfs

__原因是要将 tpm2-tss 模块导入 initramfs__

::: code-group

```bash [linux]
sudo pacman -S linux
```

```bash [linux-hardened]
sudo pacman -S linux-hardened
```

```bash [linux-zen]
sudo pacman -S linux-zen
```

```bash [linux-lts]
sudo pacman -S linux-lts
```

:::

5-3. 将密钥导入 TPM

::: code-group

```bash [SATA]
sudo systemd-cryptenroll --tpm2-device=auto --tpm2-pcrs="0+1+2+3+4+5+7+13" /dev/sdnx

🔐 Please enter current passphrase for disk /dev/sdxn:  # 这里输入你设置的密码
```

```bash [NVME]
sudo systemd-cryptenroll --tpm2-device=auto --tpm2-pcrs ="0+1+2+3+4+5+7+13" /dev/nvmexn1pn

🔐 Please enter current passphrase for disk /dev/nvmexn1pn:  # 这里输入你设置的密码
```

:::

::: warning ⚠️ 注意

由于 `PCR7 `(用于检查安全启动状态) 是强制要求，所以 `--tpm2-pcrs` 参数里的值必须包含7

部分电脑在导入 TPM 密钥后无法自动解锁 LUKS 分区 (如 Intel NUC), 日志显示 TPM is in DA Lockout Mode。这时需要进入固件设置，先禁用 TPM 然后重新启用或者清除 TPM 即可

:::

::: tip ℹ️ 提示

`--tpm2-pcrs` 参数有很多值可以配置，详情可以参阅 [Arch Wiki](https://wiki.archlinux.org/title/Trusted_Platform_Module#Accessing_PCR_registers)

:::

5-4. 重启系统，你会发现无需输入解密密码，直接进入登录界面

## 系统更新后无法自动解锁 LUKS 分区？

可能是你更新了引导加载器或者更改了固件设置引起的，这时只需要重新将密钥导入 TPM 即可：

::: code-group

```bash [SATA]
sudo systemd-cryptenroll --wipe-slot tpm2 --tpm2-device auto --tpm2-pcrs "0+1+2+3+4+5+7+13" /dev/sdnx
```

```bash [NVME]
sudo systemd-cryptenroll --wipe-slot tpm2 --tpm2-device auto --tpm2-pcrs "0+1+2+3+4+5+7+13" /dev/nvmexn1pn
```

:::

还有可能是你配置 `--tpm2-pcrs` 参数不正确，请删除 `--tpm2-pcrs` 参数里有问题的值：

::: code-group

```bash [SATA]
sudo systemd-cryptenroll --wipe-slot tpm2 --tpm2-device auto --tpm2-pcrs "0+1+7" /dev/sdnx
```

```bash [NVME]
sudo systemd-cryptenroll --wipe-slot tpm2 --tpm2-device auto --tpm2-pcrs "0+1+7" /dev/nvmexn1pn
```

:::

# 使用 fscrypt 对 /home 目录进行文件级加密
 
::: warning ⚠️ 注意

`fscrypt` 只适用于 `EXT4`、`F2FS` 和 `UBIFS`，如果想同时使用 `fscrypt` 和 `Btrfs`，请你单独创建一个分区，用上述文件系统格式化并挂载到 `/home` 目录

⚠️对分区进行格式化时需要加入 `encrypt` 参数，如下所示：

EXT4: mkfs.ext4 -O encrypt ***

F2FS: mkfs.f2fs -l mylabel -O extra_attr,inode_checksum,sb_checksum,encrypt ***

⚠️对于已经格式化的分区：

EXT4: sudo tune2fs -O encrypt ***

F2FS: sudo fsck.f2fs -O encrypt ***

⚠️ 这里`***`指的是分区的路径 ⚠️
:::

## 1. 安装fscrypt

```bash
sudo pacman -S fscrypt
```

## 2. 初始化 fscrypt 并配置

2-1. 初始化 fscrypt

```bash
sudo fscrypt setup # 这会生成 /etc/fscrypt.conf 文件和 /.fscrypt 目录
```

2-2. 配置 fscrypt

如果你没有为 `/home` 目录挂载单独的分区，请输入：

```bash
sudo fscrypt setup /
```

如果你已经为 `/home` 目录挂载单独的分区，请输入：

```bash
sudo fscrypt setup /home 
```

::: danger ☢️ 警告

严禁删除 `.fscrypt` 目录，否则永远无法解密被加密的目录

:::

## 3. 设置 PAM 模块

__为了可以在用户登录时自动解密被加密的目录，需要配置此模块__

```bash
sudo vim /etc/pam.d/system-login
    
    #%PAM-1.0

    auth       required   pam_shells.so
    auth       requisite  pam_nologin.so
    auth       include    system-auth
    auth       optional   pam_fscrypt.so # 添加这一行到这里

    account    required   pam_access.so
    account    required   pam_nologin.so
    account    include    system-auth

    password   include    system-auth

    session    optional   pam_loginuid.so
    session    optional   pam_keyinit.so       force revoke
    session    [success=1 default=ignore]  pam_succeed_if.so  service = systemd-user quiet # 添加这一行到这里
    session    optional                    pam_fscrypt.so # 添加这一行到这里
    session    include    system-auth
    session    optional   pam_motd.so
    session    optional   pam_mail.so          dir=/var/spool/mail standard quiet
    session    optional   pam_umask.so
    -session   optional   pam_systemd.so
    session    required   pam_env.so
```

```bash
sudo vim /etc/pam.d/passwd

    #%PAM-1.0
    auth		include		system-auth
    account		include		system-auth
    password	include		system-auth
    password        optional        pam_fscrypt.so # 添加这一行到这里
```

::: warning ⚠️ 注意

如果这两个文件没有正确配置，在用户登录时将无法自动解密被加密的目录

:::

## 4. 加密 /home 目录
 
4-1. 备份用户数据目录并创建新的用户数据目录

```bash
sudo mv /home/xxx /home/xxx.bak # 这里 xxx 是你的用户名

sudo mkdir /home/xxx

sudo chown xxx:xxx /home/xxx

sudo cp -a -T /home/xxx.bak /home/xxx
```

4-2. 加密用户数据目录

```bash
sudo fscrypt encrypt /home/xxx --user=xxx # 这里 xxx 是你的用户名

Should we create a new protector? [y/N] y
Your data can be protected with one of the following sources:
1 - Your login passphrase (pam_passphrase)
2 - A custom passphrase (custom_passphrase)
3 - A raw 256-bit key (raw_key)
Enter the source number for the new protector [2 - custom_passphrase]: 1 # 这里选1
Enter login passphrase for xxx: # 这里输入你的用户登录密码
"/home/xxx" is now encrypted, unlocked, and ready for use.
```

4-3. 检查加密状态

```bash
fscrypt status /home/xxx

"/home/xxx" is encrypted with fscrypt.

Policy:   046e333ea0ec7cd83ae34f85374994fd
Options:  padding:32  contents:AES_256_XTS  filenames:AES_256_CTS  policy_version:2
Unlocked: Yes

Protected with 2 protectors:
PROTECTOR         LINKED   DESCRIPTION
e9ac6267b2a1c60b  Yes (/)  login protector for xxx
20b94b2cb1827423  No       custom protector "Recovery passphrase for xxx"
```

## 5. 退出登录并重新登录

如果登录成功后发现文件/文件夹名称是正常的且可以正常打开或写入，说明数据被成功解密，可以删除备份

此时的 `fscrypt status`：

```bash
sudo fscrypt status /home/xxx

"/home/xxx" is encrypted with fscrypt.

Policy:   046e333ea0ec7cd83ae34f85374994fd
Options:  padding:32  contents:AES_256_XTS  filenames:AES_256_CTS  policy_version:2
Unlocked: Yes # 这里显示 Yes 说明成功✌️

Protected with 2 protectors:
PROTECTOR         LINKED   DESCRIPTION
e9ac6267b2a1c60b  Yes (/)  login protector for xxx
20b94b2cb1827423  No       custom protector "Recovery passphrase for xxx"
```

删除备份：

```bash
sudo find /home/xxx.bak -type f -print0 | xargs -0 shred -n1 --remove=unlink

sudo rm -rf /home/xxx.bak
```

如果登录成功后发现全部文件/文件夹名称变成了乱码，说明数据没有被解密，这时需要检查 [PAM 模块](#3-设置-pam-模块)是否正确配置或者用备份恢复数据

此时的 `fscrypt status`：

```bash
sudo fscrypt status /home/xxx

"/home/xxx" is encrypted with fscrypt.

Policy:   046e333ea0ec7cd83ae34f85374994fd
Options:  padding:32  contents:AES_256_XTS  filenames:AES_256_CTS  policy_version:2
Unlocked: No # 这里显示 No 说明失败 ❌

Protected with 2 protectors:
PROTECTOR         LINKED   DESCRIPTION
e9ac6267b2a1c60b  Yes (/)  login protector for xxx
20b94b2cb1827423  No       custom protector "Recovery passphrase for xxx"
```

用备份恢复数据：

```bash
sudo rm -rf /home/xxx

sudo mv /home/xxx.bak /home/xxx

reboot
```