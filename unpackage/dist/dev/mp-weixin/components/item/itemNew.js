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
    const list1 = common_vendor.ref([]);
    const list2 = common_vendor.ref([]);
    list1.value = items.filter((item) => item.listType == 0);
    list2.value = items.filter((item) => item.listType == 1);
    return {
      list1,
      list2
    };
  },
  methods: {
    changePrice(price) {
      return utill_common.formattedPrice(price);
    },
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
    a: common_vendor.f($setup.list1, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.storage),
        c: common_vendor.t($options.changePrice(item.price1)),
        d: item.img,
        e: common_vendor.o(($event) => $options.itemDetail(item.id))
      };
    }),
    b: common_vendor.f($setup.list2, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.storage),
        c: common_vendor.t($options.changePrice(item.price1)),
        d: item.img,
        e: common_vendor.o(($event) => $options.itemDetail(item.id))
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemNew.js.map
