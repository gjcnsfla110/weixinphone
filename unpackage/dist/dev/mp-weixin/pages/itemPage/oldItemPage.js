"use strict";
const common_vendor = require("../../common/vendor.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const SwiperImg = () => "../../components/pageDetail/swiperImg.js";
const Bottom = () => "../../components/pageDetail/bottom.js";
const _sfc_main = {
  components: {
    CustomNav,
    SwiperImg,
    Bottom
  },
  props: {},
  setup(props, context) {
  },
  methods: {},
  onLoad(options) {
    common_vendor.index.__f__("log", "at pages/itemPage/oldItemPage.vue:31", options.id);
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _component_SwiperImg = common_vendor.resolveComponent("SwiperImg");
  const _component_Bottom = common_vendor.resolveComponent("Bottom");
  (_component_CustomNav + _component_SwiperImg + _component_Bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      back: "true",
      customFill: false,
      bgColor: "rgb(255,255,255,0)"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/oldItemPage.js.map
