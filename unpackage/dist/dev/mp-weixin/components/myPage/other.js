"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "other",
  setup(__props) {
    const data = common_vendor.ref([
      {
        title: "联系客服",
        src: "/static/me/kefu.png"
      },
      {
        title: "个人信息",
        src: "/static/me/me.png"
      },
      {
        title: "收货地址",
        src: "/static/me/adress.png"
      },
      {
        title: "小韩公司",
        src: "/static/me/gongsi.png"
      },
      {
        title: "退出账号",
        src: "/static/me/logout.png"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.value, (item, k0, i0) => {
          return {
            a: item.src,
            b: common_vendor.t(item.title)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2295ba6d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/myPage/other.js.map
