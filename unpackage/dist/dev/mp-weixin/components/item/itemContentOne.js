"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const _sfc_main = {
  comments: {},
  props: {
    itemData: {
      type: Object,
      default: { items: [] }
    }
  },
  setup(props, context) {
    const item = props.itemData.items[0] ? props.itemData.items[0] : { id: 0, title: "", storage: "", price1: "" };
    return {
      item,
      formattedPrice: utill_common.formattedPrice
    };
  },
  methods: {
    itemDetail(id) {
      if (id == 0) {
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/newItemPage?id=${id}`
        // 이동할 페이지 경로
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.itemData.img,
    b: common_vendor.t($setup.item.title),
    c: common_vendor.t($setup.item.storage),
    d: common_vendor.t($setup.formattedPrice($setup.item.price1)),
    e: common_vendor.o(($event) => $options.itemDetail($setup.item.goods_id))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d6e35987"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemContentOne.js.map
