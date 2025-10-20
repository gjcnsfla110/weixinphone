"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
const utill_request = require("../../utill/request.js");
const utill_common = require("../../utill/common.js");
const common_assets = require("../../common/assets.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    CustomNav
  },
  props: {},
  setup(props, context) {
    const cutturn = common_vendor.ref(0);
    const cutturnCategory = common_vendor.ref(1);
    const screenHeight = common_vendor.ref(utill_systemData.getNaviBar().screen());
    const categorys = common_vendor.ref([]);
    const usimtList = common_vendor.ref([]);
    const activeUsimList = common_vendor.ref([]);
    return {
      formattedPrice: utill_common.formattedPrice,
      cutturn,
      cutturnCategory,
      screenHeight,
      categorys,
      usimtList,
      activeUsimList
    };
  },
  methods: {
    //유심카테고리 클릭시 이벤트부분
    categoryActive(cutturnId, cutturnCategory) {
      this.cutturn = cutturnId;
      this.cutturnCategory = cutturnCategory;
      this.activeUsimList = this.usimtList.filter((item) => item.category_id == cutturnCategory);
    },
    //핫한유심 카테고리 클릭시 이벤트부분
    hotCategoryActive(cutturnId, cutturnCategory, name) {
      this.cutturn = cutturnId;
      this.cutturnCategory = cutturnCategory;
      if (name == "推荐套餐") {
        this.activeUsimList = this.usimtList.filter((item) => item.mobile_name.endsWith("알뜰통신") && item.hot == 1);
      } else if (name == "预付卡") {
        this.activeUsimList = this.usimtList.filter((item) => item.mobile_name.endsWith("선불통신") && item.hot == 1);
      }
    },
    clickUsimDetail(item) {
      common_vendor.index.setStorageSync("usimItem", {
        usim: item
      });
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/usimItemPage?id=${item.id}`
        // 이동할 페이지 경로
      });
    }
  },
  async onLoad() {
    const usimData = common_vendor.index.getStorageSync("usimListData");
    const now = Date.now();
    if (usimData && usimData.expiry > now) {
      this.categorys = usimData.category;
      this.usimtList = usimData.usimList;
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
    let list = await utill_request.servicePost("app/usim/list");
    let category = utill_common.listTrees(list.category);
    const expiry = now + 24 * 60 * 60 * 1e3;
    common_vendor.index.setStorageSync("usimListData", {
      category,
      usimList: list.usims,
      expiry
    });
    this.categorys = category;
    this.usimtList = list.usims;
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
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_component_CustomNav + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.categorys, (item, k0, i0) => {
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
        d: "715a7735-2-" + i0 + ",715a7735-1",
        e: common_vendor.p({
          ["show-arrow"]: false,
          border: true,
          ["show-animation"]: true,
          open: item.id == $setup.cutturn
        })
      };
    }),
    b: common_vendor.p({
      accordion: true
    }),
    c: common_vendor.f($setup.activeUsimList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.mobile_name),
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.tell_time),
        d: common_vendor.t(item.data),
        e: common_vendor.t(item.mns),
        f: common_vendor.t(item.mobile_type),
        g: common_vendor.t($setup.formattedPrice(item.price)),
        h: common_vendor.o(($event) => $options.clickUsimDetail(item))
      };
    }),
    d: common_assets._imports_0,
    e: common_assets._imports_1,
    f: common_assets._imports_2,
    g: common_assets._imports_3,
    h: common_assets._imports_4,
    i: common_assets._imports_5,
    j: $setup.screenHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-715a7735"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/simCard/simCard.js.map
