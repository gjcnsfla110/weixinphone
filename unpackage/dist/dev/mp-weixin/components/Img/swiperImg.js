"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  Card();
}
const Card = () => "../cardPage/cardPage.js";
const _sfc_main = {
  __name: "swiperImg",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$7,
        c: common_vendor.p({
          color: "white",
          ["margin-top"]: "0"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-026b385a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Img/swiperImg.js.map
