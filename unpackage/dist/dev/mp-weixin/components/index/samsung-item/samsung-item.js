"use strict";
const common_vendor = require("../../../common/vendor.js");
const LoadingView = () => "../../../utill/LoadingView.js";
const SwiperBanner = () => "../../Img/swiperBanner.js";
const ItemContentList = () => "../../item/itemContentList.js";
const ItemContentOne = () => "../../item/itemContentOne.js";
const ItemContentTitle = () => "../../item/itemContentTitle.js";
const ItemContentTwo = () => "../../item/itemContentTwo.js";
const ItemList = () => "../../item/itemList.js";
const ItemNew = () => "../../item/itemNew.js";
const ItemScrollView = () => "../../item/itemScrollView.js";
const ItemTitle = () => "../../item/itemTitle.js";
const ImgBanner = () => "../../Img/imgBanner.js";
const OneImg = () => "../../Img/oneImg.js";
const SwiperImg = () => "../../Img/swiperImg.js";
const _sfc_main = {
  components: {
    LoadingView,
    ItemScrollView,
    ItemContentList,
    SwiperBanner,
    ItemTitle,
    ItemNew,
    ItemList,
    ImgBanner,
    OneImg,
    SwiperImg,
    ItemContentOne,
    ItemContentTitle,
    ItemContentTwo
  },
  props: {
    samsungData: {
      type: Array,
      default: []
    },
    height: {
      type: Number,
      default: 0
    }
  },
  emits: [],
  setup(props, context) {
    const banner = common_vendor.ref({ id: 0 });
    const componentData = common_vendor.ref([]);
    common_vendor.watch(
      () => props.samsungData,
      (newSamsungData) => {
        if (newSamsungData && newSamsungData.length > 0 && newSamsungData[0].components) {
          const swiperBanner = newSamsungData[0].components.find(
            (item) => item.component === "SwiperBanner"
          );
          banner.value = swiperBanner || { id: 0 };
          componentData.value = newSamsungData[0].components.filter(
            (item) => item.id !== banner.value.id
          );
        } else {
          banner.value = { id: 0 };
          componentData.value = [];
        }
      },
      { immediate: true, deep: true }
      // 즉시 실행 및 깊은 감지 설정
    );
    return {
      banner,
      componentData
    };
  },
  methods: {}
};
if (!Array) {
  const _component_swiperBanner = common_vendor.resolveComponent("swiperBanner");
  const _component_ItemTitle = common_vendor.resolveComponent("ItemTitle");
  const _component_ItemNew = common_vendor.resolveComponent("ItemNew");
  const _component_ItemScrollView = common_vendor.resolveComponent("ItemScrollView");
  const _component_ItemContentList = common_vendor.resolveComponent("ItemContentList");
  const _component_SwiperImg = common_vendor.resolveComponent("SwiperImg");
  const _component_ItemContentOne = common_vendor.resolveComponent("ItemContentOne");
  const _component_ItemContentTitle = common_vendor.resolveComponent("ItemContentTitle");
  const _component_ItemContentTwo = common_vendor.resolveComponent("ItemContentTwo");
  const _component_ItemList = common_vendor.resolveComponent("ItemList");
  const _component_OneImg = common_vendor.resolveComponent("OneImg");
  const _component_ImgBanner = common_vendor.resolveComponent("ImgBanner");
  const _component_LoadingView = common_vendor.resolveComponent("LoadingView");
  (_component_swiperBanner + _component_ItemTitle + _component_ItemNew + _component_ItemScrollView + _component_ItemContentList + _component_SwiperImg + _component_ItemContentOne + _component_ItemContentTitle + _component_ItemContentTwo + _component_ItemList + _component_OneImg + _component_ImgBanner + _component_LoadingView)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.banner.id
  }, $setup.banner.id ? {
    b: common_vendor.p({
      componentData: $setup.banner
    })
  } : {}, {
    c: common_vendor.f($setup.componentData, (item, index, i0) => {
      return common_vendor.e({
        a: item.title
      }, item.title ? {
        b: item.page_key + index,
        c: "5f1400e6-2-" + i0 + ",5f1400e6-1",
        d: common_vendor.p({
          left: item.title,
          right: item.title1,
          more: item.more == 1
        })
      } : {}, {
        e: item.component == "ItemNew"
      }, item.component == "ItemNew" ? {
        f: item.page_key + index,
        g: "5f1400e6-3-" + i0 + ",5f1400e6-1",
        h: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemScrollView" ? {
        j: item.page_key + index,
        k: "5f1400e6-4-" + i0 + ",5f1400e6-1",
        l: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentList" ? {
        n: item.page_key + index,
        o: "5f1400e6-5-" + i0 + ",5f1400e6-1",
        p: common_vendor.p({
          itemData: item
        })
      } : item.component == "SwiperImg" ? {
        r: item.page_key + index,
        s: "5f1400e6-6-" + i0 + ",5f1400e6-1",
        t: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentOne" ? {
        w: item.page_key + index,
        x: "5f1400e6-7-" + i0 + ",5f1400e6-1",
        y: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentTitle" ? {
        A: item.page_key + index,
        B: "5f1400e6-8-" + i0 + ",5f1400e6-1",
        C: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentTwo" ? {
        E: item.page_key + index,
        F: "5f1400e6-9-" + i0 + ",5f1400e6-1",
        G: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemList" ? {
        I: item.page_key + index,
        J: "5f1400e6-10-" + i0 + ",5f1400e6-1",
        K: common_vendor.p({
          itemData: item
        })
      } : item.component == "OneImg" ? {
        M: item.page_key + index,
        N: "5f1400e6-11-" + i0 + ",5f1400e6-1",
        O: common_vendor.p({
          itemData: item
        })
      } : item.component == "ImgBanner" ? {
        Q: item.page_key + index,
        R: "5f1400e6-12-" + i0 + ",5f1400e6-1",
        S: common_vendor.p({
          itemData: item
        })
      } : {}, {
        i: item.component == "ItemScrollView",
        m: item.component == "ItemContentList",
        q: item.component == "SwiperImg",
        v: item.component == "ItemContentOne",
        z: item.component == "ItemContentTitle",
        D: item.component == "ItemContentTwo",
        H: item.component == "ItemList",
        L: item.component == "OneImg",
        P: item.component == "ImgBanner"
      });
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/index/samsung-item/samsung-item.js.map
