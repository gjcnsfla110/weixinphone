"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_goods_nav2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_goods_nav + _easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "bottom",
  setup(__props) {
    const popupCart = common_vendor.ref(null);
    const popupBuy = common_vendor.ref(null);
    const options = common_vendor.ref([{
      icon: "headphones",
      text: "客服"
    }, {
      icon: "heart",
      text: "收藏"
    }, {
      icon: "cart",
      text: "购物车",
      info: 2
    }]);
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
    const popupClose = (i) => {
      common_vendor.index.__f__("log", "at components/pageDetail/bottom.vue:53", i);
      if (i === 1) {
        popupCart.value.close();
      } else if (i === 2) {
        popupBuy.value.close();
      }
    };
    const optionClick = (e) => {
      options.value[1].icon = "heart-filled";
    };
    const buttonGroupClick = (e) => {
      if (e.index === 0) {
        popupCart.value.open();
      } else {
        popupBuy.value.open();
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(optionClick),
        b: common_vendor.o(buttonGroupClick),
        c: common_vendor.p({
          options: options.value,
          fill: true,
          ["button-group"]: buttonGroup
        }),
        d: common_vendor.p({
          type: "closeempty",
          size: "25"
        }),
        e: common_vendor.o(($event) => popupClose(1)),
        f: common_vendor.sr(popupCart, "23b2a3c9-1", {
          "k": "popupCart"
        }),
        g: common_vendor.p({
          type: "bottom"
        }),
        h: common_vendor.p({
          type: "closeempty",
          size: "25"
        }),
        i: common_vendor.o(($event) => popupClose(2)),
        j: common_vendor.sr(popupBuy, "23b2a3c9-3", {
          "k": "popupBuy"
        }),
        k: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-23b2a3c9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/pageDetail/bottom.js.map
