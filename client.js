// Generated from src/client.js by `npm run build`. Do not edit by hand.
window.__ModuleLoader__.load({
  id: 'dsh-mobile',
  factory: (require) => {
const module = { exports: {} }
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply
});
module.exports = __toCommonJS(client_exports);

// src/mobile.css
var mobile_default = '/* DSH Mobile: narrow-screen layout rules. */\n\n/* 注入控件默认关闭，只有窄屏且脚本检测到应用侧栏时才显示。 */\n#dsh-rail-toggle,\n#dsh-rail-backdrop,\n.dsh-set-back,\n.dsh-hs-close { display: none; }\n\n@media (max-width: 820px) {\n  html {\n    touch-action: manipulation;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  html,\n  body {\n    overflow-x: hidden !important;\n    overscroll-behavior-y: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  /* 主框架：对话列始终占满，侧栏和详情面板浮在上层。 */\n  #root [class*="_frame"] {\n    grid-template-columns: 0 minmax(0, 1fr) 0 !important;\n  }\n\n  /* 手机端改用 Bot 左栏作为抽屉；DSH 原生侧栏留空且会占满屏，直接隐藏。 */\n  #root [class*="sidebarCol"] { display: none !important; }\n\n  html.dsh-rail-mobile .bt-leftcol {\n    position: fixed !important;\n    left: 0 !important;\n    top: 0 !important;\n    bottom: 0 !important;\n    width: min(30vw, 260px) !important;\n    min-width: 100px !important;\n    max-width: 260px !important;\n    box-sizing: border-box !important;\n    padding: calc(52px + env(safe-area-inset-top, 0px)) 12px calc(12px + env(safe-area-inset-bottom, 0px)) !important;\n    overflow: hidden !important;\n    background: Canvas !important;\n    border: 0 !important;\n    border-right: 1px solid rgba(127, 127, 127, .22) !important;\n    border-radius: 0 18px 18px 0 !important;\n    box-shadow: 0 12px 36px rgba(0, 0, 0, .2) !important;\n    z-index: 70 !important;\n    transform: translateX(-105%);\n    transition: transform .22s cubic-bezier(.2, .75, .25, 1);\n  }\n\n  #root [class*="_centerCol"] {\n    grid-column: 2 !important;\n    margin-left: 0 !important;\n  }\n  #root [class*="rightbarCol"] {\n    grid-column: 3 !important;\n    overflow: hidden !important;\n  }\n\n  /* 仅调整主对话顶栏，避免影响设置页和 Harness 弹窗里的其他 header。 */\n  #root [class*="_centerCol"] [class*="_header"] {\n    min-height: 46px !important;\n    padding-top: calc(4px + env(safe-area-inset-top, 0px)) !important;\n    background: transparent !important;\n    border-bottom: 0 !important;\n    box-shadow: none !important;\n    -webkit-backdrop-filter: none !important;\n    backdrop-filter: none !important;\n  }\n\n  html.dsh-rail-mobile .bt-leftcol > .bt-side {\n    width: 100% !important;\n    min-width: 0 !important;\n    padding-right: 0 !important;\n  }\n\n  html.dsh-rail-mobile .bt-leftcol .bt-rail-top {\n    width: 100% !important;\n    align-self: stretch !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    gap: 8px !important;\n    padding: 4px 0 8px !important;\n  }\n  html.dsh-rail-mobile .bt-leftcol .bt-rail-top::before {\n    content: "Bot 列表";\n    padding: 0 12px 4px;\n    color: color-mix(in srgb, CanvasText 58%, transparent);\n    font-size: 12px;\n    font-weight: 600;\n    letter-spacing: .02em;\n  }\n  html.dsh-rail-mobile .bt-leftcol .bt-side-collapse { display: none !important; }\n\n  /* Bot 行：展开窄轨道中的图标项，显示 Bot 名称并保持足够触控面积。 */\n  html.dsh-rail-mobile .bt-leftcol .bt-row {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    justify-content: center !important;\n    box-sizing: border-box !important;\n    width: 100% !important;\n    min-height: 72px !important;\n    height: auto !important;\n    padding: 8px 4px !important;\n    gap: 4px !important;\n    border-radius: 13px !important;\n    cursor: pointer;\n  }\n\n  html.dsh-rail-mobile .bt-leftcol .bt-row::after {\n    flex: 0 0 auto;\n    min-width: 0;\n    width: 100%;\n    margin-left: 0;\n    overflow: hidden;\n    color: CanvasText;\n    font: 14px/1.25 -apple-system, "Segoe UI", "Microsoft YaHei", system-ui, sans-serif;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  html.dsh-rail-mobile .bt-leftcol .bt-row[title]::after { content: attr(title); }\n  html.dsh-rail-mobile .bt-leftcol .bt-row:not([title])::after { content: attr(aria-label); }\n\n  html.dsh-rail-mobile .bt-leftcol .bt-row .bt-mark,\n  html.dsh-rail-mobile .bt-leftcol .bt-row svg {\n    width: 32px !important;\n    height: 32px !important;\n  }\n\n  html.dsh-rail-mobile .bt-leftcol .bt-list {\n    align-items: stretch !important;\n    overflow-y: auto !important;\n  }\n  html.dsh-rail-mobile .bt-leftcol .bt-leftcol-foot-rail {\n    flex-direction: column !important;\n    align-items: center !important;\n    justify-content: flex-end !important;\n    width: 100% !important;\n    gap: 8px !important;\n  }\n  html.dsh-rail-mobile .bt-leftcol .bt-leftcol-grip { display: none !important; }\n\n  #root [class*="footArea"] {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    justify-content: flex-end !important;\n    gap: 8px !important;\n    width: 100% !important;\n    padding: 0 0 6px !important;\n  }\n\n  #root [class*="settingsArea"],\n  #root [class*="bt-account"],\n  #root [class*="triggerRow"] {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  /* JS 增强态：抽屉默认收起，点击遮罩、选择 Bot 或按 Esc 关闭。 */\n  html.dsh-rail-mobile #dsh-rail-backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 69;\n    background: rgba(15, 23, 42, .34);\n    -webkit-backdrop-filter: blur(2px);\n    backdrop-filter: blur(2px);\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n    transition: opacity .2s ease, visibility .2s ease;\n  }\n\n  html.dsh-rail-open #dsh-rail-backdrop {\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n  }\n\n  html.dsh-rail-open .bt-leftcol { transform: translateX(0); }\n\n  html.dsh-rail-mobile #dsh-rail-toggle {\n    display: flex;\n    position: fixed;\n    left: 8px;\n    top: calc(8px + env(safe-area-inset-top, 0px));\n    z-index: 90;\n    width: 44px;\n    height: 44px;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    color: CanvasText;\n    font-size: 20px;\n    line-height: 1;\n    opacity: .42;\n    cursor: pointer;\n    touch-action: manipulation;\n    background: transparent;\n    border: 0;\n    border-radius: 12px;\n    box-shadow: none;\n  }\n\n  html.dsh-rail-mobile #dsh-rail-toggle:active,\n  html.dsh-rail-open #dsh-rail-toggle,\n  html.dsh-rail-mobile #dsh-rail-toggle:focus-visible { opacity: 1; }\n\n  html.dsh-rail-mobile .bt-leftcol .bt-row:focus-visible,\n  html.dsh-rail-mobile #dsh-rail-toggle:focus-visible {\n    outline: 2px solid #2676e8 !important;\n    outline-offset: 2px;\n  }\n\n  /* 浮层菜单高于抽屉；仅提升弹出层，不改内容区层级。 */\n  [class*="bt-menu"],\n  [role="menu"],\n  [role="dialog"],\n  [class*="popover"],\n  [class*="Popover"] { z-index: 240 !important; }\n\n  /* 对话正文：窄屏换行，不让代码、表格和媒体撑出视口。 */\n  #root [class*="_column"],\n  #root [class*="_flowItem"],\n  #root [class*="_scrollBody"],\n  #root [class*="bt-msg"] { min-width: 0 !important; }\n\n  #root [class*="_scroll"] { padding-right: 12px !important; padding-left: 12px !important; }\n  html.dsh-rail-mobile #root [class*="_centerCol"] [class*="_scrollBody"] {\n    padding-top: calc(52px + env(safe-area-inset-top, 0px)) !important;\n  }\n  #root [class*="_flowItem"] { width: auto !important; max-width: 100% !important; }\n  #root [class*="_flowItem"] * { overflow-wrap: anywhere; }\n  #root [class*="bt-msg"] { max-width: 100% !important; }\n  #root [class*="_bubble"] {\n    border-radius: 14px !important;\n    font-size: 15px !important;\n    line-height: 1.62 !important;\n  }\n  #root [class*="_column"] > [class*="_root"] { margin-top: 6px !important; }\n\n  #root,\n  #root [class*="_frame"],\n  #root [class*="_scrollBody"],\n  #root [class*="_column"],\n  #root [class*="_flowItem"] { max-width: 100vw !important; }\n\n  #root pre,\n  #root table,\n  #root .md-code-block,\n  #root [class*="_code"] { max-width: 100% !important; overflow-x: auto !important; }\n\n  #root img,\n  #root video,\n  #root canvas { max-width: 100% !important; height: auto !important; }\n\n  #root [class*="_composerSeat"] {\n    padding-bottom: calc(4px + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  #root [class*="_dock"] { display: none !important; }\n\n  /* DS Bot 设置：单列列表和单列详情，避免手机上挤成多栏。 */\n  .bt-settings-layer { padding: 0 !important; }\n  .bt-settings {\n    align-items: stretch !important;\n    width: 100vw !important;\n    max-width: 100vw !important;\n    height: 100vh !important;\n    height: 100dvh !important;\n    max-height: 100vh !important;\n    max-height: 100dvh !important;\n    border-radius: 0 !important;\n  }\n  .bt-settings-main {\n    flex: 1 1 auto !important;\n    width: auto !important;\n    min-width: 0 !important;\n    height: 100% !important;\n    max-height: 100dvh !important;\n  }\n  .bt-settings-scroll {\n    flex: 1 1 auto !important;\n    height: 100% !important;\n    max-height: none !important;\n    padding: 12px 10px !important;\n  }\n  .bt-set-card { padding: 10px !important; }\n  .bt-set-row {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    gap: 10px !important;\n    padding: 10px 0 !important;\n  }\n  .bt-set-copy { width: 100% !important; max-width: 100% !important; min-width: 0 !important; }\n  .bt-swatches {\n    flex-wrap: nowrap !important;\n    max-width: 100% !important;\n    overflow-x: auto !important;\n    padding-bottom: 4px !important;\n  }\n\n  html.dsh-set #dsh-rail-toggle,\n  html.dsh-set #dsh-rail-backdrop,\n  html.dsh-set .bt-leftcol,\n  html.dsh-set #root [class*="sidebarCol"],\n  html.dsh-hs #dsh-rail-toggle,\n  html.dsh-hs #dsh-rail-backdrop,\n  html.dsh-hs .bt-leftcol,\n  html.dsh-hs #root [class*="sidebarCol"],\n  html.dsh-panel #dsh-rail-toggle,\n  html.dsh-panel #dsh-rail-backdrop,\n  html.dsh-panel .bt-leftcol,\n  html.dsh-panel #root [class*="sidebarCol"] { display: none !important; }\n\n  html.dsh-set:not(.dsh-set-2) .bt-settings-main { display: none !important; }\n  html.dsh-set:not(.dsh-set-2) .bt-settings-nav {\n    display: flex !important;\n    flex-direction: column !important;\n    width: 100% !important;\n    min-width: 0 !important;\n    padding: 8px 12px 20px !important;\n    gap: 2px !important;\n  }\n  html.dsh-set:not(.dsh-set-2) .bt-settings-nav > * {\n    display: flex !important;\n    min-height: 54px !important;\n    align-items: center !important;\n    gap: 12px !important;\n    padding: 0 12px !important;\n    border-radius: 12px !important;\n    font-size: 16px !important;\n  }\n  html.dsh-set.dsh-set-2 .bt-settings-nav { display: none !important; }\n  html.dsh-set.dsh-set-2 .bt-settings-main {\n    display: flex !important;\n    width: 100% !important;\n    min-width: 0 !important;\n  }\n\n  .dsh-set-back,\n  .dsh-hs-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 44px;\n    height: 44px;\n    flex: 0 0 auto;\n    color: CanvasText;\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n    border-radius: 12px;\n  }\n  .dsh-set-back { margin: 6px 0 2px 6px; }\n  .dsh-set-back:active,\n  .dsh-hs-close:active { background: rgba(127, 127, 127, .18); }\n\n  /* Harness 设置：导航先单列展示，选择后进入全屏详情。 */\n  html.dsh-hs [class*="_overlay"]:has([class*="_navList"]) {\n    position: fixed !important;\n    inset: 0 !important;\n  }\n  html.dsh-hs [class*="_panel"]:has([class*="_navList"]) {\n    position: fixed !important;\n    inset: 0 !important;\n    width: 100vw !important;\n    max-width: 100vw !important;\n    height: 100vh !important;\n    height: 100dvh !important;\n    max-height: 100dvh !important;\n    margin: 0 !important;\n    border-radius: 0 !important;\n  }\n  /* Harness 二级/三级详情：隐藏整条桌面导航列，不让 188px 空导航挤压正文。 */\n  html.dsh-hs.dsh-hs-2 [class*="_panel"] > [class*="_nav"] { display: none !important; }\n  html.dsh-hs [class*="_navList"] { width: 100% !important; }\n  html.dsh-hs [class*="_nav"] { position: relative !important; }\n  html.dsh-hs:not(.dsh-hs-2) [class*="_panel"] > [class*="_nav"] {\n    box-sizing: border-box !important;\n    flex: 1 1 100% !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    min-width: 0 !important;\n  }\n  html.dsh-hs [class*="_navCell"] {\n    display: flex !important;\n    box-sizing: border-box !important;\n    width: 100% !important;\n    min-width: 0 !important;\n    align-self: stretch !important;\n    height: 54px !important;\n    justify-content: flex-start !important;\n    gap: 10px !important;\n    padding: 0 14px !important;\n    border-radius: 12px !important;\n    font-size: 16px !important;\n  }\n  html.dsh-hs [class*="_navCell"] > * {\n    flex: 0 0 auto !important;\n    width: auto !important;\n    min-width: 0 !important;\n  }\n  html.dsh-hs [class*="_navLabel"] {\n    flex: 1 1 auto !important;\n    width: auto !important;\n    min-width: 0 !important;\n    overflow: hidden !important;\n    font-size: 16px !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n  }\n  html.dsh-hs:not(.dsh-hs-2) [class*="_content"] { display: none !important; }\n  html.dsh-hs:not(.dsh-hs-2) [class*="_navList"] { display: flex !important; }\n  html.dsh-hs.dsh-hs-2 [class*="_navList"] { display: none !important; }\n  html.dsh-hs.dsh-hs-2 [class*="_content"] {\n    display: flex !important;\n    flex: 1 1 100% !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    min-width: 0 !important;\n  }\n  html.dsh-hs.dsh-hs-2 [class*="_content"] [class*="_header"] {\n    position: sticky !important;\n    top: 0 !important;\n    z-index: 3 !important;\n    box-sizing: border-box !important;\n    flex: 0 0 auto !important;\n    min-height: calc(56px + env(safe-area-inset-top, 0px)) !important;\n    padding: calc(6px + env(safe-area-inset-top, 0px)) 12px 6px !important;\n    align-items: center !important;\n    gap: 8px !important;\n    background: Canvas !important;\n    border-bottom: 1px solid rgba(127, 127, 127, .16) !important;\n  }\n  html.dsh-hs.dsh-hs-2 [class*="_content"] [class*="_header"] [class*="_actions"] {\n    min-width: 0 !important;\n    flex: 1 1 auto !important;\n    justify-content: flex-end !important;\n    gap: 6px !important;\n  }\n  html.dsh-hs.dsh-hs-2 [class*="_content"] [class*="_header"] [class*="_actions"] button {\n    min-height: 40px !important;\n    padding: 0 9px !important;\n    white-space: nowrap !important;\n  }\n  html.dsh-hs.dsh-hs-2 [class*="_content"] [class*="_options"] {\n    flex: 1 1 auto !important;\n    width: 100% !important;\n    min-height: 0 !important;\n    overflow-y: auto !important;\n    overscroll-behavior: contain !important;\n    padding: 16px 16px calc(24px + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  html.dsh-hs.dsh-hs-2 [class*="_options"] [class*="_section"] {\n    width: 100% !important;\n    min-width: 0 !important;\n    margin: 0 auto 20px !important;\n  }\n  html.dsh-hs.dsh-hs-2 [class*="_options"] h1,\n  html.dsh-hs.dsh-hs-2 [class*="_options"] h2,\n  html.dsh-hs.dsh-hs-2 [class*="_options"] h3 {\n    margin: 4px 0 8px !important;\n    font-size: 20px !important;\n    line-height: 1.3 !important;\n  }\n  html.dsh-hs [class*="_options"] {\n    box-sizing: border-box !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    padding: 0 12px !important;\n    overflow-x: hidden !important;\n  }\n  html.dsh-hs [class*="_options"] [class*="_setting"],\n  html.dsh-hs [class*="_options"] [class*="_row"],\n  html.dsh-hs [class*="_options"] [class*="_item"],\n  html.dsh-hs [class*="_options"] [class*="_entry"],\n  html.dsh-hs [class*="_options"] [class*="_field"] {\n    flex-wrap: wrap !important;\n    gap: 8px !important;\n    max-width: 100% !important;\n  }\n  html.dsh-hs [class*="_options"] * { box-sizing: border-box !important; max-width: 100% !important; }\n  html.dsh-hs [class*="_options"] [class*="_setting"] > * { min-width: 0 !important; }\n  html.dsh-hs [class*="_panel"] [class*="_header"] { width: 100% !important; }\n\n  /* Bot 设置二级/三级页：统一全屏页面容器、标题栏、滚动和表单节奏。 */\n  html.dsh-set .bt-settings { overflow: hidden !important; }\n  html.dsh-set .bt-settings-nav,\n  html.dsh-set .bt-settings-main {\n    box-sizing: border-box !important;\n    min-height: 0 !important;\n    overflow: hidden !important;\n    background: Canvas !important;\n  }\n  html.dsh-set .bt-settings-nav { padding-top: calc(12px + env(safe-area-inset-top, 0px)) !important; }\n  html.dsh-set:not(.dsh-set-2) .bt-settings-nav {\n    flex: 1 1 auto !important;\n    height: 100% !important;\n    overflow-y: auto !important;\n    overscroll-behavior: contain !important;\n    border-right: 0 !important;\n    padding: calc(58px + env(safe-area-inset-top, 0px)) 12px calc(18px + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  html.dsh-set:not(.dsh-set-2) .bt-settings-nav::before {\n    content: "设置";\n    display: block;\n    flex: 0 0 auto;\n    padding: 4px 12px 12px;\n    color: CanvasText;\n    font-size: 22px;\n    font-weight: 650;\n    line-height: 1.3;\n  }\n  html.dsh-set:not(.dsh-set-2) .bt-settings-nav > * {\n    box-sizing: border-box !important;\n    width: 100% !important;\n    min-width: 0 !important;\n    justify-content: flex-start !important;\n    text-align: left !important;\n  }\n  html.dsh-set:not(.dsh-set-2) .bt-settings-nav > * > * { flex: 0 0 auto !important; }\n  html.dsh-set .bt-settings-main { display: flex !important; flex-direction: column !important; }\n  html.dsh-set.dsh-set-2 .bt-settings-main { width: 100% !important; }\n  html.dsh-set .bt-settings-main:has(.bt-settings-head button[aria-label*="返回"]) > .dsh-set-back { display: none !important; }\n  html.dsh-set .dsh-set-back {\n    position: relative !important;\n    z-index: 2 !important;\n    flex: 0 0 48px !important;\n    width: 48px !important;\n    height: 48px !important;\n    margin: calc(4px + env(safe-area-inset-top, 0px)) 0 0 8px !important;\n  }\n  html.dsh-set .bt-settings-scroll {\n    box-sizing: border-box !important;\n    min-height: 0 !important;\n    overflow-y: auto !important;\n    overscroll-behavior: contain !important;\n    padding: 8px 16px calc(24px + env(safe-area-inset-bottom, 0px)) !important;\n  }\n  html.dsh-set .bt-settings-main > :is(h1,h2,h3),\n  html.dsh-set .bt-settings-scroll :is(h1,h2,h3) {\n    margin: 4px 0 12px !important;\n    font-size: 20px !important;\n    line-height: 1.3 !important;\n  }\n  html.dsh-set .bt-set-card {\n    margin: 0 0 12px !important;\n    border-radius: 16px !important;\n  }\n  html.dsh-set .bt-set-row {\n    gap: 8px !important;\n    padding: 12px 0 !important;\n  }\n  html.dsh-set .bt-set-row :is(input,select,textarea,button) {\n    box-sizing: border-box !important;\n    max-width: 100% !important;\n    min-height: 42px !important;\n    border-radius: 11px !important;\n  }\n  html.dsh-set .bt-set-row textarea { min-height: 96px !important; resize: vertical !important; }\n  html.dsh-set .bt-settings :is(input,select,textarea) { font-size: 16px !important; }\n  html.dsh-set .bt-settings input.bt-bs-input {\n    display: block !important;\n    flex: 0 0 44px !important;\n    align-self: stretch !important;\n    width: 100% !important;\n    min-width: 0 !important;\n    min-height: 44px !important;\n    height: 44px !important;\n    max-height: 44px !important;\n    padding: 0 12px !important;\n    text-align: left !important;\n  }\n\n  /* 设置内的三级弹层改为贴底的可滚动面板，保留上层关闭/返回路径。 */\n  html.dsh-hs [role="dialog"]:not([class*="_panel"]),\n  html.dsh-set [role="dialog"]:not(.bt-settings) {\n    box-sizing: border-box !important;\n    max-width: calc(100vw - 20px) !important;\n    max-height: min(88dvh, 720px) !important;\n    overflow: auto !important;\n    overscroll-behavior: contain !important;\n    border-radius: 18px !important;\n  }\n\n  /* 详情面板全屏显示，避免与抽屉并排争夺宽度。 */\n  html.dsh-panel .bt-panel {\n    left: 0 !important;\n    right: auto !important;\n    width: 100vw !important;\n    max-width: 100vw !important;\n    height: 100vh !important;\n    height: 100dvh !important;\n    border-radius: 0 !important;\n  }\n  html.dsh-panel .bt-panel [class*="_row"] { flex-wrap: wrap !important; gap: 8px !important; }\n\n  @media (prefers-reduced-motion: reduce) {\n    html.dsh-rail-mobile .bt-leftcol,\n    html.dsh-rail-mobile #dsh-rail-backdrop { transition: none !important; }\n  }\n}\n';

// src/mobile.js
function installMobile() {
  var listeners = null;
  var KEY = "dshRailOpen.v2";
  var MQ = "(max-width: 820px)";
  var tickTimer = 0;
  var intervalId = 0;
  var media = window.matchMedia(MQ);
  function active() {
    return window.matchMedia(MQ).matches;
  }
  function side() {
    return document.querySelector(".bt-leftcol") || document.querySelector('[class*="bt-list"]') || document.querySelector('[class*="sidebarCol"]') || document.querySelector('[aria-label="Bot list"]');
  }
  function visible(el) {
    if (!el) return false;
    var style = getComputedStyle(el);
    var rect = el.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden" && parseFloat(style.opacity || "1") > 0.05 && rect.width > 10 && rect.height > 10;
  }
  function syncToggle() {
    var b = document.getElementById("dsh-rail-toggle");
    if (!b) return;
    var open = document.documentElement.classList.contains("dsh-rail-open");
    b.setAttribute("aria-expanded", open ? "true" : "false");
    b.setAttribute("aria-label", open ? "关闭 Bot 侧栏" : "打开 Bot 侧栏");
    b.innerHTML = open ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  }
  function apply2(open) {
    document.documentElement.classList.toggle("dsh-rail-open", !!open);
    try {
      localStorage.setItem(KEY, open ? "1" : "0");
    } catch (e) {
    }
    syncToggle();
  }
  function ensureDrawerControls() {
    if (!document.getElementById("dsh-rail-backdrop")) {
      var backdrop = document.createElement("div");
      backdrop.id = "dsh-rail-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      backdrop.addEventListener("click", function() {
        apply2(false);
      }, { signal: listeners.signal });
      document.body.appendChild(backdrop);
    }
    if (!document.getElementById("dsh-rail-toggle")) {
      var b = document.createElement("button");
      b.id = "dsh-rail-toggle";
      b.type = "button";
      b.addEventListener("click", function(e) {
        e.stopPropagation();
        apply2(!document.documentElement.classList.contains("dsh-rail-open"));
      }, { signal: listeners.signal });
      document.body.appendChild(b);
      syncToggle();
    }
  }
  function closeOnEscape(e) {
    if (e.key !== "Escape" || !document.documentElement.classList.contains("dsh-rail-open")) return;
    e.preventDefault();
    apply2(false);
    var b = document.getElementById("dsh-rail-toggle");
    if (b) b.focus();
  }
  function closeAfterBotSelection(e) {
    if (!document.documentElement.classList.contains("dsh-rail-open")) return;
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.closest('[class*="bt-row"]') && t.closest(".bt-leftcol")) apply2(false);
  }
  function settingsTweak() {
    var dlg = document.querySelector(".bt-settings");
    if (!visible(dlg)) {
      document.documentElement.classList.remove("dsh-set", "dsh-set-2");
      return;
    }
    if (!dlg.dataset.dshReady) {
      var nav = dlg.querySelector(".bt-settings-nav");
      var main = dlg.querySelector(".bt-settings-main");
      if (nav && main) {
        dlg.dataset.dshReady = "1";
        nav.addEventListener("click", function() {
          document.documentElement.classList.add("dsh-set-2");
        }, { capture: true, signal: listeners.signal });
        var back = document.createElement("button");
        back.className = "dsh-set-back";
        back.type = "button";
        back.setAttribute("aria-label", "返回");
        back.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
        back.addEventListener("click", function(e) {
          e.stopPropagation();
          document.documentElement.classList.remove("dsh-set-2");
        }, { signal: listeners.signal });
        main.insertBefore(back, main.firstChild);
      }
    }
    document.documentElement.classList.add("dsh-set");
  }
  function harnessTweak() {
    var navList = document.querySelector('[class*="_navList"]');
    var panel = navList ? navList.closest('[class*="_panel"]') || navList.closest('[class*="overlay"]') : null;
    var content = panel ? panel.querySelector('[class*="_content"]') : null;
    if (!visible(panel) || !visible(navList) && !visible(content)) {
      document.documentElement.classList.remove("dsh-hs", "dsh-hs-2");
      return;
    }
    document.documentElement.classList.add("dsh-hs");
    if (!navList.dataset.dshReady) {
      navList.dataset.dshReady = "1";
      navList.addEventListener("click", function() {
        document.documentElement.classList.add("dsh-hs-2");
      }, { capture: true, signal: listeners.signal });
      if (content) {
        var back = document.createElement("button");
        back.className = "dsh-set-back dsh-hs-back";
        back.type = "button";
        back.setAttribute("aria-label", "返回");
        back.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
        back.addEventListener("click", function(e) {
          e.stopPropagation();
          document.documentElement.classList.remove("dsh-hs-2");
        }, { signal: listeners.signal });
        var header = content.querySelector('[class*="_header"]');
        if (header) header.insertBefore(back, header.firstChild);
        else content.insertBefore(back, content.firstChild);
      }
      var nav = panel ? panel.querySelector('[class*="_nav"]') : null;
      if (nav) {
        var close = document.createElement("button");
        close.className = "dsh-hs-close";
        close.type = "button";
        close.setAttribute("aria-label", "关闭");
        close.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
        close.addEventListener("click", function(e) {
          e.stopPropagation();
          var liveNav = document.querySelector('[class*="_navList"]');
          var livePanel = liveNav ? liveNav.closest('[class*="_panel"]') : document.querySelector('[class*="VOzbGW_panel"]');
          if (!livePanel) return;
          var contentEl = livePanel.querySelector('[class*="_content"]');
          var prev = contentEl ? contentEl.style.display : null;
          var btn = null;
          var cands = livePanel.querySelectorAll("button");
          for (var ci = 0; ci < cands.length; ci++) {
            var cel = cands[ci];
            if (cel.classList.contains("dsh-hs-close")) continue;
            var tag = (cel.className || "") + " " + (cel.getAttribute("aria-label") || "");
            if (/close|关闭/i.test(tag)) {
              btn = cel;
              break;
            }
          }
          if (btn) {
            if (contentEl) contentEl.style.display = "flex";
            ["pointerdown", "mousedown", "pointerup", "mouseup", "click"].forEach(function(type) {
              var ev = type.indexOf("pointer") === 0 ? new PointerEvent(type, { bubbles: true, cancelable: true, view: window }) : new MouseEvent(type, { bubbles: true, cancelable: true, view: window });
              btn.dispatchEvent(ev);
            });
            if (contentEl) contentEl.style.display = prev || "";
            return;
          }
          document.body.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
        }, { signal: listeners.signal });
        nav.insertBefore(close, nav.firstChild);
      }
    }
  }
  function panelTweak() {
    var panel = document.querySelector('[class*="bt-panel"]');
    var open = visible(panel) && panel.getBoundingClientRect().width > 100;
    document.documentElement.classList.toggle("dsh-panel", open);
  }
  function scheduleTick() {
    window.clearTimeout(tickTimer);
    tickTimer = window.setTimeout(tick, 180);
  }
  function tick() {
    var el = side();
    if (!active()) {
      document.documentElement.classList.remove("dsh-rail-mobile", "dsh-rail-open", "dsh-set", "dsh-set-2", "dsh-hs", "dsh-hs-2", "dsh-panel");
      var b0 = document.getElementById("dsh-rail-toggle");
      if (b0) b0.remove();
      var back0 = document.getElementById("dsh-rail-backdrop");
      if (back0) back0.remove();
      return;
    }
    if (el && !document.documentElement.classList.contains("dsh-rail-mobile")) {
      document.documentElement.classList.add("dsh-rail-mobile");
      var saved = null;
      try {
        saved = localStorage.getItem(KEY);
      } catch (e) {
      }
      apply2(saved === "1");
    }
    if (el) ensureDrawerControls();
    else {
      document.documentElement.classList.remove("dsh-rail-mobile", "dsh-rail-open");
      var b1 = document.getElementById("dsh-rail-toggle");
      if (b1) b1.remove();
      var back1 = document.getElementById("dsh-rail-backdrop");
      if (back1) back1.remove();
    }
    try {
      settingsTweak();
      harnessTweak();
      panelTweak();
    } catch (e) {
    }
  }
  function start() {
    if (intervalId || !media.matches) return;
    listeners = new AbortController();
    tick();
    intervalId = window.setInterval(tick, 1e3);
    document.addEventListener("click", scheduleTick, { capture: true, signal: listeners.signal });
    document.addEventListener("click", closeAfterBotSelection, { capture: true, signal: listeners.signal });
    document.addEventListener("keydown", closeOnEscape, { capture: true, signal: listeners.signal });
    document.addEventListener("pointerup", scheduleTick, { capture: true, signal: listeners.signal });
    window.addEventListener("resize", tick, { signal: listeners.signal });
    window.addEventListener("orientationchange", tick, { signal: listeners.signal });
  }
  function onMediaChange() {
    if (media.matches) start();
    else stopMobile();
  }
  function stopMobile() {
    if (intervalId) window.clearInterval(intervalId);
    intervalId = 0;
    window.clearTimeout(tickTimer);
    tickTimer = 0;
    listeners?.abort();
    listeners = null;
    document.documentElement.classList.remove("dsh-rail-mobile", "dsh-rail-open", "dsh-set", "dsh-set-2", "dsh-hs", "dsh-hs-2", "dsh-panel");
    document.getElementById("dsh-rail-toggle")?.remove();
    document.getElementById("dsh-rail-backdrop")?.remove();
    document.querySelectorAll(".dsh-set-back, .dsh-hs-close").forEach((node) => node.remove());
    document.querySelectorAll(".bt-settings, [class*='_navList']").forEach((node) => delete node.dataset.dshReady);
  }
  function dispose() {
    stopMobile();
    media.removeEventListener("change", onMediaChange);
    document.removeEventListener("DOMContentLoaded", start);
  }
  media.addEventListener("change", onMediaChange);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else if (media.matches) start();
  return dispose;
}

// src/client.js
function apply(ctx) {
  ctx.effect(() => {
    const style = document.createElement("style");
    style.dataset.dshMobile = "true";
    style.textContent = mobile_default;
    document.head.append(style);
    const viewport = document.querySelector('meta[name="viewport"]');
    const previousViewport = viewport?.content;
    if (viewport) {
      const content = viewport.content.replace(/,?\s*viewport-fit\s*=\s*[^,]+/i, "");
      viewport.content = `${content}, viewport-fit=cover`;
    }
    const stopMobile = installMobile();
    return () => {
      stopMobile();
      style.remove();
      if (viewport && previousViewport !== void 0) viewport.content = previousViewport;
    };
  }, "dsh-mobile: responsive web layout");
}
return Object.defineProperty({ ...module.exports }, Symbol.toStringTag, { value: 'Module' })
  },
})
