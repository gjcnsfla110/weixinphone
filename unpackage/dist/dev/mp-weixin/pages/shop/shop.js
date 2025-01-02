"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utill_systemData = require("../../utill/systemData.js");
if (!Array) {
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (Custom + _easycom_uni_collapse_item + _easycom_uni_collapse)();
}
const Custom = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  __name: "shop",
  setup(__props) {
    const screenHeight = common_vendor.ref(utill_systemData.getNaviBar().screen());
    common_vendor.index.__f__("log", "at pages/shop/shop.vue:33", screenHeight.value);
    const data = [
      {
        id: 6,
        title: "首尔市",
        child: [
          {
            id: 0,
            title: "全部"
          }
        ]
      },
      {
        id: 0,
        title: "广域市",
        child: [
          {
            id: 0,
            title: "仁川市"
          },
          {
            id: 5,
            title: "釜山市"
          },
          {
            id: 1,
            title: "大邱市"
          },
          {
            id: 2,
            title: "大田市"
          },
          {
            id: 3,
            title: "蔚山市"
          },
          {
            id: 4,
            title: "光州市"
          }
        ]
      },
      {
        id: 1,
        title: "京畿道",
        child: [
          {
            id: 0,
            title: "全部"
          }
        ]
      },
      {
        id: 2,
        title: "江原道",
        child: [
          {
            id: 0,
            title: "全部"
          }
        ]
      },
      {
        id: 3,
        title: "忠清道",
        child: [
          {
            id: 0,
            title: "全部"
          }
        ]
      },
      {
        id: 4,
        title: "全罗道",
        child: [
          {
            id: 0,
            title: "全部"
          }
        ]
      },
      {
        id: 5,
        title: "庆尚道",
        child: [
          {
            id: 0,
            title: "全部"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data, (item, k0, i0) => {
          return {
            a: common_vendor.f(item.child, (zone, k1, i1) => {
              return {
                a: common_vendor.t(zone.title)
              };
            }),
            b: "2a6aaf81-2-" + i0 + ",2a6aaf81-1",
            c: common_vendor.p({
              border: "false",
              ["show-animation"]: true,
              title: item.title,
              open: item.id == 6
            })
          };
        }),
        b: common_vendor.p({
          accordion: true
        }),
        c: common_vendor.f(10, (i, k0, i0) => {
          return {};
        }),
        d: common_assets._imports_0,
        e: screenHeight.value + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2a6aaf81"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop/shop.js.map
