"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  Card();
}
const Card = () => "../cardPage/cardPage.js";
const _sfc_main = {
  __name: "itemContentTitle",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_assets._imports_1$1,
        c: common_vendor.f(4, (item, k0, i0) => {
          return {};
        }),
        d: common_assets._imports_2$1,
        e: common_vendor.p({
          color: "rgb(247, 247, 247)",
          marginTop: "0"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fecb4b61"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemContentTitle.js.map
