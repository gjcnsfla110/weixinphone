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
							<view class="installmentContent">
								<view class="installmentTitle">选择分期期限</view>
								<view class="installmentCheck">
									<view :class="installment == item.value ? 'installmenText installmentActive' : 'installmenText' " @click="checkinstallment(item.value)" v-for="item in installmentList">{{item.name}}</view>
								</view>
							</view>
							<view class="picker">
									<view class="pickerName">手机价格</view>
									<view class="pickerItem" style="background-color: white;"><text>{{formattedPrice(item.price)}}</text><text class="hanyuan">韩元</text></view>
							</view>
							<view class="picker">
								<view class="pickerName">信用卡优惠</view>
								<view class="pickerItem">
									<u-select v-model="cardShow" @confirm="changeCardSale" :list="cards" label-name="card_company" value-name="sale" mode="single-column">
									</u-select>
									<view class="pickerItemTitle" v-if="creditCardSale" @click="cardShow=true"><text>{{formattedPrice(creditCardSale)}}</text><text>韩元</text></view>
									<view v-else class="pickerItemTitle" @click="cardShow=true">信用卡优惠</view>
								</view>
							</view>
							<view class="picker">
								<view class="pickerName">优惠方式</view>
								<view class="pickerItem">
									<u-select v-model="saleTypeShow" @confirm="changeSaleType" :list="saleType" label-name="name" value-name="type" mode="single-column">
									</u-select>
									<view class="pickerItemTitle" v-if="saleTypeVal" @click="saleTypeShow=true">{{saleTypeText}}</view>
									<view v-else class="pickerItemTitle" @click="saleTypeShow=true">请选优惠方式</view>
								</view>
							</view>
							<view class="picker">
								<view class="pickerName">话费套餐</view>
								<view class="pickerItem">
									<u-select v-model="planShow" @confirm="changePlan" :list="plans" label-name="title" value-name="price" mode="single-column">
									</u-select>
									<view class="pickerItemTitle" v-if="planPrice && saleTypeVal" @click="planShow=true">{{planText}}</view>
									<view v-else>
										<view v-if="saleTypeVal" class="pickerItemTitle" @click="planShow=true">请选话费套餐</view>
										<view v-else class="pickerItemTitle" @click="openAlertDialog">请选话费套餐</view>
									</view>
								</view>
							</view>					
							<view>
								<view v-if="phoneSale">
									<view class="picker">
											<view class="pickerName" style="width: 40%;">通信社手机优惠</view>
											<view class="pickerItem" style="background-color: white;width: 60%;"><text>{{formattedPrice(phoneSale)}}</text><text class="hanyuan">韩元</text></view>
									</view>
									<view class="picker">
											<view class="pickerName" style="color: rgb(255, 128, 0);width: 40%;">优惠完后手机价</view>
											<view class="pickerItem" style="background-color: white;width: 60%;"><text>{{formattedPrice(phonePrice)}}</text><text class="hanyuan">韩元</text></view>
									</view>
								</view>
								<view v-if="feeSale">
									<view class="picker">
										<view class="pickerName" style="width: 40%;">优惠完后话费</view>
										<view class="pickerItem" style="background-color: white;width: 60%;"><text>{{formattedPrice(monthFeePrice)}}</text><text class="hanyuan">韩元</text></view>
									</view>
									<view class="picker">
										<view class="pickerName" style="color: rgb(255, 128, 0);width: 40%;">话费总共优惠</view>
										<view class="pickerItem" style="background-color: white;width: 60%;"><text>{{formattedPrice(feeSale)}}</text><text class="hanyuan">韩元</text></view>
									</view>
								</view>					
							</view>
							<view class="pickerDetail">
								<view class="pickerDetailTitle">话费套餐介绍</view>
								{{planDetail}}
							</view>	
							<view class="hiddenBottom" v-if="saleTypeVal && planPrice"></view>
						</view>
						<view class="detail" v-show="current === 1">
							<view>{{item.detail}}</view>
							<view class="hiddenBottom" v-if="saleTypeVal && planPrice"></view>
						</view>
					</view>
				 </view>
		 </view>
	</view>
	<view class="agreementBottom" v-if="saleTypeVal && planPrice">
		<view class="monthTop">
			<view class="monthTopleft">
				<view class="monthTopleft1"><text class="leftText">每月手机价格</text> {{formattedPrice(monthPhonePrice)}}<text class="hanyuan">韩元</text></view>
				<view class="monthTopleft2"><text class="leftText">每月话费价格</text> {{formattedPrice(monthFeePrice)}}<text class="hanyuan">韩元</text></view>
			</view>
			<view class="monthTopRight">
				<view class="monthTopRight1">每月总话费</view>
				<view class="monthTopRight2">{{formattedPrice(monthTotalPrice)}}<text class="hanyuan">韩元</text></view>
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
		<uni-popup ref="popup" background-color="#fff">
			<scroll-view scroll-y="true" class="popupContent">
				<view class="popuptopHidden">
				</view>
				<view class="popupTop">
					<view class="popupTitle">
						<view class="title1">选项详细内容</view>
						<view class="title2">{{item.title}}</view>
					</view>
					<view class="monthTop">
						<view class="monthTopleft">
							<view class="monthTopleft1"><text class="leftText">手机原价</text> <text style="font-size: 32rpx; color:rgb(222, 11, 124)">{{formattedPrice(item.price)}}</text><text class="hanyuan">韩元</text></view>
							<view class="monthTopleft2" ><text class="leftText">话费套餐</text> {{formattedPrice(planPrice)}}<text class="hanyuan">韩元</text></view>
						</view>
						<view class="monthTopRight">
							<view class="monthTopRight1">每月总话费</view>
							<view class="monthTopRight2">{{formattedPrice(monthTotalPrice)}}<text class="hanyuan">韩元</text></view>
						</view>
					</view>
				</view>
				<view class="popupCenter">
					<view class="popupDetail">
						<view class="detaiContent" style="margin-top: 18%;">
							<view class="detailTitle">商品信息</view>
							<view class="detailContent">
								<view class="detailItem">
									<text class="detailItemTextLeft">机型</text><text class="detailItemTextRight">{{item.title}}</text>
								</view>
								<view class="detailItem">
									<text class="detailItemTextLeft">内存</text><text class="detailItemTextRight">{{item.store}}</text>
								</view>
								<view class="detailItem">
									<text class="detailItemTextLeft">颜色</text><text class="detailItemTextRight">{{item.color}}</text>
								</view>
								<view class="detailItem">
									<text class="detailItemTextLeft" style="color: rgb(255, 128, 0)">本店返现金</text><text class="detailItemTextRight">{{formattedPrice(item.shopCashSupport)}}<text class="hanyuan">韩元</text></text>
								</view>
							</view>
						</view>
						<view class="detaiContent">
							<view class="detailTitle">选项信息</view>
							<view class="detailContent">
								<view class="detailItem">
									<text class="detailItemTextLeft">信用卡银行</text><text class="detailItemTextRight">{{formattedPrice(cardName)}}</text>
								</view>
								<view class="detailItem">
									<text class="detailItemTextLeft">信用卡优惠</text><text class="detailItemTextRight">{{formattedPrice(creditCardSale)}}<text class="hanyuan">韩元</text></text>
								</view>
								<view class="detailItem">
									<text class="detailItemTextLeft">分期期限</text><text class="detailItemTextRight">{{installment}}个月</text>
								</view>
								<view class="detailItem">
									<text class="detailItemTextLeft">每月机器费</text><text class="detailItemTextRight">{{formattedPrice(monthPhonePrice)}}<text class="hanyuan">韩元</text></text>
								</view>
								<view class="detailItem">
									<text class="detailItemTextLeft">每月话费</text><text class="detailItemTextRight">{{formattedPrice(monthFeePrice)}}<text class="hanyuan">韩元</text></text>
								</view>
								<view class="detailItem" v-if="feeSale">
									<text class="detailItemTextLeft" style="width: 40%;color: rgb(255, 128, 0)">话费总共优惠</text><text class="detailItemTextRight" style="width: 60%;">{{formattedPrice(feeSale)}}<text class="hanyuan">韩元</text></text>
								</view>
								<view class="detailItem" v-if="phoneSale">
									<text class="detailItemTextLeft"style="width: 40%;">通信社手机优惠</text><text class="detailItemTextRight" style="width: 60%;">{{formattedPrice(phoneSale)}}<text class="hanyuan">韩元</text></text>
								</view>
								<view class="detailItem" v-if="saleTypeVal == 2">
									<text class="detailItemTextLeft" style="width: 40%;color: rgb(255, 128, 0)">优惠完后手机价</text><text class="detailItemTextRight" style="width: 60%;">{{formattedPrice(phonePrice)}}<text class="hanyuan">韩元</text></text>
								</view>
							</view>
						</view>
						<view class="detaiContent">
							<view class="detailTitle">话费套餐介绍</view>
							<view class="detailContent">
								<view class="planDetailContent">
									{{planDetail}}
								</view>
							</view>
						</view>
						<view class="detailMonthPrice">
							<view class="detailMonthPriceLeft">每月费用</view>
							<view class="detailMonthPriceRight">{{formattedPrice(monthTotalPrice)}}<text class="hanyuan">韩元</text></view>
						</view>
					</view>
				</view>
				<view class="popupbottomHidden"></view>
				<view class="popupBottom">
					<view class="closePopup" @click="closePopup">
						关闭
					</view>
					<view class="popupHideButton">
						联系客服商谈
					</view>
				</view>
			</scroll-view>
		</uni-popup>
	</view>
	<!--dialog 提示选项框 先选者上面-->
	<view>
		<!-- 提示窗示例 -->
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="error" cancelText="关闭" title="通知" confirmText="确认">
				<view style="font-size: 28rpx;color:rgb(88, 88, 88); letter-spacing: 5rpx;">请先选择上面优惠方式!</view>
			</uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import CustomNav from "@/components/custom-nav-bar/customNav.vue";
	import SwiperImg from '@/components/pageDetail/swiperImg.vue'
	import { ref ,watch,computed} from "vue";
	import { servicePost } from "@/utill/request";
	import {formattedPrice} from "@/utill/common.js";
	export default{
		components:{
			CustomNav,
			SwiperImg,
		},
		computed:{
				
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
			//할부월수 표현
			const installmentList = [{name:'24个月',value:24},{name:'36个月',value:36},{name:'48个月',value:48}];
			const installment = ref(24);
			//요금제리스트
			const plans = ref([])
			//신용카드 리스트
			const cards =ref([]);
			//picker - 선택약정/공시지원금 선택부분
			const saleType = [{name:"选择优惠方式",type:0},{name:"话 费 优 惠 25%",type:1},{name:"手 机 价 格 优 惠",type:2}]
			const saleTypeShow = ref(false);
			const saleTypeVal = ref(0);
			const saleTypeText = ref("")
			//picker - 요금제선택부분
			const planShow = ref(false);
			const planPrice = ref(0)
			const planText = ref("");
			const planDetail = ref("无套餐信息，请先选择话费套餐!");
			const checkPlan = ref({title:"请选话费套餐",price:0,phone_sale:0,detail:"无套餐信息，请先选择话费套餐!"})
			//picker - 신용카드 할인부분
			const cardShow = ref(false)
			const creditCardSale =ref(0);
			const cardName = ref("未选银行");
			//공시지원금 / 요금할인총액 /
			const phoneSale = ref(0);
			const feeSale = ref(0);
			//월휴대폰 기기값, 월요금제 , 휴대폰 기기값
			const monthPhonePrice = ref(0)
			const monthFeePrice = ref(0)
			const monthTotalPrice = ref(0)
			const phonePrice = ref(0)
			//할인타입 감시
			watch([saleTypeVal,planPrice, creditCardSale,installment], ([newSaleTypeVal, newPlanPrice, newCreditCardSale,newInstallment]) => {
				 if(saleTypeVal.value == 1){
					 planDetail.value = checkPlan.value.detail;
					 phoneSale.value = 0;
					 feeSale.value = planPrice.value *0.25 * 24;
					 monthFeePrice.value = planPrice.value *0.75;
					 monthPhonePrice.value =Math.round(Number(item.value.price - creditCardSale.value)/installment.value);
					 phonePrice.value = item.value.price - creditCardSale.value;
					 monthTotalPrice.value = Number(monthFeePrice.value) + Number(monthPhonePrice.value);
				 }else if(saleTypeVal.value == 2){
					 planDetail.value = checkPlan.value.detail;
					 phoneSale.value = checkPlan.value.phone_sale;
					 feeSale.value = 0;
					 monthFeePrice.value = planPrice.value;
					 monthPhonePrice.value = Math.round(Number(item.value.price - phoneSale.value - creditCardSale.value )/installment.value);
					 phonePrice.value = item.value.price - phoneSale.value - creditCardSale.value;
					 monthTotalPrice.value = Number(monthFeePrice.value) + Number(monthPhonePrice.value);
				 }else{
					 phoneSale.value = 0;
					 feeSale.value = 0;
					 monthFeePrice.value = 0;
					 monthPhonePrice.value = 0;
					 phonePrice.value = item.value.price;
					 checkPlan.value = {id:0,agreement_id:0,title:"请选话费套餐",price:0,phone_sale:0,detail:"无套餐信息，请先选择话费套餐!",ranking:50};
					 monthTotalPrice.value = 0;
				 }
			});
			//상세보기 팍업창 ref
			const popup = ref("")
			//할인종류 선택안했을시 생성되는 팍업창 ref
			const alertDialog = ref("");
			return{
				item,
				formattedPrice,
				currentBanner,
				dotsStyles,
				items,
				current,
				popup,
				saleType,
				saleTypeShow,
				saleTypeVal,
				saleTypeText,
				plans,
				planShow,
				planPrice,
				planText,
				planDetail,
				checkPlan,
				cards,
				cardShow,
				creditCardSale,
				cardName,
				monthPhonePrice,
				monthFeePrice,
				phonePrice,
				phoneSale,
				feeSale,
				installmentList,
				installment,
				monthTotalPrice
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
			changeSaleType(e){
				this.saleTypeVal = e[0].value;
				this.saleTypeText = e[0].label;
			},
			changePlan(e){
				this.planPrice = e[0].value;
				this.planText = e[0].label;
				this.checkPlan = this.plans.filter(item => item.price == e[0].value)[0];

			},
			changeCardSale(e){
				this.creditCardSale = Number(e[0].value);
				this.cardName = e[0].label;
			},
			openPopup(type){
				this.$refs.popup.open(type)
			},
			closePopup(type){
				this.$refs.popup.close()
			},
			checkinstallment(val) {
				this.installment = val;
            },
			openAlertDialog(){
				this.$refs.alertDialog.open()
			}
		},
		async onLoad(op){
			const storegeItem = uni.getStorageSync('agreementItem');
			const agreement = uni.getStorageSync('agreementCategory')
			if(storegeItem){
				this.item = storegeItem.agreement;
				this.phonePrice = this.item.price;
			}else{
				this.item = await servicePost('app/agreement/item/detail',{id:op.id});
				this.phonePrice = this.item.price;
			}
			const planList = await servicePost('app/agreement/plan/list',{id:op.id});
			this.plans = [{id:0,agreement_id:0,title:"请选话费套餐",price:0,phone_sale:0,detail:"无套餐信息，请先选择话费套餐!",ranking:50},...planList.plans];
			if(agreement){
				this.cards = agreement.cardSales.filter(item=>item.mobile = this.item.mobile);
				this.cards = [{card_company:"无信用卡",sale:0},...this.cards];
			}
		}
	}
</script>

<style lang="scss" scoped>
	//팝부분입니다
	.popupContent{
		width: 100%;
		height: 100vh;
		.popuptopHidden{
			width: 100%;
			height: 180rpx;
		}
		.popupbottomHidden{
			width: 100%;
			height:210rpx;
		}
		.popupTop{
			width: 100%;
			height: 410rpx;
			.popupTitle{
				width: 100%;
				height: 230rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
				font-size: 36rpx;
				color: rgb(50, 50, 50);
				letter-spacing: 6rpx; /* 글자 간격 넓게 */
				font-weight: bold;
				.title1{
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					text-align: center;
					color:rgb(222, 11, 124);
					margin-bottom: 30rpx;
				}
				.title2{
					width: 100%;
					height: 110rpx;
					line-height: 1.5;
				}
			}
		}
		.popupCenter{
			width: 100%;
			background-color: rgb(245, 245, 245);
			padding: 80rpx 50rpx 80rpx 50rpx ;
			font-size: 27rpx;
			.popupDetail{
				width: 650rpx;
				height: 1800rpx;
				background: white;
				padding: 30rpx;
				clip-path: polygon(
					/* 상단 톱니 */
					0% 0%, 10% 5%, 20% 0%, 30% 5%, 40% 0%, 50% 5%, 60% 0%, 70% 5%, 80% 0%, 90% 5%, 100% 0%,
					/* 오른쪽 직선 */
					100% 100%,
					/* 하단 톱니 */
					90% 95%, 80% 100%, 70% 95%, 60% 100%, 50% 95%, 40% 100%, 30% 95%, 20% 100%, 10% 95%, 0% 100%
				);
				.detailTitle{
					width: 100%;
					height: 70rpx;
					font-size: 30rpx;
					line-height: 70rpx;
					padding-left: 5rpx;
					font-weight: bold;
					color: rgb(80, 80, 80);
					border-bottom:3rpx solid rgb(150,150,150) ;
					letter-spacing: 10rpx; /* 글자 간격 넓게 */
					margin-bottom: 27rpx;
				}
				.detailContent{
					width: 100%;
					padding:15rpx 0 15rpx 0;
					.detailItem{
						width: 100%;
						height: 70rpx;
						line-height: 70rpx;
						letter-spacing: 5rpx; /* 글자 간격 넓게 */
						.detailItemTextLeft{
							display: inline-block;
							width: 30%;
							color: rgb(160, 160, 160);
						}
						.detailItemTextRight{
							display: inline-block;
							width: 70%;
							text-align: right;
							color: rgb(80, 80, 80);
						}
					}
					.planDetailContent{
						color: rgb(160, 160, 160);
					}
				}
				.detailMonthPrice{
					width: 590rpx;
					height: 100rpx;
					margin-top: 20rpx;
					border-top:3rpx solid rgb(150,150,150) ;
					display: flex;
					line-height: 100rpx;
					letter-spacing: 6rpx; /* 글자 간격 넓게 */
					color: rgb(80, 80, 80);
					.detailMonthPriceLeft{
						width: 200rpx;
						color: rgb(160, 160, 160);
					}
					.detailMonthPriceRight{
						width: 390rpx;
						text-align: right;
						font-size: 33rpx;
						padding-right: 5rpx;
					}
				}
			}
		}
		.popupBottom{
			position: fixed;
			width: 100%;
			height: 220rpx;
			left: 0;
			bottom: 0;
			background: white;
			box-shadow:0 -5rpx 20rpx rgba(150, 150, 150, 0.2); /* 부드러운 외곽 그림자 */
			display: flex;
			font-size: 32rpx;
			.closePopup{
				width: 30%;
				height: 100rpx;
				margin-top: 50rpx;
				border-radius: 22rpx;
				border: 5rpx solid rgb(150, 150, 150);
				color: rgb(88, 88, 88);
				text-align: center;
				line-height: 100rpx ;
				letter-spacing: 10rpx; /* 글자 간격 넓게 */
				margin-left: 8%;
				margin-right: 4%;
			}
			.popupHideButton{
				width: 50%;
				height: 100rpx;
				margin-top: 50rpx;
				border-radius: 22rpx;
				color: white;
				text-align: center;
				line-height: 100rpx;
				background-color: rgb(222, 11, 124);
				letter-spacing: 10rpx; /* 글자 간격 넓게 */
			}
		}

	}
	
	
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
			font-size: 27rpx;
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
							.installmentContent{
								width: 700rpx;
								height: 200rpx;
								text-align: center;
								margin-bottom: 10rpx;
								letter-spacing: 5rpx; /* 글자 간격 넓게 */
								.installmentTitle{
									width: 100%;
									height: 70rpx;
									font-size: 33rpx;
									line-height: 70rpx;
								}
								.installmentCheck{
									display: flex;
									height: 130rpx;
									align-items: center;
									justify-content: space-between;
									.installmenText{
										width: 216rpx;
										height: 90rpx;
										line-height: 90rpx;
										border-radius: 8rpx;
										font-size: 26rpx;
										border: 5rpx solid rgb(240, 240, 240);
									}
									.installmentActive{
										border-radius: 12rpx;
										border: 5rpx solid rgb(222, 11, 124);
										color: rgb(222, 11, 124);
										font-weight: bold;
										font-size: 31rpx;
									}
								}
							}
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
								text-align: center;
								border-radius: 10rpx;
								margin-top: 20rpx;
								border: 5rpx solid rgb(240, 240, 240);
								letter-spacing: 5rpx; /* 글자 간격 넓게 */
								color: rgb(130, 130, 130);
								margin-bottom: 20rpx;
								.pickerDetailTitle{
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