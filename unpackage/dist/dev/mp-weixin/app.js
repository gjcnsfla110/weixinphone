"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_mainData = require("./stores/mainData.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/simCard/simCard.js";
  "./pages/shop/shop.js";
  "./pages/menu/menu.js";
  "./pages/list/list.js";
  "./pages/oldList/oldList.js";
  "./pages/itemPage/oldItemPage.js";
  "./pages/itemPage/newItemPage.js";
  "./pages/agreementPage/index.js";
  "./pages/itemPage/agreementPhonePage.js";
  "./pages/itemPage/agreementInternetPage.js";
  "./pages/itemPage/usimItemPage.js";
  "./pages/company/company.js";
}
const _sfc_main = {
  async onLaunch() {
    const mainStores = stores_mainData.useMainStores();
    try {
      await mainStores.fetchFromServer();
    } catch (error) {
      common_vendor.index.__f__("error", "at App.vue:10", "Error in onLaunch:", error);
    }
  },
  async onShow() {
    const mainStores = stores_mainData.useMainStores();
    if (!mainStores.isDataReady) {
      try {
        await mainStores.lodingMain();
      } catch (error) {
        common_vendor.index.__f__("error", "at App.vue:19", "Error in onShow:", error);
      }
    }
    if (this.cacheClearTimer) {
      clearTimeout(this.cacheClearTimer);
      this.cacheClearTimer = null;
    }
  },
  onHide: function() {
    const mainStores = stores_mainData.useMainStores();
    this.cacheClearTimer = setTimeout(() => {
      mainStores.clearCache();
      common_vendor.index.removeStorageSync("topSubMenu");
      common_vendor.index.removeStorageSync("agreementCategory");
      common_vendor.index.removeStorageSync("agreementCategory");
    }, 6 * 60 * 60 * 1e3);
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  const pinia = common_vendor.createPinia();
  app.use(pinia);
  app.use(common_vendor.uViewPro);
  common_vendor.index.$u.config.unit = "rpx";
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
