"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "itemTitle",
  props: {
    left: {
      type: String,
      default: ""
    },
    right: {
      type: String,
      default: ""
    },
    more: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.left
      }, __props.left ? {
        b: common_vendor.t(__props.left)
      } : {}, {
        c: __props.right
      }, __props.right ? {
        d: common_vendor.t(__props.right)
      } : {}, {
        e: __props.more
      }, __props.more ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9898c4a4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemTitle.js.map
