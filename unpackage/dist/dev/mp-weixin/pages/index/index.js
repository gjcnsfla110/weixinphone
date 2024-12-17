"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
if (!Math) {
  (customNavBar + hotItem + iphoneItem + samsungItem)();
}
const customNavBar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const hotItem = () => "../../components/indexSwiper/hot-item/hot-item.js";
const samsungItem = () => "../../components/indexSwiper/samsung-item/samsung-item.js";
const iphoneItem = () => "../../components/indexSwiper/iphone-item/iphone-item.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
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
        d: common_vendor.p({
          height: swiperHeight.value
        }),
        e: swiperHeight.value + "px",
        f: common_vendor.p({
          height: swiperHeight.value
        }),
        g: swiperHeight.value + "px",
        h: swiperHeight.value + "px",
        i: common_vendor.o(changeSwiper),
        j: tabIndex.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
