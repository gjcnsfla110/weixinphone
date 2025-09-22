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
    const items = props.itemData.items;
    common_vendor.watch(
      () => props.itemData.items,
      (newItems) => {
        items.value = newItems;
      },
      { deep: true, immediate: true }
    );
    return {
      items,
      formattedPrice: utill_common.formattedPrice
    };
  },
  methods: {
    itemDetail(id) {
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
    b: common_vendor.f($setup.items, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.storage),
        c: common_vendor.t($setup.formattedPrice(item.price1)),
        d: common_vendor.o(($event) => $options.itemDetail(item.goods_id))
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cd814b23"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemContentTwo.js.map
