"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
const utill_request = require("../../utill/request.js");
const utill_common = require("../../utill/common.js");
const Custom = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    Custom
  },
  props: {},
  setup(props, context) {
    const cutturn = common_vendor.ref(0);
    const cutturnCategory = common_vendor.ref(1);
    const screenHeight = common_vendor.ref(utill_systemData.getNaviBar().screen());
    const categorys = common_vendor.ref([]);
    const agreementList = common_vendor.ref([]);
    const activeAgreementList = common_vendor.ref([]);
    return {
      formattedPrice: utill_common.formattedPrice,
      cutturn,
      cutturnCategory,
      screenHeight,
      categorys,
      agreementList,
      activeAgreementList
    };
  },
  methods: {
    //계약폰카테고리 클릭시 이벤트부분
    categoryActive(cutturnId, cutturnCategory) {
      this.cutturn = cutturnId;
      this.cutturnCategory = cutturnCategory;
      this.activeAgreementList = this.agreementList.filter((item) => item.category_id == cutturnCategory);
    },
    //핫한계약폰 카테고리 클릭시 이벤트부분
    hotCategoryActive(cutturnId, cutturnCategory, name) {
      this.cutturn = cutturnId;
      this.cutturnCategory = cutturnCategory;
      if (name == "LG") {
        this.activeAgreementList = this.agreementList.filter((item) => item.mobile == 1 && item.hot == 1);
      } else if (name == "KT") {
        this.activeAgreementList = this.agreementList.filter((item) => item.mobile == 2 && item.hot == 1);
      } else if (name == "SKT") {
        this.activeAgreementList = this.agreementList.filter((item) => item.mobile == 3 && item.hot == 1);
      }
    },
    clickAgreementPhoneDetail(item) {
      common_vendor.index.setStorageSync("agreementItem", {
        agreement: item
      });
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/agreementPhonePage?id=${item.id}`
        // 이동할 페이지 경로
      });
    },
    clickAgreementInternetDetail(item) {
      common_vendor.index.setStorageSync("agreementItem", {
        agreement: item
      });
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/agreementInternetPage?id=${item.id}`
        // 이동할 페이지 경로
      });
    }
  },
  async onLoad() {
    const categoryData = common_vendor.index.getStorageSync("agreementCategory");
    const now = Date.now();
    if (categoryData && categoryData.expiry > now) {
      this.categorys = categoryData.category;
      this.agreementList = categoryData.agreementList;
      if (this.categorys[0]) {
        if (this.categorys[0].child[0]) {
          if (this.categorys[0].child[0].hot) {
            this.hotCategoryActive(this.categorys[0].id, this.categorys[0].child[0].id, this.categorys[0].child[0].name);
          } else {
            this.categoryActive(this.categorys[0].id, this.categorys[0].child[0].id);
          }
        }
      }
      return;
    }
    let list = await utill_request.servicePost("app/agreement/list");
    let category = utill_common.listTrees(list.category);
    const expiry = now + 24 * 60 * 60 * 1e3;
    common_vendor.index.setStorageSync("agreementCategory", {
      category,
      agreementList: list.agreementList,
      cardSales: list.cardSales,
      expiry
    });
    this.categorys = category;
    this.agreementList = list.agreementList;
    if (this.categorys[0]) {
      if (this.categorys[0].child[0]) {
        if (this.categorys[0].child[0].hot) {
          this.hotCategoryActive(this.categorys[0].id, this.categorys[0].child[0].id, this.categorys[0].child[0].name);
        } else {
          this.categoryActive(this.categorys[0].id, this.categorys[0].child[0].id);
        }
      }
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
      title: "合约商品"
    }),
    b: common_vendor.f($setup.categorys, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id == $setup.cutturn ? 1 : "",
        c: common_vendor.f(item.child, (menu, k1, i1) => {
          return {
            a: common_vendor.t(menu.name),
            b: item.id === $setup.cutturn && menu.id === $setup.cutturnCategory ? 1 : "",
            c: item.id === $setup.cutturn && menu.id === $setup.cutturnCategory ? 1 : "",
            d: common_vendor.o(($event) => menu.hot ? $options.hotCategoryActive(item.id, menu.id, menu.name) : $options.categoryActive(item.id, menu.id))
          };
        }),
        d: "6236bcbc-2-" + i0 + ",6236bcbc-1",
        e: common_vendor.p({
          ["show-arrow"]: false,
          border: true,
          ["show-animation"]: true,
          open: item.id == $setup.cutturn
        })
      };
    }),
    c: common_vendor.p({
      accordion: true
    }),
    d: common_vendor.f($setup.activeAgreementList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.mobile < 4
      }, item.mobile < 4 ? {
        b: item.img,
        c: common_vendor.t(item.store),
        d: common_vendor.t(item.color)
      } : {
        e: item.img
      }, {
        f: common_vendor.t(item.title),
        g: item.mobile < 4
      }, item.mobile < 4 ? {
        h: common_vendor.t($setup.formattedPrice(item.price)),
        i: common_vendor.t($setup.formattedPrice(item.phoneCashSupport)),
        j: common_vendor.t($setup.formattedPrice(item.shopCashSupport)),
        k: common_vendor.t($setup.formattedPrice(item.sale_price)),
        l: common_vendor.t($setup.formattedPrice(item.month_price))
      } : {
        m: common_vendor.t($setup.formattedPrice(item.shopCashSupport)),
        n: common_vendor.t($setup.formattedPrice(item.month_price))
      }, {
        o: common_vendor.o(($event) => item.mobile < 4 ? $options.clickAgreementPhoneDetail(item) : $options.clickAgreementInternetDetail(item))
      });
    }),
    e: $setup.screenHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6236bcbc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/agreementPage/index.js.map
