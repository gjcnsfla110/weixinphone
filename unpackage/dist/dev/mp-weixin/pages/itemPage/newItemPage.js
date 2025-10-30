"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_request = require("../../utill/request.js");
const stores_mainData = require("../../stores/mainData.js");
const utill_common = require("../../utill/common.js");
const common_assets = require("../../common/assets.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const SwiperImg = () => "../../components/pageDetail/swiperImg.js";
const _sfc_main = {
  components: {
    CustomNav,
    SwiperImg
  },
  props: {},
  setup(props, context) {
    const item = common_vendor.ref({});
    const useData = stores_mainData.useMainStores();
    const { goodsSpecs } = useData;
    const spec = common_vendor.ref({});
    return {
      item,
      goodsSpecs,
      spec,
      formattedPrice: utill_common.formattedPrice
    };
  },
  computed: {
    hasSpec() {
      return this.spec && Object.keys(this.spec).length > 0;
    },
    heightClass() {
      return this.hasSpec ? "height-815" : "height-510";
    }
  },
  methods: {
    specPopupToggle(type) {
      this.$refs.specPopup.open(type);
    },
    servicePopupToggle(type) {
      this.$refs.servicePopup.open(type);
    }
  },
  async onLoad(op) {
    try {
      const res = await utill_request.servicePost("app/goods/item", { id: op.id });
      this.item = res;
      this.item.banner = this.item.banner ? JSON.parse(this.item.banner) : [];
      this.item.content = this.item.content ? JSON.parse(this.item.content) : [];
      this.item.service = this.item.service ? JSON.parse(this.item.service) : [];
      this.item.delivery = this.item.delivery ? JSON.parse(this.item.delivery) : [];
      this.spec = this.goodsSpecs.filter((item1) => item1.id == this.item.spec_id)[0] || {};
    } catch (error) {
      common_vendor.index.__f__("error", "at pages/itemPage/newItemPage.vue:174", "onLoad 에러:", error);
    }
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _component_SwiperImg = common_vendor.resolveComponent("SwiperImg");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_CustomNav + _component_SwiperImg + _easycom_uni_popup2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
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
    e: common_vendor.t($setup.formattedPrice($setup.item.price1)),
    f: common_vendor.t($setup.item.title1),
    g: common_vendor.t($setup.item.isShop),
    h: $options.hasSpec
  }, $options.hasSpec ? {
    i: common_vendor.o(($event) => $options.specPopupToggle("bottom")),
    j: common_vendor.t($setup.spec.cpu),
    k: common_vendor.t($setup.spec.battery),
    l: common_vendor.t($setup.spec.camera),
    m: common_vendor.t($setup.spec.display),
    n: common_vendor.t($setup.spec.color)
  } : {}, {
    o: common_vendor.o(($event) => $options.servicePopupToggle("bottom")),
    p: common_assets._imports_0$2,
    q: common_assets._imports_7,
    r: common_vendor.n($options.heightClass),
    s: common_assets._imports_2$3,
    t: common_assets._imports_2$3,
    v: common_assets._imports_2$3,
    w: common_vendor.f($setup.item.content, (i, k0, i0) => {
      return {
        a: i
      };
    }),
    x: common_vendor.t($setup.spec.model),
    y: common_vendor.t($setup.spec.cpu),
    z: common_vendor.t($setup.spec.camera),
    A: common_vendor.f(JSON.parse($setup.spec.ram), (i, k0, i0) => {
      return {
        a: common_vendor.t(i)
      };
    }),
    B: common_vendor.f(JSON.parse($setup.spec.storage), (i, k0, i0) => {
      return {
        a: common_vendor.t(i)
      };
    }),
    C: common_vendor.t($setup.spec.display),
    D: common_vendor.t($setup.spec.battery),
    E: common_vendor.t($setup.spec.water),
    F: common_vendor.t($setup.spec.weight),
    G: common_vendor.t($setup.spec.type),
    H: common_vendor.t($setup.spec.color),
    I: common_vendor.sr("specPopup", "edb82754-2"),
    J: common_assets._imports_0$2,
    K: common_assets._imports_7,
    L: common_vendor.sr("servicePopup", "edb82754-3")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-edb82754"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/newItemPage.js.map
