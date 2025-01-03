"use strict";
const common_vendor = require("../../common/vendor.js");
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
          type: "arrow-left",
          size: "25"
        }),
        d: common_vendor.o(goBack)
      } : {}, {
        e: common_vendor.t(__props.title),
        f: common_vendor.unref(titleBarheight)() + "px",
        g: custumH.value + "px",
        h: custumH.value + "px"
      });
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/custom-nav-bar/customNav.js.map
