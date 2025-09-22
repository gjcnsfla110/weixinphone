import { defineStore } from "pinia";
import { serviceGet,servicePost } from "../utill/request";
import { resultPage } from "../utill/common";
export const useMainStores = defineStore('mainData',{
	state:()=>({
		main:[],
		iphone:[],
		samsung:[],
		subMenu:[],
		goodsSpecs:[],
		isLoading: false,
        isDataReady: false
	}),
	getters:{
		isDataAvailable: (state) => state.isDataReady && !state.isLoading,
	},
	actions:{
		// onLaunch에서 호출: 서버에서 데이터 가져와 스토어와 스토리지 업데이트
		async fetchFromServer() {
			this.isLoading = true;
			try {
				const res = await serviceGet('app/index/main');
				const newData = {
				subMenu: res.subMenus || [],
				goodsSpecs: res.goodsSpecs || [],
				main: [],
				iphone: [],
				samsung: [],
				};

				// 페이지 데이터 처리
				let pages = res.pages || [];
				let components = res.components || [];
				let componentItems = res.componentItems || [];
				let componentBanners = res.componentBanners || [];
				pages = resultPage(pages, components, componentItems, componentBanners);

				newData.main = pages.filter(item => item.page_key === 'main') || [];
				newData.iphone = pages.filter(item => item.page_key === 'iphone') || [];
				newData.samsung = pages.filter(item => item.page_key === 'samsung') || [];

				// 스토어 업데이트
				this.main = newData.main;
				this.iphone = newData.iphone;
				this.samsung = newData.samsung;
				this.subMenu = newData.subMenu;
				this.goodsSpecs = newData.goodsSpecs;
				this.isDataReady = true;

				// 캐시에 저장 (만료 시간: 24시간)
				const now = Date.now();
				const expiry = now + 24 * 60 * 60 * 1000; // 24시간 후
				uni.setStorageSync('mainData', {
				main: this.main,
				iphone: this.iphone,
				samsung: this.samsung,
				subMenu: this.subMenu,
				goodsSpecs: this.goodsSpecs,
				expiry,
				});
			} catch (error) {
			console.error('Error fetching server data:', error);
				// 에러 발생 시 캐시 데이터 사용 (있을 경우)
				const cachedData = uni.getStorageSync('mainData');
				if (cachedData && cachedData.expiry > Date.now()) {
				this.main = cachedData.main || [];
				this.iphone = cachedData.iphone || [];
				this.samsung = cachedData.samsung || [];
				this.subMenu = cachedData.subMenu || [];
				this.isDataReady = true;
				}
			} finally {
				this.isLoading = false;
			}
		},

		async lodingMain(){
			if (this.isDataReady) return;
            this.isLoading = true;
			try{
				// 캐시 확인
                const cachedData = uni.getStorageSync('mainData');
                const now = Date.now();
                if (cachedData && cachedData.expiry > now) {
                    this.main = cachedData.main || [];
                    this.iphone = cachedData.iphone || [];
                    this.samsung = cachedData.samsung || [];
                    this.subMenu = cachedData.subMenu || [];
					this.goodsSpecs = cachedData.goodsSpecs || [];
                    this.isDataReady = true;
                    this.isLoading = false;
                    return;
                }
				// 캐시가 없거나 만료되었으면 서버 요청
				const res = await serviceGet('app/index/main');
				const newData = {
				subMenu: res.subMenus || [],
				main: [],
				iphone: [],
				samsung: [],
				goodsSpecs: res.goodsSpecs || [],
				};

				// 페이지 데이터 처리
				let pages = res.pages || [];
				let components = res.components || [];
				let componentItems = res.componentItems || [];
				let componentBanners = res.componentBanners || [];
				pages = resultPage(pages, components, componentItems, componentBanners);
				newData.main = pages.filter(item => item.page_key === 'main') || [];
				newData.iphone = pages.filter(item => item.page_key === 'iphone') || [];
				newData.samsung = pages.filter(item => item.page_key === 'samsung') || [];

				// 스토어 업데이트
				this.main = newData.main;
				this.iphone = newData.iphone;
				this.samsung = newData.samsung;
				this.subMenu = newData.subMenu;
				this.goodsSpecs = newData.goodsSpecs;
				this.isDataReady = true;

                // 캐시에 저장 (만료 시간: 24시간)
                const expiry = now + 24 * 60 * 60 * 1000; // 24시간 후
                uni.setStorageSync('mainData', {
                    main: this.main,
                    iphone: this.iphone,
                    samsung: this.samsung,
                    subMenu: this.subMenu,
					goodsSpecs: this.goodsSpecs,
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
            this.main = [];
            this.iphone = [];
            this.samsung = [];
            this.subMenu = [];
            this.isDataReady = false;
        }
	}
})