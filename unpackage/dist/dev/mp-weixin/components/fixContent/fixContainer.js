"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  components: {},
  props: {},
  setup(props, context) {
    const checkClose = common_vendor.ref(true);
    const alertDialog = common_vendor.ref();
    return {
      checkClose,
      alertDialog
    };
  },
  methods: {
    clickCall() {
    },
    clickCompany() {
      common_vendor.index.navigateTo({
        url: `/pages/company/company`
        // 이동할 페이지 경로
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$7,
    b: common_vendor.o((...args) => $options.clickCompany && $options.clickCompany(...args)),
    c: common_assets._imports_1$4,
    d: common_vendor.o(() => {
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5267658e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/fixContent/fixContainer.js.map
