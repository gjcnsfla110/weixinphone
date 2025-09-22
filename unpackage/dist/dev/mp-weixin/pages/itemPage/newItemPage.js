"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_request = require("../../utill/request.js");
const stores_mainData = require("../../stores/mainData.js");
const utill_common = require("../../utill/common.js");
const common_assets = require("../../common/assets.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const SwiperImg = () => "../../components/pageDetail/swiperImg.js";
const Bottom = () => "../../components/pageDetail/itemBottom.js";
const _sfc_main = {
  components: {
    CustomNav,
    SwiperImg,
    Bottom
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
      return this.hasSpec ? "height-765" : "height-460";
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
      common_vendor.index.__f__("error", "at pages/itemPage/newItemPage.vue:168", "onLoad 에러:", error);
    }
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _component_SwiperImg = common_vendor.resolveComponent("SwiperImg");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _component_Bottom = common_vendor.resolveComponent("Bottom");
  (_component_CustomNav + _component_SwiperImg + _easycom_uni_popup2 + _component_Bottom)();
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
    c: common_vendor.t($setup.formattedPrice($setup.item.price)),
    d: common_vendor.t($setup.formattedPrice($setup.item.price1)),
    e: common_vendor.t($setup.item.title1),
    f: common_vendor.t($setup.item.isShop),
    g: $options.hasSpec
  }, $options.hasSpec ? {
    h: common_vendor.o(($event) => $options.specPopupToggle("bottom")),
    i: common_vendor.t($setup.spec.cpu),
    j: common_vendor.t($setup.spec.battery),
    k: common_vendor.t($setup.spec.camera),
    l: common_vendor.t($setup.spec.display),
    m: common_vendor.t($setup.spec.color)
  } : {}, {
    n: common_vendor.o(($event) => $options.servicePopupToggle("bottom")),
    o: common_vendor.f($setup.item.service, (i, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(i.title)
      };
    }),
    p: common_vendor.n($options.heightClass),
    q: common_assets._imports_0$1,
    r: common_assets._imports_0$1,
    s: common_assets._imports_0$1,
    t: common_vendor.f($setup.item.content, (i, k0, i0) => {
      return {
        a: i
      };
    }),
    v: common_vendor.t($setup.spec.model),
    w: common_vendor.t($setup.spec.cpu),
    x: common_vendor.t($setup.spec.camera),
    y: common_vendor.f(JSON.parse($setup.spec.ram), (i, k0, i0) => {
      return {
        a: common_vendor.t(i)
      };
    }),
    z: common_vendor.f(JSON.parse($setup.spec.storage), (i, k0, i0) => {
      return {
        a: common_vendor.t(i)
      };
    }),
    A: common_vendor.t($setup.spec.display),
    B: common_vendor.t($setup.spec.battery),
    C: common_vendor.t($setup.spec.water),
    D: common_vendor.t($setup.spec.weight),
    E: common_vendor.t($setup.spec.type),
    F: common_vendor.t($setup.spec.color),
    G: common_vendor.sr("specPopup", "edb82754-2"),
    H: common_vendor.f($setup.item.service, (i, k0, i0) => {
      return {
        a: common_vendor.t(JSON.parse(i.description).title ? JSON.parse(i.description).title : ""),
        b: common_vendor.t(JSON.parse(i.description).description ? JSON.parse(i.description).description : "")
      };
    }),
    I: common_vendor.sr("servicePopup", "edb82754-3")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-edb82754"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/newItemPage.js.map
