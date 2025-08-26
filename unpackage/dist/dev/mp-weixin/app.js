"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_mainData = require("./stores/mainData.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/simCard/simCard.js";
  "./pages/myPage/myPage.js";
  "./pages/shop/shop.js";
  "./pages/menu/menu.js";
  "./pages/list/list.js";
  "./pages/oldList/oldList.js";
  "./pages/listDetail/listDetail.js";
  "./pages/oldDetail/oldDetail.js";
}
const _sfc_main = {
  async onLaunch() {
    const mainStores = stores_mainData.useMainStores();
    try {
      await mainStores.lodingMain();
    } catch (error) {
      common_vendor.index.__f__("error", "at App.vue:9", "Error in onLaunch:", error);
    }
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:13", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:16", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  const pinia = common_vendor.createPinia();
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
