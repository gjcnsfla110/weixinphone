"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
const utill_request = require("../../utill/request.js");
const utill_common = require("../../utill/common.js");
const common_assets = require("../../common/assets.js");
const Custom = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    Custom
  },
  props: {},
  setup(props, context) {
    const cutturn = common_vendor.ref(0);
    const cutturnCity = common_vendor.ref(0);
    const screenHeight = common_vendor.ref(utill_systemData.getNaviBar().noTabScreen());
    const list = common_vendor.ref([]);
    const menu = common_vendor.ref([]);
    const datalist = common_vendor.ref([]);
    return {
      cutturn,
      cutturnCity,
      screenHeight,
      list,
      menu,
      datalist
    };
  },
  methods: {
    //가계번호 클릭하면 폰다이어리에 나타나기
    callNumber(number) {
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
          }
        }
      });
    },
    //클릭시 데이터 리스트 변경
    changeList(id) {
      this.datalist = this.list.filter((item) => item.category_id == id);
    },
    //도시를 클릭시 이벤트부분
    cityActive(cutturnId, cutturnCityId) {
      this.cutturn = cutturnId;
      this.cutturnCity = cutturnCityId;
      this.changeList(this.cutturnCity);
    },
    //点击商店
    clickShop(item) {
      common_vendor.index.setStorageSync("shopItem", {
        shopItem: item
      });
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/shopPage?id=${item.id}`
        // 이동할 페이지 경로
      });
    }
  },
  async onLoad() {
    let shopData = common_vendor.index.getStorageSync("shop");
    if (shopData) {
      this.list = shopData.list;
      this.menu = shopData.menu;
      this.cutturn = this.menu[0] ? this.menu[0].id : 0;
      this.cutturnCity = this.menu[0].child[0] ? this.menu[0].child[0].id : 0;
      this.changeList(this.cutturnCity);
    } else {
      let data = await utill_request.servicePost("app/shop/list");
      this.list = data.list;
      this.list.forEach((item) => {
        item.shopImg = JSON.parse(item.shopImg);
      });
      this.menu = utill_common.listTrees(data.category);
      common_vendor.index.setStorageSync("shop", {
        list: this.list,
        menu: this.menu
      });
      this.cutturn = this.menu[0] ? this.menu[0].id : 0;
      this.cutturnCity = this.menu[0].child[0] ? this.menu[0].child[0].id : 0;
      this.changeList(this.cutturnCity);
    }
  }
};
if (!Array) {
  const _component_Custom = common_vendor.resolveComponent("Custom");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_component_Custom + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      back: true
    }),
    b: common_vendor.f($setup.menu, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id == $setup.cutturn ? 1 : "",
        c: common_vendor.f(item.child, (zone, k1, i1) => {
          return {
            a: common_vendor.t(zone.name),
            b: item.id === $setup.cutturn && zone.id === $setup.cutturnCity ? 1 : "",
            c: item.id === $setup.cutturn && zone.id === $setup.cutturnCity ? 1 : "",
            d: common_vendor.o(($event) => $options.cityActive(item.id, zone.id))
          };
        }),
        d: "2a6aaf81-2-" + i0 + ",2a6aaf81-1",
        e: common_vendor.p({
          ["show-arrow"]: false,
          border: false,
          ["show-animation"]: true,
          open: item.id == $setup.cutturn
        })
      };
    }),
    c: common_vendor.p({
      accordion: true
    }),
    d: common_vendor.f($setup.datalist, (item, k0, i0) => {
      return {
        a: item.mainImg,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.hours),
        d: common_vendor.t(item.address),
        e: common_vendor.t(item.wechat),
        f: common_vendor.t(item.phone),
        g: common_vendor.o(($event) => $options.clickShop(item))
      };
    }),
    e: common_assets._imports_0$1,
    f: common_assets._imports_1$1,
    g: common_vendor.o(($event) => $options.callNumber("01056786555")),
    h: $setup.screenHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2a6aaf81"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop/shop.js.map
