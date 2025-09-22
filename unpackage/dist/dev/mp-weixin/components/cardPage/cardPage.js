"use strict";
const _sfc_main = {
  __name: "cardPage",
  props: {
    color: {
      default: "#F6FCFF"
    },
    marginTop: {
      default: "0"
    },
    pading: {
      default: "0 25rpx"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.color,
        b: __props.marginTop,
        c: __props.pading
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/cardPage/cardPage.js.map
