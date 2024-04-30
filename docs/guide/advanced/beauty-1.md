# archlinux 系统美化（布局篇）

> ### 🌺 爱美之心，人皆有之
>
> 美化这个话题是永恒的。有些人用 Linux 的原因就是一开始被美化后桌面的截图惊艳到了
>
> 这一小节将会介绍如何对 KDE 桌面环境进行美化。受限于篇幅，本小节分为上下篇
>
> 从本章开始，过程将不会讲述的特别细节，根据界面提示操作即可

需要说明的是，不要过度美化！过度美化可能导致系统稳定性和性能下降等后果。

当然，尊重用户的个人选择，这也是 arch 之道。

本节介绍的步骤建议按顺序进行，**您可以选择在任何一步收手**，因为剩下的步骤可能显得多余，甚至可能适得其反。

同时，本小节将介绍两种桌面布局方式 —— 一种是传统的类似 Windows 的菜单栏布局，另一种是类似 macOS 的 Dock 栏布局。

::: tip ℹ️ 提示

若使用虚拟机，请不要过度美化！否则会降低性能甚至卡死。

:::

## 0. 换一张漂亮的壁纸

1. 在桌面右键 > 选择 `配置桌面和壁纸...`

2. 在设置窗口：

   - 选择 `添加图片` > 选择你想要的图片
   - 选择刚才添加的图片 > 点击 `应用`

   ![wallpaper](../../assets/guide/advanced/beauty/wallpaper.png)

   ::: tip ℹ️ 提示

   `壁纸类型` 可更改为：

   - `幻灯片` —— 若希望壁纸能够定时轮换
   - `每日一图` > 将 `提供` 改为喜欢的来源（如 `必应`，这将和 [必应](https://cn.bing.com) 的背景图片保持一致）

   :::

## 1. 更改用户头像

打开 `系统设置` > 点击侧栏 `用户` > 点击头像即可更改：

![avatar](../../assets/guide/advanced/beauty/avatar.png)

## 2. 确认显示特效混合器（混成器、合成器）状态

1. 打开 `系统设置` > 点击侧栏 `显卡与显示器` > `显示特效合成器`

2. 确认显示特效合成器运行状态：

   ![mixer](../../assets/guide/advanced/beauty/mixer.png)

## 3. 修改桌面布局

桌面布局之前，需要了解一些基本的概念：

- KDE 桌面中无论是菜单栏还是顶栏，本质上都是**面板**
- 面板上的元素（如托盘图标、数字时钟、网速显示、开始菜单图标）等都是**小组件**
- 小组件可以放置在面板里，也可以独立存在

更改桌面布局，本质上就是**调整面板和小组件的位置以及样式**。

### 3-0. 安装常用小组件

#### Weather Widget

天气插件。相比 KDE 自带的天气插件显示信息更加详细，也不会经常刷新不出天气信息。

安装 [Weather Widget](https://aur.archlinux.org/packages/plasma-applets-weather-widget-2)<sup>aur</sup>：

::: code-group

```bash [aur]
yay -S plasma-applets-weather-widget-2 qt6-5compat qt6-declarative # 必须安装
```

```bash [aur (git)]
yay -S plasma6-applets-weather-widget-3-git qt6-5compat qt6-declarative # 必须安装
```

:::

![weather-widget](../../assets/guide/advanced/beauty/weather-widget.png)

#### Split Digital Clock

放置在桌面的数字时钟。简单配置后可以很好看。

1. 在桌面右键 > 点击 `添加部件`：

   ![split-digital-clock-1](../../assets/guide/advanced/beauty/split-digital-clock-1.png)

2. 点击 `获取新部件...` > `下载新 Plasma 部件`：

   ![split-digital-clock-2](../../assets/guide/advanced/beauty/split-digital-clock-2.png)

3. 搜索小部件名 `Split Digital Clock` > 点击 `安装`：

   ![split-digital-clock-3](../../assets/guide/advanced/beauty/split-digital-clock-3.png)

#### Avalon Menu

程序启动器（开始菜单）。相比 KDE 自带的程序启动器更加简洁大方。

同上，搜索小部件名 `Avalon Menu` > 点击 `安装`：

![avalon-menu](../../assets/guide/advanced/beauty/avalon-menu.png)

#### Netspeed Widget

安装 [Netspeed Widget](https://aur.archlinux.org/packages/plasma5-applets-netspeed/)<sup>aur</sup>：

```bash
yay -S plasma5-applets-netspeed
```

![netspeed-widget](../../assets/guide/advanced/beauty/netspeed-widget.png)

::: tip ℹ️ 提示

其它小部件根据喜好自行安装即可。常用的还有：

- [Simple System Monitor](https://github.com/dhabyx/plasma-simpleMonitor) —— 系统信息

:::

### 3-1. 菜单栏布局

KDE 默认即菜单栏布局。只需调整一下小部件的位置和样式即可。

1. 右键菜单栏 > 点击 `编辑面板...`：

   ![menu-bar-layout-1](../../assets/guide/advanced/beauty/menu-bar-layout-1.png)

2. 点击 `添加部件...` > 将 `Avalon Menu` 拖放至菜单栏左侧：

   ![menu-bar-layout-2](../../assets/guide/advanced/beauty/menu-bar-layout-2.png)

   ![menu-bar-layout-3](../../assets/guide/advanced/beauty/menu-bar-layout-3.png)

3. 再次 `编辑面板...` > 将光标移动悬停在原来的程序启动器上 > 点击 `移除`：

   ![menu-bar-layout-4](../../assets/guide/advanced/beauty/menu-bar-layout-4.png)

4. 类似的，将 `Netspeed Widget` 和 `Weather Widget` 拖放至合适位置：

   ![menu-bar-layout-5](../../assets/guide/advanced/beauty/menu-bar-layout-5.png)

   ::: tip ℹ️ 提示

   您可能需要调整 `面板高度` 以使得小组件显示符合期望。

   :::

5. 再次 `编辑面板...` > 将光标移动悬停在 `Weather Widget` 上 > 点击 `配置`

6. 将默认的两个城市删掉：

   ![menu-bar-layout-6](../../assets/guide/advanced/beauty/menu-bar-layout-6.png)

7. 进入 [OpenWeather](https://openweathermap.org/) 网站 > 搜索需要显示的城市 > 将网址复制下来：

   ![menu-bar-layout-7](../../assets/guide/advanced/beauty/menu-bar-layout-7.png)

8. 点击 `＋ OWM` > 将复制的网址和城市名称填入 > 点击 `确定` > `应用`：

   ![menu-bar-layout-8](../../assets/guide/advanced/beauty/menu-bar-layout-8.png)

   ![menu-bar-layout-9](../../assets/guide/advanced/beauty/menu-bar-layout-9.png)

9. 点击侧栏 `外观` > 调整为喜欢的样式 > 点击 `应用`：

   ![menu-bar-layout-10](../../assets/guide/advanced/beauty/menu-bar-layout-10.png)

10. 查看效果：

    ![menu-bar-layout-11](../../assets/guide/advanced/beauty/menu-bar-layout-11.png)

### 3-2. Dock 栏布局

::: tip ℹ️ 提示

截至目前，Latte 尚未支持 KDE Plasma 6，所以该部分内容暂时折叠。

:::

::: details Latte 配置教程

1. 为了实现 Dock 栏布局，需要安装 [Latte](https://github.com/KDE/latte-dock)<sup>extra / cn / aur</sup>：

   ::: code-group

   ```bash [extra]
   sudo pacman -S latte-dock
   ```

   ```bash [cn (git)]
   sudo pacman -S latte-dock-git
   ```

   ```bash [aur (git)]
   yay -S aur/latte-dock-git
   ```

2. 进入 `编辑面板...` > 通过拖拽 `屏幕边缘` 按钮将菜单栏拖拽至底部或左右侧：

   ![dock-layout-1](../../assets/guide/advanced/beauty/dock-layout-1.png)

3. 尝试在终端打开 Latte：

   ```bash
   latte-dock
   ```

   ![dock-layout-2](../../assets/guide/advanced/beauty/dock-layout-2.png)

4. 默认 Latte 已经将自己添加到开机自动启动中了，打开 `系统设置` > 点击侧栏 `开机与关机` > `自动启动` 复查一下：

   ![dock-layout-3](../../assets/guide/advanced/beauty/dock-layout-3.png)

5. 重启，查看效果

6. 右键 Latte 面板 > 点击 `Edit Dock...`：

   ![dock-layout-4](../../assets/guide/advanced/beauty/dock-layout-4.png)

7. 点击 `Advanced` 以启用高级设置：

   ![dock-layout-5](../../assets/guide/advanced/beauty/dock-layout-5.png)

8. 将 `Dock` 更改为 `Panel`：

   ![dock-layout-6](../../assets/guide/advanced/beauty/dock-layout-6.png)

9. 在设置中进行如下更改：

   - 在标签页 `Behavior`（行为）：
     - `Alignment`（对齐）：
       - `Left`（左对齐）
       - `Center`（居中对齐，**推荐设置**）
       - `Right`（右对齐）
       - `Justify`（平铺）
     - `Visibility`（可见性）：
       - `Always Visible`（保持可见，但窗口不会在 Dock 栏下方）
       - `Dodge Active`（避开活动窗口，**推荐设置**）
       - `Windows Go Below`（保持可见，窗口在下方，**推荐设置**）
       - `Auto Hide`（自动隐藏，在鼠标靠近时显示）
       - `Dodge Maximized`（只在全屏显示窗口时隐藏，**推荐设置**）
       - `Dodge All Windows`（有窗口时隐藏）
       - `On Demand Sidebar`（按需隐藏侧边栏，只有当外部程序作用时响应）
       - `Auto Hide Sidebar`（自动隐藏侧边栏，只有当外部程序作用时响应）
   - 在标签页 `Appearence`（外观）：
     - `Items`（项目）：
       - 将 `Zoom on hover`（悬停时缩放比例）调整为 `85%` 或合适大小
     - `Margins`（外边距）：
       - 将 `Screen edge`（屏幕边缘距离）调整为 `8px` 或合适大小
     - `Background`（背景）：
       - 将 `Radius`（圆角）调整为 `16px` 或合适大小

   其它选项保持默认或按需调整即可。

10. 点击 `Close` 完成更改：

    ![dock-layout-7](../../assets/guide/advanced/beauty/dock-layout-7.png)

11. 类似的，右键 Latte 面板 > 点击 `Add Widgets...`（添加小部件） > 将小部件拖拽至合适位置即可

12. 将常用的应用也可以通过拖拽的方式（可能需要先创建快捷方式到桌面）或打开应用之后右键固定项目（`Pin Launcher`）固定到 Latte 面板：

    ![dock-layout-8](../../assets/guide/advanced/beauty/dock-layout-8.png)

    ::: tip ℹ️ 提示

    特别地，若要改变小部件的顺序或配置小部件：

    1. 右键 Latte 面板 > 点击 `Edit Dock...`

    2. 点击 `Rearrange and configure your widgets`（重新排序和配置小部件）

    3. 将光标悬停到对应小部件进行相关操作：

       ![dock-layout-9](../../assets/guide/advanced/beauty/dock-layout-9.png)

    :::

13. 调整顶栏（原菜单栏）的高度，相关小组件位置和样式等：

    - 通过点击 `添加间距` 添加两个 `面板间距` 在 `数字时钟` 两侧即可自动使时间居中

      ![dock-layout-10](../../assets/guide/advanced/beauty/dock-layout-10.png)

    - 添加全局菜单即可使菜单显示在顶栏中（类似 macOS）：

      ![dock-layout-11](../../assets/guide/advanced/beauty/dock-layout-11.png)

:::

### 3-3. 调整细节

1. 配置系统托盘，将不需要的项目隐藏：

   ![detail-1](../../assets/guide/advanced/beauty/detail-1.png)

2. 部分应用需要设置为对应的主题模式（暗色 / 亮色）：

   ![detail-2](../../assets/guide/advanced/beauty/detail-2.png)

## 4. 配置小组件

### 4-1. 配置 Split Digital Clock

1. 在 [Google Fonts](https://fonts.google.com/specimen/Pacifico) 上点击右上角的 `Download family` 下载 Pacifico 字体

2. 解压后安装字体：

   ![split-digital-clock-cfg-1](../../assets/guide/advanced/beauty/split-digital-clock-cfg-1.png)

3. 将 Split Digital Clock 拖拽到桌面后配置：

   - 更改 `Font Style` 为 `Pacifico`
   - 勾选 `Show Date`
   - 调整 `Color of text` 为 `#ffffff` 或合适颜色
   - 调整小部件为合适大小

   ![split-digital-clock-cfg-2](../../assets/guide/advanced/beauty/split-digital-clock-cfg-2.png)

4. 查看效果：

   ![split-digital-clock-cfg-3](../../assets/guide/advanced/beauty/split-digital-clock-cfg-3.png)
