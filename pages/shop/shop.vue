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
						 <view class="shopTitle">首尔-南九老店</view>
					 </view>
					 <view class="shopDetil">
						 <view class="explanation"><view class="ShopDate">营业时间：</view>10:00-20:00</view>
						 <text class="address">서울시 구로구 가리봉동123-3 3楼 301号 서울시 구로구 가리봉동123-3 </text>
						 <view class="shopfooter">
							<view class="bottomLeft"><image src='/static/weixin.png'></image><view class="weixin">xcl1224</view></view>
							<view class="bottomRight" @click="call("5678")" ><image src='/static/phone_06.png'></image><view class="shopPhone">010-5678-6555</view></view>
						 </view>
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
	//가계번호 클릭하면 폰다이어리에 나타나기
	const call = phoneNumber=>{
		console.log(phoneNumber)
		if (!phoneNumber) {	
			return;
		};
		uni.makePhoneCall({
			phoneNumber,
			success() {
			  console.log("다이얼 화면 열기 성공"+i);
			},
			fail(err) {
			  console.error("다이얼 화면 열기 실패", err);
			},
		});
	}
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
				color: rgb(150, 150, 150);
				.shopContent{
					width: 100%;
					height: 500rpx;
					background-color: white;
					border-radius: 15rpx;
					.shopImg{
						width: 100%;
						position: relative;
						image{
							width: 100%;
							height: 220rpx;
							border-top-right-radius: 15rpx;
							border-top-left-radius: 15rpx;
						}
						.shopTitle{
							position: absolute;
							left: 20rpx;
							top: 25rpx;
							color: white;
							background-color: rgb(0, 0, 0,0.7);
							padding: 0 10rpx;
							height: 45rpx;
							font-size: 25rpx;
							line-height: 45rpx;
							border-radius: 15rpx;
						}
					}
					.shopDetil{
						padding:0 15rpx;
						width: 100%;
						height: 230rpx;
						.explanation{
							width: 100%;
							height:45rpx ;
							font-size: 28rpx;
							line-height: 45rpx;
							margin-top: 15rpx;
							.ShopDate{
								display: inline-block;
								font-size: 26rpx;
								color: #DA8C05;
							}
						}
						.address{
							height: 50rpx;
							width: 100%;
							font-size: 26rpx;	
							margin-top: 15rpx;
						}
						.shopfooter{
							width: 100%;
							height: 120rpx;
							margin-top: 15rpx;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							border-top: 2rpx solid rgb(240, 240, 240);
							.bottomLeft{
								width: 50%;
								height: 80rpx;
								display: flex;
								flex-direction: row;
								image{
									width: 70rpx;
									height: 70rpx;
									margin-top: 5rpx;
								}
								.weixin{
									height: 80rpx;
									line-height: 80rpx;
									padding-left: 10rpx;
									font-size: 26rpx;								
								}
							}
							.bottomRight{
								width: 50%;
								height: 80rpx;
								display: flex;
								flex-direction: row;
								image{
									width: 60rpx;
									height: 60rpx;
									margin-top: 10rpx;
								}
								.shopPhone{
									height: 80rpx;
									line-height: 80rpx;
									padding-left: 10rpx;
									font-size: 26rpx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
