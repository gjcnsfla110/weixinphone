<template>
	<view class="content">
	 <customNavBar>
		 <block v-slot:index>
			 <scroll-view class="hotSubmenu" scroll-x scroll-into-view="scrollInto" :scroll-with-animation="true">
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
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true" @scrolltolower="hotScrolltolower">
				<hotItem :height = "swiperHeight">
				</hotItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item1" id="iphone">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true" @scrolltolower="iphoneScrolltolower">
			<iphoneItem :height = "swiperHeight">
				
			</iphoneItem>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" ref="item2" id="samsung">
			<scroll-view :style="{ height: swiperHeight + 'px' }" scroll-y="true" @scrolltolower="samsungScrolltolower">
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
import hotItem from "@/components/index/hot-item/hot-item.vue";
import samsungItem from "@/components/index/samsung-item/samsung-item.vue";
import iphoneItem from "@/components/index/iphone-item/iphone-item.vue";
import LodingItem from "@/components/item/itemList.vue";

//推荐 -》 下拉后 加载
const hotScrolltolower=()=>{
	console.log("11");
}
//苹果 -》 下拉 加载
const iphoneScrolltolower = ()=>{
	console.log("22");
}
//三星 -》 下拉 加载
const samsungScrolltolower = ()=>{
	console.log("33");
}

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
// 현재 서뷰메뉴 속한 swiper-item index숫자
const tabIndex = ref(0);
//서브메뉴버튼과 내용swiper-item번호를 맞게하기위하여 index번호+스명으로 이루어짐
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
