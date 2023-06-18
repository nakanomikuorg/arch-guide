# 编程软件

本文介绍各个编程方向优质的软件介绍。各个编程方向的简述会在其余文章中展现。

## 前端编程

对于前端来说，一般需要浏览器以及 IDE 即可，附加一些网络工具。

关于 IDE(或编辑器),可以使用 [OSS code](https://www.archlinux.org/packages/extra/x86_64/code/) (微软 [Visual Studio Code](https://aur.archlinux.org/packages/visual-studio-code-bin/)<sup>aur</sup> 的开源版本，此外有社区构建的 [VSCodium](https://aur.archlinux.org/packages/vscodium-bin/)<sup>aur</sup> 可供选择)，[webstorm](https://aur.archlinux.org/packages/webstorm/)<sup>aur</sup> 或者 [atom](https://archlinux.org/packages/extra/x86_64/atom/)。

浏览器方面有 [firefox](https://archlinux.org/packages/extra/x86_64/firefox/)，[chromium](https://archlinux.org/packages/extra/x86_64/chromium/)，[google-chrome](https://aur.archlinux.org/packages/google-chrome/)<sup>aur</sup>，[vivaldi](https://archlinux.org/packages/extra/x86_64/vivaldi/)，[firefox-developer-edition](https://www.archlinux.org/packages/extra/x86_64/firefox-developer-edition/)，[Edge](https://aur.archlinux.org/packages/microsoft-edge-dev-bin/)<sup>aur</sup>，以及 [opera](https://archlinux.org/packages/extra/x86_64/opera/) 可供选择。

网络工具常使用 [charles](https://aur.archlinux.org/packages/charles/)<sup>aur</sup>，[postman](https://aur.archlinux.org/packages/postman-bin/)<sup>aur</sup>以及 [wireshark-qt](https://archlinux.org/packages/extra/x86_64/wireshark-qt/)。

至于 [yarn](https://www.archlinux.org/packages/extra/any/yarn/)、[npm](https://www.archlinux.org/packages/extra/any/npm/) 等前端常用工具，也均可用 pacman 安装。

> OSS code 存在的问题：[官方 wiki](https://wiki.archlinux.org/index.php/Visual_Studio_Code)。一个普遍问题是删文件 UI 会卡住很久，原因是 electron 在 linux 下默认使用 `gio` 删除，但是 KDE 用户一般都不装这个。解决办法是把 `ELECTRON_TRASH=kioclient5` 环境变量加在~/.pam_environment 里。

## 后端编程

Jetbrains 家的全家桶基本都有支持可以在源中或 AUR 中自行搜索，如[IntelliJ Idea](https://www.archlinux.org/packages/extra/x86_64/intellij-idea-community-edition/)，[PyCharm](https://www.archlinux.org/packages/extra/x86_64/pycharm-community-edition/)，[GoLand](https://aur.archlinux.org/packages/goland/)<sup>aur</sup>等。
较为老式的 IDE 有 [Netbeans](https://www.archlinux.org/packages/extra/any/netbeans/) 以及 eclipse，eclipse 有多种版本，可在 AUR 中自行搜索。

关于数据库相关软件，也有多种选择。

- [Mysql Workbench](https://www.archlinux.org/packages/extra/x86_64/mysql-workbench/)
- [pgadmin4](https://www.archlinux.org/packages/extra/x86_64/pgadmin4/)
- [dbeaver](https://www.archlinux.org/packages/extra/x86_64/dbeaver/)
- [robo3t](https://aur.archlinux.org/packages/robo3t-bin/)<sup>aur</sup>
- [RESP.app](https://aur.archlinux.org/packages/resp-app/)<sup>aur</sup> （原 redis-desktop-manager）
- [rdm-bin](https://aur.archlinux.org/packages/rdm-bin/)<sup>aur</sup> 如果上面的编译有问题，可用这个 bin 版本

## 安卓客户端编程

目前来说，安卓开发已经统一到了 [Android Studio](https://aur.archlinux.org/packages/android-studio/) 进行开发。当然老式的 Eclipse 也可以用来使用。

## 桌面应用编程

目前桌面开发较为流行的是 electron 和 Qt 应用。electron 可直接用 OSS Code 进行开发，Qt 应用使用 [Qt Creator](https://www.archlinux.org/packages/extra/x86_64/qtcreator/) 进行开发。

## 机器学习

安装 [jupyter-notebook](https://archlinux.org/packages/extra/any/jupyter-notebook/) 以及所需要的相关库如[numpy](https://archlinux.org/packages/extra/x86_64/python-numpy/)即可，均可在源中找到。机器学习常用开源框架有[Pytorch](https://pytorch.org/), [Tensorflow](https://www.tensorflow.org)等 ([Wiki](https://wiki.archlinux.org/title/List_of_applications/Science#Artificial_intelligence))。

## 科学计算

对于科研人士而言，做数值计算（或者叫科学计算）是使用 linux 的一大动力。目前科学计算的几大主流编程语言分别是

- Matlab (在 Linux 下安装 Matlab 时可能遇到符号链接损坏的问题，需要重新下载安装文件并利用 'unzip -X -K matlab_R20\*\_glnxa64.zip' 命令重新解压)
- Fortran
- Julia
- Python（以 Numpy 库为主）。
  另外还有 Mathematica 作数学计算用。
  考虑到有部分朋友容易把“语言”和“软件”混为一谈，在此稍作说明：Matlab 和 Mathematica 既是软件名称，也是一种语言。暂时可以认为这些软件就是写这些语言的 IDE。
  而 Python 之类则仅仅是“编程语言”。至于我们下载的 Python3.9 之类的包，则是 python 语言对应的库，并不是一个“写 python 的软件”。

### 开源软件替代：[SageMath](https://www.sagemath.org/)

SageMath(原名 Sage)是免费的、开源的数学软件，支持代数、几何、数论、密码学、数值计算和相关领域的研究和教学。Sage 的开发模式和 Sage 本身的技术都非常强调开放性、社区性、合作性和协作性：我们在制造汽车，而不是重新发明轮子。Sagemath 的总体目标是为"4M"（即 Maple、Mathematica、Magma 和 Matlab）提供一个可行的、免费的、开源的替代品。

SageMath 为目前科学计算领域的大多数开源软件/库统一重写了接口，提供了一种类兼容 python 的语法，可以说集开源数学软件之大成。目前已可部分替代"4M"。

[Arch Wiki](https://wiki.archlinux.org/title/SageMath)

[中文教程及文档](https://www.osgeo.cn/sagemath/index.html)

Matlab 与 Mathematica 则是商业软件，使用正版需要付费购买。二者均有 linux 版本可供安装。

- [Python](https://wiki.archlinux.org/title/Python)直接安装 python3.9
- [Numpy 库](https://archlinux.org/packages/extra/x86_64/python-numpy/)这个库包含很多科学计算的函数（例如矩阵运算）
- [Fortran 编译](https://wiki.archlinux.org/title/GNU_Compiler_Collection)直接安装 gcc-fortran 包
- [Julia](https://wiki.archlinux.org/title/Julia)
  顺便一提，使用 python 的朋友可能很多都听说或者使用过 Anaconda 这个包管器。其实很多库既可以通过[Anaconda](https://aur.archlinux.org/packages/anaconda/)<sup>aur</sup> 或[Miniconda](https://aur.archlinux.org/packages/miniconda3/)<sup>aur</sup> 下载，亦可通过 pacman 或 yay 下载。不得不说，AUR 是个好东西。

另外,Intel 在 2020 年推出了名为 OneAPI 的“统一应用程序编程接口的开放标准”。OneAPI 的组件亦可在 Archlinux 上安装。如果自己的电脑 CPU 是 Intel 家的，使用 OneAPI 提供的编译器（如 i++），可提升语言编译速度。
如有朋友对 AMD 在这方面有所了解，欢迎补充。
