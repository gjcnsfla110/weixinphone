"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_request = require("../../utill/request.js");
const utill_common = require("../../utill/common.js");
const common_assets = require("../../common/assets.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    CustomNav
  },
  props: {},
  setup(props, context) {
    const item = common_vendor.ref({});
    return {
      item,
      formattedPrice: utill_common.formattedPrice
    };
  },
  methods: {},
  async onLoad(op) {
    const storegeItem = common_vendor.index.getStorageSync("usimItem");
    if (storegeItem) {
      this.item = storegeItem.usim;
    } else {
      this.item = await utill_request.servicePost("app/usim/detail", { id: op.id });
    }
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  _component_CustomNav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      back: true
    }),
    b: common_assets._imports_0,
    c: common_vendor.t($setup.item.mobile_name),
    d: common_vendor.t($setup.item.title),
    e: common_assets._imports_1$3,
    f: common_vendor.t($setup.item.tell_time),
    g: common_assets._imports_2$5,
    h: common_vendor.t($setup.item.data),
    i: common_assets._imports_3$3,
    j: common_vendor.t($setup.item.mns),
    k: common_assets._imports_4$2,
    l: common_vendor.t($setup.item.mobile_type),
    m: common_assets._imports_5$1,
    n: common_vendor.t($setup.item.mobile_name),
    o: common_assets._imports_6,
    p: common_vendor.t($setup.item.detail),
    q: common_assets._imports_1$3,
    r: common_vendor.t($setup.item.tell_time),
    s: common_assets._imports_3$3,
    t: common_vendor.t($setup.item.mns),
    v: common_assets._imports_2$5,
    w: common_vendor.t($setup.item.data),
    x: common_assets._imports_5$1,
    y: common_vendor.t($setup.item.mobile_name),
    z: common_vendor.t($setup.item.agreement_time),
    A: common_vendor.t($setup.item.mobile_name),
    B: common_vendor.t($setup.item.tell_time),
    C: common_vendor.t($setup.item.data),
    D: common_vendor.t($setup.item.mns),
    E: common_vendor.t($setup.item.other_service),
    F: common_vendor.t($setup.item.esim),
    G: common_vendor.t($setup.item.phone_type),
    H: common_vendor.t($setup.item.peopleNeed),
    I: common_assets._imports_7$1,
    J: common_vendor.t($setup.formattedPrice($setup.item.price))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9900e39c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/usimItemPage.js.map
