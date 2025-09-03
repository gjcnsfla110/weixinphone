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
    mainData: {
      type: Array,
      default: []
    },
    height: {
      type: Number,
      default: 0
    },
    subMenu: {
      type: Array,
      default: []
    }
  },
  emits: [],
  setup(props, context) {
    const banner = common_vendor.ref({});
    banner.value = props.mainData[0].components.filter((item) => item.component == "SwiperBanner")[0] ? props.mainData[0].components.filter((item) => item.component == "SwiperBanner")[0] : { id: 0 };
    const componentData = common_vendor.ref(props.mainData[0].components.filter((item) => item.id !== banner.value.id));
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
  return {
    a: common_vendor.p({
      componentData: $setup.banner
    }),
    b: common_vendor.f($props.subMenu, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name)
      };
    }),
    c: common_vendor.f($setup.componentData, (item, k0, i0) => {
      return common_vendor.e({
        a: item.title
      }, item.title ? {
        b: "b080f363-2-" + i0 + ",b080f363-1",
        c: common_vendor.p({
          left: item.title,
          right: item.title1,
          more: item.more == 1
        })
      } : {}, {
        d: item.component == "ItemNew"
      }, item.component == "ItemNew" ? {
        e: "b080f363-3-" + i0 + ",b080f363-1",
        f: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemScrollView" ? {
        h: "b080f363-4-" + i0 + ",b080f363-1",
        i: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentList" ? {
        k: "b080f363-5-" + i0 + ",b080f363-1",
        l: common_vendor.p({
          itemData: item
        })
      } : item.component == "SwiperImg" ? {
        n: "b080f363-6-" + i0 + ",b080f363-1",
        o: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentOne" ? {
        q: "b080f363-7-" + i0 + ",b080f363-1",
        r: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentTitle" ? {
        t: "b080f363-8-" + i0 + ",b080f363-1",
        v: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemContentTwo" ? {
        x: "b080f363-9-" + i0 + ",b080f363-1",
        y: common_vendor.p({
          itemData: item
        })
      } : item.component == "ItemList" ? {
        A: "b080f363-10-" + i0 + ",b080f363-1",
        B: common_vendor.p({
          itemData: item
        })
      } : item.component == "OneImg" ? {
        D: "b080f363-11-" + i0 + ",b080f363-1",
        E: common_vendor.p({
          itemData: item
        })
      } : item.component == "ImgBanner" ? {
        G: "b080f363-12-" + i0 + ",b080f363-1",
        H: common_vendor.p({
          itemData: item
        })
      } : {}, {
        g: item.component == "ItemScrollView",
        j: item.component == "ItemContentList",
        m: item.component == "SwiperImg",
        p: item.component == "ItemContentOne",
        s: item.component == "ItemContentTitle",
        w: item.component == "ItemContentTwo",
        z: item.component == "ItemList",
        C: item.component == "OneImg",
        F: item.component == "ImgBanner"
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b080f363"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/index/hot-item/hot-item.js.map
