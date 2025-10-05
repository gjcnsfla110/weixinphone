<template>
	<view class="agreement">
		 <CustomNav :back="true"></CustomNav>
		 <view class="itemContent">
			 <view class="topBanner">
				<uni-swiper-dot class="uni-swiper-dot-box" :dots-styles="dotsStyles" :current="currentBanner" :info="JSON.parse(item.banner)"  mode="round" field="content">
					<swiper class="swiper-box" @change="changeBanner">
						<swiper-item v-for="(item, index) in JSON.parse(item.banner)" :key="index">
							<view class="swiper-item">
								<image :src="item"></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			 </view>
			 <view class="agreementTop">
				 <view class="label">
					 <view class="labelContent" v-if="true">
					 	<text class="labeltext1">新出</text> <text class="labeltext2">推荐</text>
					 </view>
					 <view class="labelContent" v-else-if="0">
						<text class="labeltext1">新出</text> <text class="labeltext2">人气</text>
					 </view>
					 <view class="labelContent" v-else-if="1">
					 	<text class="labeltext1">新出</text> <text class="labeltext2">爆款</text>
					 </view>
					 <view class="labelContent" v-else-if="0">
					 	<text class="labeltext1">性价高</text> <text class="labeltext2">店长推荐</text>
					 </view>
					 <view class="labelContent" v-else-if="2">
					 	<text class="labeltext1">热烈推荐</text> <text class="labeltext2">爆款</text>
					 </view>
					 <view class="labelContent" v-else>
					 	<text>小韩手机</text>
					 </view>
				 </view>
				 <view class="agreementTitle">
					 {{item.title}}
				 </view>
				 <view class="storege">
					 内存-{{item.store}}
				 </view>
				 <view class="star">
					 <image style="margin-left: 0;" src="/static/me/star.png"></image>
					 <image src="/static/me/star.png"></image>
					 <image src="/static/me/star.png"></image>
					 <image src="/static/me/star.png"></image>
					 <image src="/static/me/star.png"></image>
				 </view>
			 </view>
			 <view class="agreementContent">
					<view class="uni-padding-wrap uni-common-mt">
						<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="rgb(222, 11, 124)"></uni-segmented-control>
					</view>	
					<view class="content">
						<view class="monthPrice" v-show="current === 0">
							<view class="picker">
								<view class="pickerName" style="width: 290rpx; color: rgb(204,102,0);">本店最高返现金</view>
								<view class="pickerItem" style="background-color: white; width: 400rpx;"><text>{{formattedPrice(item.shopCashSupport)}}</text><text class="hanyuan">韩元</text></view>
							</view>
							<view class="picker">
								<view class="pickerName">优惠</view>
								<view class="pickerItem">
									<picker @change="bindPickerChangeOne" :value="oneIndex" :range="saleType" range-key="name" mode=selector>
										<view class="pickerItemTitle" v-if="oneIndex1!=1000">{{saleType[oneIndex].name}}</view>
										<view v-else class="pickerItemTitle">点击选择优惠</view>
									</picker>
								</view>
							</view>
							<view class="picker">
								<view class="pickerName">套餐</view>
								<view class="pickerItem">
									<picker @change="bindPickerChangetwo" :value="twoIndex" :range="plans" range-key="title" mode=selector>
										<view class="pickerItemTitle" v-if="twoIndex1!=1000">{{plans[twoIndex].title}}</view>
										<view v-else class="pickerItemTitle">点击选择套餐</view>
									</picker>
								</view>
							</view>
							<view v-if="twoIndex1!=1000" class="pickerDetail">
								<view class="pickerDetailTitle">요금제소개</view>
								{{plans[twoIndex].detail ? plans[twoIndex].detail : "" }}
							</view>
							<view v-if="twoIndex1!=1000 && oneIndex1 != 1000 ">
								<view class="picker" v-if="oneIndex">
										<view class="pickerName">优惠金额</view>
										<view class="pickerItem" style="background-color: white;"><text>{{formattedPrice(phoneSale)}}</text><text class="hanyuan">韩元</text></view>
								</view>
								<view v-else class="picker">
									<view class="pickerName">优惠金额</view>
									<view class="pickerItem" style="background-color: white;"><text>{{formattedPrice(feeSale)}}</text><text class="hanyuan">韩元</text></view>
								</view>
							</view>	
							<view class="picker">
								<view class="pickerName">信用卡优惠</view>
								<view class="pickerItem">
									<picker @change="bindPickerChangeThree" :value="threeIndex" :range="cards" range-key="card_company" mode=selector>
										<view class="pickerItemTitle" v-if="threeIndex!=1000"><text>{{formattedPrice(creditCardSale * 24)}}</text><text>韩元</text></view>
										<view v-else class="pickerItemTitle">查看信用卡优惠</view>
									</picker>
								</view>
							</view>
							<view class="hiddenBottom"></view>
						</view>
						<view class="detail" v-show="current === 1">
							<view></view>
							{{item.detail}}
						</view>
					</view>
				 </view>
		 </view>
	</view>
	<view class="agreementBottom">
		<view class="monthTop">
			<view class="monthTopleft">
				<view class="monthTopleft1"><text class="leftText">手机价格</text> {{formattedPrice(item.price)}}<text class="hanyuan">韩元</text></view>
				<view class="monthTopleft2"><text class="leftText">每月费</text> 150,000<text class="hanyuan">韩元</text></view>
			</view>
			<view class="monthTopRight">
				<view class="monthTopRight1">每月总话费</view>
				<view class="monthTopRight2">169000<text class="hanyuan">韩元</text></view>
			</view>
		</view>
		<view class="monthBottom">
			<view class="monthBottomLeft">
				<button plain="true">客 服 咨 询</button>
			</view>
			<view class="monthBottomRight">
				<button style="background-color:rgb(222, 11, 124);color: white;" @click="openPopup('bottom')">查 看 详 细</button>
			</view>
		</view>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" background-color="#fff" @change="">
			<view class="popupContent">
				<text class="text">popup 内容</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import CustomNav from "@/components/custom-nav-bar/customNav.vue";
	import SwiperImg from '@/components/pageDetail/swiperImg.vue'
	import { ref ,watch} from "vue";
	import { servicePost } from "@/utill/request";
	import {formattedPrice} from "@/utill/common.js";
	export default{
		components:{
			CustomNav,
			SwiperImg,
		},
		props:{
			
		},
		setup(props, context) {
			const item = ref({});
			const currentBanner = ref(0);
			//배너 스와이프 이미지스타일
			const dotsStyles = {
				 backgroundColor: 'rgba(255, 255, 255)',
				 selectedBackgroundColor: 'rgba(120, 120, 120)',
				 selectedBorder: '1rpx rgba(120, 120, 120) solid',
			}
			//下面内容
			const items = ['每月话费', '详细内容',];
			const current = ref(0)
			//요금제리스트
			const plans = ref([])
			//신용카드 리스트
			const cards =ref([]);
			//picker 인덱스 순서 - 선택약정/공시지원금 선택부분
			const saleType = [{name:"话 费 优 惠 25%",type:0},{name:"手 机 价 格 优 惠",type:1}]
			const oneIndex = ref(0);
			const oneIndex1 = ref(1000);
			//picker 인덱스 순서 - 요금제선택부분
			const twoIndex = ref(0);
			const twoIndex1 = ref(1000);
			const checkPlanPrice = ref(0);
			//picker 인덱스 순서 - 신용카드 할인부분
			const threeIndex = ref(1000);
			//공시지원금 / 요금할인총액 /신용카드할인
			const phoneSale = ref(0);
			const feeSale = ref(0);
			const creditCardSale =ref(0);
			//할인타입 감시
			watch([oneIndex,twoIndex],([newIndex,newIndex1])=>{
				if(oneIndex.value){
					checkPlanPrice.value = plans.value[twoIndex.value].price;
				}else{
					checkPlanPrice.value = plans.value[twoIndex.value].price * 0.75;
				}
				console.log(checkPlanPrice.value);
			})
			//상세보기 팍업창 ref
			const popup = ref("")
			return{
				item,
				formattedPrice,
				currentBanner,
				dotsStyles,
				items,
				current,
				plans,
				cards,
				oneIndex,
				oneIndex1,
				twoIndex,
				twoIndex1,
				threeIndex,
				saleType,
				phoneSale,
				feeSale,
				creditCardSale,
				checkPlanPrice,
				popup
			}
		},
		methods:{
			changeBanner(e){
				this.currentBanner = e.detail.current;
			},
			onClickItem(e) {
			    if (this.current != e.currentIndex) {
			        this.current = e.currentIndex;
			    }
			},
			bindPickerChangeOne(e){
				this.oneIndex = e.detail.value;
				this.oneIndex1 = e.detail.value;
			},
			bindPickerChangetwo(e){
				this.twoIndex = e.detail.value;
				this.twoIndex1 = e.detail.value;
				this.phoneSale = Number(this.plans[e.detail.value].phone_sale);
				this.feeSale = this.plans[e.detail.value].price*0.25*24;
			},
			bindPickerChangeThree(e){
				this.threeIndex = e.detail.value;
				this.creditCardSale = this.cards[e.detail.value].sale;
				console.log(this.creditCardSale)
			},
			openPopup(type){
				this.$refs.popup.open(type)
			},
			closePopup(type){
				this.$refs.popup.close()
			}
		},
		async onLoad(op){
			const storegeItem = uni.getStorageSync('agreementItem');
			const agreement = uni.getStorageSync('agreementCategory')
			if(storegeItem){
				this.item = storegeItem.agreement;
			}else{
				this.item = await servicePost('app/agreement/item/detail',{id:op.id});
			}
			const agreementList = await servicePost('app/agreement/plan/list',{id:op.id});
			this.plans = agreementList.plans;
			if(agreement){
				this.cards = agreement.cardSales.filter(item=>item.mobile = this.item.mobile);
				this.cards = [{card_company:"无信用卡",sale:0},...this.cards];
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topBanner{
		width: 100%;
		height: 500rpx;
		.swiper-box {
			width: 100%;
			height: 500rpx;
			.swiper-item {
					display: flex;
					justify-content: center;
					width: 100%;
					height: 500rpx;
					image{
						width: 390rpx;
						height: 440rpx;
						display: inline-block;
					}
			}
		}
	}
	.hanyuan{
		font-size: 22rpx;
	}
	.hiddenBottom{
		width: 100%;
		height: 290rpx;
	}
	.agreementBottom{
		height: 180rpx;
		border-top-right-radius: 50rpx;
		border-top-left-radius: 50rpx;
		position: fixed;
		bottom:0;
		left:0;
		width: 100vw;
		z-index: 10;
		height: 280rpx;
		background-color: white;
		box-shadow: 10rpx 10rpx 30rpx rgba(0, 0, 0, 0.5);
		padding:15rpx;
		.monthTop{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 150rpx;
			padding-left: 20rpx;
			padding-right: 20rpx;
			.monthTopleft{
				width: 60%;
				color: rgb(50, 50, 50);
				letter-spacing: 2rpx; /* 글자 간격 넓게 */
				.monthTopleft1{
					width: 100%;
					height: 70rpx;
					line-height: 80rpx;
				}
				.monthTopleft2{
					width: 100%;
					height: 70rpx;
				}
				.leftText{
					color: rgb(160, 160, 160);
					padding-right: 10rpx;
				}
			}
			.monthTopRight{
				width: 40%;
				text-align: right;
				.monthTopRight1{
					width: 100%;
					height: 70rpx;
					line-height: 80rpx;
					color: rgb(160, 160, 160);
				}
				.monthTopRight2{
					width: 100%;
					font-size: 36rpx;
					height: 70rpx;
					font-weight: bold;
					color: rgb(222, 11, 124);
					letter-spacing: 6rpx; /* 글자 간격 넓게 */
				}
				
			}
		}
		.monthBottom{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100rpx;
			.monthBottomLeft{
				width: 40%;
				padding:20rpx;
			}
			.monthBottomRight{
				width: 60%;
				padding:20rpx;
			}
		}
	}
	.agreement{
		width: 100%;
		.itemContent{
			width: 100%;
			.agreementTop{
				.labelContent{
					width: 100%;
					height: 60rpx;
					text-align: center;
					line-height: 60rpx;
					margin-top: 20rpx;
					font-size: 28rpx;
					.labeltext1{
						padding-right: 12rpx;
						color: rgb(222, 11, 124);
					}
					.labeltext2{
						border-left:2rpx solid rgb(225, 225, 225) ;
						padding-left: 20rpx;
						color: rgb(204, 102, 0);
					}
				}
				.agreementTitle{
					text-align: center;
					height: 70rpx;
					width: 100%;
					line-height: 70rpx;
					font-size: 36rpx;
					color: rgb(50, 50, 50);
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					font-weight: bold;
				}
				.storege{
					text-align: center;
					width: 100%;
					height: 45rpx;
					font-size: 28rpx;
					color: rgb(180, 180, 180);
					letter-spacing: 8rpx; /* 글자 간격 넓게 */
					line-height: 45rpx;
				}
				.star{
					width: 100%;
					display: flex;
					height: 50rpx;
					justify-content: center;
					align-items: center;
					image{
						width: 32rpx;
						height: 24rpx;
						margin-left: 18rpx;
					}
				}
			}
			.agreementContent{
				.uni-common-mt {
						margin-top: 60rpx;
				}

				.uni-padding-wrap {
						// width: 750rpx;
						padding: 0px 60rpx;
				}
				.content {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						.detail{
							padding: 60rpx 60rpx 0 60rpx;
							font-size: 29rpx;
							letter-spacing: 5rpx; /* 글자 간격 넓게 */
							word-spacing: 2rpx;
							line-height: 46rpx;
						}
						.monthPrice{
							width: 750rpx;
							padding: 50rpx 25rpx 0 25rpx;
							position: relative;
							.picker{
								text-align: center;
								width: 700rpx;
								border: 5rpx solid rgb(240, 240, 240);
								border-radius: 10rpx;
								font-size: 30rpx;
								display: flex;
								flex-wrap: wrap;
								background-color: rgb(240, 240, 240);
								margin-bottom: 20rpx;
								.pickerName{
									width: 200rpx;
									height: 100rpx;
									line-height: 100rpx;
									letter-spacing: 5rpx; /* 글자 간격 넓게 */
									font-weight: bold;
									color: rgb(222, 11, 124);
									background-color: white;
									border-top-left-radius: 7rpx;
									border-bottom-left-radius: 7rpx;
									overflow: hidden;
								}
								.pickerItem{
									width: 490rpx;
									height: 100rpx;
									letter-spacing: 8rpx; /* 글자 간격 넓게 */
									line-height: 100rpx;
								}
							}
							.pickerDetail{
								width: 700rpx;
								padding: 30rpx;
								text-align: left;
								border-radius: 10rpx;
								margin-top: 20rpx;
								border: 5rpx solid rgb(240, 240, 240);
								letter-spacing: 5rpx; /* 글자 간격 넓게 */
								color: rgb(130, 130, 130);
								margin-bottom: 20rpx;
								.pickerDetailTitle{
									text-align: center;
									margin-bottom: 20rpx;
									color: rgb(222, 11, 124,0.6);
									font-weight: bold;
								}
							}
						}
				}
			}
		}
	}
</style>