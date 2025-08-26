"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
if (!Math) {
  (TopNav + OldList)();
}
const TopNav = () => "../../components/list/listTopNeb.js";
const OldList = () => "../../components/item/itemList.js";
const _sfc_main = {
  __name: "oldList",
  setup(__props) {
    const screenHeight = utill_systemData.getNaviBar().noTabScreen() - 100;
    const data = common_vendor.ref([
      {
        src: "/images/testImg/ss1.jpg"
      },
      {
        src: "/images/testImg/ss2.jpg"
      },
      {
        src: "/images/testImg/ss3.jpg"
      },
      {
        src: "/images/testImg/ss4.jpg"
      },
      {
        src: "/images/testImg/ss5.jpg"
      },
      {
        src: "/images/testImg/ss6.jpg"
      },
      {
        src: "/images/testImg/ss7.jpg"
      },
      {
        src: "/images/testImg/ss8.jpg"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          data: data.value,
          listColor: "rgb(248, 248, 248)",
          itemColor: "white",
          padding: "35rpx 0"
        }),
        b: screenHeight + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6d41fd40"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/oldList/oldList.js.map
