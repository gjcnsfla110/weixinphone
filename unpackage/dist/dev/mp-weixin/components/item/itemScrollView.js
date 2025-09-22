"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const CardPage = () => "../cardPage/cardPage.js";
const itemTitle = () => "./itemTitle.js";
const _sfc_main = {
  components: {
    CardPage,
    itemTitle
  },
  props: {
    itemData: {
      type: Object,
      default: { items: [] }
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
      items
    };
  },
  methods: {
    changePrice(price) {
      return utill_common.formattedPrice(price);
    },
    itemDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/newItemPage?id=${id}`
        // 이동할 페이지 경로
      });
    }
  }
};
if (!Array) {
  const _component_CardPage = common_vendor.resolveComponent("CardPage");
  _component_CardPage();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.items, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t($options.changePrice(item.price1)),
        c: item.img,
        d: common_vendor.t(item.label),
        e: item.label_color,
        f: common_vendor.o(($event) => $options.itemDetail(item.goods_id))
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e6f32a5d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemScrollView.js.map
