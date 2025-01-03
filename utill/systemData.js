export function getNaviBar(){
	
	const statuBarHeight = ()=>{
	// #ifdef MP-WEIXIN
		const system = uni.getSystemInfoSync();
		return system.statusBarHeight ? system.statusBarHeight : 30
	// #endif
	
	// #ifndef MP-WEIXIN
		return 20
	// #endif
	}
	const titleBarheight = ()=>{
		// #ifdef MP-WEIXIN
			let{top,height} = uni.getMenuButtonBoundingClientRect();
			const titleHeight = height+(top-statuBarHeight())*2;
			return titleHeight;
		// #endif
		
		// #ifndef MP-WEIXIN
			return 50;
		// #endif
	};
	//메이페이지에서 네이바포함 50px높이
	const fillHeight = ()=> statuBarHeight() + titleBarheight() + 50;
	//그냥 커스텀 높이
	const custumHeiht = ()=>statuBarHeight() + titleBarheight();
	function OsPlatFrom(){
		// #ifdef MP-WEIXIN
			return 0
		// #endif
		
		// #ifndef MP-WEIXIN
			return 1
		// #endif
	}
	//커스텀 높이를 빼고 밑에부분 높이를정해주는것 scroll-view 높이를 정하는함수
	const screen = ()=>{
		let {screenHeight} = uni.getSystemInfoSync();
		let topHeight = custumHeiht();
		if(OsPlatFrom() == 0)
		return screenHeight - topHeight - 82
		else
		return screenHeight - topHeight - 51
	}
	return{
		statuBarHeight,
		titleBarheight,
		custumHeiht,
		fillHeight,
		screen
	};

};
//미니위쳇 아니면 기타 기타환경판단
export function getOsPlatFrom(){
	// #ifdef MP-WEIXIN
		return 0
	// #endif
	
	// #ifndef MP-WEIXIN
		return 1
	// #endif
}