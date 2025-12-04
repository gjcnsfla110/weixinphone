"use strict";
const common_vendor = require("../../common/vendor.js");
const Custom = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    Custom
  },
  props: {},
  setup(props, context) {
    const item = common_vendor.ref({});
    return [
      item
    ];
  },
  methods: {},
  async onLoad(op) {
    const storegeItem = common_vendor.index.getStorageSync("shopItem");
    if (storegeItem) {
      this.item = storegeItem.shopItem;
    } else {
      this.item = await servicePost("app/shop/item/detail", { id: op.id });
      this.item.forEach((item) => {
        item.shopImg = JSON.parse(item.shopImg);
      });
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
      title: "商店"
    }),
    b: common_vendor.t(_ctx.item.name),
    c: common_vendor.f(_ctx.item.shopImg, (img, k0, i0) => {
      return {
        a: img
      };
    }),
    d: common_vendor.t(_ctx.item.address),
    e: common_vendor.t(_ctx.item.hours),
    f: common_vendor.t(_ctx.item.phone),
    g: _ctx.item.phone1
  }, _ctx.item.phone1 ? {
    h: common_vendor.t(_ctx.item.phone1)
  } : {}, {
    i: common_vendor.t(_ctx.item.shop_introduction),
    j: _ctx.item.directionsImg
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-253624da"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/shopPage.js.map
