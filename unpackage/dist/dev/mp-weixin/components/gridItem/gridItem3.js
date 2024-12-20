"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  cardPage();
}
const cardPage = () => "../cardPage/cardPage.js";
const _sfc_main = {
  __name: "gridItem3",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(8, (item, k0, i0) => {
          return {};
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8cb13cd8"]]);
wx.createComponent(Component);
