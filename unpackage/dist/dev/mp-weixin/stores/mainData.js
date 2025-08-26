"use strict";
const common_vendor = require("../common/vendor.js");
const utill_request = require("../utill/request.js");
const utill_common = require("../utill/common.js");
const useMainStores = common_vendor.defineStore("mainData", {
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
        const res = await utill_request.serviceGet("app/index/main");
        this.subMenu = res.subMenus;
        let pages = res.pages;
        let components = res.components;
        let componentItems = res.componentItems;
        let componentBanners = res.componentBanners;
        pages = utill_common.resultPage(pages, components, componentItems, componentBanners);
        this.main = pages.filter((item) => item.page_key == "main");
        this.iphone = pages.filter((item) => item.page_key == "iphone");
        this.samsung = pages.filter((item) => item.page_key == "samsung");
        this.isDataReady = true;
      } catch (error) {
        common_vendor.index.__f__("error", "at stores/mainData.js:33", "Error loading main data:", error);
      } finally {
        this.isLoading = false;
      }
    }
  }
});
exports.useMainStores = useMainStores;
//# sourceMappingURL=../../.sourcemap/mp-weixin/stores/mainData.js.map
