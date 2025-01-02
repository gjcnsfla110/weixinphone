"use strict";
const common_vendor = require("../common/vendor.js");
function getNaviBar() {
  const statuBarHeight = () => {
    const system = common_vendor.index.getSystemInfoSync();
    return system.statusBarHeight ? system.statusBarHeight : 30;
  };
  const titleBarheight = () => {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    const titleHeight = height + (top - statuBarHeight()) * 2;
    return titleHeight;
  };
  const fillHeight = () => statuBarHeight() + titleBarheight() + 50;
  const custumHeiht = () => statuBarHeight() + titleBarheight();
  const screen = () => {
    let { screenHeight } = common_vendor.index.getSystemInfoSync();
    let topHeight = custumHeiht();
    return screenHeight - topHeight - 82;
  };
  return {
    statuBarHeight,
    titleBarheight,
    custumHeiht,
    fillHeight,
    screen
  };
}
exports.getNaviBar = getNaviBar;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utill/systemData.js.map
