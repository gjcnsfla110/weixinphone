"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_systemData = require("../../utill/systemData.js");
const stores_mainData = require("../../stores/mainData.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const TopImg = () => "../../components/menu/rightTopImg.js";
const TopTextTitle = () => "../../components/menu/leftTopText.js";
const RightTitle = () => "../../components/menu/rightTopTitle.js";
const RightItemList = () => "../../components/menu/rightItemList.js";
const _sfc_main = {
  components: {
    CustomNav,
    TopImg,
    TopTextTitle,
    RightTitle,
    RightItemList
  },
  props: {},
  setup(props, context) {
    const mainStores = stores_mainData.useMainStores();
    const { accessoriesCategory, accessoriesSubCategory } = common_vendor.storeToRefs(mainStores);
    const topHeight = utill_systemData.getNaviBar().custumHeiht();
    const swiperHeightr = () => utill_systemData.getNaviBar().screen();
    const swiperHeight = common_vendor.ref(swiperHeightr());
    const activeBk = common_vendor.ref(1);
    const activeMenu = common_vendor.ref(1);
    const categoryName = common_vendor.ref("");
    const categoryImg = common_vendor.ref("");
    const rightSubMenu = common_vendor.ref([]);
    return {
      mainStores,
      topHeight,
      swiperHeight,
      activeBk,
      activeMenu,
      categoryName,
      categoryImg,
      rightSubMenu,
      accessoriesCategory,
      accessoriesSubCategory
    };
  },
  methods: {
    //제목없는 메뉴클릭(예iphone값이툴없는 메뉴클릭)
    subMenu(id, item) {
      this.activeMenu = id;
      this.activeBk = -50;
      this.categoryName = item.title;
      this.categoryImg = item.img;
      this.rightSubMenu = this.changeRightSubmenu(item.id);
    },
    //제목있는 메뉴 클릭시 (예iphone값이툴있는 메뉴클릭)
    subMenuTol(id, bkId, item) {
      this.activeMenu = id;
      this.activeBk = bkId;
      this.categoryName = item.title;
      this.categoryImg = item.img;
      this.rightSubMenu = this.changeRightSubmenu(item.id);
    },
    //오른쪽 서브메뉴 데이터를 체인지 함수
    changeRightSubmenu(id) {
      return this.accessoriesSubCategory.filter((item) => item.category_id == id);
    },
    // pinia 데이터를 받는 설정 부분
    async loadData() {
      if (!this.mainStores.isDataReady) {
        try {
          await this.mainStores.lodingMain();
        } catch (error) {
          common_vendor.index.__f__("error", "at pages/accessories/accessories.vue:135", "Error reloading data:", error);
        }
      }
    },
    //서브카테고리 리스트 쪽으로 넘어가기
    subMenuList(id) {
      common_vendor.index.setStorageSync("accessoriesTopSubMenu", JSON.stringify(this.rightSubMenu));
      common_vendor.index.navigateTo({
        url: `/pages/list/accessoriesList?id=${id}`
        // 이동할 페이지 경로
      });
    }
  },
  async onLoad() {
    try {
      await this.loadData();
      if (this.accessoriesCategory.length > 0) {
        const firstMenu = this.accessoriesCategory[0].id;
        const firstSub = this.accessoriesCategory[0].child[0] ? this.accessoriesCategory[0].child[0].id : 0;
        this.subMenuTol(firstSub, firstMenu, this.accessoriesCategory[0].child[0] ? this.accessoriesCategory[0].child[0] : { title: "商品", img: "" });
      }
    } catch (error) {
      common_vendor.index.__f__("error", "at pages/accessories/accessories.vue:157", "Error in onLoad:", error);
    }
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _component_TopTextTitle = common_vendor.resolveComponent("TopTextTitle");
  const _component_TopImg = common_vendor.resolveComponent("TopImg");
  const _component_RightTitle = common_vendor.resolveComponent("RightTitle");
  (_component_CustomNav + _component_TopTextTitle + _component_TopImg + _component_RightTitle)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "手机壳/配件"
    }),
    b: common_vendor.f($setup.accessoriesCategory, (item, k0, i0) => {
      return common_vendor.e({
        a: item.child.length < 1
      }, item.child.length < 1 ? {
        b: common_vendor.t(item.name),
        c: item.id == $setup.activeMenu ? 1 : "",
        d: common_vendor.o(($event) => $options.subMenu(item.id, item)),
        e: item.id == $setup.activeMenu ? 1 : ""
      } : {
        f: common_vendor.f(item.child, (sub, index, i1) => {
          return common_vendor.e({
            a: index == 0
          }, index == 0 ? {
            b: common_vendor.t(item.name),
            c: "7689e6f2-1-" + i0 + "-" + i1,
            d: common_vendor.p({
              color: item.id == $setup.activeBk ? item.color : item.color
            }),
            e: common_vendor.t(sub.name),
            f: sub.id == $setup.activeMenu ? 1 : "",
            g: item.color,
            h: sub.id == $setup.activeMenu ? 1 : "",
            i: common_vendor.o(($event) => $options.subMenuTol(sub.id, item.id, sub)),
            j: item.id == $setup.activeBk ? 1 : ""
          } : {
            k: common_vendor.t(sub.name),
            l: sub.id == $setup.activeMenu ? 1 : "",
            m: item.color,
            n: common_vendor.o(($event) => $options.subMenuTol(sub.id, item.id, sub)),
            o: item.id == $setup.activeBk ? 1 : "",
            p: sub.id == $setup.activeMenu ? 1 : ""
          });
        })
      });
    }),
    c: $setup.swiperHeight + "px",
    d: common_vendor.p({
      src: $setup.categoryImg
    }),
    e: common_vendor.t($setup.categoryName),
    f: common_vendor.f($setup.rightSubMenu, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => $options.subMenuList(item.id))
      };
    }),
    g: $setup.swiperHeight + "px",
    h: $setup.swiperHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7689e6f2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/accessories/accessories.js.map
