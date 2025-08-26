"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "oneImg",
  props: {
    src: {
      default: ""
    },
    heigth: {
      default: "200rpx"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.src,
        b: __props.heigth
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d174ab6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Img/oneImg.js.map
