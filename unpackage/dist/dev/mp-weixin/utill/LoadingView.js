"use strict";
const stores_mainData = require("../stores/mainData.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  setup() {
    const mainStores = stores_mainData.useMainStores();
    return { mainStores };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.mainStores.isLoading
  }, $setup.mainStores.isLoading ? {} : $setup.mainStores.isDataAvailable ? {} : {}, {
    b: $setup.mainStores.isDataAvailable
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/utill/LoadingView.js.map
