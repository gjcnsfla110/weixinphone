"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
const utill_request = require("../../utill/request.js");
const utill_common = require("../../utill/common.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const _sfc_main = {
  components: {
    CustomNav
  },
  props: {},
  setup(props, context) {
    const screenHeight = utill_systemData.getNaviBar().noTabScreen() - 100;
    const loadingStatus = common_vendor.ref("more");
    const color = common_vendor.ref("rgb(255, 128, 0)");
    const activeSubMenuId = common_vendor.ref(0);
    const subMenus = common_vendor.ref([]);
    const itemList = common_vendor.ref([]);
    const currentPage2 = common_vendor.ref(1);
    const limit = 10;
    return {
      servicePost: utill_request.servicePost,
      itemList,
      screenHeight,
      loadingStatus,
      contentText: {
        contentdown: "下拉可看更多商品~",
        contentrefresh: "加载中",
        contentnomore: "没有更多商品"
      },
      color,
      activeSubMenuId,
      currentPage: currentPage2,
      limit,
      subMenus,
      formattedPrice: utill_common.formattedPrice
    };
  },
  methods: {
    async fetchData(subMenuId, page, isRefresh = false) {
      if (this.loadingStatus == "loading")
        return;
      this.activeSubMenuId = subMenuId;
      this.loadingStatus = "loading";
      try {
        const res = await this.servicePost("app/accessoriesSubCategory/accessories/list", { subMenuId, page, limit: this.limit });
        const { list, total } = res;
        if (isRefresh) {
          this.itemList = [];
        }
        this.itemList = [...this.itemList, ...list];
        if (this.itemList.length >= total || list.length < this.limit) {
          this.loadingStatus = "noMore";
        } else {
          this.loadingStatus = "more";
          currentPage.value = page + 1;
        }
      } catch (error) {
        common_vendor.index.__f__("log", "at pages/list/accessoriesList.vue:105", error);
        this.loadingStatus = "noMore";
        common_vendor.index.showToast({ title: "加在商品失败！联系客服。", icon: "none" });
      }
    },
    changeSubMenu(id) {
      this.activeSubMenuId = id;
      this.currentPage = 1;
      this.fetchData(id, 1, true);
    },
    downSrolltolower() {
      if (this.loadingStatus === "more") {
        this.fetchData(this.activeSubMenuId, this.currentPage);
      }
    },
    clickAccessoriesDetail(item) {
      common_vendor.index.setStorageSync("accessoriesItem", {
        accessories: item
      });
      common_vendor.index.navigateTo({
        url: `/pages/itemPage/accessoriesPage?id=${item.id}`
        // 이동할 페이지 경로
      });
    }
  },
  onLoad(op) {
    this.fetchData(op.id, 1, true);
    this.subMenus = JSON.parse(common_vendor.index.getStorageSync("accessoriesTopSubMenu"));
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_CustomNav + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.subMenus, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: item.id == $setup.activeSubMenuId ? 1 : "",
        d: $setup.activeSubMenuId == item.id ? "rgb(255, 128, 0)" : "rgb(160, 160, 160)",
        e: common_vendor.o(($event) => $options.changeSubMenu(item.id))
      };
    }),
    b: common_vendor.p({
      back: true,
      topHeight: 110
    }),
    c: common_vendor.f($setup.itemList, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.material),
        d: common_vendor.t(item.color),
        e: common_vendor.t($setup.formattedPrice(item.price)),
        f: common_vendor.o(($event) => $options.clickAccessoriesDetail(item))
      };
    }),
    d: common_vendor.p({
      status: $setup.loadingStatus,
      iconSize: 30,
      iconType: "circle",
      ["content-text"]: $setup.contentText,
      color: $setup.color
    }),
    e: $setup.screenHeight + "px",
    f: common_vendor.o((...args) => $options.downSrolltolower && $options.downSrolltolower(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-98ffd525"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/list/accessoriesList.js.map
