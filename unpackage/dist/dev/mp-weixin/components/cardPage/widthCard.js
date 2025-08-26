"use strict";
const _sfc_main = {
  __name: "widthCard",
  props: {
    color: {
      default: "white"
    },
    marginTop: {
      default: "30rpx"
    },
    padding: {
      default: "0 25rpx"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.color,
        b: __props.marginTop,
        c: __props.padding
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/cardPage/widthCard.js.map
