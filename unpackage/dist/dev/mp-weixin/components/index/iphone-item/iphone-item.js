"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (BannerImg + Title + TitleContent + SwiperImg + TcontentTwo + ContentList + TcontentOne + ItemList)();
}
const Title = () => "../../item/itemTitle.js";
const TitleContent = () => "../../item/itemContentTitle.js";
const SwiperImg = () => "../../Img/swiperImg.js";
const TcontentTwo = () => "../../item/itemContentTwo.js";
const TcontentOne = () => "../../item/itemContentOne.js";
const ContentList = () => "../../item/itemContentList.js";
const ItemList = () => "../../item/itemList.js";
const BannerImg = () => "../../Img/imgBanner.js";
const _sfc_main = {
  __name: "iphone-item",
  setup(__props) {
    const ershou = common_vendor.ref([
      {
        src: "/images/testImg/er1.jpg"
      },
      {
        src: "/images/testImg/er2.jpg"
      },
      {
        src: "/images/testImg/er3.jpg"
      },
      {
        src: "/images/testImg/er4.jpg"
      },
      {
        src: "/images/testImg/er5.jpg"
      },
      {
        src: "/images/testImg/ershou.jpg"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          src: "https://byline.network/wp-content/uploads/2024/09/iphone-16-event-94.jpg"
        }),
        b: common_vendor.p({
          left: "新品上市"
        }),
        c: common_vendor.p({
          left: "特们推荐"
        }),
        d: common_vendor.p({
          left: "Pro 系列",
          right: "最强悍苹果"
        }),
        e: common_vendor.p({
          color: "rgb(248,248,248)"
        }),
        f: common_vendor.p({
          left: "Ipad 和 配件",
          right: "最强悍平板电脑",
          more: "true"
        }),
        g: common_vendor.p({
          color: "rgb(248,248,248)"
        }),
        h: common_vendor.p({
          left: "二手机 系列",
          right: "性价比高二手手机"
        }),
        i: common_vendor.p({
          data: ershou.value
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/index/iphone-item/iphone-item.js.map
