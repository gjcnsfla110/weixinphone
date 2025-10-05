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
function listTrees(data, field = "pid", child = "child", pid = 0, callF = null) {
  if (!Array.isArray(data) || data.length === 0)
    return [];
  const getList = (pid1, items) => {
    const children = items.filter((item) => {
      let isCheck = true;
      if (typeof callF === "function") {
        isCheck = callF(item);
      }
      return isCheck && item[field] === pid1;
    });
    children.forEach((item) => {
      item[child] = getList(item["id"], items);
    });
    return children;
  };
  return getList(pid, data);
}
exports.formattedPrice = formattedPrice;
exports.listTrees = listTrees;
exports.resultPage = resultPage;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utill/common.js.map
