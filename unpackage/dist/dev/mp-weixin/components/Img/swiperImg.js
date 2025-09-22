"use strict";
const common_vendor = require("../../common/vendor.js");
const Card = () => "../cardPage/cardPage.js";
const _sfc_main = {
  comments: {
    Card
  },
  props: {
    banner: {
      type: Array,
      default: []
    }
  },
  setup(props, context) {
  },
  methods: {}
};
if (!Array) {
  const _component_Card = common_vendor.resolveComponent("Card");
  _component_Card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.banner, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    b: common_vendor.p({
      color: "white",
      ["margin-top"]: "0"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-026b385a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Img/swiperImg.js.map
