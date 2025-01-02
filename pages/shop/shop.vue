<template>
	<Custom></Custom>
	<view class="shopContainer" :style="{height:screenHeight+'px'}">
		<view class="shopLeft">
			<uni-collapse accordion>
				<uni-collapse-item :show-arrow="false" border="false" show-animation :title="item.title" v-for="item in data" :open="item.id == 6">
					<view class="shopBt" v-for="zone in item.child">{{zone.title}}</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<scroll-view class="shopRight" scroll-y>
			<view class="shopRightContainer">
				 <view class="shopContent" v-for="i in 10"> 
					 <view class="shopImg">
						 <image src="/images/testImg/shop.jpg" mode="aspectFill"></image>
					 </view>
					 <view class="shopDetil">
						 <view class="shopTitle">万达手机(九老店)</view>
						 <view class="address">서울시구로구가리봉동123-3 3楼 301号</view>
						 <view class="explanation"><view class="ShopDate">营业时间：</view>10:00-20:00</view>
					 </view>
				 </view>
			 </view>
		</scroll-view>
	</view>
</template>

<script setup>
	import Custom from '@/components/custom-nav-bar/customNav.vue'
	import {getNaviBar} from '@/utill/systemData.js'
	import {ref} from 'vue'
	const screenHeight = ref(getNaviBar().screen());
	console.log(screenHeight.value)
	const data = [
		{
			id:6,
			title:"首尔市",
			child:[
				{
					id:0,
					title:"全部",
				}
			]
		},
		{
			id:0,
			title:"广域市",
			child:[
				{
					id:0,
					title:"仁川市",
				},
				{
					id:5,
					title:"釜山市",
				},
				{
					id:1,
					title:"大邱市",
				}
				,
				{
					id:2,
					title:"大田市",
				}
				,
				{
					id:3,
					title:"蔚山市",
				}
				,
				{
					id:4,
					title:"光州市",
				},
			]
		},
		{
			id:1,
			title:"京畿道",
			child:[
				{
					id:0,
					title:"全部",
				}
			]
		},
		{
			id:2,
			title:"江原道",
			child:[
				{
					id:0,
					title:"全部",
				}
			]
		},
		{
			id:3,
			title:"忠清道",
			child:[
				{
					id:0,
					title:"全部",
				}
			]
		},
		{
			id:4,
			title:"全罗道",
			child:[
				{
					id:0,
					title:"全部",
				}
			]
		},
		{
			id:5,
			title:"庆尚道",
			child:[
				{
					id:0,
					title:"全部",
				}
			]
		}
	]
</script>

<style lang="scss" scoped>
	.shopContainer{
		width: 100%;
		padding-top: 20rpx;
		display: flex;
		flex-direction: row;
		.shopLeft{
			width: 160rpx;
			height: 100%;
			.shopBt{
				width: 100%;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				font-size: 26rpx;
			}
		}
		.shopRight{
			width: 590rpx;
			height: 100%;		
			.shopRightContainer{
				width: 100%;
				padding: 20rpx 15rpx;
				background-color: rgb(246, 246, 246);
				display: grid;
				grid-template-columns: repeat(1,1fr);
				gap:20rpx;
				.shopContent{
					width: 100%;
					height: 460rpx;
					background-color: white;
					border-radius: 15rpx;
					.shopImg{
						width: 100%;
						image{
							width: 100%;
							height: 180rpx;
							border-top-right-radius: 15rpx;
							border-top-left-radius: 15rpx;
						}
					}
					.shopDetil{
						padding:0 15rpx;
						width: 100%;
						.shopTitle{
							width: 100%;
							height: 60rpx;
							margin-top: 5rpx;
							text-align: center;
							line-height: 80rpx;
							font-size: 26rpx;
							
						}
						.explanation{
							width: 100%;
							height:50rpx ;
							font-size: 26rpx;
							line-height: 50rpx;
							color: rgb(150,150, 150);
							.ShopDate{
								display: inline-block;
								font-size: 21rpx;
								color: #DA8C05;
							}
						}
						.address{
							height: 60rpx;
							width: 100%;
							font-size: 22rpx;	
							margin-top: 10rpx;
							color: rgb(150, 150, 150);
						}
					}
				}
			}
		}
	}
</style>
