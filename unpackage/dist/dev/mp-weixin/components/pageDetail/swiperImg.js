"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  comments: {},
  props: {
    banner: {
      type: Array,
      default: []
    },
    indicatorDots: {
      type: Boolean,
      default: true
    },
    indicatorColor: {
      type: String,
      default: "rgba(255,255,255)"
    },
    indicatorActiveColor: {
      type: String,
      default: "rgba(255,153,51)"
    }
  },
  setup(props, context) {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.banner, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    b: $props.indicatorDots,
    c: $props.indicatorColor,
    d: $props.indicatorActiveColor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bc138464"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/pageDetail/swiperImg.js.map
