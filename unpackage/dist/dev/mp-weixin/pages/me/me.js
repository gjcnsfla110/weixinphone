"use strict";
const common_vendor = require("../../common/vendor.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    CustomNav
  },
  props: {},
  setup(props, context) {
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
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/me/me.js.map
