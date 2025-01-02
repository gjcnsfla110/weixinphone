"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
if (!Math) {
  (customNavBar + hotItem + iphoneItem + samsungItem)();
}
const customNavBar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const hotItem = () => "../../components/index/hot-item/hot-item.js";
const samsungItem = () => "../../components/index/samsung-item/samsung-item.js";
const iphoneItem = () => "../../components/index/iphone-item/iphone-item.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const hotScrolltolower = () => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:49", "11");
    };
    const iphoneScrolltolower = () => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:53", "22");
    };
    const samsungScrolltolower = () => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:57", "33");
    };
    const swiperHeightf = () => {
      let { screenHeight } = common_vendor.index.getSystemInfoSync();
      return screenHeight - utill_systemData.getNaviBar().fillHeight() - 51;
    };
    const swiperHeight = common_vendor.ref(swiperHeightf());
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
    const tabIndex = common_vendor.ref(0);
    const scrollInto = common_vendor.ref("");
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(munu, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: tabIndex.value == index ? 1 : "",
            c: "menu" + index,
            d: index,
            e: common_vendor.o(($event) => changeMenu(index), index)
          };
        }),
        b: common_vendor.p({
          height: swiperHeight.value
        }),
        c: swiperHeight.value + "px",
        d: common_vendor.o(hotScrolltolower),
        e: common_vendor.p({
          height: swiperHeight.value
        }),
        f: swiperHeight.value + "px",
        g: common_vendor.o(iphoneScrolltolower),
        h: common_vendor.p({
          height: swiperHeight.value
        }),
        i: swiperHeight.value + "px",
        j: common_vendor.o(samsungScrolltolower),
        k: swiperHeight.value + "px",
        l: common_vendor.o(changeSwiper),
        m: tabIndex.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
