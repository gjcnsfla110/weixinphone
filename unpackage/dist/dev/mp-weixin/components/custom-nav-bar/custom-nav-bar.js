"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
const _sfc_main = {
  __name: "custom-nav-bar",
  setup(__props) {
    const {
      statuBarHeight,
      titleBarheight,
      fillHeight
    } = utill_systemData.getNaviBar();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(statuBarHeight)() + "px",
        b: common_vendor.unref(titleBarheight)() + "px",
        c: common_vendor.unref(fillHeight)() + "px",
        d: common_vendor.unref(fillHeight)() + "px"
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/custom-nav-bar/custom-nav-bar.js.map
