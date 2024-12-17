<template>
	<view class="content">
	 <customNavBar>
		 <block v-slot:index>
			 <scroll-view class="hotSubmenu" scroll-x="true" scroll-into-view="scrollInto" :scroll-with-animation="true">
			 	<view class="hotSubmenuTitle"  :id="'menu'+index" v-for="(item,index) in munu" :key="index" @click="changeMenu(index)">
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
			<hotItem :height = "swiperHeight">
				
			</hotItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item1" id="iphone">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true">
			<iphoneItem :height = "swiperHeight">
				
			</iphoneItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item2" id="samsung">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true">
			<samsungItem :height = "swiperHeight">
				
			</samsungItem>
			</scroll-view>
		</swiper-item>
	</swiper>
</template>

<script setup>
import {ref } from "vue";
import { getNaviBar } from "@/utill/systemData.js";
import customNavBar from "@/components/custom-nav-bar/custom-nav-bar.vue";
import hotItem from "@/components/indexSwiper/hot-item/hot-item.vue";
import samsungItem from "@/components/indexSwiper/samsung-item/samsung-item.vue";
import iphoneItem from "@/components/indexSwiper/iphone-item/iphone-item.vue";

const swiperHeightf = ()=>{
	let {screenHeight} = uni.getSystemInfoSync();
	return screenHeight - getNaviBar().fillHeight()-51;	
}
const swiperHeight = ref(swiperHeightf());
const munu = [
		{
			title : "推荐",
		},
		{
			title : "Iphone"
		},
		{
			title : "SamSeng"
		}
	]
const tabIndex = ref(0);
const scrollInto = ref("");
function changeSwiper(e){
	changeMenu(e.detail.current);
}
const changeMenu =(i)=>{
	if(i == tabIndex.value){
		return
	}
	scrollInto.value = "tab"+i;
	tabIndex.value = i;
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
