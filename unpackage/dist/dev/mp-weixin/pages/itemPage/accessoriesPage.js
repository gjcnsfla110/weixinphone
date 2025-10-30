"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const Custom = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    Custom
  },
  props: {},
  setup(props, context) {
    const item = common_vendor.ref([]);
    return {
      item,
      formattedPrice: utill_common.formattedPrice
    };
  },
  methods: {},
  async onLoad(op) {
    const storegeItem = common_vendor.index.getStorageSync("accessoriesItem");
    if (storegeItem) {
      this.item = storegeItem.accessories;
    } else {
      this.item = await servicePost("app/accessories/item/detail", { id: op.id });
    }
  }
};
if (!Array) {
  const _component_Custom = common_vendor.resolveComponent("Custom");
  _component_Custom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      back: true,
      title: "商品详细"
    }),
    b: $setup.item.img
  }, {}, {
    c: common_vendor.t($setup.item.title),
    d: common_vendor.t($setup.item.material),
    e: common_vendor.t($setup.item.item_number),
    f: common_vendor.t($setup.item.accessories_detail),
    g: common_vendor.f(JSON.parse($setup.item.banner), (img, k0, i0) => {
      return {
        a: img
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4b232d86"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/accessoriesPage.js.map
