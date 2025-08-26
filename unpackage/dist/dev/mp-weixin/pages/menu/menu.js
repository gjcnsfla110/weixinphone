"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
if (!Math) {
  (CustomNav + TopTextTitle + TopImg + RightTitle + RigthItmeList)();
}
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const TopImg = () => "../../components/menu/rightTopImg.js";
const TopTextTitle = () => "../../components/menu/leftTopText.js";
const RightTitle = () => "../../components/menu/rightTopTitle.js";
const RigthItmeList = () => "../../components/menu/rightItemList.js";
const _sfc_main = {
  __name: "menu",
  setup(__props) {
    const menuData = [
      {
        id: 1,
        menutitle: false,
        title: "",
        color: "",
        child: [
          {
            id: 1,
            title: "推荐"
          }
        ]
      },
      {
        id: 2,
        menutitle: true,
        title: "IPHONE",
        color: "rgb(239,209,12)",
        child: [
          {
            id: 2,
            title: "ProMax"
          },
          {
            id: 3,
            title: "Pro"
          },
          {
            id: 4,
            title: "数字系列"
          },
          {
            id: 5,
            title: "二手"
          }
        ]
      },
      {
        id: 3,
        menutitle: true,
        title: "SAMSUNG",
        color: "#1296db",
        child: [
          {
            id: 6,
            title: "S系列"
          },
          {
            id: 7,
            title: "Fold"
          },
          {
            id: 8,
            title: "A系列"
          },
          {
            id: 9,
            title: "二手"
          }
        ]
      },
      {
        id: 4,
        menutitle: true,
        title: "中国手机",
        color: "rgb(202,27,0)",
        child: [
          {
            id: 10,
            title: "韩版机"
          },
          {
            id: 11,
            title: "国内机"
          },
          {
            id: 12,
            title: "二手"
          }
        ]
      },
      {
        id: 5,
        menutitle: false,
        title: "",
        color: "",
        child: [
          {
            id: 13,
            title: "手机分期"
          },
          {
            id: 14,
            title: "平板电脑"
          },
          {
            id: 15,
            title: "手表"
          },
          {
            id: 16,
            title: "手机配件"
          }
        ]
      }
    ];
    utill_systemData.getNaviBar().custumHeiht();
    const swiperHeightr = () => utill_systemData.getNaviBar().screen();
    const swiperHeight = common_vendor.ref(swiperHeightr());
    const activeBk = common_vendor.ref(1);
    const activeMenu = common_vendor.ref(1);
    const subMenu = (id) => {
      activeMenu.value = id;
      activeBk.value = -50;
    };
    const subMenuTol = (id, bkId) => {
      activeMenu.value = id;
      activeBk.value = bkId;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: _ctx.商品分类
        }),
        b: common_vendor.f(menuData, (item, k0, i0) => {
          return common_vendor.e({
            a: item.menutitle
          }, item.menutitle ? {
            b: common_vendor.f(item.child, (sub, index, i1) => {
              return common_vendor.e({
                a: index == 0
              }, index == 0 ? {
                b: common_vendor.t(item.title),
                c: "388b40d3-1-" + i0 + "-" + i1,
                d: common_vendor.p({
                  color: item.id == activeBk.value ? item.color : "black"
                }),
                e: common_vendor.t(sub.title),
                f: sub.id == activeMenu.value ? 1 : "",
                g: item.color,
                h: sub.id == activeMenu.value ? 1 : "",
                i: common_vendor.o(($event) => subMenuTol(sub.id, item.id)),
                j: item.id == activeBk.value ? 1 : ""
              } : {
                k: common_vendor.t(sub.title),
                l: sub.id == activeMenu.value ? 1 : "",
                m: item.color,
                n: common_vendor.o(($event) => subMenuTol(sub.id, item.id)),
                o: item.id == activeBk.value ? 1 : "",
                p: sub.id == activeMenu.value ? 1 : ""
              });
            })
          } : {
            c: common_vendor.f(item.child, (sub, k1, i1) => {
              return {
                a: common_vendor.t(sub.title),
                b: sub.id == activeMenu.value ? 1 : "",
                c: common_vendor.o(($event) => subMenu(sub.id)),
                d: sub.id == activeMenu.value ? 1 : ""
              };
            })
          });
        }),
        c: swiperHeight.value + "px",
        d: common_vendor.p({
          src: "/images/testImg/banner3.jpg"
        }),
        e: swiperHeight.value + "px",
        f: swiperHeight.value + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-388b40d3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/menu/menu.js.map
