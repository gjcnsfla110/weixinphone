"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const _sfc_main = {
  comments: {},
  props: {
    itemColor: {
      default: "rgb(247,249,255,0.5)"
    },
    listColor: {
      default: "rgb(255,255,255)"
    },
    itemData: {
      type: Object,
      default: { items: [] }
    },
    padding: {
      type: String,
      default: "0 0"
    }
  },
  setup(props, context) {
    const items = common_vendor.ref(props.itemData.items);
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
        url: `/pages/itemPage/oldItemPage?id=${id}`
        // 이동할 페이지 경로
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.items, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.label),
        d: item.label_color,
        e: common_vendor.t(item.storage),
        f: common_vendor.t($setup.formattedPrice(item.price)),
        g: common_vendor.t($setup.formattedPrice(item.price2)),
        h: common_vendor.o(($event) => $options.itemDetail(item.goods_id))
      };
    }),
    b: $props.itemColor,
    c: $props.padding,
    d: $props.listColor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dcdb0659"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemList.js.map
