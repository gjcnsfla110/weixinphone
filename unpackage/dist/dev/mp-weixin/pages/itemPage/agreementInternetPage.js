"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const common_assets = require("../../common/assets.js");
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
  async onLoad() {
    const storegeItem = common_vendor.index.getStorageSync("agreementItem");
    if (storegeItem) {
      this.item = storegeItem.agreement;
    } else {
      this.item = await servicePost("app/agreement/item/detail", { id: op.id });
    }
  }
};
if (!Array) {
  const _component_Custom = common_vendor.resolveComponent("Custom");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_component_Custom + _easycom_uni_collapse_item2 + _easycom_uni_collapse2 + _component_uni_section)();
}
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      back: true
    }),
    b: $setup.item.img
  }, {}, {
    c: common_vendor.t($setup.item.title),
    d: common_assets._imports_0$4,
    e: common_assets._imports_0$4,
    f: common_assets._imports_0$4,
    g: common_assets._imports_0$4,
    h: common_assets._imports_0$4,
    i: common_vendor.t($setup.item.detail),
    j: common_assets._imports_1$2,
    k: common_assets._imports_2$4,
    l: common_assets._imports_3$2,
    m: common_vendor.p({
      title: "合约期限"
    }),
    n: common_vendor.p({
      title: "无线网络介绍"
    }),
    o: common_vendor.p({
      title: "安装费用"
    }),
    p: common_vendor.p({
      accordion: true
    }),
    q: common_vendor.p({
      type: "line",
      ["show-animation"]: true
    }),
    r: common_vendor.t($setup.formattedPrice($setup.item.installationPrice)),
    s: common_vendor.t($setup.formattedPrice($setup.item.price))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b7bbae58"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/agreementInternetPage.js.map
