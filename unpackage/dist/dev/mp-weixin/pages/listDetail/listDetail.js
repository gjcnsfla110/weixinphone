"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (CustomNav + SwiperImg + Buttom)();
}
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const SwiperImg = () => "../../components/listDetail/swiperImg.js";
const Buttom = () => "../../components/listDetail/bottom.js";
const _sfc_main = {
  __name: "listDetail",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          back: "true",
          customFill: false,
          bgColor: "rgb(255,255,255,0)"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/listDetail/listDetail.js.map
