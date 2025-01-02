<template>
	<card pading="0" margin-top="5rpx"> 
		<view class="topTitle">
			<view class="titleLeft" :style="{backgroundColor:color}"></view>
			<view class="titleText" :style="{color:color}"><slot></slot></view>
			<view class="titleRight" :style="{backgroundColor:color}"></view>
		</view>
	</card>
</template>

<script setup>
import {defineProps} from 'vue'
import Card from "@/components/cardPage/widthCard.vue"
const props = defineProps({
	 color : {
		 type : String,
		 default : "rgb(180,180,180)"
	 }
})
</script>

<style lang="scss" scoped>
	.topTitle{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		.titleLeft{
			width: 30%;
			height: 1rpx;
			margin-right: 20rpx;
		}
		.titleRight{
			width: 30%;
			height: 1rpx;
			margin-left: 20rpx;
		}
		.titleText{
			font-size: 28rpx;
		}
	}
	
</style>