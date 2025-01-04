"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_goods_nav = common_vendor.resolveComponent("uni-goods-nav");
  _component_uni_goods_nav();
}
const _sfc_main = {
  __name: "bottom",
  setup(__props) {
    const popup = common_vendor.ref(null);
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
    const optionClick = () => {
      options.value[1].icon = "heart-filled";
    };
    const buttonGroupClick = () => {
      popup.value.open();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(optionClick),
        b: common_vendor.o(buttonGroupClick),
        c: common_vendor.p({
          options: options.value,
          fill: true,
          ["button-group"]: buttonGroup
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-af0ac201"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/detailPage/bottom.js.map
