/* 手机端布局：统一二级/三级设置页导航与布局状态。 */
export function installMobile() {
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
    return document.querySelector(".bt-leftcol")
        || document.querySelector('[class*="bt-list"]')
        || document.querySelector('[class*="sidebarCol"]')
        || document.querySelector('[aria-label="Bot list"]');
  }

  function visible(el) {
    if (!el) return false;
    var style = getComputedStyle(el);
    var rect = el.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden"
      && parseFloat(style.opacity || "1") > 0.05 && rect.width > 10 && rect.height > 10;
  }

  function syncToggle() {
    var b = document.getElementById("dsh-rail-toggle");
    if (!b) return;
    var open = document.documentElement.classList.contains("dsh-rail-open");
    b.setAttribute("aria-expanded", open ? "true" : "false");
    b.setAttribute("aria-label", open ? "关闭 Bot 侧栏" : "打开 Bot 侧栏");
    b.innerHTML = open
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  }

  function apply(open) {
    document.documentElement.classList.toggle("dsh-rail-open", !!open);
    try { localStorage.setItem(KEY, open ? "1" : "0"); } catch (e) {}
    syncToggle();
  }

  function ensureDrawerControls() {
    if (!document.getElementById("dsh-rail-backdrop")) {
      var backdrop = document.createElement("div");
      backdrop.id = "dsh-rail-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      backdrop.addEventListener("click", function () { apply(false); }, { signal: listeners.signal });
      document.body.appendChild(backdrop);
    }
    if (!document.getElementById("dsh-rail-toggle")) {
      var b = document.createElement("button");
      b.id = "dsh-rail-toggle";
      b.type = "button";
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        apply(!document.documentElement.classList.contains("dsh-rail-open"));
      }, { signal: listeners.signal });
      document.body.appendChild(b);
      syncToggle();
    }
  }

  function closeOnEscape(e) {
    if (e.key !== "Escape" || !document.documentElement.classList.contains("dsh-rail-open")) return;
    e.preventDefault();
    apply(false);
    var b = document.getElementById("dsh-rail-toggle");
    if (b) b.focus();
  }

  function closeAfterBotSelection(e) {
    if (!document.documentElement.classList.contains("dsh-rail-open")) return;
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.closest('[class*="bt-row"]') && t.closest(".bt-leftcol")) apply(false);
  }

  /* 设置面板：窄屏做成二级页面（列表 → 详情 + 返回） */
  function settingsTweak() {
    var dlg = document.querySelector('.bt-settings');
    /* 关掉后节点仍留在 DOM 里（同 harnessTweak），必须按可见性判断，
       否则 html 上的 dsh-set 永远摘不掉 → 三横被 CSS 一直隐藏 */
    if (!visible(dlg)) {
      document.documentElement.classList.remove('dsh-set', 'dsh-set-2');
      return;
    }
    if (!dlg.dataset.dshReady) {
      var nav = dlg.querySelector('.bt-settings-nav');
      var main = dlg.querySelector('.bt-settings-main');
      if (nav && main) {
        dlg.dataset.dshReady = "1";
        nav.addEventListener("click", function () {
          document.documentElement.classList.add("dsh-set-2");
        }, { capture: true, signal: listeners.signal });
        var back = document.createElement("button");
        back.className = "dsh-set-back";
        back.type = "button";
        back.setAttribute("aria-label", "返回");
        back.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
        back.addEventListener("click", function (e) {
          e.stopPropagation();
          document.documentElement.classList.remove("dsh-set-2");
        }, { signal: listeners.signal });
        main.insertBefore(back, main.firstChild);
      }
    }
    document.documentElement.classList.add("dsh-set");
  }

  /* Harness 设置：同样做成二级页面（列表 → 详情 + 返回） */
  function harnessTweak() {
    var navList = document.querySelector('[class*="_navList"]');
    var panel = navList ? (navList.closest('[class*="_panel"]') || navList.closest('[class*="overlay"]')) : null;
    var content = panel ? panel.querySelector('[class*="_content"]') : null;
    /* 关掉后面板仍留在 DOM 里，要按可见性判断；但不能只看 navList——
       二级页面里 nav 正是被我们自己的 CSS 隐藏的，宽度为 0，会被误判成「面板已关」
       而把 dsh-hs-2 摘掉，结果点了导航项又弹回列表（进不去二级）。
       所以 nav / content 任一可见即视为面板打开。 */
    if (!visible(panel) || (!visible(navList) && !visible(content))) {
      document.documentElement.classList.remove('dsh-hs', 'dsh-hs-2');
      return;
    }
    document.documentElement.classList.add('dsh-hs');
    if (!navList.dataset.dshReady) {
      navList.dataset.dshReady = "1";
      navList.addEventListener("click", function () {
        document.documentElement.classList.add("dsh-hs-2");
      }, { capture: true, signal: listeners.signal });
      if (content) {
        var back = document.createElement("button");
        back.className = "dsh-set-back dsh-hs-back";
        back.type = "button";
        back.setAttribute("aria-label", "返回");
        back.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
        back.addEventListener("click", function (e) {
          e.stopPropagation();
          document.documentElement.classList.remove("dsh-hs-2");
        }, { signal: listeners.signal });
        var header = content.querySelector('[class*="_header"]');
        if (header) header.insertBefore(back, header.firstChild);
        else content.insertBefore(back, content.firstChild);
      }
      /* 一级列表里没有关闭按钮（× 在二级的 header 里），这里补一个 */
      var nav = panel ? panel.querySelector('[class*="_nav"]') : null;
      if (nav) {
        var close = document.createElement("button");
        close.className = "dsh-hs-close";
        close.type = "button";
        close.setAttribute("aria-label", "关闭");
        close.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
        close.addEventListener("click", function (e) {
          e.stopPropagation();
          // × 在「二级内容」的 header 里，一级时被我们隐藏了 —— 先临时显示再点它
          // 面板每次打开都是新节点，这里必须重新查，不能用闭包里的旧引用
          var liveNav = document.querySelector('[class*="_navList"]');
          var livePanel = liveNav ? liveNav.closest('[class*="_panel"]') : document.querySelector('[class*="VOzbGW_panel"]');
          if (!livePanel) return;
          var contentEl = livePanel.querySelector('[class*="_content"]');
          var prev = contentEl ? contentEl.style.display : null;
          // 自己注入的按钮要显式跳过（它名字里也有 close/关闭，选择器匹配会造成递归）
          var btn = null;
          var cands = livePanel.querySelectorAll("button");
          for (var ci = 0; ci < cands.length; ci++) {
            var cel = cands[ci];
            if (cel.classList.contains("dsh-hs-close")) continue;
            var tag = (cel.className || "") + " " + (cel.getAttribute("aria-label") || "");
            if (/close|关闭/i.test(tag)) { btn = cel; break; }
          }
          if (btn) {
            if (contentEl) contentEl.style.display = "flex";
            // 应用监听的是完整指针/鼠标序列，单发 click 不会触发
            ["pointerdown", "mousedown", "pointerup", "mouseup", "click"].forEach(function (type) {
              var ev = type.indexOf("pointer") === 0
                ? new PointerEvent(type, { bubbles: true, cancelable: true, view: window })
                : new MouseEvent(type, { bubbles: true, cancelable: true, view: window });
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

  /* 会话详情/设置这类右侧面板：手机上铺满全屏，并让开悬浮侧栏 */
  function panelTweak() {
    var panel = document.querySelector('[class*="bt-panel"]');
    /* 关掉后节点同样留在 DOM 里：既看宽度也看 computed 可见性，避免残留 dsh-panel 卡住三横 */
    var open = visible(panel) && panel.getBoundingClientRect().width > 100;
    document.documentElement.classList.toggle("dsh-panel", open);
  }

  /* 面板开合由 React 控制、时机不定。除了常驻轮询，用户每次点击后再补几次 tick——
     关闭动作永远发生在点击之后，这样关闭瞬间就能把状态收回来。 */
  function scheduleTick() {
    window.clearTimeout(tickTimer);
    tickTimer = window.setTimeout(tick, 180);
  }

  function tick() {
    var el = side();
    if (!active()) {
      /* 宽屏时只移除手机状态与抽屉控件；面板返回/关闭按钮保留在 DOM，
         由 CSS 隐藏，避免缩窄回来后因初始化标记仍在而无法重新显示。 */
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
      try { saved = localStorage.getItem(KEY); } catch (e) {}
      /* 首次使用默认收起；之后保留用户最后一次打开/关闭选择。 */
      apply(saved === "1");
    }

    if (el) ensureDrawerControls();
    else {
      document.documentElement.classList.remove("dsh-rail-mobile", "dsh-rail-open");
      var b1 = document.getElementById("dsh-rail-toggle");
      if (b1) b1.remove();
      var back1 = document.getElementById("dsh-rail-backdrop");
      if (back1) back1.remove();
    }
    try { settingsTweak(); harnessTweak(); panelTweak(); } catch (e) {}
  }


  function start() {
    if (intervalId || !media.matches) return;
    listeners = new AbortController();
    tick();
    /* 常驻轮询：面板关闭后要把 html 上的 dsh-set / dsh-panel 等状态收回，
       否则 CSS 会一直把三横和悬浮侧栏按「设置中」处理（早期版本只跑 12 秒就停，就是这个 bug）。 */
    intervalId = window.setInterval(tick, 1000);
    /* 点击后立即补几次，关闭无延迟感 */
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
    document.querySelectorAll(".dsh-set-back, .dsh-hs-close").forEach(node => node.remove());
    document.querySelectorAll(".bt-settings, [class*='_navList']").forEach(node => delete node.dataset.dshReady);
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
