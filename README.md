# AmapLoginAssist

在高德地图的原生登录弹窗中启用**密码登录**，默认显示密码表单；保留扫码和短信登录。扫码区下方提供“密码 / 第三方登录”入口，可打开官方独立账号页。地图左下角不再显示按钮。

本仓库是 [chaofunchengfeng/AmapLoginAssist](https://github.com/chaofunchengfeng/AmapLoginAssist) 的 Fork，由 hehehegfd 维护。当前版本为 **0.8.2**。

## 安装与使用

安装 Tampermonkey 后，点击 **[安装 0.8.2 脚本](https://raw.githubusercontent.com/hehehegfd/AmapLoginAssist/main/AmapLoginAssist.user.js)**，也可以从 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/605745) 安装。

1. 安装脚本，并停用原版 0.7 或此前版本。
2. 刷新 [高德地图](https://ditu.amap.com/ssr/search)，点击右上角头像，再点击“登录”。
3. 在弹窗内使用密码登录，按官方提示完成验证；也可切换短信登录或扫码。
4. 如需第三方登录或独立账号页，点击扫码区下方的“密码 / 第三方登录”。独立账号页登录后返回当前地图。

已登录时无需再次登录。本仓库使用独立命名空间，首次从原版迁移需要手动安装一次。之后的更新检查遵循 Tampermonkey 设置。

## 说明

- 保留原版的 `https://*.amap.com/*` 和 `https://*.gaode.com/*`，并明确匹配 `amap.com`、`gaode.com` 裸域名，包括 [gaode.com/ssr/search](https://gaode.com/ssr/search)、`ditu.amap.com`、`www.amap.com` 及其余子域名。
- 启用的是高德新版 SDK 已有的密码登录选项，沿用官方表单、验证和登录成功回调，没有自建密码表单，也没有嵌入整个账号页。
- 功能代码 38 行（不含元数据、版权、空行与注释），无外部运行依赖。
- 脚本不读取或保存密码、验证码或 Cookie，不改变官方验证要求。`id.amap.com` 不重复添加入口。
- 弹窗内入口支持关闭后重开。第三方登录仍由官方账号页提供，未逐项完成授权验证。

## 0.8.2 更新

启用原生密码登录并设为默认选项；将独立账号页及第三方登录入口移入弹窗，移除左下角悬浮按钮。

## 0.8.1 更新

恢复原版 amap.com / gaode.com 子域名匹配，并补充裸域名规则。

## 0.8 更新

新版地图已更换登录组件，原版对 `window.passport.show` 的修改不再适用。0.8 改为打开官方账号页，并携带当前地图的返回地址。

- `AmapLoginAssist.user.js`：当前维护和安装的版本。
- `AmapLoginAssist.js`：保留的上游 0.7 原文件，供参考。

## 许可

[MIT](LICENSE)。保留原作者 chaofunchengfeng 的版权声明；本仓库的维护和修改由 hehehegfd 提供。
