"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (BarnerImg + Title + ContentTitle + ContentList + SwiperImg + ScrollViewItem + ContentTwo + OneImg + ContentOne + ItemList)();
}
const BarnerImg = () => "../../Img/imgBanner.js";
const ContentTitle = () => "../../item/itemContentTitle.js";
const Title = () => "../../item/itemTitle.js";
const ContentList = () => "../../item/itemContentList.js";
const SwiperImg = () => "../../Img/swiperImg.js";
const ScrollViewItem = () => "../../item/itemScrollView.js";
const OneImg = () => "../../Img/oneImg.js";
const ContentOne = () => "../../item/itemContentOne.js";
const ContentTwo = () => "../../item/itemContentTwo.js";
const ItemList = () => "../../item/itemList.js";
const _sfc_main = {
  __name: "samsung-item",
  setup(__props) {
    const data = common_vendor.ref([
      {
        src: "/images/testImg/ss1.jpg"
      },
      {
        src: "/images/testImg/ss2.jpg"
      },
      {
        src: "/images/testImg/ss3.jpg"
      },
      {
        src: "/images/testImg/ss4.jpg"
      },
      {
        src: "/images/testImg/ss5.jpg"
      },
      {
        src: "/images/testImg/ss6.jpg"
      },
      {
        src: "/images/testImg/ss7.jpg"
      },
      {
        src: "/images/testImg/ss8.jpg"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          src: "https://www.alezay.com/wp-content/uploads/2024/01/SAMSUNG-GALAXY-S24-SAMSUNG-GALAXY-S24-MAIN-BANNER-ALEZAY-KUWAIT.jpg"
        }),
        b: common_vendor.p({
          left: "新品上市"
        }),
        c: common_vendor.p({
          left: "手机配件"
        }),
        d: common_vendor.p({
          left: "S24系列",
          right: "晓龙8gn3芯片"
        }),
        e: common_vendor.p({
          color: "rgb(247,247,247)"
        }),
        f: common_vendor.p({
          src: "/images/testImg/bn3.jpg"
        }),
        g: common_vendor.p({
          left: "A系列",
          right: "待机神器"
        }),
        h: common_vendor.p({
          color: "black"
        }),
        i: common_vendor.p({
          left: "三星 Pad",
          right: "超薄待机王者",
          more: "true"
        }),
        j: common_vendor.p({
          color: "rgb(247,247,247)"
        }),
        k: common_vendor.p({
          left: "二手机 系列",
          right: "绝对值得买"
        }),
        l: common_vendor.p({
          data: data.value
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/index/samsung-item/samsung-item.js.map
