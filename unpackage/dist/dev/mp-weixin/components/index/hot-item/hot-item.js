"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_mainData = require("../../../stores/mainData.js");
if (!Math) {
  (swiperBanner + itemNew + HotPeijian + HotNew + LoadingView)();
}
const LoadingView = () => "../../../utill/LoadingView.js";
const itemNew = () => "../../item/itemNew.js";
const HotPeijian = () => "../../item/itemScrollView.js";
const HotNew = () => "../../item/itemContentList.js";
const swiperBanner = () => "../../Img/swiperBanner.js";
const _sfc_main = {
  __name: "hot-item",
  setup(__props) {
    const mainStores = stores_mainData.useMainStores();
    const subMenu = mainStores.subMenu;
    common_vendor.index.__f__("log", "at components/index/hot-item/hot-item.vue:37", mainStores.subMenu);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(subMenu), (item, k0, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.name)
          };
        }),
        b: common_vendor.p({
          margin: 5,
          left: "新品发布",
          right: "热销商品"
        }),
        c: common_vendor.p({
          left: "手机配件",
          right: "爆款商品"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b080f363"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/index/hot-item/hot-item.js.map
