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
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true">
				<hotItem :height = "swiperHeight" :mainData="main" :subMenu="subMenu">
				</hotItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item1" id="iphone">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true">
				<iphoneItem :height = "swiperHeight" :iphoneData="iphone">
				</iphoneItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item2" id="samsung">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true">
				<samsungItem :height = "swiperHeight" :samsungData="samsung">
				</samsungItem>
			</scroll-view>
		</swiper-item>
	</swiper>
	<FixContainer></FixContainer>
</template>

<script>
import {ref,watch } from "vue";
import { storeToRefs } from "pinia";
import { useMainStores } from "../../stores/mainData";
import { serviceGet } from "@/utill/request";
import { getNaviBar } from "@/utill/systemData.js";
import customNavBar from "@/components/custom-nav-bar/custom-nav-bar.vue";
import hotItem from "@/components/index/hot-item/hot-item.vue";
import samsungItem from "@/components/index/samsung-item/samsung-item.vue";
import iphoneItem from "@/components/index/iphone-item/iphone-item.vue";
import LodingItem from "@/components/item/itemList.vue";
import FixContainer from "@/components/fixContent/fixContainer.vue"


export default{

	components:{
		customNavBar,
		hotItem,
		samsungItem,
		iphoneItem,
		LodingItem,
		FixContainer
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
		const {main,iphone,samsung,subMenu,isDataReady} = storeToRefs(mainStores);
		const menu = ref([]);
		// main, iphone, samsung 데이터 감지
		watch(
		  () => [main.value, iphone.value, samsung.value],
		  ([newMain, newIphone, newSamsung]) => {
			menu.value = [
			  {
				title: newMain.length > 0 && newMain[0]?.name ? newMain[0].name : '핫 아이템',
			  },
			  {
				title: newIphone.length > 0 && newIphone[0]?.name ? newIphone[0].name : '아이폰',
			  },
			  {
				title: newSamsung.length > 0 && newSamsung[0]?.name ? newSamsung[0].name : '삼성',
			  },
			];
		  },
		  { immediate: true, deep: true }
		);
		
		return {
			isDataReady,
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
			if (!this.isDataReady) {
			    try {
			        await this.mainStores.lodingMain();
			    } catch (error) {
				  console.log('Error reloading data:', error);
				  // 에러 시 기본 메뉴 설정
				  this.menu = [
					{ title: '핫 아이템' },
					{ title: '아이폰' },
					{ title: '삼성' },
				  ];
			    }	
			}
		},
		
	},
	async onLoad() {
        try {
            await this.loadData();			
        } catch (error) {
            console.log('Error in onLoad:', error);
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
