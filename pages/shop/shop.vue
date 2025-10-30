<template>
	<Custom :back="true"></Custom>
	<view class="shopContainer" :style="{height:screenHeight+'px'}">
		<view class="shopLeft">
			<uni-collapse accordion>
				<uni-collapse-item :show-arrow="false" :border="false" show-animation v-for="item in menu" :open="item.id == cutturn">
					<template v-slot:title>
					        <view class="custom-title" :class="{'custom-title-active animate__pulse': item.id == cutturn}">{{item.name}}</view>
					</template>
					<view @click="cityActive(item.id,zone.id)" class="shopBt" v-for="zone in item.child">
						<view class="shopBtText" :class="{'activeShopBt animate__pulse': item.id === cutturn && zone.id === cutturnCity }">{{zone.name}}</view>
						<view :class="{'shopBtShow animate__slideInUp': item.id === cutturn && zone.id === cutturnCity}"></view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<scroll-view class="shopRight" scroll-y>
			<view class="shopRightContainer">
				 <view class="shopContent" v-for="item in datalist" @click="clickShop(item)"> 
					 <view class="shopImg">
						 <image :src="item.mainImg" mode="aspectFill"></image>
						 <view class="shopTitle">{{item.name}}</view>
					 </view>
					 <view class="shopDetil">
						 <view class="explanation"><view class="ShopDate">营业时间：</view>{{item.hours}}</view>
						 <text class="address">{{item.address}}</text>
						 <view class="shopfooter">
							<view class="bottomLeft"><image src='/static/weixin.png'></image><view class="weixin">{{item.wechat}}</view></view>
							<view hover-class="hoverPhone" class="bottomRight" @click="callNumber('01056786555')"><image src='/static/phone_06.png'></image><view class="shopPhone">{{item.phone}}</view></view>
						 </view>
					 </view>					 
				 </view>
			 </view>
		</scroll-view>
	</view>
</template>

<script>
	import Custom from '@/components/custom-nav-bar/customNav.vue'
	import {getNaviBar} from '@/utill/systemData.js'
	import { servicePost } from '@/utill/request'
	import {ref} from 'vue'
	import { listTrees } from '@/utill/common'
	
	export default{
		components:{
			Custom
		},
		props:{
			
		},
		setup(props, context) {
			//클릭된 지역카테고리
			const cutturn = ref(0)
			//클릭된 도시
			const cutturnCity = ref(0)
			//아래부분 높이
			const screenHeight = ref(getNaviBar().noTabScreen());
			const list = ref([]);
			const menu = ref([]);
			const datalist = ref([]);
			return {
				cutturn,
				cutturnCity,
				screenHeight,
				list,
				menu,
				datalist
			}
		},
		methods:{
			//가계번호 클릭하면 폰다이어리에 나타나기
			callNumber(number){
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
						}
					}
				})
			},
			//클릭시 데이터 리스트 변경
			changeList(id){
				this.datalist = this.list.filter(item=>item.category_id == id);
			},
			//도시를 클릭시 이벤트부분
			cityActive(cutturnId,cutturnCityId){
				this.cutturn = cutturnId;
				this.cutturnCity = cutturnCityId;
				this.changeList(this.cutturnCity)
			},
			//点击商店
			clickShop(item){
				uni.setStorageSync('shopItem',{
					 shopItem:item
				})
				uni.navigateTo({
				        url: `/pages/itemPage/shopPage?id=${item.id}` // 이동할 페이지 경로
				});
			}
		},
		async onLoad(){
			 let shopData = uni.getStorageSync('shop');
			 if(shopData){
				 this.list = shopData.list;
				 this.menu = shopData.menu;
				 this.cutturn = this.menu[0] ? this.menu[0].id : 0;
				 this.cutturnCity = this.menu[0].child[0] ? this.menu[0].child[0].id : 0;
				 this.changeList(this.cutturnCity);
			 }else{
				 let data = await servicePost('app/shop/list');
				 this.list = data.list;
				 this.list.forEach((item)=>{
					 item.shopImg = JSON.parse(item.shopImg);
				 })
				 this.menu = listTrees(data.category);
				 uni.setStorageSync('shop',{
					 list:this.list,
					 menu:this.menu
				 })
				 this.cutturn = this.menu[0] ? this.menu[0].id : 0;
				 this.cutturnCity = this.menu[0].child[0] ? this.menu[0].child[0].id : 0;
				 this.changeList(this.cutturnCity);
			 }	 
		}
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
			width: 190rpx;
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
			width: 560rpx;
			height: 100%;		
			.shopRightContainer{
				width: 100%;
				height: 100%;
				padding: 20rpx 15rpx;
				background-color: rgb(246, 246, 246);
				display: grid;
				grid-template-columns: repeat(1,1fr);
				gap:30rpx;
				color: rgb(150, 150, 150);
				.shopContent{
					width: 100%;
					height: 530rpx;
					background-color: white;
					border-radius: 15rpx;
					.shopImg{
						width: 100%;
						position: relative;
						image{
							width: 100%;
							height: 250rpx;
							border-top-right-radius: 15rpx;
							border-top-left-radius: 15rpx;
						}
						.shopTitle{
							position: absolute;
							right: 20rpx;
							top: 25rpx;
							color: white;
							background-color: rgb(50, 50, 50,0.5);
							padding: 10rpx;
							height: 55rpx;
							font-size: 28rpx;
							border-radius: 15rpx;
							font-weight: bold;
							letter-spacing: 3rpx;
						}
					}
					.shopDetil{
						padding:0 15rpx;
						width: 100%;
						height: 240rpx;
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
								margin-right: 10rpx;
							}
						}
						.address{
							margin-top: 10rpx;
							display: inline-block;
							height: 50rpx;
							width: 100%;
							font-size: 27rpx;	
							margin-top: 15rpx;
							letter-spacing: 2rpx;
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
								width: 45%;
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
									line-height: 90rpx;
									padding-left: 10rpx;
									font-size: 26rpx;
									letter-spacing: 3rpx;
									overflow: hidden;
								}
							}
							.bottomRight{
								width: 55%;
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
									line-height: 90rpx;
									padding-left: 10rpx;
									font-size: 26rpx;
									letter-spacing: 2rpx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
