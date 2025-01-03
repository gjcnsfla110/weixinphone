<template>
	<Custom></Custom>
	<view class="shopContainer" :style="{height:screenHeight+'px'}">
		<view class="shopLeft">
			<uni-collapse accordion>
				<uni-collapse-item :show-arrow="false" border="false" show-animation v-for="item in data" :open="item.id == cutturn">
					<template v-slot:title>
					        <view class="custom-title" :class="{'custom-title-active animate__pulse': item.id == cutturn}">{{item.title}}</view>
					</template>
					<view @click="cityActive(item.id,zone.id)" class="shopBt" v-for="zone in item.child">
						<view class="shopBtText" :class="{'activeShopBt animate__pulse': item.id === cutturn && zone.id === cutturnCity }">{{zone.title}}</view>
						<view :class="{'shopBtShow animate__slideInUp': item.id === cutturn && zone.id === cutturnCity}"></view>
					</view>
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
							<view hover-class="hoverPhone" class="bottomRight" @click="callNumber('01056786555')"><image src='/static/phone_06.png'></image><view class="shopPhone">010-5678-6555</view></view>
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
	//클릭된 지역카테고리
	const cutturn = ref(0)
	//클릭된 도시
	const cutturnCity = ref(1)
	//도시를 클릭시 이벤트부분
	const cityActive = (cutturnId,cutturnCityId)=>{
		cutturn.value = cutturnId;
		cutturnCity.value = cutturnCityId;
	}
	//아래부분 높이
	const screenHeight = ref(getNaviBar().screen());
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
	
	//가계번호 클릭하면 폰다이어리에 나타나기
	const callNumber = (number)=>{
		uni.showModal({
			title:"商店电话",
			content:"确认直接拨通电话",
			success:function(res){
				if(res.confirm){
					if(!number){
						return false;
					}
					uni.makePhoneCall({
					        phoneNumber : number,
					});
				}else if(res.cancel){
					
				}
			}
		})
		
	}
</script>

<style lang="scss" scoped>
	.uni-collapse-item__title-box{
		font-weight: bold;
		color: #DA8C05;
	}
	.hoverPhone{
		color: royalblue;
		font-weight: bold;
	}
	.custom-title{
		width: 100%;
		height: 85rpx;
		font-size: 26rpx;
		font-weight: bold;
		color: rgb(100,100,100);
		padding-left: 20rpx;
		line-height: 85rpx;
	}
	.custom-title-active{
		color:rgb(199, 126, 0);
		font-size: 29rpx;
	}
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
				height: 75rpx;
				position: relative;			
				.shopBtText{
					width: 100%;
					height: 75rpx;
					line-height: 75rpx;
					font-size: 23rpx;
					text-align: center;
					color: rgb(150, 150, 150);
				}
				.activeShopBt{
					font-size: 26rpx;
					font-weight: bold;
					background-color: rgb(246, 246, 246);
					color:rgb(199, 126, 0);
				}
				.shopBtShow{
					width: 60%;
					height: 5rpx; /* 굵은 줄의 두께 */
					position: absolute;
					bottom: 0; /* 텍스트 아래로 5px 간격 */
					left: 20%;
					background-color: #1296db; /* 줄의 기본 색상 */
					border-radius: 10rpx;
				}
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
				gap:30rpx;
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
								font-weight: bold;
								color:rgb(218, 0, 109);;
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
