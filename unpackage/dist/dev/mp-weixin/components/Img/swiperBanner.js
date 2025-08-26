"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "swiperBanner",
  setup(__props) {
    const banners = common_vendor.ref([
      {
        src: "https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg"
      },
      {
        src: "https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg"
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(banners.value, (item, k0, i0) => {
          return {
            a: item.src
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-31fbf336"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Img/swiperBanner.js.map
