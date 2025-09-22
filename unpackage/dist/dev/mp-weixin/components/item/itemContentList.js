"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const cardPage = () => "../cardPage/cardPage.js";
const _sfc_main = {
  comments: {
    cardPage
  },
  props: {
    color: {
      default: "#F6FCFF"
    },
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
      formattedPrice: utill_common.formattedPrice,
      items
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
  const _easycom_cardPage2 = common_vendor.resolveComponent("cardPage");
  _easycom_cardPage2();
}
const _easycom_cardPage = () => "../cardPage/cardPage.js";
if (!Math) {
  _easycom_cardPage();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.items, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.storage),
        d: common_vendor.t($setup.formattedPrice(item.price1)),
        e: common_vendor.o(($event) => $options.itemDetail(item.goods_id))
      };
    }),
    b: common_vendor.p({
      color: $props.color
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-59519203"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemContentList.js.map
