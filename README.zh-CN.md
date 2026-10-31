# DSH 手机端适配

`dsh-mobile` 是一个可选的 DSH Web 客户端插件，把现有 Web 界面适配到手机屏幕。
H5 样式和交互都由插件管理，可独立于 `ds-bot` 安装和卸载。

插件提供手机 Bot 抽屉、设置和 Harness 详情页的窄屏布局、全宽会话面板、安全区间距
和触屏交互。它只在屏幕宽度小于等于 820 px 时启用，桌面布局保持原样。

## 安装

在仓库根目录执行：

```sh
npm pack ./dsh-mobile
dsh plugin --profile web add ./dsh-mobile-0.1.1.tgz
```

启用插件后重启 DSH Web。卸载时在 DSH 插件管理器中停用并移除 `dsh-mobile`。

## 开发

CSS 和客户端交互源码位于 `src/`，`client.js` 由构建脚本生成：

```sh
cd dsh-mobile
npm ci
npm run build
npm run check
```

插件通过 DSH 客户端模块加载器工作，不修改 DSH 安装目录，也不依赖 FnOS 的 Nginx 注入。
