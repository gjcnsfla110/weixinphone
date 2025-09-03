<template>
	<view class="content">
	 <customNavBar>
		 <block v-slot:index>
			 <scroll-view class="hotSubmenu" scroll-x scroll-into-view="scrollInto" :scroll-with-animation="true">
			 	<view class="hotSubmenuTitle"  :id="'menu'+index" v-for="(item,index) in menu" :key="index" @click="changeMenu(index)">
			 		{{item.title}}
			 		<view :class="{'hotBottomBorder animate__heartBeat' : tabIndex == index}"></view>
			 	</view>
			 </scroll-view>
		 </block>
	 </customNavBar>
	</view>
	<swiper class="main" :style="{ height: swiperHeight + 'px' }" @change="changeSwiper" :current="tabIndex" duration="800">
		<swiper-item class="swiper-item" ref="item33" id="hot">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true" @scrolltolower="hotScrolltolower">
				<hotItem :height = "swiperHeight" :mainData="main" :subMenu="subMenu">
				</hotItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item1" id="iphone">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true" @scrolltolower="iphoneScrolltolower">
				<iphoneItem :height = "swiperHeight" :iphoneData="iphone">
				</iphoneItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item2" id="samsung">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true" @scrolltolower="samsungScrolltolower">
				<samsungItem :height = "swiperHeight" :samsungData="samsung">
				</samsungItem>
			</scroll-view>
		</swiper-item>
	</swiper>
</template>

<script>
import {ref } from "vue";
import { useMainStores } from "../../stores/mainData";
import { serviceGet } from "@/utill/request";
import { getNaviBar } from "@/utill/systemData.js";
import customNavBar from "@/components/custom-nav-bar/custom-nav-bar.vue";
import hotItem from "@/components/index/hot-item/hot-item.vue";
import samsungItem from "@/components/index/samsung-item/samsung-item.vue";
import iphoneItem from "@/components/index/iphone-item/iphone-item.vue";
import LodingItem from "@/components/item/itemList.vue";


export default{

	components:{
		customNavBar,
		hotItem,
		samsungItem,
		iphoneItem,
		LodingItem
	},
	setup(props, context) {
		const mainStores = useMainStores();
		// 현재 서뷰메뉴 속한 swiper-item index숫자
		const tabIndex = ref(0);
		//서브메뉴버튼과 내용swiper-item번호를 맞게하기위하여 index번호+스명으로 이루어짐
		const scrollInto = ref("");
		const swiperHeightf = ()=>{
			let {screenHeight} = uni.getSystemInfoSync();
			return screenHeight - getNaviBar().fillHeight()-51;	
		}
		const swiperHeight = ref(swiperHeightf());
		const {main,iphone,samsung,subMenu} = mainStores;
		const menu = ref([]);
		return {
			mainStores,
			tabIndex,
			scrollInto,
			swiperHeight,
			swiperHeightf,
			menu,
			main,
			iphone,
			subMenu,
			samsung
		}
	},
	methods:{
		//推荐 -》 下拉后 加载
		hotScrolltolower(){
			console.log('11');
		},
		//苹果 -》 下拉 加载
		iphoneScrolltolower(){
			console.log("22");
		},
		//三星 -》 下拉 加载
		samsungScrolltolower(){
			console.log("33");
		},
		changeSwiper(e){
			this.changeMenu(e.detail.current);
		},
		changeMenu(i){
			if(i == this.tabIndex){
				return
			}
			this.scrollInto = "tab"+i;
			this.tabIndex = i;
		},
		// pinia 데이터를 받는 설정 부분
		async loadData(){
			if (!this.mainStores.isDataReady) {
			    try {
			        await this.mainStores.lodingMain();
			    } catch (error) {
			        console.error('Error reloading data:', error);
			    }
			}
		},
		
	},
	async onLoad() {
        try {
            await this.loadData();
			this.menu = [
							{
								title : this.main[0].name,
							},
							{
								title : this.iphone[0].name
							},
							{
								title : this.samsung[0].name
							}
						];
        } catch (error) {
            console.error('Error in onLoad:', error);
        }
    }
}

</script>

<style leng="scss" scoped>
 swiper{
	 width: 100vw;
 }
 .main{
	 width: 100vw;
 }
 .swiper-item{
	 width: 100vw;
 }

</style>
