# 网络相关进阶配置

> ### 🔌 NetworkManager / systemd-networkd 与无线后端（iwd / wpa_supplicant）
>
> 本节介绍 Linux 下常见的两类网络管理方案：`NetworkManager`（面向桌面、DE 集成良好）和 `systemd-networkd`（面向服务器/精简场景），并对常见的 Wi‑Fi 后端 `iwd`（iNet Wireless Daemon）与 `wpa_supplicant`进行对比与配合建议。最后给出识别当前系统“管理器 + Wi‑Fi 后端”组合的方法，并给出切换到推荐组合 `iwd + NetworkManager` 的步骤，以及各组合下常用的工具建议（例如 `nmtui`、`nmcli`、`impala` 等）。
>
> 🔗 建议阅读：[ArchWiki — Wireless network configuration](https://wiki.archlinux.org/title/Wireless_network_configuration)
>
::: tip ℹ️ 提示

本文示例以 Arch Linux 为主，命令和配置在其他发行版上可能有所差异。对于桌面环境，推荐使用 `iwd + NetworkManager` 以获得更好的兼容性和桌面集成体验；对于精简服务器环境，`systemd-networkd` 仍是很好的选择。

:::

---

## 背景简介

- `NetworkManager`：一个高层网络管理守护进程，支持有线/无线/VPN/移动网络等。适合桌面或需要 GUI/TUI 集成的场景，提供很多前端（`nmcli`, `nmtui`, GNOME/KDE 插件等）。
- `systemd-networkd`：systemd 生态中的底层网络管理器，配置以静态文件（`*.network`）驱动，适合服务器与精简系统。它本身不负责 Wi‑Fi 连接的认证/关联（需要 `wpa_supplicant` 或 `iwd` 来做这一层）。
- `iwd`：由 Intel 维护的现代 Wi‑Fi 守护进程（iNet Wireless Daemon），较 `wpa_supplicant` 体积小、集成度高、并提供 `iwctl` 交互式客户端；可以单独使用也可以作为 `NetworkManager` 或 `systemd-networkd` 的后端。
- `wpa_supplicant`：历史悠久、功能全面的 Wi‑Fi 认证/关联守护进程，很多旧工具与脚本仍然基于它。常见工具有 `wpa_cli`、`wpa_passphrase` 等。

> 备注：ArchWiki 上列出了 `iwd` 的若干前端，例如 `impala`（TUI）、`iwgtk`（GUI）等，`impala` 是 iwd 的终端界面工具（适用于使用 iwd 单独管理无线的场景）。

---

## 如何识别当前系统的“组合”（Manager + Wi‑Fi 后端）

常用命令（在任意终端执行）来判断当前系统在用哪些服务和后端配置：

```bash
# 哪种高层管理器在运行
systemctl is-active NetworkManager
systemctl is-active systemd-networkd

# 哪个 Wi‑Fi 后端在运行
systemctl is-active iwd
systemctl is-active wpa_supplicant

# NetworkManager 设备概览 / systemd-networkd 状态
nmcli device status
networkctl list
```

此外检查 NetworkManager 是否配置使用 `iwd` 后端（若使用 `NetworkManager`）：

```bash
# 查看 NM 是否配置了 iwd 后端
grep -R "wifi.backend" /etc/NetworkManager/NetworkManager.conf /etc/NetworkManager/conf.d || true
```

查看进程或服务也能快速判断：`ps aux | grep -E "iwd|wpa_supplicant|NetworkManager|systemd-networkd"` 或 `journalctl -u iwd -f` / `journalctl -u wpa_supplicant -f`。

---

## 为什么推荐 `iwd + NetworkManager`（桌面/笔记本场景）

- `NetworkManager` 提供成熟的桌面集成（nm‑applet、`nmtui`、`nmcli`、DE 控件等），配置、VPN 与网络策略丰富；
- `iwd` 对现代硬件支持良好，设计简洁、速度和能耗表现通常优于老旧 `wpa_supplicant`，并且能够通过 D‑Bus 被 `NetworkManager` 驱动；
- 以 `iwd` 作为后端可以避免同时运行 `wpa_supplicant` 导致的冲突，减少重复的无线守护进程；
- ArchWiki 有关 `iwd` 的文档和社区支持较完整（可以方便查阅 `iwctl`、profile 存储等细节）。

如果你在服务器/嵌入式环境且只需有线网络、或偏好一切均由 systemd 管理且不需要 NetworkManager 的高级功能，则继续使用 `systemd-networkd`（配合 `iwd` 或 `wpa_supplicant` 做无线）也很合适。

---

## 如何把系统切换到 iwd + NetworkManager（推荐组合）

简要步骤（Arch Linux 环境为例）：

1. 安装软件包并停止可能冲突的服务：

```bash
sudo pacman -Syu networkmanager iwd

# 停掉并屏蔽 wpa_supplicant（避免冲突）
sudo systemctl disable --now wpa_supplicant.service
sudo systemctl mask wpa_supplicant.service

# 启用 iwd
sudo systemctl enable --now iwd.service

# 启用 NetworkManager
sudo systemctl enable --now NetworkManager
```

2. 配置 NetworkManager 使用 `iwd` 后端（添加 drop-in）：

```ini
# /etc/NetworkManager/conf.d/wifi_backend.conf
[device]
wifi.backend=iwd
```

3. 重启 NetworkManager 验证：

```bash
sudo systemctl restart NetworkManager
nmcli device status
systemctl status iwd
```

4. 测试 Wi‑Fi：使用 `nmcli`、`nmtui` 或你的桌面环境网络面板连接；若想直接与 `iwd` 交互（standalone 场景）可以用 `iwctl`。

::: tip ℹ️ 注意事项

- 切换后如果仍存在 `wpa_supplicant` 进程或服务，先停用并 mask 它（例如：`sudo systemctl disable --now wpa_supplicant` && `sudo systemctl mask wpa_supplicant`）。
- 在某些旧硬件或特殊配置下，`iwd` 兼容性可能需要额外检查（例如某些企业 EAP 变体），在切换前先测试你的网络场景。
- 如果使用 `systemd-networkd + iwd`，常见做法是用 `iwctl` / iwd 负责关联 AP，使用 `.network` 文件并设置 `DHCP=yes` 来管理 IP（示例见下文）。

:::

示例（systemd-networkd + iwd）：

```ini
# /etc/systemd/network/20-wlan.network
[Match]
Name=wlan0

[Network]
DHCP=ipv4
```

---

## 不同组合适用的常用工具（建议）

- NetworkManager + iwd（推荐桌面组合）
  - 推荐工具：`nmcli`（脚本/CLI），`nmtui`（TUI）、`nm-connection-editor`（GUI）、桌面网络插件（GNOME/KDE 等）
  - 注意：`impala` 是 `iwd` 的 TUI 前端（适合 iwd 单独使用），如果用 `NetworkManager` 管理连接，优先用 NM 的工具；若想直接用 iwd（不通过 NM），`impala` 是个不错的终端界面。
- NetworkManager + wpa_supplicant
  - 与上类似，但后端不同；可用 `nmcli`/`nmtui`。
- systemd-networkd + iwd
  - 用 `iwctl` 进行关联与 Wi‑Fi 管理，用 `networkctl` / `.network` 文件 管理 IP、路由（或启用 iwd 的内置网络配置）。
  - DNS：`resolvectl`（systemd-resolved）。
- systemd-networkd + wpa_supplicant
  - 用 `wpa_supplicant` 或 `wpa_cli` 做无线认证，`systemd-networkd` 做 IP，必要时用 `wpa_passphrase` 生成 PSK。
- Headless 或脚本化场景
  - 对于桌面首选 `nmcli`；对纯无线/精简系统，`iwctl`（iwd）或 `wpa_cli`（wpa_supplicant）更轻量。

---

## 常见问题与故障排查要点

::: danger ☢️ 警告

不要同时运行多个无线后端（`iwd` 与 `wpa_supplicant`），也不要同时让多个高层管理器（`NetworkManager` 与 `systemd-networkd`）管理相同接口 —— 这通常会导致频繁断线或“抢占”问题。

:::
- 若使用 `iwd` 遇到无法写入 `/etc/resolv.conf` 的问题，可参考 iwd 文档让 `iwd.service` 有写入权限（或使用 `systemd-resolved`）。
- 无法连接企业 WPA：检查 EAP 配置（证书路径、`EAP-Method` 等），使用 `journalctl -u iwd -f` 或 `journalctl -u wpa_supplicant -f` 查看详细日志。
- 确认后端生效：在 `NetworkManager` 下，查看 `grep -R "wifi.backend" /etc/NetworkManager`（或 `nmcli device status`）；在 `systemd-networkd` 下，使用 `networkctl status` 与 `ip addr`。

---
