"use strict";
const common_vendor = require("../common/vendor.js");
const utill_request = require("../utill/request.js");
const utill_common = require("../utill/common.js");
const useMainStores = common_vendor.defineStore("mainData", {
  state: () => ({
    main: [],
    iphone: [],
    samsung: [],
    subMenu: [],
    goodsSpecs: [],
    categoryMenu: [],
    categorySubmenu: [],
    isLoading: false,
    isDataReady: false
  }),
  getters: {
    isDataAvailable: (state) => state.isDataReady && !state.isLoading
  },
  actions: {
    // onLaunch에서 호출: 서버에서 데이터 가져와 스토어와 스토리지 업데이트
    async fetchFromServer() {
      this.isLoading = true;
      try {
        const res = await utill_request.serviceGet("app/index/main");
        const newData = {
          subMenu: res.subMenus || [],
          goodsSpecs: res.goodsSpecs || [],
          categoryMenu: res.categoryMenu || [],
          categorySubmenu: res.categorySubmenu || [],
          main: [],
          iphone: [],
          samsung: []
        };
        let pages = res.pages || [];
        let components = res.components || [];
        let componentItems = res.componentItems || [];
        let componentBanners = res.componentBanners || [];
        pages = utill_common.resultPage(pages, components, componentItems, componentBanners);
        newData.main = pages.filter((item) => item.page_key === "main") || [];
        newData.iphone = pages.filter((item) => item.page_key === "iphone") || [];
        newData.samsung = pages.filter((item) => item.page_key === "samsung") || [];
        this.main = newData.main;
        this.iphone = newData.iphone;
        this.samsung = newData.samsung;
        this.subMenu = newData.subMenu;
        this.goodsSpecs = newData.goodsSpecs;
        this.categoryMenu = utill_common.listTrees(newData.categoryMenu, "category_id");
        this.categorySubmenu = newData.categorySubmenu;
        this.isDataReady = true;
        const now = Date.now();
        const expiry = now + 24 * 60 * 60 * 1e3;
        common_vendor.index.setStorageSync("mainData", {
          main: this.main,
          iphone: this.iphone,
          samsung: this.samsung,
          subMenu: this.subMenu,
          goodsSpecs: this.goodsSpecs,
          categoryMenu: this.categoryMenu,
          categorySubmenu: this.categorySubmenu,
          expiry
        });
      } catch (error) {
        common_vendor.index.__f__("error", "at stores/mainData.js:71", "Error fetching server data:", error);
        const cachedData = common_vendor.index.getStorageSync("mainData");
        if (cachedData && cachedData.expiry > Date.now()) {
          this.main = cachedData.main || [];
          this.iphone = cachedData.iphone || [];
          this.samsung = cachedData.samsung || [];
          this.subMenu = cachedData.subMenu || [];
          this.categoryMenu = cachedData.categoryMenu || [];
          this.categorySubmenu = cachedData.categorySubmenu || [];
          this.isDataReady = true;
        }
      } finally {
        this.isLoading = false;
      }
    },
    async lodingMain() {
      if (this.isDataReady)
        return;
      this.isLoading = true;
      try {
        const cachedData = common_vendor.index.getStorageSync("mainData");
        const now = Date.now();
        if (cachedData && cachedData.expiry > now) {
          this.main = cachedData.main || [];
          this.iphone = cachedData.iphone || [];
          this.samsung = cachedData.samsung || [];
          this.subMenu = cachedData.subMenu || [];
          this.goodsSpecs = cachedData.goodsSpecs || [];
          this.categoryMenu = cachedData.categoryMenu || [];
          this.categorySubmenu = cachedData.categorySubmenu || [];
          this.isDataReady = true;
          this.isLoading = false;
          return;
        }
        const res = await utill_request.serviceGet("app/index/main");
        const newData = {
          subMenu: res.subMenus || [],
          categoryMenu: res.categoryMenu || [],
          categorySubmenu: res.categorySubmenu || [],
          main: [],
          iphone: [],
          samsung: [],
          goodsSpecs: res.goodsSpecs || []
        };
        let pages = res.pages || [];
        let components = res.components || [];
        let componentItems = res.componentItems || [];
        let componentBanners = res.componentBanners || [];
        pages = utill_common.resultPage(pages, components, componentItems, componentBanners);
        newData.main = pages.filter((item) => item.page_key === "main") || [];
        newData.iphone = pages.filter((item) => item.page_key === "iphone") || [];
        newData.samsung = pages.filter((item) => item.page_key === "samsung") || [];
        this.main = newData.main;
        this.iphone = newData.iphone;
        this.samsung = newData.samsung;
        this.subMenu = newData.subMenu;
        this.goodsSpecs = newData.goodsSpecs;
        this.categoryMenu = utill_common.listTrees(newData.categoryMenu, "category_id");
        this.categorySubmenu = newData.categorySubmenu;
        this.isDataReady = true;
        const expiry = now + 24 * 60 * 60 * 1e3;
        common_vendor.index.setStorageSync("mainData", {
          main: this.main,
          iphone: this.iphone,
          samsung: this.samsung,
          subMenu: this.subMenu,
          goodsSpecs: this.goodsSpecs,
          categoryMenu: this.categoryMenu,
          categorySubmenu: this.categorySubmenu,
          expiry
        });
      } catch (error) {
        common_vendor.index.__f__("error", "at stores/mainData.js:154", "Error loading main data:", error);
      } finally {
        this.isLoading = false;
      }
    },
    // 캐시 삭제 메서드
    clearCache() {
      common_vendor.index.removeStorageSync("mainData");
      this.main = [];
      this.iphone = [];
      this.samsung = [];
      this.subMenu = [];
      this.goodsSpecs = [];
      this.categoryMenu = [];
      this.categorySubmenu = [];
      this.isDataReady = false;
    }
  }
});
exports.useMainStores = useMainStores;
//# sourceMappingURL=../../.sourcemap/mp-weixin/stores/mainData.js.map
