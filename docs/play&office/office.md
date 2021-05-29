# 办公日常

本章记录日常办公需要用到的软件及配置。同时包括 QQ 等即时通讯软件和网盘、远程协助等软件的配置与使用。

> QQ 与微信等中国国内知名闭源专有 IM 软件均存在不同程度的间谍行为(实际上不仅仅是 IM 软件，几乎所有你能见到的中国国内大型互联网 APP 均有间谍行为，美其名曰:用户行为监测或用户画像描述)。收集用户信息，扫描用户手机存储内容，监控粘贴版内容，记录手机安装 APP 列表等行为几乎已经成为业内公开的秘密。

> 希望所有人抵制或放弃此类恶意专有软件是不现实的，如果你不能舍弃使用这些软件，我们只能希望你可以在一个较为安全的隔离环境中使用它们，如一个不存在任何敏感个人信息的隔离物理设备中使用。使用开源的，注重隐私的通讯软件始终是正确的选择。

## 即时通讯

安装 wine 版本前先确保[字体](https://wiki.archlinux.org/index.php/Localization/Chinese#Fonts)的安装，否则汉字均为方块。一般 qq 安装文泉驿字体([wqy-microhei](https://archlinux.org/packages/?name=wqy-microhei))即可解决方块问题。

深度于 2020 下半年放出了 deepin-wine5，基于这个最新版的 deepinwine 的 AUR 包一般都比原有的稳定。

```bash
sudo pacman -S telegram-desktop #全球流行的即时通信软件 俗称电报
yay -S slack-desktop            #优秀的团队合作交流软件
yay -S deepin.com.qq.im.light　 #基于deepin wine5的qq轻聊版 强烈推荐安装  需要字体
yay -S linuxqq                  #腾讯官方出版的辣鸡linuxqq 疯狂闪退 网上方式均无效 不建议安装
yay -S com.qq.im.deepin         #基于deepin wine5的qq
yay -S com.qq.weixin.deepin     #基于deepin wine5的wechat
yay -S wechat-uos               #2020年末最新的uos版本原生微信的arch移植版本
```

除此之外 对于另外一些手机通讯软件在电脑上的投屏可以尝试使用[scrcpy](https://aur.archlinux.org/packages/scrcpy/)。

## 办公套件

主要两个选择是 [WPS](<https://wiki.archlinux.org/index.php/WPS_Office_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>) 与 [LibreOffice](https://wiki.archlinux.org/index.php/LibreOffice)。LibreOffice 目前的安装已经非常简单。

```bash
sudo pacman -S libreoffice-still   #稳定版
sudo pacman -S libreoffice-fresh   #尝鲜版
```

WPS 请按官方文档安装。需要注意的是，由于分发问题，2020 下半年 WPS 已从 archlinuxcn 移除，安装请务必从 AUR 安装。

## 截图

推荐使用 flameshot[火焰截图](https://www.bilibili.com/video/BV1LK4y1s7wX/)

```
sudo pacman -S flameshot
```

快捷键的命令是`flameshot gui`，可在 KDE 设置中加入设置快捷键为你所熟悉的键位。或者尝试另一种流行的 KDE 出品的截图软件 [spectacle](https://archlinux.org/packages/extra/x86_64/spectacle/)

## 网盘存储

**不要使用任何中国国内的网盘存储你的个人数据，他们可以根据"相关条款与规定"，或者"自我阉割"的精神觉悟随意处置你的所有数据，只推荐用国内网盘存储无关紧要的数据。**

- [Mega](https://aur.archlinux.org/packages/megasync/)<sup>AUR</sup> 国外注重隐私的老牌网盘，也可直接使用 [web 版本](https://mega.nz/fm/dashboard)
- [onedrive](https://aur.archlinux.org/packages/onedrive-abraunegg/)<sup>AUR</sup> 微软创办的网盘业务，linux 下存在一个命令行客户端
- [超星网盘](http://i.mooc.chaoxing.com/space/index?t=1600061701200) 高校网盘，据说免费 100G 未验证
- [稳定版坚果云](https://aur.archlinux.org/packages/nutstore/)<sup>AUR</sup>，也可直接使用 [web 版本](https://www.jianguoyun.com/d/home#/)。如果稳定版的界面存在问题，可使用[最新实验版坚果云](https://aur.archlinux.org/packages/nutstore-experimental/)<sup>AUR</sup>
- [百度网盘](https://aur.archlinux.org/packages/baidunetdisk-bin/)<sup>AUR</sup> 臭名昭著的百度网盘

## 图片浏览

在桌面环境与必要应用一节中已经安装了 [gwenview](https://archlinux.org/packages/extra/x86_64/gwenview/)，它基本可以满足日常看图的需求。如果另需快速看图软件，可以尝试以下软件。

- [feh](https://www.archlinux.org/packages/extra/x86_64/feh/)
- [nomacs](https://www.archlinux.org/packages/community/x86_64/nomacs/)

## 常用系统组件

- [Kcalc](https://archlinux.org/packages/extra/x86_64/kcalc/) 计算器
- [Kamoso](https://archlinux.org/packages/extra/x86_64/kamoso/) 相机
- [KTimer](https://archlinux.org/packages/extra/x86_64/ktimer/) 倒计时执行器

## 远程协助

[teamviewer](https://aur.archlinux.org/packages/teamviewer/)<sup>AUR</sup>一般即可满足绝大多数需求。需要注意安装后需按照提示启动服务

```bash
sudo systemctl enable --now teamviewerd
```
