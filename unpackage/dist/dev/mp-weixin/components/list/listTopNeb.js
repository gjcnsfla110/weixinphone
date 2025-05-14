"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  CustomNav();
}
const CustomNav = () => "../custom-nav-bar/customNav.js";
const _sfc_main = {
  __name: "listTopNeb",
  setup(__props) {
    const activeMenu = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (i, index, i0) => {
          return {
            a: common_vendor.t(i),
            b: activeMenu.value == index ? "black" : "rgb(180, 180, 180)"
          };
        }),
        b: common_assets._imports_0$3,
        c: common_vendor.p({
          back: "true",
          topHeight: 100
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-099d8d24"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/list/listTopNeb.js.map
