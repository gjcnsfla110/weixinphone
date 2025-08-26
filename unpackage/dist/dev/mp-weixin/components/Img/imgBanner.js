"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "imgBanner",
  props: {
    src: {
      default: "https://byline.network/wp-content/uploads/2024/09/iphone-16-event-94.jpg"
    },
    height: {
      default: "330rpx"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.src,
        b: __props.height
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0d954d97"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Img/imgBanner.js.map
