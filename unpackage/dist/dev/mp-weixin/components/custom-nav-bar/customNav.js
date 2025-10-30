"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utill_systemData = require("../../utill/systemData.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "customNav",
  props: {
    title: {
      type: String,
      default: "小韩手机"
    },
    back: {
      type: Boolean,
      default: false
    },
    topHeight: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String,
      default: "white"
    },
    customFill: {
      type: Boolean,
      default: true
    },
    logoLink: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const {
      statuBarHeight,
      titleBarheight,
      custumHeiht
    } = utill_systemData.getNaviBar();
    const props = __props;
    const custumH = common_vendor.ref(custumHeiht() + props.topHeight);
    const goBack = () => {
      let pages = getCurrentPages();
      if (pages.length > 1) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.reLaunch({ url: "/pages/index/index" });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(statuBarHeight)() + "px",
        b: __props.back
      }, __props.back ? {
        c: common_vendor.p({
          type: "left",
          size: "25"
        }),
        d: common_vendor.o(goBack)
      } : {
        e: common_assets._imports_0$6
      }, {
        f: common_vendor.t(__props.title),
        g: common_vendor.unref(titleBarheight)() + "px",
        h: custumH.value + "px",
        i: __props.bgColor,
        j: __props.customFill
      }, __props.customFill ? {
        k: custumH.value + "px"
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ca453c6d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/custom-nav-bar/customNav.js.map
