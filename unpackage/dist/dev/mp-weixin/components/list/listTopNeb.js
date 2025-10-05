"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  components: {},
  props: {},
  setup(props, context) {
    common_vendor.ref(0);
  },
  methods: {},
  onLoad() {
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  _component_CustomNav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(10, (i, index, i0) => {
      return {
        a: common_vendor.t(i),
        b: _ctx.activeMenu == index ? "black" : "rgb(180, 180, 180)"
      };
    }),
    b: common_assets._imports_0$5,
    c: common_vendor.p({
      back: "true",
      topHeight: 100
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-099d8d24"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/list/listTopNeb.js.map
