"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  WidthCard();
}
const WidthCard = () => "../cardPage/widthCard.js";
const _sfc_main = {
  __name: "rightTopImg",
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.src,
        b: common_vendor.p({
          color: "white",
          ["margin-top"]: 0
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9d521e1a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/menu/rightTopImg.js.map
