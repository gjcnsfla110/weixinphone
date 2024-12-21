<template>
	<CardPage>
		<scroll-view class="scrollX" scroll-x enableFlex>
			<view v-for="item in datelist" class="scrollXlist">				
					<view class="gr2title">{{item.title}}</view>
					<view class="gr2price">Y{{item.price}}</view>
					<view v-if="item.hot" class="gr2hot">热卖</view>
					<view v-else class="gr2hot" style="color: aqua;">추천</view>
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
		title : "아이폰손목시계",
		price : 2500000,
		hot:true,
		src :"/static/subMenu/watch.jpg"
	},
	{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:false,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:false,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:false,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:true,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:true,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:true,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:true,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:false,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:false,
		src :"/static/subMenu/watch.jpg"
	},
		{
		title : "아이폰 이어폰",
		price : 2500000,
		hot:false,
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
				width: 100%;
				margin-top: 53rpx;
				height: 38rpx;
				line-height: 38rpx;
				text-align: center;
				font-size: 28rpx;
			}
			.gr2price{
					margin-top: 8rpx;
					height: 38rpx;
					font-size: 25rpx;
					text-align: center;
					line-height: 38rpx;
					
			}
			.gr2hot{
				    position: absolute;
					top: 0;
					right: 10rpx;
					font-size: 33rpx;
					color: blue;
					
			}
			.gr2img{
				width: 80%;
				height: 60%;
				margin-left: 10%;			
			}
			
		}
		.scrollXlist:last-child{margin-right: 30rpx;}
	}
</style>
