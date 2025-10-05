"use strict";
const common_vendor = require("../../common/vendor.js");
const utill_request = require("../../utill/request.js");
const utill_common = require("../../utill/common.js");
const common_assets = require("../../common/assets.js");
const CustomNav = () => "../../components/custom-nav-bar/customNav.js";
const SwiperImg = () => "../../components/pageDetail/swiperImg.js";
const _sfc_main = {
  components: {
    CustomNav,
    SwiperImg
  },
  props: {},
  setup(props, context) {
    const item = common_vendor.ref({});
    const currentBanner = common_vendor.ref(0);
    const dotsStyles = {
      backgroundColor: "rgba(255, 255, 255)",
      selectedBackgroundColor: "rgba(120, 120, 120)",
      selectedBorder: "1rpx rgba(120, 120, 120) solid"
    };
    const items = ["每月话费", "详细内容"];
    const current = common_vendor.ref(0);
    const plans = common_vendor.ref([]);
    const cards = common_vendor.ref([]);
    const saleType = [{ name: "话 费 优 惠 25%", type: 0 }, { name: "手 机 价 格 优 惠", type: 1 }];
    const oneIndex = common_vendor.ref(0);
    const oneIndex1 = common_vendor.ref(1e3);
    const twoIndex = common_vendor.ref(0);
    const twoIndex1 = common_vendor.ref(1e3);
    const checkPlanPrice = common_vendor.ref(0);
    const threeIndex = common_vendor.ref(1e3);
    const phoneSale = common_vendor.ref(0);
    const feeSale = common_vendor.ref(0);
    const creditCardSale = common_vendor.ref(0);
    common_vendor.watch([oneIndex, twoIndex], ([newIndex, newIndex1]) => {
      if (oneIndex.value) {
        checkPlanPrice.value = plans.value[twoIndex.value].price;
      } else {
        checkPlanPrice.value = plans.value[twoIndex.value].price * 0.75;
      }
      common_vendor.index.__f__("log", "at pages/itemPage/agreementPhonePage.vue:191", checkPlanPrice.value);
    });
    const popup = common_vendor.ref("");
    return {
      item,
      formattedPrice: utill_common.formattedPrice,
      currentBanner,
      dotsStyles,
      items,
      current,
      plans,
      cards,
      oneIndex,
      oneIndex1,
      twoIndex,
      twoIndex1,
      threeIndex,
      saleType,
      phoneSale,
      feeSale,
      creditCardSale,
      checkPlanPrice,
      popup
    };
  },
  methods: {
    changeBanner(e) {
      this.currentBanner = e.detail.current;
    },
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    bindPickerChangeOne(e) {
      this.oneIndex = e.detail.value;
      this.oneIndex1 = e.detail.value;
    },
    bindPickerChangetwo(e) {
      this.twoIndex = e.detail.value;
      this.twoIndex1 = e.detail.value;
      this.phoneSale = Number(this.plans[e.detail.value].phone_sale);
      this.feeSale = this.plans[e.detail.value].price * 0.25 * 24;
    },
    bindPickerChangeThree(e) {
      this.threeIndex = e.detail.value;
      this.creditCardSale = this.cards[e.detail.value].sale;
      common_vendor.index.__f__("log", "at pages/itemPage/agreementPhonePage.vue:239", this.creditCardSale);
    },
    openPopup(type) {
      this.$refs.popup.open(type);
    },
    closePopup(type) {
      this.$refs.popup.close();
    }
  },
  async onLoad(op) {
    const storegeItem = common_vendor.index.getStorageSync("agreementItem");
    const agreement = common_vendor.index.getStorageSync("agreementCategory");
    if (storegeItem) {
      this.item = storegeItem.agreement;
    } else {
      this.item = await utill_request.servicePost("app/agreement/item/detail", { id: op.id });
    }
    const agreementList = await utill_request.servicePost("app/agreement/plan/list", { id: op.id });
    this.plans = agreementList.plans;
    if (agreement) {
      this.cards = agreement.cardSales.filter((item) => item.mobile = this.item.mobile);
      this.cards = [{ card_company: "无信用卡", sale: 0 }, ...this.cards];
    }
  }
};
if (!Array) {
  const _component_CustomNav = common_vendor.resolveComponent("CustomNav");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_CustomNav + _easycom_uni_swiper_dot2 + _easycom_uni_segmented_control2 + _easycom_uni_popup2)();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_swiper_dot + _easycom_uni_segmented_control + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      back: true
    }),
    b: common_vendor.f(JSON.parse($setup.item.banner), (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    c: common_vendor.o((...args) => $options.changeBanner && $options.changeBanner(...args)),
    d: common_vendor.p({
      ["dots-styles"]: $setup.dotsStyles,
      current: $setup.currentBanner,
      info: JSON.parse($setup.item.banner),
      mode: "round",
      field: "content"
    })
  }, {}, {
    e: common_vendor.t($setup.item.title),
    f: common_vendor.t($setup.item.store),
    g: common_assets._imports_0$2,
    h: common_assets._imports_0$2,
    i: common_assets._imports_0$2,
    j: common_assets._imports_0$2,
    k: common_assets._imports_0$2,
    l: common_vendor.o($options.onClickItem),
    m: common_vendor.p({
      current: $setup.current,
      values: $setup.items,
      styleType: "button",
      activeColor: "rgb(222, 11, 124)"
    }),
    n: common_vendor.t($setup.formattedPrice($setup.item.shopCashSupport)),
    o: $setup.oneIndex1 != 1e3
  }, $setup.oneIndex1 != 1e3 ? {
    p: common_vendor.t($setup.saleType[$setup.oneIndex].name)
  } : {}, {
    q: common_vendor.o((...args) => $options.bindPickerChangeOne && $options.bindPickerChangeOne(...args)),
    r: $setup.oneIndex,
    s: $setup.saleType,
    t: $setup.twoIndex1 != 1e3
  }, $setup.twoIndex1 != 1e3 ? {
    v: common_vendor.t($setup.plans[$setup.twoIndex].title)
  } : {}, {
    w: common_vendor.o((...args) => $options.bindPickerChangetwo && $options.bindPickerChangetwo(...args)),
    x: $setup.twoIndex,
    y: $setup.plans,
    z: $setup.twoIndex1 != 1e3
  }, $setup.twoIndex1 != 1e3 ? {
    A: common_vendor.t($setup.plans[$setup.twoIndex].detail ? $setup.plans[$setup.twoIndex].detail : "")
  } : {}, {
    B: $setup.twoIndex1 != 1e3 && $setup.oneIndex1 != 1e3
  }, $setup.twoIndex1 != 1e3 && $setup.oneIndex1 != 1e3 ? common_vendor.e({
    C: $setup.oneIndex
  }, $setup.oneIndex ? {
    D: common_vendor.t($setup.formattedPrice($setup.phoneSale))
  } : {
    E: common_vendor.t($setup.formattedPrice($setup.feeSale))
  }) : {}, {
    F: $setup.threeIndex != 1e3
  }, $setup.threeIndex != 1e3 ? {
    G: common_vendor.t($setup.formattedPrice($setup.creditCardSale * 24))
  } : {}, {
    H: common_vendor.o((...args) => $options.bindPickerChangeThree && $options.bindPickerChangeThree(...args)),
    I: $setup.threeIndex,
    J: $setup.cards,
    K: $setup.current === 0,
    L: common_vendor.t($setup.item.detail),
    M: $setup.current === 1,
    N: common_vendor.t($setup.formattedPrice($setup.item.price)),
    O: common_vendor.o(($event) => $options.openPopup("bottom")),
    P: common_vendor.sr("popup", "106ac328-3"),
    Q: common_vendor.o(() => {
    }),
    R: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-106ac328"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/agreementPhonePage.js.map
