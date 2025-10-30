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
    const cutturn = common_vendor.ref(0);
    const cutturnCity = common_vendor.ref(1);
    const cityActive = (cutturnId, cutturnCityId) => {
      cutturn.value = cutturnId;
      cutturnCity.value = cutturnCityId;
    };
    const screenHeight = common_vendor.ref(utill_systemData.getNaviBar().screen());
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
    const callNumber = (number) => {
      common_vendor.index.showModal({
        title: "商店电话",
        content: "确认直接拨通电话",
        success: function(res) {
          if (res.confirm) {
            if (!number) {
              return false;
            }
            common_vendor.index.makePhoneCall({
              phoneNumber: number
            });
          } else if (res.cancel)
            ;
        }
      });
    };
    const clickShop = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          back: true
        }),
        b: common_vendor.f(data, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id == cutturn.value ? 1 : "",
            c: common_vendor.f(item.child, (zone, k1, i1) => {
              return {
                a: common_vendor.t(zone.title),
                b: item.id === cutturn.value && zone.id === cutturnCity.value ? 1 : "",
                c: item.id === cutturn.value && zone.id === cutturnCity.value ? 1 : "",
                d: common_vendor.o(($event) => cityActive(item.id, zone.id))
              };
            }),
            d: "2a6aaf81-2-" + i0 + ",2a6aaf81-1",
            e: common_vendor.p({
              ["show-arrow"]: false,
              border: "false",
              ["show-animation"]: true,
              open: item.id == cutturn.value
            })
          };
        }),
        c: common_vendor.p({
          accordion: true
        }),
        d: common_vendor.f(10, (i, k0, i0) => {
          return {};
        }),
        e: common_assets._imports_0$1,
        f: common_assets._imports_1$1,
        g: common_assets._imports_2$1,
        h: common_vendor.o(($event) => callNumber("01056786555")),
        i: common_vendor.o(clickShop),
        j: screenHeight.value + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2a6aaf81"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop/shop.js.map
