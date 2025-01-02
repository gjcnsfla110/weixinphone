"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "leftTopText",
  props: {
    color: {
      type: String,
      default: "black"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.color
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-092b98d9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/menu/leftTopText.js.map
