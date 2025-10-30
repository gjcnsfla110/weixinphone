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
const FixContainer = () => "../../components/fixContent/fixContainer.js";
const _sfc_main = {
  components: {
    customNavBar,
    hotItem,
    samsungItem,
    iphoneItem,
    LodingItem,
    FixContainer
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
    const { main, iphone, samsung, subMenu, isDataReady } = common_vendor.storeToRefs(mainStores);
    const menu = common_vendor.ref([]);
    common_vendor.watch(
      () => [main.value, iphone.value, samsung.value],
      ([newMain, newIphone, newSamsung]) => {
        var _a, _b, _c;
        menu.value = [
          {
            title: newMain.length > 0 && ((_a = newMain[0]) == null ? void 0 : _a.name) ? newMain[0].name : "핫 아이템"
          },
          {
            title: newIphone.length > 0 && ((_b = newIphone[0]) == null ? void 0 : _b.name) ? newIphone[0].name : "아이폰"
          },
          {
            title: newSamsung.length > 0 && ((_c = newSamsung[0]) == null ? void 0 : _c.name) ? newSamsung[0].name : "삼성"
          }
        ];
      },
      { immediate: true, deep: true }
    );
    return {
      isDataReady,
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
      if (!this.isDataReady) {
        try {
          await this.mainStores.lodingMain();
        } catch (error) {
          common_vendor.index.__f__("log", "at pages/index/index.vue:123", "Error reloading data:", error);
          this.menu = [
            { title: "핫 아이템" },
            { title: "아이폰" },
            { title: "삼성" }
          ];
        }
      }
    }
  },
  async onLoad() {
    try {
      await this.loadData();
    } catch (error) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:139", "Error in onLoad:", error);
    }
  }
};
if (!Array) {
  const _component_customNavBar = common_vendor.resolveComponent("customNavBar");
  const _component_hotItem = common_vendor.resolveComponent("hotItem");
  const _component_iphoneItem = common_vendor.resolveComponent("iphoneItem");
  const _component_samsungItem = common_vendor.resolveComponent("samsungItem");
  const _component_FixContainer = common_vendor.resolveComponent("FixContainer");
  (_component_customNavBar + _component_hotItem + _component_iphoneItem + _component_samsungItem + _component_FixContainer)();
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
    f: common_vendor.p({
      height: $setup.swiperHeight,
      samsungData: $setup.samsung
    }),
    g: $setup.swiperHeight + "px",
    h: $setup.swiperHeight + "px",
    i: common_vendor.o((...args) => $options.changeSwiper && $options.changeSwiper(...args)),
    j: $setup.tabIndex
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
