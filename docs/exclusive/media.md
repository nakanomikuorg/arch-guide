# 直播与自媒体

本节将列出自媒体方向的各类优质软件，包括做直播，视频剪辑，图像编辑与绘制等方向所需的软件。

## 直播推流及辅助软件

直播以及录制在 linux 上使用[obs-studio](https://www.archlinux.org/packages/community/x86_64/obs-studio/)完成，用法与 windows 下基本一致。

b 站直播时的弹幕可以使用[弹幕库](https://www.danmaku.live/),这个历史比较复杂，v1 版本的仓库在[这里](https://github.com/pandaGao/bilibili-live-helper)，但是作者说不更新了。v2 版本的作者目前没有开源，并且说以后[也不会更新了](https://t.bilibili.com/378501835576827480)。AUR 搜索:`bilibili-live-helper-bin`。

除此之外还有一个[bilibili-live-chat](https://github.com/Tsuk1ko/bilibili-live-chat),这是一个浏览器的弹幕实现，风格仿照 youtube 的弹幕风格，也是很多弹幕软件的基础，直接在 web 上使用。

> bilibili-live-chat 需要使用有浏览器插件集成的 obs,arch 仓库中默认的 obs-studio 是无此功能的，如需使用 bilibili-live-chat，请安装 AUR 中的[obs-studio-browser](https://aur.archlinux.org/packages/obs-studio-browser/)

如果你使用较新的英伟达显卡，可以使用 NVENC 编码器，这将大大降低直播或录制过程中 cpu 的压力，详情可见[NVIDIA NVENC OBS 指南](https://www.nvidia.cn/geforce/guides/broadcasting-guide/)

## 视频制作剪辑与特效

在 KDE 的系统设置中，找到工作区行为->桌面特效，在无障碍功能中勾选`鼠标定位`与`鼠标点击动效`两项，并使用。这两项设置在视频制作中可以突出的显示鼠标位置与点击效果，对于视频制作来说相当有用。

对于键盘的输入，可以安装包`screenkey`，它可以将键盘的键入显示在显示屏上，对于视频的制作同样相当有用。

- [shotcut](https://www.archlinux.org/packages/community/x86_64/shotcut/)
- [kdenlive](https://www.archlinux.org/packages/extra/x86_64/kdenlive/)
- [mkvtoolnix](https://archlinux.org/packages/extra/x86_64/mkvtoolnix-gui/)
- [davinci-resolve](https://aur.archlinux.org/packages/davinci-resolve/)<sup>AUR</sup> 特效剪辑调色综合体 免费版
- [davinci-resolve-studio](https://aur.archlinux.org/packages/davinci-resolve-studio/)<sup>AUR</sup> 收费完整版

> 因为达芬奇没有编译入 fcitx 模块，所以无法输入中文。正常来说只能等待新版达芬奇加入这个模块。喜欢折腾的可以尝试下老 K 给出的[魔改解决方案](https://www.csslayer.info/wordpress/fcitx-dev/a-case-study-how-to-compile-a-fcitx-platforminputcontext-plugin-for-a-proprietary-software-that-uses-qt-5/)

Linux 下免费版支持的编解码格式有限
https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_15_Supported_Codec_List.pdf

## 绘图、制图与修饰

- [krita](https://www.archlinux.org/packages/extra/x86_64/krita/)
- [gimp](https://www.archlinux.org/packages/extra/x86_64/gimp/)
- [inkscape](https://www.archlinux.org/packages/extra/x86_64/inkscape/)

## 建模

- [blender](https://archlinux.org/packages/community/x86_64/blender/)

## 音频

- [Kwave](https://archlinux.org/packages/extra/x86_64/kwave/)

## 字幕制作

一般情况来讲，一个视频加上外带的 srt 字幕是较为普遍的情况。这里描述如何为 youtube 视频加入字幕。  
首先要进行视频字幕的下载，这里可以使用一个 chrome 拓展：[YouTube™ 双字幕](https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm)，即可下载你所需要的字幕文件。如果你有更方便的下载方式，欢迎告诉群主。  
接下来进行字幕与视频的重新烧录。MKVToolNix 只能做那种分离的字幕，但是 B 站要上传烧录好的，为了更好的兼容性，建议始终将视频和文件重新烧录。使用 ffmpeg 进行操作：

```bash
ffmpeg -i input.mp4 -vf subtitles=input.srt output.mp4
```

如果需要制作双语字幕(同时显示，而不是分字幕轨道)，可以使用两次 ffmpeg 命令，第一次添加主字幕，第二次添加副字幕。第一次操作使用 MarginV 进行垂直方向的区分。更多参数可以自行参考 ffmpeg 文档。

```bash
ffmpeg -i hack.mp4 -strict -2 -vf subtitles=hack_zh.srt:force_style='Fontsize=20\,Fontname=FZYBKSJW--GB1-0\,MarginV=30\,Bold=-1\,BorderStyle=1' -qscale:v 3 hack_with_zh.mp4
ffmpeg -i hack_with_zh.mp4 -strict -2 -vf subtitles=hack_en.srt:force_style
='Fontsize=15\,Fontname=FZYBKSJW--GB1-0\,Bold=-1\,BorderStyle=1' -qscale:v 3 hack_with_double_subtitles.mp4
```

## 视觉小说的素材提取

目前一般常用的为 GARbro，但是其在 linux 下无法正常使用。这里提供一个跨平台的 gal game 内容提取工具[arc_unpacker](https://aur.archlinux.org/packages/arc_unpacker-git/)。详细用法可自行查看其 github。

<!--
#### 声卡驱动

[alsa 官方文档](https://wiki.archlinux.org/index.php/Advanced_Linux_Sound_Architecture)
[PulseAudio 官方文档](https://wiki.archlinux.org/index.php/PulseAudio)
音频问题：需要安装一些包来解决声道独占的问题(davinci reslove 会出现声道抢占)

不确定是否需要的：
sudo pacman -S pulseaudio-alsa  #作为一个pulseaudio与alsa的bridge，可能解决了没有声音的问题
sudo pacman -S pulseeffects
sudo pacman -S pulseaudio-jack -->
