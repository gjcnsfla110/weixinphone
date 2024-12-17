"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  _component_uni_icons();
}
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
        b: common_vendor.p({
          type: "search",
          color: "#888",
          size: "18"
        }),
        c: common_vendor.unref(titleBarheight)() + "px",
        d: common_vendor.unref(fillHeight)() + "px",
        e: common_vendor.unref(fillHeight)() + "px"
      };
    };
  }
};
wx.createComponent(_sfc_main);
