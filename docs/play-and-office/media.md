# 视频影音

本节记录在 arch linux 上观看影视，收听音乐等相关信息。

## 音视频播放器

网络音乐收听可以使用官方网易云音乐，qq 音乐，或者一些资源整合类型的第三方客户端，它们的资源是全网整合，一般较为完整。官方客户端已经多年没有更新。

```bash
sudo pacman -S netease-cloud-music #官方网易云音乐(ArchLinuxCN)
yay -S yesplaymusic-electron #目前最强第三方网易云客户端
yay -S cocomusic #存在隐藏下载功能的客户读
yay -S qqmusic-bin #QQ 音乐
```

## 视频播放器

本地音视频播放一般使用 vlc 或 mpv

```bash
sudo pacman -S vlc #VLC 播放器
sudo pacman -S mpv #MPV 播放器
```

[zy-player](https://aur.archlinux.org/packages/zy-player-bin/)是一个跨平台视频资源播放器, 整合全网资源，可以播放一些电影。
