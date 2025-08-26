"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  cardPage();
}
const cardPage = () => "../cardPage/cardPage.js";
const _sfc_main = {
  __name: "itemContentList",
  props: {
    color: {
      default: "#F6FCFF"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(4, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$3,
        c: common_vendor.p({
          color: __props.color
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-59519203"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemContentList.js.map
