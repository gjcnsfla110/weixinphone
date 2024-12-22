<template>
	<CardPage>
		<scroll-view class="scrollX" scroll-x enableFlex>
			<view v-for="item in datelist" class="scrollXlist">				
					<view class="gr2title">{{item.title}}</view>
					<view class="gr2price">Y{{item.price}}</view>
					<image class="gr2img" :src="item.src"></image>
			</view>
		</scroll-view>
	</CardPage>
</template>

<script setup>
import CardPage from "@/components/cardPage/cardPage.vue"
import {ref} from 'vue'
const datelist = ref([
	{
		title : "아이폰손목시계 아이폰손목시계 아이폰손목시계 아이폰손목시계",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
	{
		title : "아이폰 이어폰 아이폰손목시계아이폰손목시계",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
])
</script>

<style lang="scss" scoped>
	.scrollX{
		height:380rpx;
		width: 700rpx;
		white-space: nowrap;
		.scrollXlist{
			display: inline-block;
			width: 200rpx;
			height: 390rpx;
			margin-right: 15rpx;
			background-color: white;
			border-radius: 15rpx;
			.gr2title{
				width: 95%;
				margin-top: 18rpx;
				padding-left:10rpx;
				height: 50rpx;
				font-size: 24rpx;
				overflow: hidden; /* 초과 내용을 숨김 */
			}
			.gr2price{
					margin-top: 8rpx;
					height: 38rpx;
					font-size: 25rpx;
					
			}
			.gr2img{
				width: 180rpx;
				height: 260rpx;
				margin-left: 10rpx;			
			}
			
		}
		.scrollXlist:last-child{margin-right: 30rpx;}
	}
</style>
