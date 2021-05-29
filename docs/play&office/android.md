# 安卓刷机

[官方文档](https://wiki.archlinux.org/index.php/android)

前排提示：买手机最好买知名度大的品牌，较热门的机型，这样在刷机时可以方便的找到官方的 twrp 和知名的 ROM 包，如魔趣，lineageOS，crDroid, Resurrection Remix. 等。如果是较冷门的品牌，官方可能没有提供 ROM，只能在网上自行寻找个人改造过的 twrp 和上述 ROM 包的 unofficial ROM(比如乐视的[这个](https://forum.xda-developers.com/t/rom-7-1-2-mtk-x620-unofficial-beta-lineageos-14-1-leeco-le2-pro-02-april-2019.3724749/)和[这个](https://github.com/zaoqi-android/Le_X62X_AOSP6.0))。这种个人改造版本的安全性比较难说，而且还可能有更多的 bug。也有可能你翻遍全网，也找不到冷门机型能用（指好用的、非硬件提供商的官方 ROM）的 twrp 和 ROM。硬件方面，一般推荐买高通骁龙的 cpu,不要买联发科的，因为更多 ROM 的版本都是适配高通硬件的。

首先需要安装 linux 上的安卓工具包

```bash
sudo pacman -S android-tools
```

## 解锁 bootloader

再次提醒要购买或使用有可能解锁 bootloader 的手机品牌。华为，vivo 等这类官方就不给解锁的手机品牌，就无需再往下看了。

一般来说像小米这种品牌，官方会提供解锁 bootloader 的途径和工具，但是这些工具基本只能在 windows 下用。这时候你就只能用一台 windows 操作，或者使用虚拟机。

除此之外，如果你能获取，或通过很 hack 的方式拿到 bootloader 的解锁码，那么也可以使用 adb 在 fastboot 模式下进行解锁。

```bash
$ adb reboot bootloader #手机先链接电脑，重启到fastboot
$ fastboot oem unlock xxxxxxx #在fastboot模式下解锁，要加上正确的bl码才能解锁，否则会报错
FAILED (remote: 'check password failed!')
fastboot: error: Command failed
```

## 刷入 twrp 并进行刷机

没有官方 twrp 的设备，可以在[unofficialtwrp](https://unofficialtwrp.com/devices/)查看下是否有。

如果没有相关信息有几个论坛和网站可以看看

- xda https://forum.xda-developers.com/
- https://forum.cusrom.com/categories/vivo-y85/
- https://androidfilehost.com/ 搜索 开发代号 + 你想要的系统名字

一般 twrp 的版本和 ROM 包有对应关系，刷机前先确认你的两个版本是兼容的，否则刷机过程可能报奇怪的错误，如 unable to mount /system

去下载你机型对应的 twrp。在[官网](https://twrp.me/Devices/)搜索你的机型，下载。如果没有看到你的机型说明官方不支持，你需要自行搜索别人修改的版本。将手机连接电脑，注意要连到 USB2.0 的接口，否则可能有兼容性问题。

让手机进入 fastboot 模式，在电脑打开终端，执行

```bash
fastboot flash recovery ./path/of/your-twrp.img
```

看到终端执行完毕的时候，就可以让手机重启了。这里注意，执行`fastboot reboot`可以重启，但是许多设备会在首次启动时自动覆盖替换你刷入的自定义 recovery，如乐视的 le2 x620 这样直接重启会报错不是官方系统什么的。为防止这种情况，在手机上通过硬件按键重启进入 recovery，TWRP 将给 ROM 打 patch，以防止 ROM 替换 TWRP。[[1]](https://twrp.me/xiaomi/xiaomimi5.html)

剩下的步骤就是普通的进入 twrp,双清，刷机即可。

> 有时双清或者进入 twrp 可能看到报错，用高级清理，从 ext4 改一下格式，再改回 ext4 可能就解决了

更多命令：

```bash
$ adb shell #打开adb shell
$ adb root #在手机已经root的情况下打开root权限的adb shell
```

## 有关华为设备

如果你没有在 18 年华为关闭 bl 锁码申请前拿到密码，那刷机在现在将变得基本不可能，尤其是近一年左右的新设备。  
老一些的设备可以尝试一下如下方法。

下载 DC-unlocker 花四欧元，下载到电脑上检测设备，登陆，然后尝试解锁读取 bl 码。不是所有设备都能成功，我的 nova3e 虽然在其支持列表里，也没有成功。流程大致是[这个](https://www.forece.net/post/4886.htm)。查到的原因是安卓 8 之后某个安全补丁后，DC unlocker 已经不能读到 bl 码。看 DC 之后的更新能否解决这个问题吧。还有另一个办法是先降级，然后在用 DC 解锁。通过 Firmware Finder 降级的方式，但是我试了也不行，拿不到检测的更新了，据说是 **EMUI8.0.0.129** 后封死了其他渠道回滚。[资料 1](https://club.huawei.com/thread-15361104-1-1.html)[资料 2](https://cn.ui.vmall.com/thread-19813753-1-1.html)[资料 3](https://www.cnblogs.com/lsgxeva/p/13469490.html)

淘宝卖码的反馈 nova3e 机型无法解锁拿到 BL。

还有一个自行拿十六进制里 bl 码的[教程](https://www.52pojie.cn/thread-816065-1-1.html)，前提是必须先拿到 root,这在新机型上基本也不可能了。旧机型可以尝试。在 linux 上检查十六进制可用这个软件[Bless](https://www.archlinux.org/packages/community/any/bless/)

所以 nova3e 这个机型基本不可能了，除非华为重新开放 bl 申请。之后试试更老一点的机型 nova2。

## Ref

- [小米刷机教程](http://www.romleyuan.com/news/readnews?newsid=938)
