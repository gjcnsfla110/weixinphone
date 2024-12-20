"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  CardPage();
}
const CardPage = () => "../cardPage/cardPage.js";
const _sfc_main = {
  __name: "gridItem2",
  setup(__props) {
    const datelist = common_vendor.ref([
      {
        title: "아이폰손목시계",
        price: 25e5,
        hot: true,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: false,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: false,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: false,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: true,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: true,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: true,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: true,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: false,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: false,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: 25e5,
        hot: false,
        src: "/static/subMenu/watch.jpg"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(datelist.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.price),
            c: item.hot
          }, item.hot ? {} : {}, {
            d: item.src
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b61b9705"]]);
wx.createComponent(Component);
