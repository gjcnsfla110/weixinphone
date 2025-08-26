/**
 * 첫페이지 데이터 수정,정리
 */
export function resultPage(pages,components,componentItems,componentBanners){
	 let iComponents = components;
	 iComponents.forEach(item=>{
					if(item.banner){
						item.items = componentBanners.filter(Citem => Citem.component_id == item.id);
					}else{
						item.items = componentItems.filter(Citem => Citem.component == item.id)
					}
	 })
	 pages.forEach(item=>{
		 item.components = iComponents.filter(Fitem => Fitem.page_key == item.page_key);
	 })
	 return pages;
}
