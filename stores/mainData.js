import { defineStore } from "pinia";
import { serviceGet,servicePost } from "../utill/request";
import { resultPage } from "../utill/common";
export const useMainStores = defineStore('mainData',{
	state:()=>({
		main:{},
		iphone:{},
		samsung:{},
		subMenu:[],
		isLoading: false,
        isDataReady: false
	}),
	getters:{
		isDataAvailable: (state) => state.isDataReady && !state.isLoading,
	},
	actions:{
		async lodingMain(){
			if (this.isDataReady) return;
            this.isLoading = true;
			try{
				// 캐시 확인
                const cachedData = uni.getStorageSync('mainData');
                const now = Date.now();
                if (cachedData && cachedData.expiry > now) {
                    console.log('Loading from cache:', cachedData);
                    this.main = cachedData.main || {};
                    this.iphone = cachedData.iphone || {};
                    this.samsung = cachedData.samsung || {};
                    this.subMenu = cachedData.subMenu || [];
                    this.isDataReady = true;
                    this.isLoading = false;
                    return;
                }
				//캐시없으면 인터넷 요청
				const res = await serviceGet('app/index/main');				
				this.subMenu = res.subMenus || [];
                let pages = res.pages || [];
                let components = res.components || [];
                let componentItems = res.componentItems || [];
                let componentBanners = res.componentBanners || [];
                pages = resultPage(pages, components, componentItems, componentBanners);
                this.main = pages.filter(item => item.page_key == 'main') || [];
                this.iphone = pages.filter(item => item.page_key == 'iphone') || [];
                this.samsung = pages.filter(item => item.page_key == 'samsung') || [];
                this.isDataReady = true;

                // 캐시에 저장 (만료 시간: 24시간)
                const expiry = now + 24 * 60 * 60 * 1000; // 24시간 후
                uni.setStorageSync('mainData', {
                    main: this.main,
                    iphone: this.iphone,
                    samsung: this.samsung,
                    subMenu: this.subMenu,
                    expiry
                });
				
				
			}catch(error){
				console.error('Error loading main data:', error);
			}finally{
				this.isLoading = false;
			}
		},
		// 캐시 삭제 메서드
        clearCache() {
            uni.removeStorageSync('mainData');
            this.main = {};
            this.iphone = {};
            this.samsung = {};
            this.subMenu = [];
            this.isDataReady = false;
        }
	}
})