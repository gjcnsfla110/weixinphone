"use strict";
function resultPage(pages, components, componentItems, componentBanners) {
  let iComponents = components;
  iComponents.forEach((item) => {
    if (item.banner) {
      item.items = componentBanners.filter((Citem) => Citem.component_id == item.id);
    } else {
      item.items = componentItems.filter((Citem) => Citem.component_id == item.id);
    }
  });
  pages.forEach((item) => {
    item.components = iComponents.filter((Fitem) => Fitem.page_key == item.page_key);
  });
  return pages;
}
function formattedPrice(price) {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
exports.formattedPrice = formattedPrice;
exports.resultPage = resultPage;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utill/common.js.map
