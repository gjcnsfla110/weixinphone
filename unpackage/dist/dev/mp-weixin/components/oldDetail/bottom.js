"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_goods_nav2 + _easycom_uni_popup2)();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_goods_nav + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "bottom",
  setup(__props) {
    const popup = common_vendor.ref(null);
    const options = [
      {
        icon: "headphones",
        text: "客服"
      },
      {
        icon: "heart",
        text: "收藏"
      }
    ];
    const buttonGroup = [
      {
        text: "加入购物车",
        backgroundColor: "#ff0000",
        color: "#fff"
      },
      {
        text: "立即购买",
        backgroundColor: "#ffa200",
        color: "#fff"
      }
    ];
    const buttonClick = (e) => {
      if (e.index === 1) {
        popup.value.open();
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.onClick),
        b: common_vendor.o(buttonClick),
        c: common_vendor.p({
          options,
          fill: true,
          ["button-group"]: buttonGroup
        }),
        d: common_vendor.sr(popup, "7826bcef-1", {
          "k": "popup"
        }),
        e: common_vendor.p({
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7826bcef"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/oldDetail/bottom.js.map
