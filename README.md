# AmapLoginAssist

在高德地图左下角添加“密码 / 第三方登录”，打开高德官方账号页，登录后返回当前地图。

本仓库是 [chaofunchengfeng/AmapLoginAssist](https://github.com/chaofunchengfeng/AmapLoginAssist) 的 Fork，由 hehehegfd 维护。当前版本为 **0.8.1**。

## 安装

已安装 Tampermonkey 后，点击 **[安装 0.8.1 脚本](https://raw.githubusercontent.com/hehehegfd/AmapLoginAssist/main/AmapLoginAssist.user.js)**。

1. 在 Tampermonkey 安装页面确认安装。如果链接显示源码，可复制全部内容到 Tampermonkey 的“添加新脚本”中保存。
2. 停用原版 0.7 或此前版本。
3. 刷新 [高德地图](https://ditu.amap.com/ssr/search)，点击左下角“密码 / 第三方登录”。

本仓库使用独立命名空间，首次迁移需要手动安装一次。之后的版本更新从本仓库获取，检查频率遵循 Tampermonkey 设置。

## 说明

- 保留原版的 `https://*.amap.com/*` 和 `https://*.gaode.com/*` 适用范围，同时明确匹配 `amap.com`、`gaode.com` 裸域名，包括 [gaode.com/ssr/search](https://gaode.com/ssr/search)、`ditu.amap.com`、`www.amap.com` 及两者的其他子域名。
- 官方账号页 `id.amap.com` 不重复添加登录入口，避免跳回账号页自身。
- 仅保留一个常驻入口，功能代码 24 行，无外部运行依赖。
- 登录目标为 `https://id.amap.com/`。密码、第三方授权、滑块及账号验证均由高德官方页面处理；脚本不读取账号密码或 Cookie。
- 不改变官方验证要求。如果官方要求进一步验证，按页面提示完成。
- 官方密码登录及返回新版地图的流程已在 Edge 验证；第三方登录入口未逐项完成授权验证。

## 0.8.1 更新

恢复原版 amap.com / gaode.com 子域名匹配，并补充裸域名规则，修复 `https://gaode.com/ssr/search` 等页面没有入口的问题。

## 0.8 更新

新版地图已更换登录组件，原版对 `window.passport.show` 的修改不再适用。0.8 改为直接打开官方账号页，并在点击时带上当前地图的返回地址。

- `AmapLoginAssist.user.js`：当前维护和安装的版本。
- `AmapLoginAssist.js`：保留的上游 0.7 原文件，供参考。

## 许可

[MIT](LICENSE)。保留原作者 chaofunchengfeng 的版权声明；本仓库的维护和修改由 hehehegfd 提供。

