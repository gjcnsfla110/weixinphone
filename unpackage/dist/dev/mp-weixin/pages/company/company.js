"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    CustomNav
  },
  props: {},
  setup(props, context) {
    const cutrrunIndex = common_vendor.ref(0);
    return {
      cutrrunIndex
    };
  },
  methods: {
    sectionChange(index) {
      this.cutrrunIndex = index;
    },
    clickShop() {
      common_vendor.index.navigateTo({
        url: `/pages/shop/shop`
        // 이동할 페이지 경로
      });
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _easycom_u_subsection2 = common_vendor.resolveComponent("u-subsection");
  (_component_CustomNav + _easycom_u_subsection2)();
}
const _easycom_u_subsection = () => "../../node-modules/uview-pro/components/u-subsection/u-subsection.js";
if (!Math) {
  _easycom_u_subsection();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      back: true,
      title: "公 司 业 务"
    }),
    b: common_assets._imports_0$5,
    c: common_assets._imports_1$5,
    d: common_assets._imports_2$6,
    e: common_assets._imports_3$4,
    f: common_vendor.o($options.sectionChange),
    g: common_vendor.p({
      ["active-color"]: "#FF8000",
      current: $setup.cutrrunIndex,
      mode: "button",
      list: [{
        name: "寄卖"
      }, {
        name: "回收二手"
      }, {
        name: "典当手机"
      }, {
        name: "免费配送"
      }],
      height: 90,
      ["bg-color"]: "#F5F5F5"
    }),
    h: 0 == $setup.cutrrunIndex
  }, 0 == $setup.cutrrunIndex ? {
    i: common_assets._imports_4$3
  } : 1 == $setup.cutrrunIndex ? {
    k: common_assets._imports_5$2
  } : 2 == $setup.cutrrunIndex ? {
    m: common_assets._imports_6$1
  } : 3 == $setup.cutrrunIndex ? {
    o: common_assets._imports_7
  } : {}, {
    j: 1 == $setup.cutrrunIndex,
    l: 2 == $setup.cutrrunIndex,
    n: 3 == $setup.cutrrunIndex,
    p: common_assets._imports_1$4,
    q: common_assets._imports_9,
    r: common_vendor.o((...args) => $options.clickShop && $options.clickShop(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d7fa82a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/company/company.js.map
