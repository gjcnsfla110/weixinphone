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
  computed: {},
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
    const installmentList = [{ name: "24个月", value: 24 }, { name: "36个月", value: 36 }, { name: "48个月", value: 48 }];
    const installment = common_vendor.ref(24);
    const plans = common_vendor.ref([]);
    const cards = common_vendor.ref([]);
    const saleType = [{ name: "选择优惠方式", type: 0 }, { name: "话 费 优 惠 25%", type: 1 }, { name: "手 机 价 格 优 惠", type: 2 }];
    const saleTypeShow = common_vendor.ref(false);
    const saleTypeVal = common_vendor.ref(0);
    const saleTypeText = common_vendor.ref("");
    const planShow = common_vendor.ref(false);
    const planPrice = common_vendor.ref(0);
    const planText = common_vendor.ref("");
    const planDetail = common_vendor.ref("无套餐信息，请先选择话费套餐!");
    const checkPlan = common_vendor.ref({ title: "请选话费套餐", price: 0, phone_sale: 0, detail: "无套餐信息，请先选择话费套餐!" });
    const cardShow = common_vendor.ref(false);
    const creditCardSale = common_vendor.ref(0);
    const cardName = common_vendor.ref("未选银行");
    const phoneSale = common_vendor.ref(0);
    const feeSale = common_vendor.ref(0);
    const monthPhonePrice = common_vendor.ref(0);
    const monthFeePrice = common_vendor.ref(0);
    const monthTotalPrice = common_vendor.ref(0);
    const phonePrice = common_vendor.ref(0);
    common_vendor.watch([saleTypeVal, planPrice, creditCardSale, installment], ([newSaleTypeVal, newPlanPrice, newCreditCardSale, newInstallment]) => {
      if (saleTypeVal.value == 1) {
        planDetail.value = checkPlan.value.detail;
        phoneSale.value = 0;
        feeSale.value = planPrice.value * 0.25 * 24;
        monthFeePrice.value = planPrice.value * 0.75;
        monthPhonePrice.value = Math.round(Number(item.value.price - creditCardSale.value) / installment.value);
        phonePrice.value = item.value.price - creditCardSale.value;
        monthTotalPrice.value = Number(monthFeePrice.value) + Number(monthPhonePrice.value);
      } else if (saleTypeVal.value == 2) {
        planDetail.value = checkPlan.value.detail;
        phoneSale.value = checkPlan.value.phone_sale;
        feeSale.value = 0;
        monthFeePrice.value = planPrice.value;
        monthPhonePrice.value = Math.round(Number(item.value.price - phoneSale.value - creditCardSale.value) / installment.value);
        phonePrice.value = item.value.price - phoneSale.value - creditCardSale.value;
        monthTotalPrice.value = Number(monthFeePrice.value) + Number(monthPhonePrice.value);
      } else {
        phoneSale.value = 0;
        feeSale.value = 0;
        monthFeePrice.value = 0;
        monthPhonePrice.value = 0;
        phonePrice.value = item.value.price;
        checkPlan.value = { id: 0, agreement_id: 0, title: "请选话费套餐", price: 0, phone_sale: 0, detail: "无套餐信息，请先选择话费套餐!", ranking: 50 };
        monthTotalPrice.value = 0;
      }
    });
    const popup = common_vendor.ref("");
    common_vendor.ref("");
    return {
      item,
      formattedPrice: utill_common.formattedPrice,
      currentBanner,
      dotsStyles,
      items,
      current,
      popup,
      saleType,
      saleTypeShow,
      saleTypeVal,
      saleTypeText,
      plans,
      planShow,
      planPrice,
      planText,
      planDetail,
      checkPlan,
      cards,
      cardShow,
      creditCardSale,
      cardName,
      monthPhonePrice,
      monthFeePrice,
      phonePrice,
      phoneSale,
      feeSale,
      installmentList,
      installment,
      monthTotalPrice
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
    changeSaleType(e) {
      this.saleTypeVal = e[0].value;
      this.saleTypeText = e[0].label;
    },
    changePlan(e) {
      this.planPrice = e[0].value;
      this.planText = e[0].label;
      this.checkPlan = this.plans.filter((item) => item.price == e[0].value)[0];
    },
    changeCardSale(e) {
      this.creditCardSale = Number(e[0].value);
      this.cardName = e[0].label;
    },
    openPopup(type) {
      this.$refs.popup.open(type);
    },
    closePopup(type) {
      this.$refs.popup.close();
    },
    checkinstallment(val) {
      this.installment = val;
    },
    openAlertDialog() {
      this.$refs.alertDialog.open();
    }
  },
  async onLoad(op) {
    const storegeItem = common_vendor.index.getStorageSync("agreementItem");
    const agreement = common_vendor.index.getStorageSync("agreementCategory");
    if (storegeItem) {
      this.item = storegeItem.agreement;
      this.phonePrice = this.item.price;
    } else {
      this.item = await utill_request.servicePost("app/agreement/item/detail", { id: op.id });
      this.phonePrice = this.item.price;
    }
    const planList = await utill_request.servicePost("app/agreement/plan/list", { id: op.id });
    this.plans = [{ id: 0, agreement_id: 0, title: "请选话费套餐", price: 0, phone_sale: 0, detail: "无套餐信息，请先选择话费套餐!", ranking: 50 }, ...planList.plans];
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
  const _easycom_u_select2 = common_vendor.resolveComponent("u-select");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  (_component_CustomNav + _easycom_uni_swiper_dot2 + _easycom_uni_segmented_control2 + _easycom_u_select2 + _easycom_uni_popup2 + _easycom_uni_popup_dialog2)();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_u_select = () => "../../node-modules/uview-pro/components/u-select/u-select.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
if (!Math) {
  (_easycom_uni_swiper_dot + _easycom_uni_segmented_control + _easycom_u_select + _easycom_uni_popup + _easycom_uni_popup_dialog)();
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
    g: common_assets._imports_0$3,
    h: common_assets._imports_0$3,
    i: common_assets._imports_0$3,
    j: common_assets._imports_0$3,
    k: common_assets._imports_0$3,
    l: common_vendor.o($options.onClickItem),
    m: common_vendor.p({
      current: $setup.current,
      values: $setup.items,
      styleType: "button",
      activeColor: "rgb(222, 11, 124)"
    }),
    n: common_vendor.t($setup.formattedPrice($setup.item.shopCashSupport)),
    o: common_vendor.f($setup.installmentList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($setup.installment == item.value ? "installmenText installmentActive" : "installmenText"),
        c: common_vendor.o(($event) => $options.checkinstallment(item.value))
      };
    }),
    p: common_vendor.t($setup.formattedPrice($setup.item.price)),
    q: common_vendor.o($options.changeCardSale),
    r: common_vendor.o(($event) => $setup.cardShow = $event),
    s: common_vendor.p({
      list: $setup.cards,
      ["label-name"]: "card_company",
      ["value-name"]: "sale",
      mode: "single-column",
      modelValue: $setup.cardShow
    }),
    t: $setup.creditCardSale
  }, $setup.creditCardSale ? {
    v: common_vendor.t($setup.formattedPrice($setup.creditCardSale)),
    w: common_vendor.o(($event) => $setup.cardShow = true)
  } : {
    x: common_vendor.o(($event) => $setup.cardShow = true)
  }, {
    y: common_vendor.o($options.changeSaleType),
    z: common_vendor.o(($event) => $setup.saleTypeShow = $event),
    A: common_vendor.p({
      list: $setup.saleType,
      ["label-name"]: "name",
      ["value-name"]: "type",
      mode: "single-column",
      modelValue: $setup.saleTypeShow
    }),
    B: $setup.saleTypeVal
  }, $setup.saleTypeVal ? {
    C: common_vendor.t($setup.saleTypeText),
    D: common_vendor.o(($event) => $setup.saleTypeShow = true)
  } : {
    E: common_vendor.o(($event) => $setup.saleTypeShow = true)
  }, {
    F: common_vendor.o($options.changePlan),
    G: common_vendor.o(($event) => $setup.planShow = $event),
    H: common_vendor.p({
      list: $setup.plans,
      ["label-name"]: "title",
      ["value-name"]: "price",
      mode: "single-column",
      modelValue: $setup.planShow
    }),
    I: $setup.planPrice && $setup.saleTypeVal
  }, $setup.planPrice && $setup.saleTypeVal ? {
    J: common_vendor.t($setup.planText),
    K: common_vendor.o(($event) => $setup.planShow = true)
  } : common_vendor.e({
    L: $setup.saleTypeVal
  }, $setup.saleTypeVal ? {
    M: common_vendor.o(($event) => $setup.planShow = true)
  } : {
    N: common_vendor.o((...args) => $options.openAlertDialog && $options.openAlertDialog(...args))
  }), {
    O: $setup.phoneSale
  }, $setup.phoneSale ? {
    P: common_vendor.t($setup.formattedPrice($setup.phoneSale)),
    Q: common_vendor.t($setup.formattedPrice($setup.phonePrice))
  } : {}, {
    R: $setup.feeSale
  }, $setup.feeSale ? {
    S: common_vendor.t($setup.formattedPrice($setup.monthFeePrice)),
    T: common_vendor.t($setup.formattedPrice($setup.feeSale))
  } : {}, {
    U: common_vendor.t($setup.planDetail),
    V: $setup.saleTypeVal && $setup.planPrice
  }, $setup.saleTypeVal && $setup.planPrice ? {} : {}, {
    W: $setup.current === 0,
    X: common_vendor.t($setup.item.detail),
    Y: $setup.saleTypeVal && $setup.planPrice
  }, $setup.saleTypeVal && $setup.planPrice ? {} : {}, {
    Z: $setup.current === 1,
    aa: $setup.saleTypeVal && $setup.planPrice
  }, $setup.saleTypeVal && $setup.planPrice ? common_vendor.e({
    ab: common_vendor.t($setup.formattedPrice($setup.monthPhonePrice)),
    ac: common_vendor.t($setup.formattedPrice($setup.monthFeePrice)),
    ad: common_vendor.t($setup.formattedPrice($setup.monthTotalPrice)),
    ae: common_vendor.o(($event) => $options.openPopup("bottom")),
    af: common_vendor.t($setup.item.title),
    ag: common_vendor.t($setup.formattedPrice($setup.item.price)),
    ah: common_vendor.t($setup.formattedPrice($setup.planPrice)),
    ai: common_vendor.t($setup.formattedPrice($setup.monthTotalPrice)),
    aj: common_vendor.t($setup.item.title),
    ak: common_vendor.t($setup.item.store),
    al: common_vendor.t($setup.item.color),
    am: common_vendor.t($setup.formattedPrice($setup.item.shopCashSupport)),
    an: common_vendor.t($setup.formattedPrice($setup.cardName)),
    ao: common_vendor.t($setup.formattedPrice($setup.creditCardSale)),
    ap: common_vendor.t($setup.installment),
    aq: common_vendor.t($setup.formattedPrice($setup.monthPhonePrice)),
    ar: common_vendor.t($setup.formattedPrice($setup.monthFeePrice)),
    as: $setup.feeSale
  }, $setup.feeSale ? {
    at: common_vendor.t($setup.formattedPrice($setup.feeSale))
  } : {}, {
    av: $setup.phoneSale
  }, $setup.phoneSale ? {
    aw: common_vendor.t($setup.formattedPrice($setup.phoneSale))
  } : {}, {
    ax: $setup.saleTypeVal == 2
  }, $setup.saleTypeVal == 2 ? {
    ay: common_vendor.t($setup.formattedPrice($setup.phonePrice))
  } : {}, {
    az: common_vendor.t($setup.planDetail),
    aA: common_vendor.t($setup.formattedPrice($setup.monthTotalPrice)),
    aB: common_vendor.o((...args) => $options.closePopup && $options.closePopup(...args)),
    aC: common_vendor.sr("popup", "106ac328-6"),
    aD: common_vendor.p({
      ["background-color"]: "#fff"
    })
  }) : {}, {
    aE: common_vendor.p({
      type: "error",
      cancelText: "关闭",
      title: "通知",
      confirmText: "确认"
    }),
    aF: common_vendor.sr("alertDialog", "106ac328-7"),
    aG: common_vendor.p({
      type: "dialog"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-106ac328"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/itemPage/agreementPhonePage.js.map
