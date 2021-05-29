# 编程软件

本文介绍各个编程方向优质的软件介绍。各个编程方向的简述会在其余文章中展现。

## 前端编程

对于前端来说，一般需要浏览器以及 IDE 即可，附加一些网络工具。

关于 IDE(或编辑器),可以使用 [OSS code](https://www.archlinux.org/packages/community/x86_64/code/) (微软 [Visual Studio Code](https://aur.archlinux.org/packages/visual-studio-code-bin/) 的开源版本)，[webstrom](https://aur.archlinux.org/packages/webstorm/)<sup>AUR</sup> 或者 [atom](https://archlinux.org/packages/community/x86_64/atom/)。

浏览器方面有 [firefox](https://archlinux.org/packages/extra/x86_64/firefox/)，[chromium](https://archlinux.org/packages/extra/x86_64/chromium/)，[google-chrome](https://aur.archlinux.org/packages/google-chrome/)<sup>AUR</sup>，[vivaldi](https://archlinux.org/packages/community/x86_64/vivaldi/)，[firefox-developer-edition](https://www.archlinux.org/packages/community/x86_64/firefox-developer-edition/)，[Edge](https://aur.archlinux.org/packages/microsoft-edge-dev-bin/)<sup>AUR</sup>，以及 [opera](https://archlinux.org/packages/community/x86_64/opera/) 可供选择。

网络工具常使用 [charles](https://aur.archlinux.org/packages/charles/)<sup>AUR</sup>，[postman](https://aur.archlinux.org/packages/postman-bin/)<sup>AUR</sup>以及 [wireshark-qt](https://archlinux.org/packages/community/x86_64/wireshark-qt/)。

至于 [yarn](https://www.archlinux.org/packages/community/any/yarn/)、[npm](https://www.archlinux.org/packages/community/any/npm/) 等前端常用工具，也均可用 pacman 安装。

> OSS code 存在的问题：[官方 wiki](https://wiki.archlinux.org/index.php/Visual_Studio_Code)。一个普遍问题是删文件 UI 会卡住很久，原因是 electron 在 linux 下默认使用 `gio` 删除，但是 KDE 用户一般都不装这个。解决办法是把 `ELECTRON_TRASH=kioclient5` 环境变量加在~/.pam_environment 里。

## 后端编程

Jetbrains 家的全家桶基本都有支持可以在源中或 AUR 中自行搜索，如[IntelliJ Idea](https://www.archlinux.org/packages/community/x86_64/intellij-idea-community-edition/)，[PyCharm](https://www.archlinux.org/packages/community/x86_64/pycharm-community-edition/)，[GoLand](https://aur.archlinux.org/packages/goland/)<sup>AUR</sup>等。
较为老式的 IDE 有 [Netbeans](https://www.archlinux.org/packages/community/any/netbeans/) 以及 eclipse，eclipse 有多种版本，可在 AUR 中自行搜索。

关于数据库相关软件，也有多种选择。

- [Mysql Workbench](https://www.archlinux.org/packages/community/x86_64/mysql-workbench/)
- [pgadmin4](https://www.archlinux.org/packages/community/x86_64/pgadmin4/)
- [dbeaver](https://www.archlinux.org/packages/community/x86_64/dbeaver/)
- [robo3t](https://aur.archlinux.org/packages/robo3t-bin/)<sup>AUR</sup>
- [redis-desktop-manager](https://aur.archlinux.org/packages/redis-desktop-manager/)<sup>AUR</sup>
- [rdm-bin](https://aur.archlinux.org/packages/rdm-bin/)<sup>AUR</sup> 如果上面的编译有问题，可用这个 bin 版本

## 安卓客户端编程

目前来说，安卓开发已经统一到了 [Android Studio](https://aur.archlinux.org/packages/android-studio/) 进行开发。当然老式的 Eclipse 也可以用来使用。

## 桌面应用编程

目前桌面开发较为流行的是 electron 和 Qt 应用。electron 可直接用 OSS Code 进行开发，Qt 应用使用 [Qt Creator](https://www.archlinux.org/packages/extra/x86_64/qtcreator/) 进行开发。

## 机器学习

安装 [jupyter-notebook](https://archlinux.org/packages/community/any/jupyter-notebook/) 以及所需要的相关库如[numpy](https://archlinux.org/packages/extra/x86_64/python-numpy/)即可，均可在源中找到。
