# 安卓刷机

> ### 🐲 沉舟侧畔千帆过，病树前头万木春
>
> 本小节讨论如何通过 archlinux 给安卓手机刷机。

> ### 🔖 这一节将会讨论：
>
> ::: details 目录
>
> [[toc]]
>
> :::

::: tip ℹ️ 提示

以下内容未经验证，内容和原教程基本相同。

:::

> 🔗 相关链接：
>
> - [archWiki 相关内容](<https://wiki.archlinux.org/title/Android_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

买可以刷机的手机最好买知名度大的品牌、有可能解锁 BootLoader 的手机以及较热门的机型，这样在刷机时可以方便的找到官方的 TWRP 和知名的 ROM 包（如 [LineageOS](https://lineageos.org/)、[crDroid](https://crdroid.net/)、 [Resurrection Remix](https://resurrectionremix.com/) 和 [PixelExperience](https://download.pixelexperience.org/devices)等）。

如果是较冷门的品牌，官方可能没有提供 ROM，只能在网上自行寻找个人改造过的 TWRP 和上述 ROM 包的非官方（unofficial）ROM。这种个人改造版本的安全性比较难说，而且还可能有更多的 🐛 Bug。也有可能翻遍全网，也找不到冷门机型能用（指好用的、非硬件提供商的官方 ROM）的 TWRP 和 ROM。

硬件方面，一般推荐买高通骁龙的 CPU，不要买联发科的，因为更多 ROM 的版本都是适配高通硬件的。

::: tip ℹ️ 提示

若为华为设备，如果没有在 18 年华为关闭 BootLoader 解锁码申请前拿到解锁码，那刷机在现在将变得基本不可能，尤其是近一年左右的新设备（用鸿蒙了还刷个 🔨）。

:::

首先需要安装 Linux 上的安卓工具包：

```sh
sudo pacman -S android-tools
```

## 1. 解锁 BootLoader

一般来说像小米这种品牌，官方会提供解锁 BootLoader 的途径和工具，但是这些工具基本只能在 Windows 下用。

除此之外，如果你能通过其它方法获取，或通过很硬核的方式拿到 BootLoader 的解锁码，那么也可以使用 Android 调试桥（adb）在 fastboot 模式下进行解锁。

1. 手机先通过数据线连接电脑，重启到 fastboot 模式：

   ```sh
   adb reboot bootloader
   ```

   ::: tip ℹ️ 提示

   注意要连到 USB 2.0 的接口，否则可能有兼容性问题。

   :::

2. 解锁 BootLoader：

   ```sh
   fastboot oem unlock xxxxxxx # 使用 BootLoader 解锁码在 fastboot 模式下解锁
   ```

   ::: tip ℹ️ 提示

   要使用正确的 BootLoader 解锁码才能解锁，否则会报错：

   ```sh
   FAILED (remote: 'check password failed!')
   fastboot: error: Command failed
   ```

   :::

## 2. 刷入 TWRP 并进行刷机

1. 在 [TWRP 官网](https://twrp.me/Devices/) 搜索并下载机型对应的 TWRP

   ::: tip ℹ️ 提示

   没有官方 TWRP 的设备，可以在 [UNofficialtwrp](https://unofficialtwrp.com/devices/) 查看下是否有。

   如果没有相关信息有几个论坛和网站可以看看：

   - [XDA Forums](https://forum.xda-developers.com/)
   - [CusROM](https://www.cusrom.com/)
   - [ANDROID FILE HOST](https://androidfilehost.com/) —— 搜索 `开发代号` + `你想要的系统名字`

   :::

   ::: tip ℹ️ 提示

   一般 TWRP 的版本和 ROM 包有对应关系，刷机前先确认你的两个版本是兼容的，否则刷机过程可能报奇怪的错误，如 `unable to mount /system`。

   :::

2. 同上 [1. 解锁 BootLoader](./android.md#_1-解锁-bootloader)，通过数据线连接电脑，重启到 fastboot 模式

3. 执行以下命令：

   ```bash
   fastboot flash recovery /path/of/your_twrp.img
   ```

4. 看到命令执行完毕的时候，就可以让手机重启了

   ::: tip ℹ️ 提示

   执行 `fastboot reboot` 可以重启，但是许多设备会在首次启动时自动覆盖替换你刷入的自定义 recovery，如乐视的 Le 2（X620）。直接重启会报不是官方系统或类似错误。

   为防止这种情况，在手机上通过硬件按键重启进入 recovery，TWRP 将给 ROM 打上 patch，以防止 ROM 替换 TWRP。

   :::

5. 剩下的步骤就是普通的进入 TWRP > 双清 > 刷机即可

   ::: tip ℹ️ 提示

   有时双清或者进入 TWRP 可能看到报错。这时尝试使用高级清理，从 ext4 改一下格式，再改回 ext4 问题可能就解决了。

   :::

::: tip ℹ️ 提示

可能需要用到的更多命令：

```bash
adb shell # 打开 adb shell
adb root # 在手机已经 root 的情况下打开 root 权限的 adb shell
```

:::
