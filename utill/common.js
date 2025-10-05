/**
 * 첫페이지 데이터 수정,정리
 */
export function resultPage(pages,components,componentItems,componentBanners){
	 let iComponents = components;
	 iComponents.forEach(item=>{
					if(item.banner){
						item.items = componentBanners.filter(Citem => Citem.component_id == item.id);
					}else{
						item.items = componentItems.filter(Citem => Citem.component_id == item.id)
					}
	 })
	 pages.forEach(item=>{
		 item.components = iComponents.filter(Fitem => Fitem.page_key == item.page_key);
	 })
	 return pages;
}

/**
 * 숫자를 금액으로 표현하여 리턴하는 함수
 * @param {Object} price
 */
export function formattedPrice(price){
	
      return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 카테고리 부분에서 child 추가하는 함수
 */
export function listTrees(data,field='pid',child='child',pid=0,callF=null){
    if (!Array.isArray(data) || data.length === 0) return [];

    const getList = (pid1, items) => {
        const children = items.filter(item => {
            let isCheck = true;
            if (typeof callF === "function"){
                isCheck = callF(item);
            }
            return isCheck && item[field] === pid1;
        });

        children.forEach(item => {
            item[child] = getList(item['id'], items);
        });
        return children;
    };

    return getList(pid, data);
}

/**
 * 우선순위설정하는 방법
 */
export function rankingItem(items, order="ranking"){
	items.list.map(item=>{
	        item.child = item.child.sort((a, b) => b.order - a.order)
	        return item;
	});
	return items;
}