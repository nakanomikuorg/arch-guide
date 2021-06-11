# 娱乐软件
## Steam安装
有条件的朋友尽量在steam上购买正版游戏，这不仅是对正版的支持，更是能帮助你节省大量折腾的时间。

## 配置wine玩windows游戏
```bash
sudo pacman -S wine wine-mono wine_gecko # 安装wine及相关字体
winecfg # 输入这条命令后会弹出个小窗口，可对wine进行配置，其默认路径为“~/.wine”
```
wine对于大多**较新的windows10程序支持都很好**，但wine仍然存在着各种各样的问题
> 
* -[Wine](https://wiki.archlinux.org/title/Wine)这是Archwiki上关于wine的部分
* -[WineWiki](https://wiki.winehq.org/Main_Page)这是wine官方的wiki
* 由于windows不开源，因而wine的开发是一种“逆向开发”，简而言之就是照葫芦画瓢。所以和windows的差异性不会小。windows上一些涉及到硬件调用加速（如Adobe系列）或硬件扫描（如LOL）的软件难以在wine上有良好的表现。Wine的能力很有限，从功能对比上来说，比不上微软搞的WSL。
* 由于windowsXP到7再到10有着奇奇怪怪的历史包袱，所以一些老的windows软件也无法在wine上良好运行（某些老的galgame在win10上都得好好折腾一番才能玩，在wine上成功运行难度可想而知）
*  最最重要的一点，**wine不是个虚拟机，也不是个容器(container)**，所以它无法与你的linux系统隔绝。理论上一个wimdows的病毒程序是可以在wine上运行并对你的电脑产生危害，所以请悉心呵护自己的系统。

言归正传，许多普通的小游戏仍可以在wine上良好运行，笔者测试过并且将不断测试许多galgame或其它windows游戏。目前成功运行的几款游戏（破解版）如下：
* [ATRI-MY-Dear-Moments]
* [Mini-Metro]
* [SenRenBanKa]
后续将继续补充

## 手游解决方案（待补充）
