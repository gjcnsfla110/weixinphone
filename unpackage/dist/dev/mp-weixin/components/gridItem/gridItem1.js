"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "gridItem1",
  setup(__props) {
    const list1 = common_vendor.ref([
      {
        description: {
          name: "苹果16proMax",
          storage: "256GB",
          price: 180
        },
        src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
      },
      {
        description: {
          name: "苹果16pro",
          storage: "256GB",
          price: 160
        },
        src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
      },
      {
        description: {
          name: "苹果16proPlus",
          storage: "128GB",
          price: 120
        },
        src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
      },
      {
        description: {
          name: "苹果16proMax",
          storage: "512GB",
          price: 200
        },
        src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
      },
      {
        description: {
          name: "苹果16pro",
          storage: "256GB",
          price: 180
        },
        src: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg"
      }
    ]);
    const list2 = common_vendor.ref([
      {
        items: {
          title: "아이폰16프로맥스",
          content: "256G 특가",
          price: "Y 256만원"
        },
        src: "/static/subMenu/iphone.png"
      },
      {
        items: {
          title: "아이폰16프로맥스",
          content: "256G 특가",
          price: "Y 256만원"
        },
        src: "/static/subMenu/iphone.png"
      },
      {
        items: {
          title: "아이폰16프로맥스",
          content: "256G 특가",
          price: "Y 256만원"
        },
        src: "/static/subMenu/iphone.png"
      },
      {
        items: {
          title: "아이폰16프로맥스",
          content: "256G 특가",
          price: "Y 256만원"
        },
        src: "/static/subMenu/iphone.png"
      },
      {
        items: {
          title: "아이폰16프로맥스",
          content: "256G 특가",
          price: "Y 256만원"
        },
        src: "/static/subMenu/iphone.png"
      },
      {
        items: {
          title: "아이폰16프로맥스",
          content: "256G 특가",
          price: "Y 256만원"
        },
        src: "/static/subMenu/iphone.png"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list1.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.description.name),
            b: common_vendor.t(item.description.storage),
            c: common_vendor.t(item.description.price),
            d: item.src
          };
        }),
        b: common_vendor.f(list2.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.items.title),
            b: common_vendor.t(item.items.content),
            c: common_vendor.t(item.items.price),
            d: item.src
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
