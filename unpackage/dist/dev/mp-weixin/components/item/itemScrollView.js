"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  CardPage();
}
const CardPage = () => "../cardPage/cardPage.js";
const _sfc_main = {
  __name: "itemScrollView",
  props: {
    margin: {
      type: String,
      default: "0rpx"
    },
    left: {
      type: String,
      default: ""
    },
    right: {
      type: String,
      default: ""
    },
    more: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const datelist = common_vendor.ref([
      {
        title: "아이폰손목시계 아이폰손목시계 아이폰손목시계 아이폰손목시계",
        price: "259,500",
        status: 0,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰 아이폰손목시계아이폰손목시계",
        price: "259,500",
        status: 2,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
        price: "259,500",
        status: 1,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
        price: "259,500",
        status: 2,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
        price: "25,500",
        status: 0,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
        price: "259,500",
        status: 1,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: "259,500",
        status: 0,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: "259,500",
        status: 0,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: "259,500",
        status: 2,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: "259,500",
        status: 0,
        src: "/static/subMenu/watch.jpg"
      },
      {
        title: "아이폰 이어폰",
        price: "259,500",
        status: 1,
        src: "/static/subMenu/watch.jpg"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(datelist.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.price),
            c: item.src,
            d: item.status == 0
          }, item.status == 0 ? {} : {}, {
            e: item.status == 1
          }, item.status == 1 ? {} : {}, {
            f: item.status == 2
          }, item.status == 2 ? {} : {});
        }),
        b: common_vendor.p({
          marginTop: __props.margin
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e6f32a5d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/item/itemScrollView.js.map
