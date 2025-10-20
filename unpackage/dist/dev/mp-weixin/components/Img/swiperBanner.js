"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  props: {
    componentData: {
      type: Object,
      default: {
        items: []
      }
    }
  },
  emits: [],
  setup(props, context) {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.componentData.items, (item, k0, i0) => {
      return {
        a: item.image
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-31fbf336"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Img/swiperBanner.js.map
