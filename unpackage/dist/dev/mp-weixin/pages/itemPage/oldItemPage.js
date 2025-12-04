"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_common = require("../../utill/common.js");
const utill_request = require("../../utill/request.js");
const common_assets = require("../../common/assets.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const SwiperImg = () => "../../components/pageDetail/swiperImg.js";
const OtherGoods = () => "../../components/pageDetail/otherGoods.js";
const _sfc_main = {
  components: {
    CustomNav,
    SwiperImg,
    OtherGoods
  },
  props: {},
  setup(props, context) {
    const item = common_vendor.ref({});
    const list = common_vendor.ref([
      {
        name: "详细信息"
      },
      {
        name: "购买礼包"
      }
    ]);
    const current = common_vendor.ref(0);
    return {
      item,
      formattedPrice: utill_common.formattedPrice,
      current,
      list
    };
  },
  methods: {
    servicePopupToggle(type) {
      this.$refs.servicePopup.open(type);
    },
    itemContentClick(i) {
      this.current = i;
    }
  },
  async onLoad(op) {
    try {
      const res = await utill_request.servicePost("app/goods/item", { id: op.id });
      this.item = res;
      this.item.banner = this.item.banner ? JSON.parse(this.item.banner) : [];
      this.item.service = this.item.service ? JSON.parse(this.item.service) : [];
    } catch (error) {
      common_vendor.index.__f__("error", "at pages/itemPage/oldItemPage.vue:119", "onLoad 에러:", error);
    }
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _component_SwiperImg = common_vendor.resolveComponent("SwiperImg");
  const _easycom_u_subsection2 = common_vendor.resolveComponent("u-subsection");
  const _component_OtherGoods = common_vendor.resolveComponent("OtherGoods");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_CustomNav + _component_SwiperImg + _easycom_u_subsection2 + _component_OtherGoods + _easycom_uni_popup2)();
}
const _easycom_u_subsection = () => "../../node-modules/uview-pro/components/u-subsection/u-subsection.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_u_subsection + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      back: "true"
    }),
    b: common_vendor.p({
      banner: $setup.item.banner
    }),
    c: common_vendor.t($setup.item.item_number),
    d: common_vendor.t($setup.formattedPrice($setup.item.price)),
    e: common_vendor.t($setup.formattedPrice($setup.item.price2)),
    f: common_vendor.t($setup.item.title1),
    g: common_vendor.t($setup.item.isShop),
    h: common_vendor.o(($event) => $options.servicePopupToggle("bottom")),
    i: common_assets._imports_0$2,
    j: common_assets._imports_7,
    k: common_vendor.o($options.itemContentClick),
    l: common_vendor.p({
      list: $setup.list,
      current: 0
    }),
    m: $setup.current == 0
  }, $setup.current == 0 ? {
    n: common_vendor.t($setup.item.phone_detail)
  } : {}, {
    o: $setup.current == 1
  }, $setup.current == 1 ? {} : {}, {
    p: common_assets._imports_0$2,
    q: common_assets._imports_7,
    r: common_vendor.sr("servicePopup", "9572ed5d-4")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9572ed5d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/oldItemPage.js.map
