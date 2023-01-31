---
title: 透明代理
sidebarDepth: 2
next: /advanced/optional-cfg-1.md
---

# archlinux 透明代理

> ### 🕊 纵使千山多万壑，犹有青鸾踏云间
>
> 全球化浪潮无法阻挡，我们常常有访问一些资料的客观需求。但有的时候因为一些因素往往导致无法正常访问（包括但不限于**终端中下载文件特别慢、无法访问部分网站、部分应用无法正常使用**等）。虽然前路千沟万壑，但无法阻挡我们前行的脚步。本节我们通过设置透明代理解决这一问题

> ### 🔖 这一节将会讨论：
>
> ::: details 目录
>
> [[toc]]
>
> :::

::: danger ☢️ 警告

_第六条　计算机信息网络直接进行国际联网，必须使用邮电部国家公用电信网提供的国际出入口信道。_

_任何单位和个人不得自行建立或者使用其他信道进行国际联网。_

-- 中华人民共和国计算机信息网络国际联网管理暂行规定

:::

## 鉴于Qv2ray原项目已[停止开发](https://github.com/Qv2ray/Qv2ray)，新的版本还不够完善，有魔法上网需求者建议使用v2rayA替代Qv2ray

v2rayA的优势：

* 支持一键开启全局代理，配置方便
* 客户端运行在浏览器中，轻量

### 安装v2ray和v2rayA:

::: tip ℹ️ 提示

 v2rayA 2.0版本全面转向 V2Ray 第五代版本，不支持第四代与 Xray，建议升级 V2Ray 到 5.10 版本。
 如果你坚持使用 Xray，那么你可以停留在 1.x 版本，或者自行编译 Master 分支。

:::

:::: code-group
::: code-group-item cn

```bash
sudo pacman -S v2ray v2raya
```

:::
::: code-group-item aur

```bash
sudo pacman -S v2ray
yay -S aur/v2raya
```

:::
::::

### 配置v2raya

安装后启动服务：

```bash
sudo systemctl enable --now v2raya
```

随后在开始菜单中搜索 v2rayA，点击即可打开浏览器页面。在其中加入订阅(没有魔法上网结点？请参考[原文档相关内容](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/fxckGFW?id=%e5%b7%b2%e6%9c%89%e7%a7%91%e5%ad%a6%e4%b8%8a%e7%bd%91%e7%9a%84%e8%8a%82%e7%82%b9%e7%9a%84%e6%83%85%e5%86%b5))。在设置中建议开启全局透明代理(选择`大陆白名单`)，同时开启防止 DNS 劫持功能，否则可能会拿不到被 DNS 污染的资源(如 github raw)。

## 安装和配置Qv2ray

### 1. 安装 Qv2ray 和 V2Ray / Xray 内核

通过以下命令安装 [Qv2ray](https://github.com/Qv2ray/Qv2ray)<sup>cn</sup> 和 [V2Ray](https://archlinux.org/packages/?sort=&q=v2ray&maintainer=&flagged=) / [Xray](https://github.com/XTLS/Xray-core)<sup>cn</sup> 内核：

:::: code-group
::: code-group-item V2Ray

```bash
sudo pacman -S qv2ray-dev-git v2ray
```

:::
::: code-group-item Xray

```bash
sudo pacman -S qv2ray-dev-git xray
```

:::
::::

::: tip ℹ️ 提示

若安装 V2Ray 核心时报错，请尝试更换镜像源。

:::

![Qv2ray](../static/rookie/transparent_qv2ray.png)

> #### 📑 相关资料：Qv2ray
>
> Qv2ray 是一个使用 Qt 编写的跨平台的 v2ray 图形前端。

### 2. 配置 Qv2ray

1. 打开 Qv2ray > 点击 `首选项`：

![Qv2ray_config-1](../static/rookie/transparent_cfg-1.png)

2. 在 `内核设置` 选项卡中，点击 `检查 V2Ray 核心设置` 以验证 V2Ray 核心设置：

![Qv2ray_config-2](../static/rookie/transparent_cfg-2.png)

::: tip ℹ️ 提示

1. 若使用 Xray 内核，则先需修改：

   1. `V2Ray 核心可执行文件路径` 为 `/usr/bin/xray`

   2. `V2Ray 资源目录` 为 `/usr/share/xray`

2. 再点击 `检查 V2Ray 核心设置` 以验证 Xray 核心设置：

![Qv2ray_config-3](../static/rookie/transparent_cfg-3.png)

:::

### 3. 配置订阅

1. 在主窗口中点击 `分组`：

![Qv2ray_config-4](../static/rookie/transparent_cfg-4.png)

2. 修改 `分组名称` 的 `默认分组` 为自定义名称（通常为 ✈ 场名称）：

![Qv2ray_config-5](../static/rookie/transparent_cfg-5.png)

3. 切换到 `订阅设置` 选项卡并进行如下配置：

   1. 勾选 `此组是一个订阅`

   2. 设置 `订阅地址` 为 ✈ 场提供的 `订阅链接`

   3. 点击 `更新订阅` 按钮并等待完成

   4. 点击 `确定` 以应用设置并关闭对话框

![Qv2ray_config-6](../static/rookie/transparent_cfg-6.png)

::: tip ℹ️ 提示

若使用 `qv2ray-dev-git`<sup>cn</sup>，则需要注意的是最新的 `qv2ray-dev-git` 已经将机场的默认订阅类型改为规范 `SIP008`。

如果你的 ✈ 场订阅类型为 `base64`，则需要在 `订阅设置` 面板 > `订阅类型` 中，将 `SIP008` 改为 `base64`，否则你将拿不到订阅链接中的任何节点。

:::

### 4. 通过系统代理方式尝试连接

1. 双击分组中添加的订阅即可查看更新出的节点，右键并点击 `测试延迟` 可以测试分组或节点的延迟：

![Qv2ray_connect-1](../static/rookie/transparent_connect-1.png)

2. 右键需要连接的节点 > 点击 `连接到此服务器` 即可连接：

![Qv2ray_connect-2](../static/rookie/transparent_connect-2.png)

3. 打开不存在的网站验证连接：

![Qv2ray_connect-3](../static/rookie/transparent_connect-3.png)

::: tip ℹ️ 提示

Qv2ray 会自动配置系统代理。也可以点击托盘图标 > 在弹出菜单中，依次选择 `系统代理` > `启用 / 禁用系统代理` 以启用或禁用系统代理。

:::

::: tip ℹ️ 提示

GNOME 的系统代理设置非常有效。这是因为 GNOME 的系统代理设置得到了普遍的适配。

但是 KDE 的系统代理设置更像是一个玩具。甚至 KDE 系列应用程序本身也不会读取和使用那个配置。所以我们需要通过设置透明代理的方式解决这个问题。

同时这也可以使终端下的应用使用代理连接（如 git）。

:::

### 5. 安装 cgproxy

通过以下命令安装 [cgproxy](https://github.com/springzfx/cgproxy)<sup>cn / aur</sup>：

:::: code-group
::: code-group-item cn

```bash
sudo pacman -S cgproxy-git
```

:::
::: code-group-item aur

```bash
yay -S aur/cgproxy
```

:::
::::

### 6. 配置 Qv2ray 透明代理设置

1. 打开 Qv2ray > `首选项` > `入站设置` > 取消勾选 `设置系统代理`：

![Qv2ray_transparent-1](../static/rookie/transparent_transparent-qv2ray-1.png)

2. 勾选 `透明代理设置`：

![Qv2ray_transparent-2](../static/rookie/transparent_transparent-qv2ray-2.png)

其它设置保持默认即可，`IPv4 端口` 可自定义为其它端口。

::: tip ℹ️ 提示

关于代理 `udp` 流量的设置稍微有一些复杂，配置有误便会导致无法上网。

本指南不对此展开介绍，如有需要可参考 [Project V 官方网站相关内容](https://www.v2ray.com/chapter_02/04_dns.html)。一般情况下不需要代理 `udp` 流量。

而属于 `udp` 类型的 `dns` 流量，我们只需要在系统设置里设置一个可用的 DNS 服务器即可。

:::

3. 点击 `确定` 保存设置

### 7. 配置 cgproxy

1. 通过 `vim` 编辑 `/etc/cgproxy/config.json` 文件：

```bash
sudo vim /etc/cgproxy/config.json
```

进行如下修改：

- 在 `cgroup_proxy` 中括号里加上 `"/"`（包含引号）
- 将 `port` 改为 Qv2ray 首选项里的透明代理端口（默认是和 Qv2ray 默认对应的 `12345`）
- 将 `enable_dns`、`enable_udp`、`enable_ipv6` 改为 `false`
- 如果希望当本机作为网关设备时为连接到本机网关的其他设备（如连接到本机开设的 wifi 热点的设备）也提供透明代理，则将 `enable_gateway` 改为 `true`

![cgproxy](../static/rookie/transparent_cgproxy.png)

::: tip ℹ️ 提示

cgproxy 默认配置是代理所有 `tcp` 和 `udp`、`ipv4` 和 `ipv6` 的流量。

如果不希望代理其中的某种（些）流量，则将对应的 `enable_xxx` 改为 `false`。注意，这里的配置要和 Qv2ray 选项里的配置一致（例如 Qv2ray 选项里没有勾选 `udp`，则这里务必把 `enable_udp` 改为 `false`）

:::

2. 保存并退出 `vim`

### 8. 配置可用的 DNS 服务

1. 打开 `系统设置` > 点击侧栏 `连接`：

![system-config_step-1](../static/rookie/transparent_system-cfg-1.png)

2. 选择当前连接 > 点击 `ipv4` 选项卡：

![system-config_step-2](../static/rookie/transparent_system-cfg-2.png)

3. 在 `其它 DNS 服务器` 中添加没有污染的 DNS 服务器：

![system-config_step-3](../static/rookie/transparent_system-cfg-3.png)

4. 保存并退出系统设置

### 9. 启动 cgproxy 服务

1. 在 Qv2ray 中连接一个节点

2. 在 Qv2ray 托盘菜单中关闭系统代理（如果已经启动）

3. 通过以下命令启动 cgproxy 服务：

```bash
sudo systemctl start cgproxy.service
```

::: tip ℹ️ 提示

每次重启后都要重新命令启动 cgproxy 服务。

若要设为开机自启，请执行以下命令：

```bash
sudo systemctl enable cgproxy.service
```

若要关闭 cgproxy 服务，请执行以下命令：

```bash
sudo systemctl stop cgproxy.service
```

:::

4. 通过以下命令检查 cgproxy 服务运行情况：

```bash
systemctl status cgproxy.service
```

![cgproxy-start](../static/rookie/transparent_cgproxy-start.png)

5. 打开不存在的网站验证连接：

![check](../static/rookie/transparent_check.png)

::: tip ℹ️ 提示

如果 cgproxy 不生效 😢，请尝试以下步骤：

1. 观察 Qv2ray 日志，看流量是否被定向到了 Qv2ray
2. 如果没有，请检查配置是否准确、cgproxy 服务是否开启等
3. 如果还是没发现问题，尝试更换端口
4. 使用以下命令尝试给核心文件加上相应的特权：

:::

:::: code-group
::: code-group-item V2Ray

```bash
sudo setcap "cap_net_admin,cap_net_bind_service=ep" /usr/bin/v2ray
```

:::
::: code-group-item Xray

```bash
sudo setcap "cap_net_admin,cap_net_bind_service=ep" /usr/bin/xray
```

:::
::::

##  Clash

clash 本身是一个网络连接的代理内核，通过预先定义的**规则**，对网络连接进行转发。clash 内核规定了配置文件 `config.yaml` 的格式。支持VMess、Shadowsocks、Trojan、Snell 协议。

```shell
# 配置文件
vim ~/.config/clash/config.yaml
```



### Clash for Windows

这是一个比较推荐的客户端，支持Windows/macOS/Linux ，基于Clash 和 Electron 的一个GUI 客户端。未开源

```
yay -S clash-for-windows-bin
```



## 其它代理方法（非透明代理）

> 虽然 cgproxy 很好，但有的时候就是会有诡异的 bug。本指南为了内容的全面性，介绍其它的代理方法。

### 系统代理

如步骤 [4. 通过系统代理方式尝试连接](./transparent.md#_4-通过系统代理方式尝试连接) 所述，但在很多应用不生效（主流浏览器已支持 KDE 的系统代理）。

### 应用自身的代理配置

#### Firefox

Firefox 可使用系统代理，也可手动配置：

![Firefox](../static/rookie/transparent/firefox.png)

#### Telegram

1. 点击 `Settings` > `Advanced` > `Connection type` > `Use custom proxy`

![Telegram_step-1](../static/rookie/transparent/telegram-1.png)

2. 点击 `ADD PROXY` > 填写合适的类型和端口 > `SAVE`：

![Telegram_step-2](../static/rookie/transparent/telegram-2.png)

#### Visual Studio Code（code OSS）

1. 点击 `File`（`文件`） > `Preference`（`首选项`） > `Settings`（`设置`）

2. 搜索 `proxy`，在其中填入 http 代理地址（`http://127.0.0.1:xxxx`）即可：

![vscode](../static/rookie/transparent/vscode.png)

::: tip ℹ️ 提示

其它应用请自行寻找代理设置。

:::

### export

通过以下 `export` 命令设置当前终端的代理方式：

```bash
export https_proxy=http://127.0.0.1:xxxx
export http_proxy=http://127.0.0.1:xxxx
export all_proxy=http://127.0.0.1:xxxx
```

::: tip ℹ️ 提示

不同终端命令所识别的环境变量名不同，如 `all_proxy` 对 `curl` 生效，而对 `wget` 则不生效，具体可查看各个命令的 `man page`

:::

### proxychains-ng

如果对于一个应用，KDE 系统代理不生效，在终端 `export` 了 `ALL_PROXY` 变量再用终端启动此应用代理也不生效，并且这个应用自身也没有配置代理的选项，此时可以尝试使用 proxychains-ng。

它可以为单行命令配置代理。它是一个预加载的 hook，允许通过一个或多个 SOCKS 或 HTTP 代理重定向现有动态链接程序的 TCP 流量。

1. 通过以下命令安装 proxychains-ng 包：

```bash
sudo pacman -S proxychains-ng
```

2. 通过 `vim` 编辑 `/etc/proxychains.conf` 文件：

```bash
sudo vim /etc/proxychains.conf
```

把配置文件中最后两行改为 Qv2ray 代理的 ip 和端口：

![proxychains_step-1](../static/rookie/transparent/proxychains-1.png)

在 `proxy_dns` 一行前添加 `#` 注释掉此行，否则使用 `proxychains` 启动 yay 会报错：

![proxychains_step-2](../static/rookie/transparent/proxychains-2.png)

在 `quiet_mode` 一行前删除 `#` 解注释掉此行，以关闭调用 library 产生的输出：

```properties
# Quiet mode (no output from library)
quiet_mode
````

3. 使用代理方式为在单一命令前添加 `proxychains` 前缀：

```bash
proxychains %command%
```

如使用 proxychains-ng 代理 yay:

```bash
proxychains yay -Syyu
```

![proxychains_step-3](../static/rookie/transparent/proxychains-3.png)

> 📔 本节参考资料：
>
> - [Qv2ray](https://qv2ray.net/lang/zh/)
