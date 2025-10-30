"use strict";
const common_vendor = require("../../common/vendor.js");
const CardPage = () => "../cardPage/cardPage.js";
const _sfc_main = {
  components: {
    CardPage
  },
  props: {
    itemData: {
      type: Object,
      default: { items: [] }
    },
    indicatorDots: {
      type: Boolean,
      default: true
    },
    indicatorColor: {
      type: String,
      default: "rgba(255,255,255)"
    },
    indicatorActiveColor: {
      type: String,
      default: "rgba(255,153,51)"
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
    itemDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/oldItemPage?id=${id}`
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
        a: item.img,
        b: common_vendor.o(($event) => $options.itemDetail(item.goods_id))
      };
    }),
    b: $props.indicatorDots,
    c: $props.indicatorColor,
    d: $props.indicatorActiveColor,
    e: common_vendor.p({
      color: "white"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-026b385a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Img/swiperImg.js.map
