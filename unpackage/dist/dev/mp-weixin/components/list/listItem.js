"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utill_systemData = require("../../utill/systemData.js");
const _sfc_main = {
  __name: "listItem",
  setup(__props) {
    const screenHeight = utill_systemData.getNaviBar().noTabScreen() - 100;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (i, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$2,
        c: screenHeight + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7e459c72"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/list/listItem.js.map
