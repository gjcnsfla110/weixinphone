<template>
	<view class="oldListContainer">
		<TopNav></TopNav>
		<scroll-view scroll-y class="ershouList" :style="{height:screenHeight+'px'}">
			<OldList :data="data" listColor="rgb(248, 248, 248)" itemColor="white" padding="35rpx 0"></OldList>
		</scroll-view>	
	</view>
</template>

<script setup>
import TopNav from '@/components/list/listTopNeb.vue'
import OldList from '@/components/item/itemList.vue'
import {ref} from 'vue'
import {getNaviBar} from '@/utill/systemData.js'
const screenHeight = getNaviBar().noTabScreen()-100;
const data = ref([
	{
		src:"/images/testImg/ss1.jpg"
	},
	{
		src:"/images/testImg/ss2.jpg"
	},
	{
		src:"/images/testImg/ss3.jpg"
	},
	{
		src:"/images/testImg/ss4.jpg"
	},
	{
		src:"/images/testImg/ss5.jpg"
	},
	{
		src:"/images/testImg/ss6.jpg"
	},
	{
		src:"/images/testImg/ss7.jpg"
	},
	{
		src:"/images/testImg/ss8.jpg"
	}
])
</script>

<style lang="scss" scoped>
	.oldListContainer{
		width: 100%;
		.ershouList{
			width: 100%;
		}
	}
</style>
