<template>
	<CardPage>
		<scroll-view class="scrollX" scroll-x enableFlex>
			<view v-for="item in datelist" class="scrollXlist">				
					<view class="gr2title">{{item.title}}</view>
					<view class="gr2price"><view>{{item.price}}</view> 韩元</view>
					<image class="gr2img" :src="item.src"></image>
					<view v-if="item.status == 0" class="gr2top" style="background-color: #CE1212;">热卖</view>
					<view v-if="item.status == 1" class="gr2top" style="background-color: #0073B6;">推荐</view>
					<view v-if="item.status == 2" class="gr2top" style="background-color: #E2AA0F;">新品</view>
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
		price : "259,500",
		status:0,
		src :"/static/subMenu/watch.jpg"
	},
	{
		title : "아이폰 이어폰 아이폰손목시계아이폰손목시계",
		price : "259,500",
		status:2,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : "259,500",
		status:1,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : "259,500",
		status:2,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : "25,500",
		status:0,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰 아이폰손목시계 아이폰손목시계",
		price : "259,500",
		status:1,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : "259,500",
		status:0,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : "259,500",
		status:0,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : "259,500",
		status:2,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : "259,500",
		status:0,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : "259,500",
		status:1,
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
			position: relative;
			.gr2title{
				width: 95%;
				margin-top: 45rpx;
				padding-left:10rpx;
				height: 35rpx;
				font-size: 24rpx;
				overflow: hidden; /* 초과 내용을 숨김 */
			}
			.gr2price{
					margin-top: 5rpx;
					padding-left: 10rpx;
					height: 38rpx;
					font-size: 18rpx;
					color: rgb(80, 80, 80);
					>:first-child{
						display: inline-block;
						color: black;
						font-size: 23rpx;
					}
					
			}
			.gr2img{
				width: 180rpx;
				height: 260rpx;
				margin-left: 10rpx;			
			}
			.gr2top{
				width: 60rpx;
				height: 30rpx;
				position: absolute;
				font-size: 18rpx;
				color: white;
				text-align: center;
				line-height: 30rpx;
				border-radius: 6rpx;
				top: 5rpx;
				right: 15rpx;
			}
			
		}
		.scrollXlist:last-child{margin-right: 30rpx;}
	}
</style>
