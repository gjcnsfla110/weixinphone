<template>
	<Custom></Custom>
	<view class="shopContainer" :style="{height:screenHeight+'px'}">
		<view class="shopLeft">
			<uni-collapse accordion>
				<uni-collapse-item :show-arrow="false" :border="true" show-animation v-for="item in categorys" :open="item.id == cutturn">
					<template v-slot:title>
					        <view class="custom-title" :class="{'custom-title-active animate__pulse': item.id == cutturn}">{{item.name}}</view>
					</template>
					<view @click="menu.hot ? hotCategoryActive(item.id,menu.id,menu.name) : categoryActive(item.id,menu.id)" class="shopBt" v-for="menu in item.child">
						<view class="shopBtText" :class="{'activeShopBt animate__pulse': item.id === cutturn && menu.id === cutturnCategory }">{{menu.name}}</view>
						<view :class="{'shopBtShow animate__slideInUp': item.id === cutturn && menu.id === cutturnCategory}"></view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<scroll-view class="shopRight" scroll-y>
			<view class="itemContent" v-for="item in activeAgreementList" @click="item.mobile < 4 ? clickAgreementPhoneDetail(item) : clickAgreementInternetDetail(item)">
				<view class="contentTop" v-if="item.mobile < 4">
					<view class="itemImg"><image :src="item.img"></image></view>
					<view class="topText">
						 <view class="topText1">{{item.store}}</view>
						 <view class="topText2"><view>{{item.color}}</view></view>
					</view>
				</view>
				<view class="contentTop" v-else>
					<view class="itemInternetImg"><image :src="item.img" class="itemInternetImgImage"></image></view>
				</view>
				<view class="contentTitle">{{item.title}}</view>
				<view class="contentBottom" v-if="item.mobile < 4">
					<view><text class="contentBottomTextLeft">手机价格</text><text class="contentBottomRight">{{formattedPrice(item.price)}}<text class="monyText">韩元</text></text></view>
					<view><text class="contentBottomTextLeft">通信社优惠</text><text class="contentBottomRight">{{formattedPrice(item.phoneCashSupport)}}<text class="monyText">韩元</text></text></view>
					<view><text class="contentBottomTextLeft">赠-现金/商品</text><text class="contentBottomRight">{{formattedPrice(item.shopCashSupport)}}<text class="monyText">韩元</text></text></view>
					<view style="color: rgb(255,102,102);"><text class="contentBottomTextLeft">优惠后手机价格</text><text class="contentBottomRight">{{formattedPrice(item.sale_price)}}<text class="monyText">韩元</text></text></view>
					<view class="price"><view class="priceLeft">最低每月</view><view class="priceRight">月<text class="priceCenter">{{formattedPrice(item.month_price)}}</text>韩元</view></view>
				</view>
				<view class="contentBottom" v-else>
					<view><text class="contentBottomTextLeft">赠-现金/商品</text><text class="contentBottomRight">{{formattedPrice(item.shopCashSupport)}}<text class="monyText">韩元</text></text></view>
					<view class="price"><view class="priceLeft">最低每月</view><view class="priceRight">月<text class="priceCenter">{{formattedPrice(item.month_price)}}</text>韩元</view></view>
					<view class="price"><view class="priceLeft">签约时间</view><view class="priceRight"><text class="priceCenter" style="color: rgb(255,102,102);">36</text>个月</view></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Custom from '@/components/custom-nav-bar/customNav.vue'
	import {getNaviBar} from '@/utill/systemData.js'
	import { servicePost} from '@/utill/request'
	import { formattedPrice } from '@/utill/common';
	import { listTrees } from '@/utill/common';
	import {ref} from 'vue'
	
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
			const cutturnCategory = ref(1)
			//아래부분 높이
			const screenHeight = ref(getNaviBar().screen());
			//계약카테고리
			const categorys = ref([]);
			//계약상품list
			const agreementList = ref([]);
			//클릭메뉴시 계약삼품 리스트 activeAgreementList 
			const activeAgreementList = ref([]);
			return{
				formattedPrice,
				cutturn,
				cutturnCategory,
				screenHeight,
				categorys,
				agreementList,
				activeAgreementList
			}
		},
		methods:{
			//계약폰카테고리 클릭시 이벤트부분
			categoryActive(cutturnId,cutturnCategory){
				this.cutturn = cutturnId;
				this.cutturnCategory = cutturnCategory;
				this.activeAgreementList = this.agreementList.filter((item)=>item.category_id == cutturnCategory);
			},
			//핫한계약폰 카테고리 클릭시 이벤트부분
			hotCategoryActive(cutturnId,cutturnCategory,name){
				this.cutturn = cutturnId;
				this.cutturnCategory = cutturnCategory;
				if(name == "LG"){
					this.activeAgreementList = this.agreementList.filter((item)=>item.mobile == 1 && item.hot == 1);
				}else if(name == "KT"){
					this.activeAgreementList = this.agreementList.filter((item)=>item.mobile == 2 && item.hot == 1);
				}else if(name == "SKT"){
					this.activeAgreementList = this.agreementList.filter((item)=>item.mobile == 3 && item.hot == 1);
				}
			},
			clickAgreementPhoneDetail(item){
				uni.setStorageSync('agreementItem',{
					 agreement:item
				})
				uni.navigateTo({
				        url: `/pages/itemPage/agreementPhonePage?id=${item.id}` // 이동할 페이지 경로
				});
			},
			clickAgreementInternetDetail(item){
				uni.setStorageSync('agreementItem',{
					 agreement:item
				})
				uni.navigateTo({
				        url: `/pages/itemPage/agreementInternetPage?id=${item.id}` // 이동할 페이지 경로
				});
			}
		},
		async onLoad(){
			const categoryData = uni.getStorageSync('agreementCategory');
			const now = Date.now();
			if(categoryData && categoryData.expiry > now){
				this.categorys = categoryData.category;
				this.agreementList = categoryData.agreementList;
				if(this.categorys[0]){
					if(this.categorys[0].child[0]){
						if(this.categorys[0].child[0].hot){
							this.hotCategoryActive(this.categorys[0].id,this.categorys[0].child[0].id,this.categorys[0].child[0].name);
						}else{
							this.categoryActive(this.categorys[0].id,this.categorys[0].child[0].id);
						}
					}
				} 
				return
			}
			let list = await servicePost('app/agreement/list');
			let category = listTrees(list.category);
			 // 캐시에 저장 (만료 시간: 24시간)
            const expiry = now + 24 * 60 * 60 * 1000; // 24시간 후
			uni.setStorageSync('agreementCategory', {
			    category: category,
				agreementList : list.agreementList,
				cardSales:list.cardSales,
				expiry
			});
			this.categorys = category;
			this.agreementList = list.agreementList;
			if(this.categorys[0]){
				if(this.categorys[0].child[0]){
					if(this.categorys[0].child[0].hot){
						this.hotCategoryActive(this.categorys[0].id,this.categorys[0].child[0].id,this.categorys[0].child[0].name);
					}else{
						this.categoryActive(this.categorys[0].id,this.categorys[0].child[0].id);
					}
				}
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
		color: rgb(60,60,60);
		padding-left: 20rpx;
		line-height: 85rpx;
		letter-spacing: 3rpx; /* 글자 간격 넓게 */
		text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
	}
	.custom-title-active{
		color:rgb(51, 153, 255);
		font-size: 29rpx;
		letter-spacing: 2rpx; /* 글자 간격 넓게 */
		text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
	}
	.shopContainer{
		width: 100%;
		padding-top: 20rpx;
		display: flex;
		flex-direction: row;
		.shopLeft{
			width: 230rpx;
			height: 100%;
			.shopBt{
				width: 100%;
				height: 100rpx;
				position: relative;			
				.shopBtText{
					width: 100%;
					height: 100rpx;
					line-height: 100rpx;
					font-size: 26rpx;
					text-align: center;
					color: rgb(120, 120, 120);
					font-weight: bold;
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
				}
				.activeShopBt{
					font-size: 30rpx;
					font-weight: bold;
					color:rgb(255, 102, 102);
					background-color: rgb(250, 250, 250);
					letter-spacing: 2rpx; /* 글자 간격 넓게 */
					text-shadow: 3rpx 3rpx 6rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
				}
				.shopBtShow{
					width: 60%;
					height: 8rpx; /* 굵은 줄의 두께 */
					position: absolute;
					bottom: 10rpx; /* 텍스트 아래로 5px 간격 */
					left: 20%;
					background-color: rgb(51, 153, 255); /* 줄의 기본 색상 */
					border-radius: 10rpx;
				}
			}
		}
		.shopRight{
			width: 520rpx;
			height: 100%;
			text-align: center;
			padding-left: 20rpx;
			.itemContent{
				width: 480rpx;
				height: 760rpx;
				border-radius: 10rpx;
				overflow: hidden;
				background: linear-gradient(to bottom, rgb(245, 245, 245),rgb(254, 254, 254));
				margin-top: 20rpx;
				.contentTop{
					width: 480rpx;
					height: 280rpx;
					margin-top: 20rpx;
					padding: 10rpx 10rpx 10rpx 30rpx;
					display: flex;
					.itemImg{
						width: 200rpx;
						height: 260rpx;
						image{
							width: 200rpx;
							height: 260rpx;
							border-radius: 8rpx;
							overflow: hidden;
						}
					}
					.itemInternetImg{
						width: 380rpx;
						height: 260rpx;
						margin-left: 20rpx;
						.itemInternetImgImage{
							width: 380rpx;
							height: 260rpx;
							border-radius: 8rpx;
							overflow: hidden;
						}
					}
					.topText{
						width: 240rpx;
						height: 260rpx;
						padding-right: 20rpx;
						.topText1{
							margin-top: 60rpx;
							height: 60rpx;
							width: 220rpx;
							text-align: right;
							font-size: 35rpx;
							line-height: 60rpx;
							font-weight: bold;
							letter-spacing: 5rpx; /* 글자 간격 넓게 */
							text-shadow: 6rpx 6rpx 10rpx rgba(50, 50, 50, 0.2); /* 부드러운 그림자 */
						}
						.topText2{
							margin-top: 20rpx;
							height: 100rpx;
							width: 220rpx;
							font-size: 28rpx;
							letter-spacing: 3rpx; /* 글자 간격 넓게 */
							padding-left: 30rpx;
							display: flex;
							flex-wrap: wrap;
							justify-content: flex-end;
							align-content: flex-start;
							text-align: center;
							overflow: hidden;		
						}
					}
				}
				.contentTitle{
					width: 480rpx;
					height: 60rpx;
					text-align: left;
					font-size: 33rpx;
					line-height: 60rpx;
					margin-top: 20rpx;
					padding-left: 20rpx;
					margin-bottom: 20rpx;
					letter-spacing: 5rpx; /* 글자 간격 넓게 */
					text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
				}
				.contentBottom{
					width: 480rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					font-size: 28rpx;
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					line-height: 60rpx;
					.monyText{
						font-size: 18rpx;
						padding-left: 6rpx;
					}
					.contentBottomTextLeft{
						display: inline-block;
						width: 220rpx;
						height: 60rpx;
						text-align: left;
					}
					.contentBottomRight{
						display: inline-block;
						width: 220rpx;
						height: 60rpx;
						font-size: 30rpx;
						text-align: right;
					}
					.price{
						margin-top: 15rpx;
						width:440rpx;
						border-top: 3rpx solid rgb(180, 180, 180);
						display: flex;
						justify-content: space-between;
						.priceLeft{
							margin-top: 15rpx;
							width: 160rpx;
							height: 60rpx;
							text-align: left;
						}
						.priceRight{
							margin-top: 15rpx;
							width: 280rpx;
							height: 60rpx;
							text-align: right;
							.priceCenter{
								font-size: 39rpx;
								font-weight: bold;
								letter-spacing: 3rpx; /* 글자 간격 넓게 */
								padding-left: 10rpx;
								padding-right: 10rpx;
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
							}
						}
					}
				}
			}
		}
	}
</style>
