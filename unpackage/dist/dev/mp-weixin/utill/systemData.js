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
  return {
    statuBarHeight,
    titleBarheight,
    fillHeight
  };
}
exports.getNaviBar = getNaviBar;
