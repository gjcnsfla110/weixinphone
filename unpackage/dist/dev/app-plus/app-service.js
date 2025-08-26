if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const BASE_URL = "/api/";
  function request(options) {
    return new Promise((resolve, reject) => {
      uni.showLoading({ title: "加载中...", mask: true });
      uni.request({
        url: BASE_URL + options.url,
        method: options.method || "GET",
        data: options.data || {},
        header: {
          "Content-Type": "application/json;charset=UTF-8",
          ...options.header
        },
        success: (res) => {
          if (res.statusCode !== 200) {
            uni.showToast({ title: "서버 오류", icon: "none" });
            reject(res.data);
          }
          let responesData = res.data.data;
          resolve(responesData);
        },
        fail: (err) => {
          uni.showToast({ title: "네트워크 오류", icon: "none" });
          reject(err);
        },
        complete: () => {
          uni.hideLoading();
        }
      });
    });
  }
  function serviceGet(url, data, header) {
    return request({ url, method: "GET", data, header });
  }
  function getNaviBar() {
    const statuBarHeight = () => {
      return 20;
    };
    const titleBarheight = () => {
      return 50;
    };
    const fillHeight = () => statuBarHeight() + titleBarheight() + 50;
    const custumHeiht = () => statuBarHeight() + titleBarheight();
    const screen = () => {
      let { screenHeight } = uni.getSystemInfoSync();
      let topHeight = custumHeiht();
      return screenHeight - topHeight - 51;
    };
    const noTabScreen = () => {
      let { screenHeight } = uni.getSystemInfoSync();
      let topHeight = custumHeiht();
      return screenHeight - topHeight;
    };
    return {
      statuBarHeight,
      titleBarheight,
      custumHeiht,
      fillHeight,
      screen,
      noTabScreen
    };
  }
  function getOsPlatFrom() {
    return 1;
  }
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$L = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/Coding/uniapp/weixinphone/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$K = {
    __name: "custom-nav-bar",
    setup(__props, { expose: __expose }) {
      __expose();
      const {
        statuBarHeight,
        titleBarheight,
        fillHeight
      } = getNaviBar();
      const __returned__ = { statuBarHeight, titleBarheight, fillHeight, get getNaviBar() {
        return getNaviBar;
      }, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode(
        "view",
        {
          class: "navBar",
          style: vue.normalizeStyle({ height: $setup.fillHeight() + "px" })
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "statuBar",
              style: vue.normalizeStyle({ height: $setup.statuBarHeight() + "px" })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "titleBar",
              style: vue.normalizeStyle({ height: $setup.titleBarheight() + "px" })
            },
            [
              vue.createElementVNode("view", { class: "logo" }, "小韩手机"),
              vue.createElementVNode("view", { class: "search" }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon",
                  type: "search",
                  color: "#888",
                  size: "18"
                }),
                vue.createElementVNode("text", { class: "text" }, "搜寻手机")
              ])
            ],
            4
            /* STYLE */
          ),
          vue.renderSlot(_ctx.$slots, "index", {}, void 0, true)
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "view",
        {
          class: "fill",
          style: vue.normalizeStyle({ height: $setup.fillHeight() + "px" })
        },
        null,
        4
        /* STYLE */
      )
    ]);
  }
  const customNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__scopeId", "data-v-412fc155"], ["__file", "/Users/Coding/uniapp/weixinphone/components/custom-nav-bar/custom-nav-bar.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error2) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error2) {
                    getters[key] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  function resultPage(pages, components, componentItems, componentBanners) {
    let iComponents = components;
    iComponents.forEach((item) => {
      if (item.banner) {
        item.items = componentBanners.filter((Citem) => Citem.component_id == item.id);
      } else {
        item.items = componentItems.filter((Citem) => Citem.component == item.id);
      }
    });
    pages.forEach((item) => {
      item.components = iComponents.filter((Fitem) => Fitem.page_key == item.page_key);
    });
    return pages;
  }
  const useMainStores = defineStore("mainData", {
    state: () => ({
      main: {},
      iphone: {},
      samsung: {},
      subMenu: [],
      isLoading: false,
      isDataReady: false
    }),
    getters: {
      isDataAvailable: (state) => state.isDataReady && !state.isLoading
    },
    actions: {
      async lodingMain() {
        if (this.isDataReady)
          return;
        this.isLoading = true;
        try {
          const res = await serviceGet("app/index/main");
          this.subMenu = res.subMenus;
          let pages = res.pages;
          let components = res.components;
          let componentItems = res.componentItems;
          let componentBanners = res.componentBanners;
          pages = resultPage(pages, components, componentItems, componentBanners);
          this.main = pages.filter((item) => item.page_key == "main");
          this.iphone = pages.filter((item) => item.page_key == "iphone");
          this.samsung = pages.filter((item) => item.page_key == "samsung");
          this.isDataReady = true;
          formatAppLog("log", "at stores/mainData.js:32", this.subMenu);
        } catch {
          formatAppLog("error", "at stores/mainData.js:34", "Error loading main data:", error);
        } finally {
          this.isLoading = false;
        }
      }
    }
  });
  const _sfc_main$J = {
    setup() {
      const mainStores = useMainStores();
      return { mainStores };
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $setup.mainStores.isLoading ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "加载中...")) : $setup.mainStores.isDataAvailable ? vue.renderSlot(_ctx.$slots, "default", { key: 1 }) : (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, "数据未加载"))
    ]);
  }
  const LoadingView = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__file", "/Users/Coding/uniapp/weixinphone/utill/LoadingView.vue"]]);
  const _sfc_main$I = {
    __name: "itemTitle",
    props: {
      left: {
        type: String,
        default: ""
      },
      right: {
        type: String,
        default: ""
      },
      more: {
        type: Boolean,
        default: false
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "titleContent" }, [
      $props.left ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "tleft"
        },
        vue.toDisplayString($props.left),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      $props.right ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "tright"
        },
        vue.toDisplayString($props.right),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      $props.more ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "more"
      }, "更多 >")) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const Title = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-9898c4a4"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemTitle.vue"]]);
  const _sfc_main$H = {
    __name: "itemNew",
    props: {
      margin: {
        type: String,
        default: 0
      },
      left: {
        type: String,
        default: ""
      },
      right: {
        type: String,
        default: ""
      },
      more: {
        type: Boolean,
        default: false
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const list1 = vue.ref([
        {
          description: {
            name: "苹果16proMax",
            storage: "256GB",
            price: 180
          },
          src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
        },
        {
          description: {
            name: "苹果16pro",
            storage: "256GB",
            price: 160
          },
          src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
        },
        {
          description: {
            name: "苹果16proPlus",
            storage: "128GB",
            price: 120
          },
          src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
        },
        {
          description: {
            name: "苹果16proMax",
            storage: "512GB",
            price: 200
          },
          src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
        },
        {
          description: {
            name: "苹果16pro",
            storage: "256GB",
            price: 180
          },
          src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
        }
      ]);
      const list2 = vue.ref([
        {
          items: {
            title: "아이폰16프로맥스",
            content: "256G 특가",
            price: "Y 256만원"
          },
          src: "/static/subMenu/iphone.png"
        },
        {
          items: {
            title: "아이폰16프로맥스",
            content: "256G 특가",
            price: "Y 256만원"
          },
          src: "/static/subMenu/iphone.png"
        },
        {
          items: {
            title: "아이폰16프로맥스",
            content: "256G 특가",
            price: "Y 256만원"
          },
          src: "/static/subMenu/iphone.png"
        },
        {
          items: {
            title: "아이폰16프로맥스",
            content: "256G 특가",
            price: "Y 256만원"
          },
          src: "/static/subMenu/iphone.png"
        },
        {
          items: {
            title: "아이폰16프로맥스",
            content: "256G 특가",
            price: "Y 256만원"
          },
          src: "/static/subMenu/iphone.png"
        },
        {
          items: {
            title: "아이폰16프로맥스",
            content: "256G 특가",
            price: "Y 256만원"
          },
          src: "/static/subMenu/iphone.png"
        }
      ]);
      const __returned__ = { props, list1, list2, ref: vue.ref, ItemTitle: Title };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode($setup["ItemTitle"], {
          left: $props.left,
          right: $props.right,
          more: $props.more
        }, null, 8, ["left", "right", "more"]),
        vue.createElementVNode(
          "view",
          {
            class: "griditem1",
            style: vue.normalizeStyle({ marginTop: $props.margin + "px" })
          },
          [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "listItem1" }, [
                vue.createElementVNode("swiper", {
                  class: "listItem1Swiper",
                  autoplay: "",
                  "indicator-dots": "",
                  circular: "true"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($setup.list1, (item) => {
                      return vue.openBlock(), vue.createElementBlock("swiper-item", { class: "listItem1SwiperItem" }, [
                        vue.createElementVNode("view", { class: "item1Text" }, [
                          vue.createElementVNode(
                            "view",
                            { class: "item1Name" },
                            vue.toDisplayString(item.description.name),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "view",
                            { class: "item1Storage" },
                            vue.toDisplayString(item.description.storage),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "view",
                            { class: "item1Price" },
                            "韩币" + vue.toDisplayString(item.description.price) + "万",
                            1
                            /* TEXT */
                          )
                        ]),
                        vue.createElementVNode("view", { class: "item1Phone" }, [
                          vue.createElementVNode("image", {
                            class: "phone1Img",
                            src: item.src
                          }, null, 8, ["src"])
                        ])
                      ]);
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ])
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.list2, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "listItem2" }, [
                    vue.createElementVNode("view", { class: "item2Text" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "item2Title" },
                        vue.toDisplayString(item.items.title),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "item2Content" },
                        vue.toDisplayString(item.items.content),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "item2Price" },
                        vue.toDisplayString(item.items.price),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "item2Phone" }, [
                      vue.createElementVNode("image", {
                        class: "phone2Img",
                        src: item.src
                      }, null, 8, ["src"])
                    ])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])
          ],
          4
          /* STYLE */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const itemNew = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-3169b90a"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemNew.vue"]]);
  const _sfc_main$G = {
    __name: "cardPage",
    props: {
      color: {
        default: "#F6FCFF"
      },
      marginTop: {
        default: "30rpx"
      },
      pading: {
        default: "0 25rpx"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "cardItme",
        style: vue.normalizeStyle({ padding: $props.pading })
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "cardItme_pd",
            style: vue.normalizeStyle({ backgroundColor: $props.color, marginTop: $props.marginTop })
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const Card$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-dddb83ad"], ["__file", "/Users/Coding/uniapp/weixinphone/components/cardPage/cardPage.vue"]]);
  const _sfc_main$F = {
    __name: "itemScrollView",
    props: {
      margin: {
        type: String,
        default: "0rpx"
      },
      left: {
        type: String,
        default: ""
      },
      right: {
        type: String,
        default: ""
      },
      more: {
        type: Boolean,
        default: false
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const datelist = vue.ref([
        {
          title: "아이폰손목시계 아이폰손목시계 아이폰손목시계 아이폰손목시계",
          price: "259,500",
          status: 0,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰 아이폰손목시계아이폰손목시계",
          price: "259,500",
          status: 2,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
          price: "259,500",
          status: 1,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
          price: "259,500",
          status: 2,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
          price: "25,500",
          status: 0,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
          price: "259,500",
          status: 1,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰",
          price: "259,500",
          status: 0,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰",
          price: "259,500",
          status: 0,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰",
          price: "259,500",
          status: 2,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰",
          price: "259,500",
          status: 0,
          src: "/static/subMenu/watch.jpg"
        },
        {
          title: "아이폰 이어폰",
          price: "259,500",
          status: 1,
          src: "/static/subMenu/watch.jpg"
        }
      ]);
      const __returned__ = { props, datelist, CardPage: Card$1, itemTitle: Title, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["CardPage"], { marginTop: $props.margin }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("scroll-view", {
          class: "scrollX",
          "scroll-x": "",
          enableFlex: ""
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.datelist, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "scrollXlist" }, [
                vue.createElementVNode(
                  "view",
                  { class: "gr2title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "gr2price" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "gr2priceNumber" },
                    vue.toDisplayString(item.price),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode(" 韩元")
                ]),
                vue.createElementVNode("image", {
                  class: "gr2img",
                  src: item.src
                }, null, 8, ["src"]),
                item.status == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "gr2top",
                  style: { "background-color": "#CE1212" }
                }, "热卖")) : vue.createCommentVNode("v-if", true),
                item.status == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "gr2top",
                  style: { "background-color": "#0073B6" }
                }, "推荐")) : vue.createCommentVNode("v-if", true),
                item.status == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "gr2top",
                  style: { "background-color": "#E2AA0F" }
                }, "新品")) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["marginTop"]);
  }
  const ScrollViewItem = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-e6f32a5d"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemScrollView.vue"]]);
  const _imports_0$7 = "/static/subMenu/iphoneT.png";
  const _sfc_main$E = {
    __name: "itemContentList",
    props: {
      color: {
        default: "#F6FCFF"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props, cardPage: Card$1 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["cardPage"], { color: $props.color }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "gr3content" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(4, (item) => {
              return vue.createElementVNode("view", { class: "gr3item" }, [
                vue.createElementVNode("view", { class: "gr3topImg" }, [
                  vue.createElementVNode("image", { src: _imports_0$7 })
                ]),
                vue.createElementVNode("view", { class: "gr3bottom" }, [
                  vue.createElementVNode("view", { class: "gr3bottomTitle" }, "iphone16promax"),
                  vue.createElementVNode("view", { class: "gr3bottomContent" }, "256G内存"),
                  vue.createElementVNode("view", { class: "gr3bottomPrice" }, [
                    vue.createElementVNode("view", { class: "gr3pbtmleft" }, "160万韩元"),
                    vue.createElementVNode("view", { class: "gr3pbtmright" }, "立即购买")
                  ])
                ])
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["color"]);
  }
  const ContentList = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-59519203"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemContentList.vue"]]);
  const _sfc_main$D = {
    __name: "swiperBanner",
    setup(__props, { expose: __expose }) {
      __expose();
      const banners = vue.ref([
        {
          src: "https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg"
        },
        {
          src: "https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg"
        },
        {
          src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
        },
        {
          src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
        },
        {
          src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
        }
      ]);
      const __returned__ = { banners, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "hotBanner" }, [
      vue.createElementVNode("swiper", {
        class: "hotBannerSwiper",
        "indicator-dots": "",
        catchtouchmove: "true",
        interval: "5000",
        duration: "2000",
        autoplay: "",
        circular: "",
        "indicator-color": "rgba(0, 0, 0, 0.2)",
        "indicator-active-color": "#ffffff"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.banners, (item) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { class: "hotBannerSwiperitem" }, [
              vue.createElementVNode("view", { class: "hotBannerSwiperitemImg" }, [
                vue.createElementVNode("image", {
                  class: "bannerImg",
                  src: item.src,
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const swiperBanner = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-31fbf336"], ["__file", "/Users/Coding/uniapp/weixinphone/components/Img/swiperBanner.vue"]]);
  const _sfc_main$C = {
    __name: "hot-item",
    setup(__props, { expose: __expose }) {
      __expose();
      const mainStores = useMainStores();
      const subMenu = mainStores.subMenu;
      formatAppLog("log", "at components/index/hot-item/hot-item.vue:37", mainStores.subMenu);
      const __returned__ = { mainStores, subMenu, ref: vue.ref, LoadingView, itemNew, HotPeijian: ScrollViewItem, HotNew: ContentList, ItemTitle: Title, swiperBanner, get useMainStores() {
        return useMainStores;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "swiper-content" }, [
      vue.createElementVNode("view", null, [
        vue.createVNode($setup["swiperBanner"])
      ]),
      vue.createVNode($setup["LoadingView"], null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "subMenu" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.subMenu, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "subMenuItem" }, [
                  vue.createElementVNode("image", {
                    class: "subMenuImg",
                    src: item.img
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    { class: "subMenuText" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "hotItem" }, [
            vue.createVNode($setup["itemNew"], {
              margin: 5,
              left: "新品发布",
              right: "热销商品"
            })
          ]),
          vue.createElementVNode("view", { class: "hotPeijian" }, [
            vue.createVNode($setup["HotPeijian"], {
              left: "手机配件",
              right: "爆款商品"
            })
          ]),
          vue.createElementVNode("view", { class: "hotNew" }, [
            vue.createVNode($setup["HotNew"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const hotItem = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-b080f363"], ["__file", "/Users/Coding/uniapp/weixinphone/components/index/hot-item/hot-item.vue"]]);
  const _sfc_main$B = {
    __name: "imgBanner",
    props: {
      src: {
        default: "https://byline.network/wp-content/uploads/2024/09/iphone-16-event-94.jpg"
      },
      height: {
        default: "330rpx"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "Banner" }, [
      vue.createElementVNode("image", {
        class: "BannerImg",
        src: $props.src,
        mode: "aspectFill",
        style: vue.normalizeStyle({ height: $props.height })
      }, null, 12, ["src"])
    ]);
  }
  const BannerImg = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-0d954d97"], ["__file", "/Users/Coding/uniapp/weixinphone/components/Img/imgBanner.vue"]]);
  const _imports_1$2 = "/assets/banner2.6cffe6da.jpg";
  const _imports_2$2 = "/static/subMenu/iphonT.jpg";
  const _sfc_main$A = {
    __name: "itemContentTitle",
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props, Card: Card$1 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "itemTcontent" }, [
      vue.createVNode($setup["Card"], {
        color: "rgb(247, 247, 247)",
        marginTop: "0"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "itemTtop" }, [
            vue.createElementVNode("view", { class: "Ttopleft" }, [
              vue.createElementVNode("view", { class: "titleTop" }, "Ipone16pro系列"),
              vue.createElementVNode("view", { class: "titlebottom" }, "绝对的机黄鸡 ")
            ]),
            vue.createElementVNode("view", { class: "Ttopright" }, [
              vue.createElementVNode("image", { src: _imports_0$7 })
            ])
          ]),
          vue.createElementVNode("view", { class: "itemTmid" }, [
            vue.createElementVNode("image", {
              src: _imports_1$2,
              mode: "aspectFill"
            })
          ]),
          vue.createElementVNode("view", { class: "itemTbottom" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(4, (item) => {
                return vue.createElementVNode("view", { class: "TbottomItem" }, [
                  vue.createElementVNode("view", { class: "tbleft" }, [
                    vue.createElementVNode("view", { class: "tbTitle" }, "苹果16promax"),
                    vue.createElementVNode("view", { class: "tbContent" }, "256G"),
                    vue.createElementVNode("view", { class: "tbPrice" }, "205万韩元")
                  ]),
                  vue.createElementVNode("view", { class: "tbright" }, [
                    vue.createElementVNode("image", { src: _imports_2$2 })
                  ])
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const TitleContent = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-fecb4b61"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemContentTitle.vue"]]);
  const _imports_0$6 = "/assets/banner5.d7745e10.jpg";
  const _sfc_main$z = {
    __name: "swiperImg",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { Card: Card$1 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["Card"], {
      color: "white",
      "margin-top": "0"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("swiper", {
          class: "imgSwiper",
          "indicator-dots": "",
          autoplay: ""
        }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(5, (item) => {
              return vue.createElementVNode("swiper-item", { class: "imgSwiperItem" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$6,
                  mode: "aspectFill"
                })
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const SwiperImg$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-026b385a"], ["__file", "/Users/Coding/uniapp/weixinphone/components/Img/swiperImg.vue"]]);
  const _sfc_main$y = {
    __name: "oneImg",
    props: {
      src: {
        default: ""
      },
      heigth: {
        default: "200rpx"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "oneImgContent",
        style: vue.normalizeStyle({ height: $props.heigth })
      },
      [
        vue.createElementVNode("image", {
          src: $props.src,
          mode: "aspectFill"
        }, null, 8, ["src"])
      ],
      4
      /* STYLE */
    );
  }
  const OneImg = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-5d174ab6"], ["__file", "/Users/Coding/uniapp/weixinphone/components/Img/oneImg.vue"]]);
  const _imports_0$5 = "/assets/ipad.60c8de1e.jpg";
  const _sfc_main$x = {};
  function _sfc_render$w(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "ctTwoContent" }, [
      vue.createElementVNode("view", { class: "ctTwoTop" }, [
        vue.createElementVNode("image", {
          src: _imports_0$5,
          mode: "aspectFill"
        })
      ]),
      vue.createElementVNode("view", { class: "ctTwoBottom" }, [
        vue.createElementVNode("view", { class: "bottomCt" }, [
          vue.createElementVNode("view", { class: "bottomCtleft" }, [
            vue.createElementVNode("view", { class: "bTtitle" }, "苹果16promax"),
            vue.createElementVNode("view", { class: "bTcontent" }, "超强续航")
          ]),
          vue.createElementVNode("view", { class: "bottomCtright" }, [
            vue.createElementVNode("view", { class: "bTbottom" }, [
              vue.createElementVNode("view", { class: "bTbottomleft" }, "160万韩元"),
              vue.createElementVNode("view", { class: "bTbottomright" }, "立即购买")
            ])
          ])
        ])
      ])
    ]);
  }
  const TcontentOne = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-d6e35987"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemContentOne.vue"]]);
  const _imports_0$4 = "/assets/banner1.871fc3e1.jpg";
  const _sfc_main$w = {};
  function _sfc_render$v(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "ctTwoContent" }, [
      vue.createElementVNode("view", { class: "ctTwoTop" }, [
        vue.createElementVNode("image", {
          src: _imports_0$4,
          mode: "aspectFill"
        })
      ]),
      vue.createElementVNode("view", { class: "ctTwoBottom" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(2, (item) => {
            return vue.createElementVNode("view", { class: "bottomCt" }, [
              vue.createElementVNode("view", { class: "bTtitle" }, "苹果16promax"),
              vue.createElementVNode("view", { class: "bTcontent" }, "超强续航"),
              vue.createElementVNode("view", { class: "bTbottom" }, [
                vue.createElementVNode("view", { class: "bTbottomleft" }, "160万韩元"),
                vue.createElementVNode("view", { class: "bTbottomright" }, "立即购买")
              ])
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const TcontentTwo = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-cd814b23"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemContentTwo.vue"]]);
  const _sfc_main$v = {
    __name: "itemList",
    props: {
      itemColor: {
        default: "rgb(247,249,255,0.5)"
      },
      listColor: {
        default: "rgb(255,255,255)"
      },
      data: {
        default: []
      },
      padding: {
        type: String,
        default: "0 0"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "gr4content",
        style: vue.normalizeStyle({ padding: $props.padding, backgroundColor: $props.listColor })
      },
      [
        vue.createElementVNode("view", { class: "gr4list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.data, (item) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: "gr4Item",
                  style: vue.normalizeStyle({ backgroundColor: $props.itemColor })
                },
                [
                  vue.createElementVNode("navigator", {
                    url: "/pages/oldDetail/oldDetail",
                    "hover-class": "none"
                  }, [
                    vue.createElementVNode("view", { class: "gr4Top" }, [
                      vue.createElementVNode("image", {
                        src: item.src,
                        mode: "aspectFill"
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "gr4Bottom" }, [
                      vue.createElementVNode("view", { class: "gr4BtTitle" }, "苹果16pro Max 绝对有性价比的手机 256G 8成以上新 需要速度联系"),
                      vue.createElementVNode("view", { class: "gr4BtContent" }, [
                        vue.createElementVNode("view", { class: "gr4BtContentTag" }, "256G"),
                        vue.createElementVNode("view", {
                          class: "gr4BtContentTag",
                          style: { "border": "1px solid red", "color": "red" }
                        }, "9成新"),
                        vue.createElementVNode("view", { class: "gr4BtContentPrice" }, [
                          vue.createTextVNode("原价: "),
                          vue.createElementVNode("view", { class: "yuanjia" }, "200万")
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "gr4BtPrice" }, [
                        vue.createTextVNode("现价: "),
                        vue.createElementVNode("view", { class: "gr4BtPriceNumber" }, "860,600"),
                        vue.createTextVNode("韩元")
                      ])
                    ])
                  ])
                ],
                4
                /* STYLE */
              );
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ],
      4
      /* STYLE */
    );
  }
  const OldList = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-dcdb0659"], ["__file", "/Users/Coding/uniapp/weixinphone/components/item/itemList.vue"]]);
  const _sfc_main$u = {
    __name: "samsung-item",
    setup(__props, { expose: __expose }) {
      __expose();
      const data = vue.ref([
        {
          src: "/images/testImg/ss1.jpg"
        },
        {
          src: "/images/testImg/ss2.jpg"
        },
        {
          src: "/images/testImg/ss3.jpg"
        },
        {
          src: "/images/testImg/ss4.jpg"
        },
        {
          src: "/images/testImg/ss5.jpg"
        },
        {
          src: "/images/testImg/ss6.jpg"
        },
        {
          src: "/images/testImg/ss7.jpg"
        },
        {
          src: "/images/testImg/ss8.jpg"
        }
      ]);
      const __returned__ = { data, ref: vue.ref, BarnerImg: BannerImg, ContentTitle: TitleContent, Title, ContentList, SwiperImg: SwiperImg$1, ScrollViewItem, OneImg, ContentOne: TcontentOne, ContentTwo: TcontentTwo, ItemList: OldList };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "samsungContent" }, [
          vue.createVNode($setup["BarnerImg"], { src: "https://www.alezay.com/wp-content/uploads/2024/01/SAMSUNG-GALAXY-S24-SAMSUNG-GALAXY-S24-MAIN-BANNER-ALEZAY-KUWAIT.jpg" })
        ]),
        vue.createVNode($setup["Title"], { left: "新品上市" }),
        vue.createVNode($setup["ContentTitle"]),
        vue.createVNode($setup["ContentList"]),
        vue.createVNode($setup["SwiperImg"]),
        vue.createVNode($setup["Title"], { left: "手机配件" }),
        vue.createVNode($setup["ScrollViewItem"]),
        vue.createVNode($setup["Title"], {
          left: "S24系列",
          right: "晓龙8gn3芯片"
        }),
        vue.createVNode($setup["ContentTwo"]),
        vue.createVNode($setup["ContentList"], { color: "rgb(247,247,247)" }),
        vue.createVNode($setup["OneImg"], { src: "https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg" }),
        vue.createVNode($setup["Title"], {
          left: "A系列",
          right: "待机神器"
        }),
        vue.createVNode($setup["ContentOne"]),
        vue.createVNode($setup["ContentList"], { color: "black" }),
        vue.createVNode($setup["Title"], {
          left: "三星 Pad",
          right: "超薄待机王者",
          more: "true"
        }),
        vue.createVNode($setup["ContentOne"]),
        vue.createVNode($setup["ContentList"], { color: "rgb(247,247,247)" }),
        vue.createVNode($setup["Title"], {
          left: "二手机 系列",
          right: "绝对值得买"
        }),
        vue.createVNode($setup["ItemList"], { data: $setup.data }, null, 8, ["data"])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const samsungItem = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "/Users/Coding/uniapp/weixinphone/components/index/samsung-item/samsung-item.vue"]]);
  const _sfc_main$t = {
    __name: "iphone-item",
    setup(__props, { expose: __expose }) {
      __expose();
      const ershou = vue.ref([
        {
          src: "/images/testImg/er1.jpg"
        },
        {
          src: "/images/testImg/er2.jpg"
        },
        {
          src: "/images/testImg/er3.jpg"
        },
        {
          src: "/images/testImg/er4.jpg"
        },
        {
          src: "/images/testImg/er5.jpg"
        },
        {
          src: "/images/testImg/ershou.jpg"
        }
      ]);
      const __returned__ = { ershou, ref: vue.ref, Title, TitleContent, SwiperImg: SwiperImg$1, TcontentTwo, TcontentOne, ContentList, ItemList: OldList, BannerImg };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "iphoneContent" }, [
      vue.createVNode($setup["BannerImg"], { src: "https://byline.network/wp-content/uploads/2024/09/iphone-16-event-94.jpg" }),
      vue.createVNode($setup["Title"], { left: "新品上市" }),
      vue.createVNode($setup["TitleContent"]),
      vue.createVNode($setup["Title"], { left: "特们推荐" }),
      vue.createVNode($setup["SwiperImg"]),
      vue.createVNode($setup["Title"], {
        left: "Pro 系列",
        right: "最强悍苹果"
      }),
      vue.createVNode($setup["TcontentTwo"]),
      vue.createVNode($setup["ContentList"], { color: "rgb(248,248,248)" }),
      vue.createVNode($setup["Title"], {
        left: "Ipad 和 配件",
        right: "最强悍平板电脑",
        more: "true"
      }),
      vue.createVNode($setup["TcontentOne"]),
      vue.createVNode($setup["ContentList"], { color: "rgb(248,248,248)" }),
      vue.createVNode($setup["Title"], {
        left: "二手机 系列",
        right: "性价比高二手手机"
      }),
      vue.createVNode($setup["ItemList"], { data: $setup.ershou }, null, 8, ["data"])
    ]);
  }
  const iphoneItem = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-3b27dcb8"], ["__file", "/Users/Coding/uniapp/weixinphone/components/index/iphone-item/iphone-item.vue"]]);
  const _sfc_main$s = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const hotScrolltolower = () => {
        formatAppLog("log", "at pages/index/index.vue:50", "11");
      };
      const iphoneScrolltolower = () => {
        formatAppLog("log", "at pages/index/index.vue:54", "22");
      };
      const samsungScrolltolower = () => {
        formatAppLog("log", "at pages/index/index.vue:58", "33");
      };
      const swiperHeightf = () => {
        let { screenHeight } = uni.getSystemInfoSync();
        return screenHeight - getNaviBar().fillHeight() - 51;
      };
      const swiperHeight = vue.ref(swiperHeightf());
      const munu = [
        {
          title: "推荐"
        },
        {
          title: "Iphone"
        },
        {
          title: "SamSeng"
        }
      ];
      const tabIndex = vue.ref(0);
      const scrollInto = vue.ref("");
      function changeSwiper(e) {
        changeMenu(e.detail.current);
      }
      const changeMenu = (i) => {
        if (i == tabIndex.value) {
          return;
        }
        scrollInto.value = "tab" + i;
        tabIndex.value = i;
      };
      const __returned__ = { hotScrolltolower, iphoneScrolltolower, samsungScrolltolower, swiperHeightf, swiperHeight, munu, tabIndex, scrollInto, changeSwiper, changeMenu, ref: vue.ref, get serviceGet() {
        return serviceGet;
      }, get getNaviBar() {
        return getNaviBar;
      }, customNavBar, hotItem, samsungItem, iphoneItem, LodingItem: OldList };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createVNode($setup["customNavBar"], null, {
            index: vue.withCtx(() => [
              vue.createElementVNode("scroll-view", {
                class: "hotSubmenu",
                "scroll-x": "",
                "scroll-into-view": "scrollInto",
                "scroll-with-animation": true
              }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.munu, (item, index) => {
                    return vue.createElementVNode("view", {
                      class: "hotSubmenuTitle",
                      id: "menu" + index,
                      key: index,
                      onClick: ($event) => $setup.changeMenu(index)
                    }, [
                      vue.createTextVNode(
                        vue.toDisplayString(item.title) + " ",
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass({ "hotBottomBorder animate__heartBeat": $setup.tabIndex == index })
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ], 8, ["id", "onClick"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        vue.createElementVNode("swiper", {
          class: "main",
          style: vue.normalizeStyle({ height: $setup.swiperHeight + "px" }),
          onChange: $setup.changeSwiper,
          current: $setup.tabIndex,
          duration: "800"
        }, [
          vue.createElementVNode(
            "swiper-item",
            {
              class: "swiper-item",
              ref: "item33",
              id: "hot"
            },
            [
              vue.createElementVNode(
                "scroll-view",
                {
                  style: vue.normalizeStyle({ height: $setup.swiperHeight + "px" }),
                  "scroll-y": "true",
                  onScrolltolower: $setup.hotScrolltolower
                },
                [
                  vue.createVNode($setup["hotItem"], { height: $setup.swiperHeight }, null, 8, ["height"])
                ],
                36
                /* STYLE, NEED_HYDRATION */
              )
            ],
            512
            /* NEED_PATCH */
          ),
          vue.createElementVNode(
            "swiper-item",
            {
              class: "swiper-item",
              ref: "item1",
              id: "iphone"
            },
            [
              vue.createElementVNode(
                "scroll-view",
                {
                  style: vue.normalizeStyle({ height: $setup.swiperHeight + "px" }),
                  "scroll-y": "true",
                  onScrolltolower: $setup.iphoneScrolltolower
                },
                [
                  vue.createVNode($setup["iphoneItem"], { height: $setup.swiperHeight }, null, 8, ["height"])
                ],
                36
                /* STYLE, NEED_HYDRATION */
              )
            ],
            512
            /* NEED_PATCH */
          ),
          vue.createElementVNode(
            "swiper-item",
            {
              class: "swiper-item",
              ref: "item2",
              id: "samsung"
            },
            [
              vue.createElementVNode(
                "scroll-view",
                {
                  style: vue.normalizeStyle({ height: $setup.swiperHeight + "px" }),
                  "scroll-y": "true",
                  onScrolltolower: $setup.samsungScrolltolower
                },
                [
                  vue.createVNode($setup["samsungItem"], { height: $setup.swiperHeight }, null, 8, ["height"])
                ],
                36
                /* STYLE, NEED_HYDRATION */
              )
            ],
            512
            /* NEED_PATCH */
          )
        ], 44, ["current"])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/Coding/uniapp/weixinphone/pages/index/index.vue"]]);
  const _sfc_main$r = {};
  function _sfc_render$q(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesSimCardSimCard = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__file", "/Users/Coding/uniapp/weixinphone/pages/simCard/simCard.vue"]]);
  const _sfc_main$q = {
    __name: "customNav",
    props: {
      title: {
        type: String,
        default: "小韩手机"
      },
      back: {
        type: Boolean,
        default: false
      },
      topHeight: {
        type: Number,
        default: 0
      },
      bgColor: {
        type: String,
        default: "white"
      },
      customFill: {
        type: Boolean,
        default: true
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const {
        statuBarHeight,
        titleBarheight,
        custumHeiht
      } = getNaviBar();
      const props = __props;
      const custumH = vue.ref(custumHeiht() + props.topHeight);
      const goBack = () => {
        let pages = getCurrentPages();
        if (pages.length > 1) {
          uni.navigateBack();
        } else {
          uni.reLaunch({ url: "/pages/index/index" });
        }
      };
      const __returned__ = { statuBarHeight, titleBarheight, custumHeiht, props, custumH, goBack, get getNaviBar() {
        return getNaviBar;
      }, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode(
        "view",
        {
          class: "navBar",
          style: vue.normalizeStyle({ height: $setup.custumH + "px", backgroundColor: $props.bgColor })
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "statuBar",
              style: vue.normalizeStyle({ height: $setup.statuBarHeight() + "px" })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "titleBar",
              style: vue.normalizeStyle({ height: $setup.titleBarheight() + "px" })
            },
            [
              $props.back ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                onClick: $setup.goBack,
                class: "back"
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "arrow-left",
                  size: "25"
                })
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "logo"
              }, "LOGO")),
              vue.createElementVNode(
                "view",
                { class: "search" },
                vue.toDisplayString($props.title),
                1
                /* TEXT */
              )
            ],
            4
            /* STYLE */
          ),
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      ),
      $props.customFill ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "fill",
          style: vue.normalizeStyle({ height: $setup.custumH + "px" })
        },
        null,
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const CustomNav = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-ca453c6d"], ["__file", "/Users/Coding/uniapp/weixinphone/components/custom-nav-bar/customNav.vue"]]);
  const _imports_0$3 = "/static/my.png";
  const _sfc_main$p = {};
  function _sfc_render$o(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "profil" }, [
        vue.createElementVNode("view", { class: "userImg" }, [
          vue.createElementVNode("image", { src: _imports_0$3 })
        ]),
        vue.createElementVNode("view", { class: "title" }, [
          vue.createElementVNode("view", { class: "title1" }, "小韩手机"),
          vue.createElementVNode("view", { class: "title2" }, "-在韩中国同胞最大手机平台-")
        ])
      ]),
      vue.createElementVNode("view", { class: "myData" }, [
        vue.createElementVNode("view", { class: "myData-name" }, " 注册登录会员 "),
        vue.createElementVNode("view", { class: "myData-bottom" }, [
          vue.createElementVNode("view", { class: "myData-bottom-left" }, [
            vue.createElementVNode("view", { class: "myData-bottom-left-title" }, "购买商品"),
            vue.createElementVNode("view", { class: "myData-bottom-left-data" }, "10")
          ]),
          vue.createElementVNode("view", { class: "myData-bottom-center" }),
          vue.createElementVNode("view", { class: "myData-bottom-right" }, [
            vue.createElementVNode("view", { class: "myData-bottom-right-title" }, "出售商品"),
            vue.createElementVNode("view", { class: "myData-bottom-right-data" }, "5")
          ])
        ])
      ])
    ]);
  }
  const Top = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-24745a35"], ["__file", "/Users/Coding/uniapp/weixinphone/components/myPage/top.vue"]]);
  const _imports_0$2 = "/static/shopping/daifukuan.png";
  const _imports_1$1 = "/static/shopping/yifukuan.png";
  const _imports_2$1 = "/static/shopping/daifahuo.png";
  const _imports_3 = "/static/shopping/yifahuo.png";
  const _imports_4 = "/static/shopping/wuliu.png";
  const _imports_5 = "/static/shopping/huishoujia.png";
  const _imports_6 = "/static/shopping/pingjia.png";
  const _imports_7 = "/static/shopping/jimai1.png";
  const _imports_8 = "/static/shopping/jishouwan1.png";
  const _imports_9 = "/static/shopping/fabupin.png";
  const _imports_10 = "/static/shopping/fabupin1.png";
  const _sfc_main$o = {};
  function _sfc_render$n(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "shopping-data" }, [
      vue.createElementVNode("view", { class: "buy" }, [
        vue.createElementVNode("view", { class: "buy-top" }, [
          vue.createElementVNode("view", { class: "buy-top-left" }, "我的订单"),
          vue.createElementVNode("view", { class: "buy-top-right" }, "全部订单 >")
        ]),
        vue.createElementVNode("view", { class: "buy-main" }, [
          vue.createElementVNode("view", { class: "buy-main-item" }, [
            vue.createElementVNode("view", { class: "buy-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_0$2 })
            ]),
            vue.createElementVNode("view", { class: "buy-main-item-title" }, "待付款")
          ]),
          vue.createElementVNode("view", { class: "buy-main-item" }, [
            vue.createElementVNode("view", { class: "buy-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_1$1 })
            ]),
            vue.createElementVNode("view", { class: "buy-main-item-title" }, "已付款")
          ]),
          vue.createElementVNode("view", { class: "buy-main-item" }, [
            vue.createElementVNode("view", { class: "buy-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_2$1 })
            ]),
            vue.createElementVNode("view", { class: "buy-main-item-title" }, "待发货")
          ]),
          vue.createElementVNode("view", { class: "buy-main-item" }, [
            vue.createElementVNode("view", { class: "buy-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_3 })
            ]),
            vue.createElementVNode("view", { class: "buy-main-item-title" }, "已发货")
          ]),
          vue.createElementVNode("view", { class: "buy-main-item" }, [
            vue.createElementVNode("view", { class: "buy-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_4 })
            ]),
            vue.createElementVNode("view", { class: "buy-main-item-title" }, "查看物流")
          ])
        ]),
        vue.createElementVNode("view", { class: "buy-bottom" }, [
          vue.createElementVNode("view", { class: "buy-bottom-item" }, [
            vue.createElementVNode("view", { class: "buy-bottom-item-img" }, [
              vue.createElementVNode("image", { src: _imports_5 })
            ]),
            vue.createElementVNode("view", { class: "buy-bottom-item-title" }, "回收价")
          ]),
          vue.createElementVNode("view", { class: "buy-bottom-border" }),
          vue.createElementVNode("view", { class: "buy-bottom-item" }, [
            vue.createElementVNode("view", { class: "buy-bottom-item-img" }, [
              vue.createElementVNode("image", { src: _imports_6 })
            ]),
            vue.createElementVNode("view", { class: "buy-bottom-item-title" }, "购买评价")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "border-center" }),
      vue.createElementVNode("view", { class: "sell" }, [
        vue.createElementVNode("view", { class: "sell-top" }, [
          vue.createElementVNode("view", { class: "sell-top-left" }, "我商品单"),
          vue.createElementVNode("view", { class: "sell-top-right" }, "全部订单 >")
        ]),
        vue.createElementVNode("view", { class: "sell-main" }, [
          vue.createElementVNode("view", { class: "sell-main-item" }, [
            vue.createElementVNode("view", { class: "sell-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_7 })
            ]),
            vue.createElementVNode("view", { class: "sell-main-item-title" }, "寄卖商品")
          ]),
          vue.createElementVNode("view", { class: "sell-main-item" }, [
            vue.createElementVNode("view", { class: "sell-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_8 })
            ]),
            vue.createElementVNode("view", { class: "sell-main-item-title" }, "已卖寄品")
          ]),
          vue.createElementVNode("view", { class: "sell-main-item" }, [
            vue.createElementVNode("view", { class: "sell-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_9 })
            ]),
            vue.createElementVNode("view", { class: "sell-main-item-title" }, "发布商品")
          ]),
          vue.createElementVNode("view", { class: "sell-main-item" }, [
            vue.createElementVNode("view", { class: "sell-main-item-img" }, [
              vue.createElementVNode("image", { src: _imports_10 })
            ]),
            vue.createElementVNode("view", { class: "sell-main-item-title" }, "卖出商品")
          ])
        ])
      ])
    ]);
  }
  const Shopping = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-9529a3a3"], ["__file", "/Users/Coding/uniapp/weixinphone/components/myPage/shoppingHistory.vue"]]);
  const _sfc_main$n = {
    __name: "other",
    setup(__props, { expose: __expose }) {
      __expose();
      const data = vue.ref([
        {
          title: "联系客服",
          src: "/static/me/kefu.png"
        },
        {
          title: "个人信息",
          src: "/static/me/me.png"
        },
        {
          title: "收货地址",
          src: "/static/me/adress.png"
        },
        {
          title: "小韩公司",
          src: "/static/me/gongsi.png"
        },
        {
          title: "退出账号",
          src: "/static/me/logout.png"
        }
      ]);
      const __returned__ = { data, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "other-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.data, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "other-item" }, [
                vue.createElementVNode("view", { class: "other-item-img" }, [
                  vue.createElementVNode("image", {
                    src: item.src
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "other-item-text" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "other-item-right" }, ">")
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { style: { "height": "5rpx" } })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const Other = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-2295ba6d"], ["__file", "/Users/Coding/uniapp/weixinphone/components/myPage/other.vue"]]);
  const _sfc_main$m = {
    __name: "myPage",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { CustomNav, Top, Shopping, Other };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "myPageContent" }, [
      vue.createVNode($setup["CustomNav"]),
      vue.createVNode($setup["Top"]),
      vue.createVNode($setup["Shopping"]),
      vue.createVNode($setup["Other"])
    ]);
  }
  const PagesMyPageMyPage = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__file", "/Users/Coding/uniapp/weixinphone/pages/myPage/myPage.vue"]]);
  const _sfc_main$l = {
    name: "uniCollapseItem",
    props: {
      // 列表标题
      title: {
        type: String,
        default: ""
      },
      name: {
        type: [Number, String],
        default: ""
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否显示动画,app 端默认不开启动画，卡顿严重
      showAnimation: {
        type: Boolean,
        default: false
      },
      // 是否展开
      open: {
        type: Boolean,
        default: false
      },
      // 缩略图
      thumb: {
        type: String,
        default: ""
      },
      // 标题分隔线显示类型
      titleBorder: {
        type: String,
        default: "auto"
      },
      border: {
        type: Boolean,
        default: true
      },
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        isOpen: false,
        isheight: null,
        height: 0,
        elId,
        nameSync: 0
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
        this.onClick(val, "init");
      }
    },
    updated(e) {
      this.$nextTick(() => {
        this.init(true);
      });
    },
    created() {
      this.collapse = this.getCollapse();
      this.oldHeight = 0;
      this.onClick(this.open, "init");
    },
    // TODO vue3
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    mounted() {
      if (!this.collapse)
        return;
      if (this.name !== "") {
        this.nameSync = this.name;
      } else {
        this.nameSync = this.collapse.childrens.length + "";
      }
      if (this.collapse.names.indexOf(this.nameSync) === -1) {
        this.collapse.names.push(this.nameSync);
      } else {
        formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue:154", `name 值 ${this.nameSync} 重复`);
      }
      if (this.collapse.childrens.indexOf(this) === -1) {
        this.collapse.childrens.push(this);
      }
      this.init();
    },
    methods: {
      init(type) {
        this.getCollapseHeight(type);
      },
      uninstall() {
        if (this.collapse) {
          this.collapse.childrens.forEach((item, index) => {
            if (item === this) {
              this.collapse.childrens.splice(index, 1);
            }
          });
          this.collapse.names.forEach((item, index) => {
            if (item === this.nameSync) {
              this.collapse.names.splice(index, 1);
            }
          });
        }
      },
      onClick(isOpen, type) {
        if (this.disabled)
          return;
        this.isOpen = isOpen;
        if (this.isOpen && this.collapse) {
          this.collapse.setAccordion(this);
        }
        if (type !== "init") {
          this.collapse.onChange(isOpen, this);
        }
      },
      getCollapseHeight(type, index = 0) {
        const views = uni.createSelectorQuery().in(this);
        views.select(`#${this.elId}`).fields({
          size: true
        }, (data) => {
          if (index >= 10)
            return;
          if (!data) {
            index++;
            this.getCollapseHeight(false, index);
            return;
          }
          this.height = data.height;
          this.isheight = true;
          if (type)
            return;
          this.onClick(this.isOpen, "init");
        }).exec();
      },
      getNvueHwight(type) {
        dom.getComponentRect(this.$refs["collapse--hook"], (option) => {
          if (option && option.result && option.size) {
            this.height = option.size.height;
            this.isheight = true;
            if (type)
              return;
            this.onClick(this.open, "init");
          }
        });
      },
      /**
       * 获取父元素实例
       */
      getCollapse(name = "uniCollapse") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse-item" }, [
      vue.createCommentVNode(" onClick(!isOpen) "),
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick(!$data.isOpen)),
          class: vue.normalizeClass(["uni-collapse-item__title", { "is-open": $data.isOpen && $props.titleBorder === "auto", "uni-collapse-item-border": $props.titleBorder !== "none" }])
        },
        [
          vue.createElementVNode("view", { class: "uni-collapse-item__title-wrap" }, [
            vue.renderSlot(_ctx.$slots, "title", {}, () => [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["uni-collapse-item__title-box", { "is-disabled": $props.disabled }])
                },
                [
                  $props.thumb ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 0,
                    src: $props.thumb,
                    class: "uni-collapse-item__title-img"
                  }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode(
                    "text",
                    { class: "uni-collapse-item__title-text" },
                    vue.toDisplayString($props.title),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ], true)
          ]),
          $props.showArrow ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass([{ "uni-collapse-item__title-arrow-active": $data.isOpen, "uni-collapse-item--animation": $props.showAnimation === true }, "uni-collapse-item__title-arrow"])
            },
            [
              vue.createVNode(_component_uni_icons, {
                color: $props.disabled ? "#ddd" : "#bbb",
                size: "14",
                type: "bottom"
              }, null, 8, ["color"])
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-collapse-item__wrap", { "is--transition": $props.showAnimation }]),
          style: vue.normalizeStyle({ height: ($data.isOpen ? $data.height : 0) + "px" })
        },
        [
          vue.createElementVNode("view", {
            id: $data.elId,
            ref: "collapse--hook",
            class: vue.normalizeClass(["uni-collapse-item__wrap-content", { open: $data.isheight, "uni-collapse-item--border": $props.border && $data.isOpen }])
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 10, ["id"])
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-3d2dde9f"], ["__file", "/Users/Coding/uniapp/weixinphone/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
  const _sfc_main$k = {
    name: "uniCollapse",
    emits: ["change", "activeItem", "input", "update:modelValue"],
    props: {
      value: {
        type: [String, Array],
        default: ""
      },
      modelValue: {
        type: [String, Array],
        default: ""
      },
      accordion: {
        // 是否开启手风琴效果
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      // TODO 兼容 vue2 和 vue3
      dataValue() {
        let value = typeof this.value === "string" && this.value === "" || Array.isArray(this.value) && this.value.length === 0;
        let modelValue = typeof this.modelValue === "string" && this.modelValue === "" || Array.isArray(this.modelValue) && this.modelValue.length === 0;
        if (value) {
          return this.modelValue;
        }
        if (modelValue) {
          return this.value;
        }
        return this.value;
      }
    },
    watch: {
      dataValue(val) {
        this.setOpen(val);
      }
    },
    created() {
      this.childrens = [];
      this.names = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.setOpen(this.dataValue);
      });
    },
    methods: {
      setOpen(val) {
        let str = typeof val === "string";
        let arr = Array.isArray(val);
        this.childrens.forEach((vm, index) => {
          if (str) {
            if (val === vm.nameSync) {
              if (!this.accordion) {
                formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:75", "accordion 属性为 false ,v-model 类型应该为 array");
                return;
              }
              vm.isOpen = true;
            }
          }
          if (arr) {
            val.forEach((v) => {
              if (v === vm.nameSync) {
                if (this.accordion) {
                  formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:85", "accordion 属性为 true ,v-model 类型应该为 string");
                  return;
                }
                vm.isOpen = true;
              }
            });
          }
        });
        this.emit(val);
      },
      setAccordion(self2) {
        if (!this.accordion)
          return;
        this.childrens.forEach((vm, index) => {
          if (self2 !== vm) {
            vm.isOpen = false;
          }
        });
      },
      resize() {
        this.childrens.forEach((vm, index) => {
          vm.getCollapseHeight();
        });
      },
      onChange(isOpen, self2) {
        let activeItem = [];
        if (this.accordion) {
          activeItem = isOpen ? self2.nameSync : "";
        } else {
          this.childrens.forEach((vm, index) => {
            if (vm.isOpen) {
              activeItem.push(vm.nameSync);
            }
          });
        }
        this.$emit("change", activeItem);
        this.emit(activeItem);
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-3f050360"], ["__file", "/Users/Coding/uniapp/weixinphone/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"]]);
  const _imports_0$1 = "/assets/shop.9c40536b.jpg";
  const _imports_1 = "/static/weixin.png";
  const _imports_2 = "/static/phone_06.png";
  const _sfc_main$j = {
    __name: "shop",
    setup(__props, { expose: __expose }) {
      __expose();
      const cutturn = vue.ref(0);
      const cutturnCity = vue.ref(1);
      const cityActive = (cutturnId, cutturnCityId) => {
        cutturn.value = cutturnId;
        cutturnCity.value = cutturnCityId;
      };
      const screenHeight = vue.ref(getNaviBar().screen());
      const data = [
        {
          id: 6,
          title: "首尔市",
          child: [
            {
              id: 0,
              title: "全部"
            }
          ]
        },
        {
          id: 0,
          title: "广域市",
          child: [
            {
              id: 0,
              title: "仁川市"
            },
            {
              id: 5,
              title: "釜山市"
            },
            {
              id: 1,
              title: "大邱市"
            },
            {
              id: 2,
              title: "大田市"
            },
            {
              id: 3,
              title: "蔚山市"
            },
            {
              id: 4,
              title: "光州市"
            }
          ]
        },
        {
          id: 1,
          title: "京畿道",
          child: [
            {
              id: 0,
              title: "全部"
            }
          ]
        },
        {
          id: 2,
          title: "江原道",
          child: [
            {
              id: 0,
              title: "全部"
            }
          ]
        },
        {
          id: 3,
          title: "忠清道",
          child: [
            {
              id: 0,
              title: "全部"
            }
          ]
        },
        {
          id: 4,
          title: "全罗道",
          child: [
            {
              id: 0,
              title: "全部"
            }
          ]
        },
        {
          id: 5,
          title: "庆尚道",
          child: [
            {
              id: 0,
              title: "全部"
            }
          ]
        }
      ];
      const callNumber = (number) => {
        uni.showModal({
          title: "商店电话",
          content: "确认直接拨通电话",
          success: function(res) {
            if (res.confirm) {
              if (!number) {
                return false;
              }
              uni.makePhoneCall({
                phoneNumber: number
              });
            } else if (res.cancel)
              ;
          }
        });
      };
      const __returned__ = { cutturn, cutturnCity, cityActive, screenHeight, data, callNumber, Custom: CustomNav, get getNaviBar() {
        return getNaviBar;
      }, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_collapse_item = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-item"), __easycom_0$2);
    const _component_uni_collapse = resolveEasycom(vue.resolveDynamicComponent("uni-collapse"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode($setup["Custom"]),
        vue.createElementVNode(
          "view",
          {
            class: "shopContainer",
            style: vue.normalizeStyle({ height: $setup.screenHeight + "px" })
          },
          [
            vue.createElementVNode("view", { class: "shopLeft" }, [
              vue.createVNode(_component_uni_collapse, { accordion: "" }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($setup.data, (item) => {
                      return vue.createVNode(_component_uni_collapse_item, {
                        "show-arrow": false,
                        border: "false",
                        "show-animation": "",
                        open: item.id == $setup.cutturn
                      }, {
                        title: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            {
                              class: vue.normalizeClass(["custom-title", { "custom-title-active animate__pulse": item.id == $setup.cutturn }])
                            },
                            vue.toDisplayString(item.title),
                            3
                            /* TEXT, CLASS */
                          )
                        ]),
                        default: vue.withCtx(() => [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(item.child, (zone) => {
                              return vue.openBlock(), vue.createElementBlock("view", {
                                onClick: ($event) => $setup.cityActive(item.id, zone.id),
                                class: "shopBt"
                              }, [
                                vue.createElementVNode(
                                  "view",
                                  {
                                    class: vue.normalizeClass(["shopBtText", { "activeShopBt animate__pulse": item.id === $setup.cutturn && zone.id === $setup.cutturnCity }])
                                  },
                                  vue.toDisplayString(zone.title),
                                  3
                                  /* TEXT, CLASS */
                                ),
                                vue.createElementVNode(
                                  "view",
                                  {
                                    class: vue.normalizeClass({ "shopBtShow animate__slideInUp": item.id === $setup.cutturn && zone.id === $setup.cutturnCity })
                                  },
                                  null,
                                  2
                                  /* CLASS */
                                )
                              ], 8, ["onClick"]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["open"]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createElementVNode("scroll-view", {
              class: "shopRight",
              "scroll-y": ""
            }, [
              vue.createElementVNode("view", { class: "shopRightContainer" }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(10, (i) => {
                    return vue.createElementVNode("view", { class: "shopContent" }, [
                      vue.createElementVNode("view", { class: "shopImg" }, [
                        vue.createElementVNode("image", {
                          src: _imports_0$1,
                          mode: "aspectFill"
                        }),
                        vue.createElementVNode("view", { class: "shopTitle" }, "首尔-南九老店")
                      ]),
                      vue.createElementVNode("view", { class: "shopDetil" }, [
                        vue.createElementVNode("view", { class: "explanation" }, [
                          vue.createElementVNode("view", { class: "ShopDate" }, "营业时间："),
                          vue.createTextVNode("10:00-20:00")
                        ]),
                        vue.createElementVNode("text", { class: "address" }, "서울시 구로구 가리봉동123-3 3楼 301号 서울시 구로구 가리봉동123-3 "),
                        vue.createElementVNode("view", { class: "shopfooter" }, [
                          vue.createElementVNode("view", { class: "bottomLeft" }, [
                            vue.createElementVNode("image", { src: _imports_1 }),
                            vue.createElementVNode("view", { class: "weixin" }, "xcl1224")
                          ]),
                          vue.createElementVNode("view", {
                            "hover-class": "hoverPhone",
                            class: "bottomRight",
                            onClick: _cache[0] || (_cache[0] = ($event) => $setup.callNumber("01056786555"))
                          }, [
                            vue.createElementVNode("image", { src: _imports_2 }),
                            vue.createElementVNode("view", { class: "shopPhone" }, "010-5678-6555")
                          ])
                        ])
                      ])
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])
          ],
          4
          /* STYLE */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesShopShop = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-2a6aaf81"], ["__file", "/Users/Coding/uniapp/weixinphone/pages/shop/shop.vue"]]);
  const _sfc_main$i = {
    __name: "widthCard",
    props: {
      color: {
        default: "white"
      },
      marginTop: {
        default: "30rpx"
      },
      padding: {
        default: "0 25rpx"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "cardItme",
        style: vue.normalizeStyle({ padding: $props.padding })
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "cardItme_pd",
            style: vue.normalizeStyle({ backgroundColor: $props.color, marginTop: $props.marginTop })
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-5a2f7450"], ["__file", "/Users/Coding/uniapp/weixinphone/components/cardPage/widthCard.vue"]]);
  const _sfc_main$h = {
    __name: "rightTopImg",
    props: {
      src: {
        type: String,
        default: ""
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props, WidthCard: Card };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["WidthCard"], {
      color: "white",
      "margin-top": 0
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("navigator", { url: "/pages/oldList/oldList" }, [
          vue.createElementVNode("image", {
            src: $props.src,
            class: "topImg",
            mode: "aspectFill"
          }, null, 8, ["src"])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const TopImg = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-9d521e1a"], ["__file", "/Users/Coding/uniapp/weixinphone/components/menu/rightTopImg.vue"]]);
  const _sfc_main$g = {
    __name: "leftTopText",
    props: {
      color: {
        type: String,
        default: "black"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "topMenuText",
        style: vue.normalizeStyle({ color: $props.color })
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const TopTextTitle = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-092b98d9"], ["__file", "/Users/Coding/uniapp/weixinphone/components/menu/leftTopText.vue"]]);
  const _sfc_main$f = {
    __name: "rightTopTitle",
    props: {
      color: {
        type: String,
        default: "rgb(180,180,180)"
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props, Card };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["Card"], {
      pading: "0",
      "margin-top": "5rpx"
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "topTitle" }, [
          vue.createElementVNode(
            "view",
            {
              class: "titleLeft",
              style: vue.normalizeStyle({ backgroundColor: $props.color })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "titleText",
              style: vue.normalizeStyle({ color: $props.color })
            },
            [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "titleRight",
              style: vue.normalizeStyle({ backgroundColor: $props.color })
            },
            null,
            4
            /* STYLE */
          )
        ])
      ]),
      _: 3
      /* FORWARDED */
    });
  }
  const RightTitle = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-a390d8a0"], ["__file", "/Users/Coding/uniapp/weixinphone/components/menu/rightTopTitle.vue"]]);
  const _sfc_main$e = {};
  function _sfc_render$d(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("navigator", { url: "/pages/list/list" }, [
      vue.createElementVNode("view", { class: "itemListContainer" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(7, (i) => {
            return vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "itemImg" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$7,
                  mode: "scaleToFill"
                })
              ]),
              vue.createElementVNode("view", { class: "itemBttom" }, " 苹果15pro Max ")
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const RigthItmeList = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-5f145c39"], ["__file", "/Users/Coding/uniapp/weixinphone/components/menu/rightItemList.vue"]]);
  const _sfc_main$d = {
    __name: "menu",
    setup(__props, { expose: __expose }) {
      __expose();
      const menuData = [
        {
          id: 1,
          menutitle: false,
          title: "",
          color: "",
          child: [
            {
              id: 1,
              title: "推荐"
            }
          ]
        },
        {
          id: 2,
          menutitle: true,
          title: "IPHONE",
          color: "rgb(239,209,12)",
          child: [
            {
              id: 2,
              title: "ProMax"
            },
            {
              id: 3,
              title: "Pro"
            },
            {
              id: 4,
              title: "数字系列"
            },
            {
              id: 5,
              title: "二手"
            }
          ]
        },
        {
          id: 3,
          menutitle: true,
          title: "SAMSUNG",
          color: "#1296db",
          child: [
            {
              id: 6,
              title: "S系列"
            },
            {
              id: 7,
              title: "Fold"
            },
            {
              id: 8,
              title: "A系列"
            },
            {
              id: 9,
              title: "二手"
            }
          ]
        },
        {
          id: 4,
          menutitle: true,
          title: "中国手机",
          color: "rgb(202,27,0)",
          child: [
            {
              id: 10,
              title: "韩版机"
            },
            {
              id: 11,
              title: "国内机"
            },
            {
              id: 12,
              title: "二手"
            }
          ]
        },
        {
          id: 5,
          menutitle: false,
          title: "",
          color: "",
          child: [
            {
              id: 13,
              title: "手机分期"
            },
            {
              id: 14,
              title: "平板电脑"
            },
            {
              id: 15,
              title: "手表"
            },
            {
              id: 16,
              title: "手机配件"
            }
          ]
        }
      ];
      const topHeight = getNaviBar().custumHeiht();
      const swiperHeightr = () => getNaviBar().screen();
      const swiperHeight = vue.ref(swiperHeightr());
      const activeBk = vue.ref(1);
      const activeMenu = vue.ref(1);
      const subMenu = (id) => {
        activeMenu.value = id;
        activeBk.value = -50;
      };
      const subMenuTol = (id, bkId) => {
        activeMenu.value = id;
        activeBk.value = bkId;
      };
      const __returned__ = { menuData, topHeight, swiperHeightr, swiperHeight, activeBk, activeMenu, subMenu, subMenuTol, get getNaviBar() {
        return getNaviBar;
      }, get getOsPlatFrom() {
        return getOsPlatFrom;
      }, CustomNav, TopImg, TopTextTitle, RightTitle, RigthItmeList, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode($setup["CustomNav"], {
          title: _ctx.商品分类
        }, null, 8, ["title"]),
        vue.createElementVNode(
          "view",
          {
            class: "menuContent",
            style: vue.normalizeStyle({ height: $setup.swiperHeight + "px" })
          },
          [
            vue.createElementVNode(
              "scroll-view",
              {
                class: "menuLeft",
                style: vue.normalizeStyle({ height: $setup.swiperHeight + "px" })
              },
              [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.menuData, (item) => {
                    return vue.createElementVNode("view", { class: "menuList" }, [
                      item.menutitle ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "menuItem"
                      }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(item.child, (sub, index) => {
                            return vue.openBlock(), vue.createElementBlock("view", null, [
                              index == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                                key: 0,
                                onClick: ($event) => $setup.subMenuTol(sub.id, item.id),
                                class: vue.normalizeClass(["topText", { "activeTollColor": item.id == $setup.activeBk }])
                              }, [
                                vue.createVNode($setup["TopTextTitle"], {
                                  color: item.id == $setup.activeBk ? item.color : "black"
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode(
                                      vue.toDisplayString(item.title),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["color"]),
                                vue.createElementVNode(
                                  "view",
                                  {
                                    class: vue.normalizeClass(["leftMenutext", { "activeBackgroundColor animate__pulse": sub.id == $setup.activeMenu }])
                                  },
                                  [
                                    vue.createTextVNode(
                                      vue.toDisplayString(sub.title) + " ",
                                      1
                                      /* TEXT */
                                    ),
                                    vue.createElementVNode(
                                      "view",
                                      {
                                        class: vue.normalizeClass({ "bottomShow animate__slideInUp": sub.id == $setup.activeMenu }),
                                        style: vue.normalizeStyle({ backgroundColor: item.color })
                                      },
                                      null,
                                      6
                                      /* CLASS, STYLE */
                                    )
                                  ],
                                  2
                                  /* CLASS */
                                )
                              ], 10, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
                                key: 1,
                                onClick: ($event) => $setup.subMenuTol(sub.id, item.id),
                                class: vue.normalizeClass(["leftMenutext", { "activeTollColor": item.id == $setup.activeBk, "activeBackgroundColor animate__pulse": sub.id == $setup.activeMenu }])
                              }, [
                                vue.createTextVNode(
                                  vue.toDisplayString(sub.title) + " ",
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "view",
                                  {
                                    class: vue.normalizeClass({ "bottomShow animate__slideInUp": sub.id == $setup.activeMenu }),
                                    style: vue.normalizeStyle({ backgroundColor: item.color })
                                  },
                                  null,
                                  6
                                  /* CLASS, STYLE */
                                )
                              ], 10, ["onClick"]))
                            ]);
                          }),
                          256
                          /* UNKEYED_FRAGMENT */
                        ))
                      ])) : (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "menuItem"
                      }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(item.child, (sub) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              onClick: ($event) => $setup.subMenu(sub.id),
                              class: vue.normalizeClass(["leftMenutext", { "activeBackgroundColor animate__pulse": sub.id == $setup.activeMenu }])
                            }, [
                              vue.createTextVNode(
                                vue.toDisplayString(sub.title) + " ",
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "view",
                                {
                                  class: vue.normalizeClass({ "bottomShow animate__slideInUp": sub.id == $setup.activeMenu })
                                },
                                null,
                                2
                                /* CLASS */
                              )
                            ], 10, ["onClick"]);
                          }),
                          256
                          /* UNKEYED_FRAGMENT */
                        ))
                      ]))
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "scroll-view",
              {
                class: "menuRight",
                style: vue.normalizeStyle({ height: $setup.swiperHeight + "px" }),
                "scroll-y": "true"
              },
              [
                vue.createElementVNode("view", { class: "rightMunu" }, [
                  vue.createVNode($setup["TopImg"], { src: "/images/testImg/banner3.jpg" }),
                  vue.createVNode($setup["RightTitle"], null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("苹果手机")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode($setup["RigthItmeList"])
                ])
              ],
              4
              /* STYLE */
            )
          ],
          4
          /* STYLE */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesMenuMenu = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-388b40d3"], ["__file", "/Users/Coding/uniapp/weixinphone/pages/menu/menu.vue"]]);
  const _sfc_main$c = {
    __name: "listTopNeb",
    setup(__props, { expose: __expose }) {
      __expose();
      const activeMenu = vue.ref(0);
      const __returned__ = { activeMenu, CustomNav, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["CustomNav"], {
      back: "true",
      topHeight: 100
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("scroll-view", {
          "scroll-x": "",
          class: "menuList"
        }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(10, (i, index) => {
              return vue.createElementVNode("view", { class: "menubutton" }, [
                vue.createElementVNode("view", { class: "top" }, [
                  vue.createElementVNode("image", {
                    src: _imports_0$7,
                    mode: "scaleToFill"
                  })
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: "bottom",
                    style: vue.normalizeStyle({ color: $setup.activeMenu == index ? "black" : "rgb(180, 180, 180)" })
                  },
                  " title" + vue.toDisplayString(i),
                  5
                  /* TEXT, STYLE */
                )
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const TopNav = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-099d8d24"], ["__file", "/Users/Coding/uniapp/weixinphone/components/list/listTopNeb.vue"]]);
  const _imports_0 = "/static/subMenu/watch.jpg";
  const _sfc_main$b = {
    __name: "listItem",
    setup(__props, { expose: __expose }) {
      __expose();
      const screenHeight = getNaviBar().noTabScreen() - 100;
      const __returned__ = { screenHeight, get getNaviBar() {
        return getNaviBar;
      }, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "scroll-view",
      {
        "scroll-y": "",
        style: vue.normalizeStyle([{ height: $setup.screenHeight + "px" }, { "background-color": "rgb(247, 247, 247)" }])
      },
      [
        vue.createElementVNode("view", { class: "listItem" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(10, (i) => {
              return vue.createElementVNode("view", { class: "itemContent" }, [
                vue.createElementVNode("navigator", {
                  url: "/pages/listDetail/listDetail",
                  "hover-class": "none"
                }, [
                  vue.createElementVNode("view", { class: "itemTop" }, [
                    vue.createElementVNode("image", {
                      src: _imports_0,
                      mode: "scaleToFill"
                    })
                  ]),
                  vue.createElementVNode("view", { class: "itemBottom" }, [
                    vue.createElementVNode("view", { class: "itemBottomTitle" }, [
                      vue.createTextVNode(" 공간을 넘어가더라도 한줄로 표현하게 된다. 공백들을 하나로 합치며, 줄 바꿈은 "),
                      vue.createElementVNode("br"),
                      vue.createTextVNode("요소에서만 일어나게 된다. ")
                    ]),
                    vue.createElementVNode("view", { class: "itemBottomPrice" })
                  ])
                ])
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ],
      4
      /* STYLE */
    );
  }
  const ListItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-7e459c72"], ["__file", "/Users/Coding/uniapp/weixinphone/components/list/listItem.vue"]]);
  const _sfc_main$a = {
    __name: "list",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { TopNav, ListItem };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "listContainer" }, [
      vue.createVNode($setup["TopNav"]),
      vue.createVNode($setup["ListItem"])
    ]);
  }
  const PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-98a9e0b2"], ["__file", "/Users/Coding/uniapp/weixinphone/pages/list/list.vue"]]);
  const _sfc_main$9 = {
    __name: "oldList",
    setup(__props, { expose: __expose }) {
      __expose();
      const screenHeight = getNaviBar().noTabScreen() - 100;
      const data = vue.ref([
        {
          src: "/images/testImg/ss1.jpg"
        },
        {
          src: "/images/testImg/ss2.jpg"
        },
        {
          src: "/images/testImg/ss3.jpg"
        },
        {
          src: "/images/testImg/ss4.jpg"
        },
        {
          src: "/images/testImg/ss5.jpg"
        },
        {
          src: "/images/testImg/ss6.jpg"
        },
        {
          src: "/images/testImg/ss7.jpg"
        },
        {
          src: "/images/testImg/ss8.jpg"
        }
      ]);
      const __returned__ = { screenHeight, data, TopNav, OldList, ref: vue.ref, get getNaviBar() {
        return getNaviBar;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "oldListContainer" }, [
      vue.createVNode($setup["TopNav"]),
      vue.createElementVNode(
        "scroll-view",
        {
          "scroll-y": "",
          class: "ershouList",
          style: vue.normalizeStyle({ height: $setup.screenHeight + "px" })
        },
        [
          vue.createVNode($setup["OldList"], {
            data: $setup.data,
            listColor: "rgb(248, 248, 248)",
            itemColor: "white",
            padding: "35rpx 0"
          }, null, 8, ["data"])
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const PagesOldListOldList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-6d41fd40"], ["__file", "/Users/Coding/uniapp/weixinphone/pages/oldList/oldList.vue"]]);
  const _sfc_main$8 = {};
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("swiper", {
      class: "pageSwiper",
      circular: true
    }, [
      (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList(10, (i) => {
          return vue.createElementVNode("swiper-item", { class: "swiperItem" }, [
            vue.createElementVNode(
              "view",
              null,
              vue.toDisplayString(i),
              1
              /* TEXT */
            )
          ]);
        }),
        64
        /* STABLE_FRAGMENT */
      ))
    ]);
  }
  const SwiperImg = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-64284fb6"], ["__file", "/Users/Coding/uniapp/weixinphone/components/listDetail/swiperImg.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-goods-nav.options.shop": "shop",
    "uni-goods-nav.options.cart": "cart",
    "uni-goods-nav.buttonGroup.addToCart": "add to cart",
    "uni-goods-nav.buttonGroup.buyNow": "buy now"
  };
  const zhHans = {
    "uni-goods-nav.options.shop": "店铺",
    "uni-goods-nav.options.cart": "购物车",
    "uni-goods-nav.buttonGroup.addToCart": "加入购物车",
    "uni-goods-nav.buttonGroup.buyNow": "立即购买"
  };
  const zhHant = {
    "uni-goods-nav.options.shop": "店鋪",
    "uni-goods-nav.options.cart": "購物車",
    "uni-goods-nav.buttonGroup.addToCart": "加入購物車",
    "uni-goods-nav.buttonGroup.buyNow": "立即購買"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages);
  const _sfc_main$7 = {
    name: "UniGoodsNav",
    emits: ["click", "buttonClick"],
    props: {
      options: {
        type: Array,
        default() {
          return [{
            icon: "shop",
            text: t("uni-goods-nav.options.shop")
          }, {
            icon: "cart",
            text: t("uni-goods-nav.options.cart")
          }];
        }
      },
      buttonGroup: {
        type: Array,
        default() {
          return [
            {
              text: t("uni-goods-nav.buttonGroup.addToCart"),
              backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
              color: "#fff"
            },
            {
              text: t("uni-goods-nav.buttonGroup.buyNow"),
              backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
              color: "#fff"
            }
          ];
        }
      },
      fill: {
        type: Boolean,
        default: false
      },
      stat: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(index, item) {
        this.$emit("click", {
          index,
          content: item
        });
      },
      buttonClick(index, item) {
        if (uni.report && this.stat) {
          uni.report(item.text, item.text);
        }
        this.$emit("buttonClick", {
          index,
          content: item
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-goods-nav" }, [
      vue.createCommentVNode(" 底部占位 "),
      vue.createElementVNode("view", { class: "uni-tab__seat" }),
      vue.createElementVNode("view", { class: "uni-tab__cart-box flex" }, [
        vue.createElementVNode("view", { class: "flex uni-tab__cart-sub-left" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.options, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "flex uni-tab__cart-button-left uni-tab__shop-cart",
                onClick: ($event) => $options.onClick(index, item)
              }, [
                vue.createElementVNode("view", { class: "uni-tab__icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    size: "20",
                    color: "#646566"
                  }, null, 8, ["type"]),
                  vue.createCommentVNode(' <image class="image" :src="item.icon" mode="widthFix" /> ')
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "uni-tab__text" },
                  vue.toDisplayString(item.text),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "flex uni-tab__dot-box" }, [
                  item.info ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: vue.normalizeClass([{ "uni-tab__dots": item.info > 9 }, "uni-tab__dot"]),
                      style: vue.normalizeStyle({
                        "backgroundColor": item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
                        color: item.infoColor ? item.infoColor : "#fff"
                      })
                    },
                    vue.toDisplayString(item.info),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-tab__right": $props.fill }, "flex uni-tab__cart-sub-right"])
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.buttonGroup, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  style: vue.normalizeStyle({ background: item.backgroundColor, color: item.color }),
                  class: "flex uni-tab__cart-button-right",
                  onClick: ($event) => $options.buttonClick(index, item)
                }, [
                  vue.createElementVNode(
                    "text",
                    {
                      style: vue.normalizeStyle({ color: item.color }),
                      class: "uni-tab__cart-button-right-text"
                    },
                    vue.toDisplayString(item.text),
                    5
                    /* TEXT, STYLE */
                  )
                ], 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-8226c5e1"], ["__file", "/Users/Coding/uniapp/weixinphone/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$6 = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/Coding/uniapp/weixinphone/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$5 = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:310", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          this.showPoptrans();
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      showPoptrans() {
        this.$nextTick(() => {
          this.showPopup = true;
          this.showTrans = true;
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-4dd3c44b"], ["__file", "/Users/Coding/uniapp/weixinphone/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$4 = {
    __name: "bottom",
    setup(__props, { expose: __expose }) {
      __expose();
      const popupCart = vue.ref(null);
      const popupBuy = vue.ref(null);
      const options = vue.ref([{
        icon: "headphones",
        text: "客服"
      }, {
        icon: "heart",
        text: "收藏"
      }, {
        icon: "cart",
        text: "购物车",
        info: 2
      }]);
      const buttonGroup = [
        {
          text: "加入购物车",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "立即购买",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ];
      const popupClose = (i) => {
        formatAppLog("log", "at components/listDetail/bottom.vue:53", i);
        if (i === 1) {
          popupCart.value.close();
        } else if (i === 2) {
          popupBuy.value.close();
        }
      };
      const optionClick = (e) => {
        options.value[1].icon = "heart-filled";
      };
      const buttonGroupClick = (e) => {
        if (e.index === 0) {
          popupCart.value.open();
        } else {
          popupBuy.value.open();
        }
      };
      const __returned__ = { popupCart, popupBuy, options, buttonGroup, popupClose, optionClick, buttonGroupClick, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_0$1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "goodsCarts" }, [
          vue.createVNode(_component_uni_goods_nav, {
            options: $setup.options,
            fill: true,
            "button-group": $setup.buttonGroup,
            onClick: $setup.optionClick,
            onButtonClick: $setup.buttonGroupClick
          }, null, 8, ["options"])
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popupCart",
            type: "bottom"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popupView" }, [
                vue.createElementVNode("view", {
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.popupClose(1)),
                  class: "popupCloseIcon"
                }, [
                  vue.createElementVNode("view", null, "确认收藏"),
                  vue.createVNode(_component_uni_icons, {
                    type: "closeempty",
                    size: "25"
                  })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        ),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popupBuy",
            type: "bottom"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popupView" }, [
                vue.createElementVNode("view", {
                  onClick: _cache[1] || (_cache[1] = ($event) => $setup.popupClose(2)),
                  class: "popupCloseIcon"
                }, [
                  vue.createElementVNode("view", null, "确认购买"),
                  vue.createVNode(_component_uni_icons, {
                    type: "closeempty",
                    size: "25"
                  })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const Buttom = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-f5b744ea"], ["__file", "/Users/Coding/uniapp/weixinphone/components/listDetail/bottom.vue"]]);
  const _sfc_main$3 = {
    __name: "listDetail",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { CustomNav, SwiperImg, Buttom };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode($setup["CustomNav"], {
        back: "true",
        customFill: false,
        bgColor: "rgb(255,255,255,0)"
      }),
      vue.createVNode($setup["SwiperImg"]),
      vue.createVNode($setup["Buttom"])
    ]);
  }
  const PagesListDetailListDetail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/Coding/uniapp/weixinphone/pages/listDetail/listDetail.vue"]]);
  const _sfc_main$2 = {
    __name: "bottom",
    setup(__props, { expose: __expose }) {
      __expose();
      const popup = vue.ref(null);
      const options = [
        {
          icon: "headphones",
          text: "客服"
        },
        {
          icon: "heart",
          text: "收藏"
        }
      ];
      const buttonGroup = [
        {
          text: "加入购物车",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "立即购买",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ];
      const buttonClick = (e) => {
        if (e.index === 1) {
          popup.value.open();
        }
      };
      const __returned__ = { popup, options, buttonGroup, buttonClick, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_0$1);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "goods-carts" }, [
          vue.createVNode(_component_uni_goods_nav, {
            options: $setup.options,
            fill: true,
            "button-group": $setup.buttonGroup,
            onClick: _ctx.onClick,
            onButtonClick: $setup.buttonClick
          }, null, 8, ["onClick"])
        ]),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popup",
            type: "bottom",
            "border-radius": "10px 10px 0 0"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popupBuy" })
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const OldBottom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-7826bcef"], ["__file", "/Users/Coding/uniapp/weixinphone/components/oldDetail/bottom.vue"]]);
  const _sfc_main$1 = {
    __name: "oldDetail",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { CustomNav, SwiperImg, OldBottom };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode($setup["CustomNav"], {
        back: "true",
        customFill: false,
        bgColor: "rgb(255,255,255,0)"
      }),
      vue.createVNode($setup["SwiperImg"]),
      vue.createVNode($setup["OldBottom"])
    ]);
  }
  const PagesOldDetailOldDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/Coding/uniapp/weixinphone/pages/oldDetail/oldDetail.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/simCard/simCard", PagesSimCardSimCard);
  __definePage("pages/myPage/myPage", PagesMyPageMyPage);
  __definePage("pages/shop/shop", PagesShopShop);
  __definePage("pages/menu/menu", PagesMenuMenu);
  __definePage("pages/list/list", PagesListList);
  __definePage("pages/oldList/oldList", PagesOldListOldList);
  __definePage("pages/listDetail/listDetail", PagesListDetailListDetail);
  __definePage("pages/oldDetail/oldDetail", PagesOldDetailOldDetail);
  const _sfc_main = {
    async onLaunch() {
      const mainStores = useMainStores();
      try {
        await mainStores.lodingMain();
      } catch (error2) {
        formatAppLog("error", "at App.vue:9", "Error in onLaunch:", error2);
      }
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:13", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:16", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/Coding/uniapp/weixinphone/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    const pinia = createPinia();
    app.use(pinia);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
