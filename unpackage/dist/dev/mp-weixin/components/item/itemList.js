"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "itemList",
  props: {
    itemColor: {
      default: "rgb(247,249,255,0.5)"
    },
    listColor: {
      default: "rgb(255,255,255)"
    },
    data: {
      default: []
    },
    padding: {
      type: String,
      default: "0 0"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.data, (item, k0, i0) => {
          return {
            a: item.src
          };
        }),
        b: __props.itemColor,
        c: __props.padding,
        d: __props.listColor
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dcdb0659"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemList.js.map
