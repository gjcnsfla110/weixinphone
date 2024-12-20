"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (HotItem + HotPeijian + HotNew)();
}
const HotItem = () => "../../gridItem/gridItem1.js";
const HotPeijian = () => "../../gridItem/gridItem2.js";
const HotNew = () => "../../gridItem/gridItem3.js";
const _sfc_main = {
  __name: "hot-item",
  setup(__props) {
    const banners = common_vendor.ref([
      {
        src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
      },
      {
        src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
      },
      {
        src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
      },
      {
        src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
      },
      {
        src: "https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
      }
    ]);
    const subMenu = common_vendor.ref([
      {
        src: "/static/subMenu/hotMenu.png",
        text: "热门机型"
      },
      {
        src: "/static/subMenu/iphone.png",
        text: "苹果手机"
      },
      {
        src: "/static/subMenu/samsung.png",
        text: "三星手机"
      },
      {
        src: "/static/subMenu/iphone.png",
        text: "二手"
      },
      {
        src: "/static/subMenu/samsung.png",
        text: "二手"
      },
      {
        src: "/static/subMenu/heyue.jpg",
        text: "合约机"
      },
      {
        src: "/static/subMenu/usim.png",
        text: "电话卡"
      },
      {
        src: "/static/subMenu/watch.jpg",
        text: "手机配件"
      },
      {
        src: "/static/subMenu/ipad.jpg",
        text: "苹果Ipad"
      },
      {
        src: "/static/subMenu/sPad.jpg",
        text: "三星Pad"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(banners.value, (item, k0, i0) => {
          return {
            a: item.src
          };
        }),
        b: common_vendor.f(subMenu.value, (item, k0, i0) => {
          return {
            a: item.src,
            b: common_vendor.t(item.text)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f9753ad5"]]);
wx.createComponent(Component);
