"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_mainData = require("../../stores/mainData.js");
require("../../utill/request.js");
const utill_systemData = require("../../utill/systemData.js");
const customNavBar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const hotItem = () => "../../components/index/hot-item/hot-item.js";
const samsungItem = () => "../../components/index/samsung-item/samsung-item.js";
const iphoneItem = () => "../../components/index/iphone-item/iphone-item.js";
const LodingItem = () => "../../components/item/itemList.js";
const _sfc_main = {
  components: {
    customNavBar,
    hotItem,
    samsungItem,
    iphoneItem,
    LodingItem
  },
  setup(props, context) {
    const mainStores = stores_mainData.useMainStores();
    const tabIndex = common_vendor.ref(0);
    const scrollInto = common_vendor.ref("");
    const swiperHeightf = () => {
      let { screenHeight } = common_vendor.index.getSystemInfoSync();
      return screenHeight - utill_systemData.getNaviBar().fillHeight() - 51;
    };
    const swiperHeight = common_vendor.ref(swiperHeightf());
    const { main, iphone, samsung, subMenu } = mainStores;
    const menu = common_vendor.ref([]);
    return {
      mainStores,
      tabIndex,
      scrollInto,
      swiperHeight,
      swiperHeightf,
      menu,
      main,
      iphone,
      subMenu,
      samsung
    };
  },
  methods: {
    //苹果 -》 下拉 加载
    iphoneScrolltolower() {
      common_vendor.index.__f__("log", "at pages/index/index.vue:86", "22");
    },
    //三星 -》 下拉 加载
    samsungScrolltolower() {
      common_vendor.index.__f__("log", "at pages/index/index.vue:90", "33");
    },
    changeSwiper(e) {
      this.changeMenu(e.detail.current);
    },
    changeMenu(i) {
      if (i == this.tabIndex) {
        return;
      }
      this.scrollInto = "tab" + i;
      this.tabIndex = i;
    },
    // pinia 데이터를 받는 설정 부분
    async loadData() {
      if (!this.mainStores.isDataReady) {
        try {
          await this.mainStores.lodingMain();
        } catch (error) {
          common_vendor.index.__f__("error", "at pages/index/index.vue:108", "Error reloading data:", error);
        }
      }
    }
  },
  async onLoad() {
    try {
      await this.loadData();
      this.menu = [
        {
          title: this.main[0].name
        },
        {
          title: this.iphone[0].name
        },
        {
          title: this.samsung[0].name
        }
      ];
    } catch (error) {
      common_vendor.index.__f__("error", "at pages/index/index.vue:129", "Error in onLoad:", error);
    }
  }
};
if (!Array) {
  const _component_customNavBar = common_vendor.resolveComponent("customNavBar");
  const _component_hotItem = common_vendor.resolveComponent("hotItem");
  const _component_iphoneItem = common_vendor.resolveComponent("iphoneItem");
  const _component_samsungItem = common_vendor.resolveComponent("samsungItem");
  (_component_customNavBar + _component_hotItem + _component_iphoneItem + _component_samsungItem)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.menu, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: $setup.tabIndex == index ? 1 : "",
        c: "menu" + index,
        d: index,
        e: common_vendor.o(($event) => $options.changeMenu(index), index)
      };
    }),
    b: common_vendor.p({
      height: $setup.swiperHeight,
      mainData: $setup.main,
      subMenu: $setup.subMenu
    }),
    c: $setup.swiperHeight + "px",
    d: common_vendor.p({
      height: $setup.swiperHeight,
      iphoneData: $setup.iphone
    }),
    e: $setup.swiperHeight + "px",
    f: common_vendor.o((...args) => $options.iphoneScrolltolower && $options.iphoneScrolltolower(...args)),
    g: common_vendor.p({
      height: $setup.swiperHeight,
      samsungData: $setup.samsung
    }),
    h: $setup.swiperHeight + "px",
    i: common_vendor.o((...args) => $options.samsungScrolltolower && $options.samsungScrolltolower(...args)),
    j: $setup.swiperHeight + "px",
    k: common_vendor.o((...args) => $options.changeSwiper && $options.changeSwiper(...args)),
    l: $setup.tabIndex
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
