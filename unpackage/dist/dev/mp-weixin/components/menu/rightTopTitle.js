"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Card();
}
const Card = () => "../cardPage/widthCard.js";
const _sfc_main = {
  __name: "rightTopTitle",
  props: {
    color: {
      type: String,
      default: "rgb(180,180,180)"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.color,
        b: __props.color,
        c: __props.color,
        d: common_vendor.p({
          pading: "0",
          ["margin-top"]: "5rpx"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a390d8a0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/menu/rightTopTitle.js.map
