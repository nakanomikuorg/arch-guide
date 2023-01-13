# 远程连接

> ### 🔗 蒹葭苍苍，白露为霜
>
> 这一小节讨论如何在 archlinux 上远程连接另外的计算机以及如何远程连接运行 archlinux 的计算机。

> ### 🔖 这一节将会讨论：
>
> ::: details 目录
>
> [[toc]]
>
> :::

::: tip ℹ️ 提示

指南中带有 <sup>aur</sup> 角标的软件代表是在 [AUR](https://aur.archlinux.org/)（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。

指南中带有 <sup>cn</sup> 角标的软件代表是在 [archlinuxcn](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。

指南中带有 <sup>EULA</sup> 角标的软件代表是 [专有软件](https://www.gnu.org/proprietary/proprietary.html)。请自行斟酌是否使用。

:::

## RealVNC

RealVNC 是一家提供远程访问软件的公司，成立于 2002 年。该软件由服务器(VNC 服务器，英语：VNC Server)和客户端(VNC 查看器，英语：VNC Viewer)组成，该软件通过 VNC 协议来远程控制另一台计算机的屏幕[1]。

```sh
sudo pacman -S realvnc-vnc-server
```

启动与开机设置

```sh
sudo systemctl start vncserver-x11-serviced
sudo systemctl enable vncserver-x11-serviced
```

::: tip ℹ️ 提示  
一般情况下以上设置就已经能够让 realvnc 比较完美地在 arch 下运行了，然后在菜单栏点击 realvnc 图标进行初始化运行。  
:::
