"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const Card = () => "../cardPage/cardPage.js";
const _sfc_main = {
  components: {
    Card
  },
  props: {
    itemData: {
      type: Object,
      default: { items: [] }
    }
  },
  setup(props, context) {
    const items = props.itemData.items;
    common_vendor.index.__f__("log", "at components/item/itemContentTitle.vue:47", props.itemData);
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
if (!Array) {
  const _component_Card = common_vendor.resolveComponent("Card");
  _component_Card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.itemData.content_title),
    b: common_vendor.t($props.itemData.content_title1),
    c: $props.itemData.top_img,
    d: $props.itemData.img,
    e: common_vendor.f($setup.items, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.storage),
        c: common_vendor.t($setup.formattedPrice(item.price1)),
        d: item.img
      };
    }),
    f: common_vendor.p({
      color: "rgb(247, 247, 247)",
      marginTop: "0"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fecb4b61"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemContentTitle.js.map
