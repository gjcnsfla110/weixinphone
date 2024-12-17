export function getNaviBar(){
	
	const statuBarHeight = ()=>{
	// #ifdef MP-WEIXIN
		const system = uni.getSystemInfoSync();
		return system.statusBarHeight ? system.statusBarHeight : 30
	// #endif
	
	// #ifndef MP-MP-WEIXIN
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
	const fillHeight = ()=> statuBarHeight() + titleBarheight()+50;
	return{
		statuBarHeight,
		titleBarheight,
		fillHeight
	};

};