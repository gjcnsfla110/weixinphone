"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  CardPage();
}
const CardPage = () => "../cardPage/cardPage.js";
const _sfc_main = {
  __name: "gridItem2",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: common_vendor.f(3, (it, k1, i1) => {
              return {};
            })
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b61b9705"]]);
wx.createComponent(Component);
