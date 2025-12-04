<template>
	<view class="oldItem">
		<CustomNav back="true"></CustomNav>
		<view class="content">
			<SwiperImg :banner="item.banner"></SwiperImg>
			<view class="itemNumber"><text class="itemNumberLeft">No.</text>{{item.item_number}}</view>
			<view class="goodsTop">
				<view class="price">
					<view class="priceLeft"><text class="priceT">原价  </text>{{formattedPrice(item.price)}}<text class="priceY">  韩元</text></view>
					<view class="priceRight"><text class="priceT">二手价格  </text>{{formattedPrice(item.price2)}}<text class="priceY">  韩元</text></view>
				</view>
				<view class="title">
					{{item.title1}}
				</view>
			</view>
			<view class="itemService">
				<view class="serviceLeft1" style="display: flex; justify-content: space-between;"><p>商品归属</p><p style="color: rgb(255, 153, 51);">{{item.isShop}}</p></view>
				<view class="serviceLeft3">
					<view class="serviceTitle">公司服务 <span class="topAll" @click="servicePopupToggle('bottom')">点击查看详细</span></view>
					<view class="serviceCotent">
						<view class="serviceItem"><image src="/static/company/kuaidiyuan.png"></image><view class="serviceItemText">当日免费送到门！</view></view>
						<view class="serviceItem"><image src="/static/company/paisong.png"></image><view class="serviceItemText">邮费免费，全部包邮。</view></view>
					</view>
				</view>
			</view>
			<view class="itemNav">
				<u-subsection :list="list" :current="0" @change="itemContentClick"></u-subsection>
			</view>
			<view class="itemCurrentContent">
				<view v-if="current == 0">
					<view class="videoTitle">手机详细视频</view>
					<view class="itemVideo">
						<iframe 
						  width="100%" 
						  height="380" 
						  src="https://www.youtube.com/embed/CRJqRxzDNa4?mute=1&playsinline=1&rel=0"
						  allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						  allowfullscreen>
						</iframe>
					</view>
					<view class="itemContent">
						{{item.phone_detail}}
					</view>
				</view>
				<view v-if="current == 1">
					<OtherGoods></OtherGoods>
				</view>
			</view>
			<view class="hiddenView">
			</view>
		</view>
		<view>
			<!-- 상품 서비스부분 -->
			<uni-popup ref="servicePopup" style="z-index: 500; overflow: hidden;">
				<view class="popupBottom">
					<view class="servicePopupTitle">购买商品提供服务。</view>
					<view class="popupServiceContent">
						<view class="popupServiceTitle"><image src="/static/company/kuaidiyuan.png"></image><view class="popupServiceTitleText">当日免费送到门！</view></view>
						<view class="popupServiceDetail">
							满5万韩元! 购买手机，手机配件 加里峰，南九老，九老，大林，秃山，加山数码团地 地区的客户 您告诉我们地址 当天免费配送。一般30分钟内送达！
						</view>
					</view>
					<view class="popupServiceContent">
						<view class="popupServiceTitle"><image src="/static/company/paisong.png"></image><view class="popupServiceTitleText">邮费免费，全部包邮。</view></view>
						<view class="popupServiceDetail">
							购买 满5万韩元商品 当天免费邮寄。 您不需要担心邮寄过程手机会损坏，我们用 多层泡沫 精致包装，发货之前整个过程都给您拍视频，无需担心
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
import CustomNav from '@/components/custom-nav-bar/customNav.vue'
import SwiperImg from '@/components/pageDetail/swiperImg.vue'
import Bottom from '@/components/pageDetail/itemBottom.vue'
import OtherGoods from '@/components/pageDetail/otherGoods.vue';
import {formattedPrice} from "@/utill/common.js";
import { servicePost } from "@/utill/request";
import { ref } from "vue";

export default{
	components:{
		CustomNav,
		SwiperImg,
		OtherGoods
	},
	props:{

	},
	setup(props, context) {
		const item = ref({});
		const list = ref([
			{
				name: '详细信息'
			}, 
			{
				name: '购买礼包'
			}
		])
		
		// 定义当前选中索引
		const current = ref(0)
		return{
			item,
			formattedPrice,
			current,
			list
		}
		
	},
	methods:{
		servicePopupToggle(type) {
			this.$refs.servicePopup.open(type)
		},
		itemContentClick(i){
			this.current = i;
		}
	},
	async onLoad(op){
			try{
				const res = await servicePost('app/goods/item',{id:op.id,page:1,type:8});
				this.item = res.item;
				this.item.banner = this.item.banner ? JSON.parse(this.item.banner):[];
				this.item.service = this.item.service ? JSON.parse(this.item.service):[];
			}catch(error){
				console.error('onLoad 에러:', error);
			}
	}
}

</script>

<style lang="scss" scoped>
	.videoTitle{
		width: 750rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 33rpx;
		color: rgb(120, 120, 120);
		padding-left: 25rpx;
	}
	.itemVideo{
		width: 700rpx;
		margin-left: 25rpx;
		border-radius: 30rpx;
		overflow: hidden;
		transition: transform 0.3s;
	}
	.itemNumber{
		width: 100%;
		margin-top: 30rpx;
		height: 50rpx;
		text-align: right;
		line-height: 50rpx;
		padding-right: 30rpx;
		letter-spacing: 5rpx;
		color: rgb(80, 80, 80);
		font-size: 29rpx;
		.itemNumberLeft{
			color: rgb(255, 153, 51);
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
			letter-spacing: 8rpx;
			font-size: 33rpx;
		}
	}
	
	.oldItem{
		width: 100%;
		.content{
			width: 100%;
			.itemNav{
				width: 720rpx;
				margin-left: 15rpx;
				margin-top: 30rpx;
			}
			
			/**
			 * 중고폰 내용부분
			 */
			.itemContent{
				width: 720rpx;
				height: 700rpx;
				padding: 50rpx 20rpx 30rpx 35rpx ;
				background-color: #fff; /* 종이 같은 배경 */
				font-size: 30rpx; /* 기본 글자 크기 */
				line-height: 55rpx; /* 줄 간격 (가독성) */
				color: rgb(50, 50, 50); /* 글자 색상 */
				text-align: justify; /* 양쪽 정렬 */
				letter-spacing: 3rpx; /* 글자 간격 넓게 */
				text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
			}
			/**
			 * 내용 타이틀 부분
			 */
			.goodsTop{
				width: 720rpx;
				height: 270rpx;
				background-color: rgb(249,249,249);
				margin-left: 15rpx;
				margin-top: 26rpx;
				border-radius: 10rpx;
				.price{
					width: 100%;
					border-radius: 15rpx 15rpx 0 0;
					height: 110rpx;
					background-color: rgb(50,50,50);
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-left: 30rpx;
					padding-right: 30rpx;
					color: white;
					font-size: 36rpx;
					font-weight: bold;
					letter-spacing: 2rpx; /* 글자 간격 넓게 */
					text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.35); /* 부드러운 그림자 */
					.priceLeft{
						text-decoration: line-through;
						text-decoration-color: rgb(180, 180, 160); /* 선 색상 */
						text-decoration-style: solid; /* 선 스타일: solid, dashed, dotted 등 */
						text-decoration-thickness: 2rpx; /* 선 두께 */
					   .priceT{
					   	font-size: 24rpx;
					   	color: rgb(255, 0, 0);
					   	margin-right: 10rpx;
					   }
					}
					.priceRight{
						.priceT{
							font-size: 24rpx;
							color: rgb(255, 0, 0);
							margin-right: 10rpx;
						}
					}
					.priceY{
						font-size: 18rpx;
						color: rgb(255, 255, 51);
						margin-left: 6rpx;
					}
				}
				.title{
					width: 100%;
					height: 150rpx;
					padding-top: 22rpx;
					padding-left: 15rpx;
					padding-right: 15rpx;
					font-size: 36rpx;
					color: rgb(50, 50, 50);
					letter-spacing: 2rpx; /* 글자 간격 넓게 */
					text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
					overflow: hidden;  /* 넘친 부분 숨김 */
					text-overflow: ellipsis;  /* ... 표시 */
				}
			}
			
			
				/**
	 * 서비스 및 회사혹은개인 소유부분
	 */
	.itemService{
				background-color: rgb(249,249,249);
				width: 720rpx;
				height: 510rpx;
				margin-left: 15rpx;
				margin-top: 26rpx;
				border-radius: 10rpx;
				padding-top: 15rpx;
				.serviceLeft1{
					width: 680rpx;
					height: 105rpx;
					line-height: 105rpx;
					margin-top: 8rpx;
					margin-left: 20rpx;
					border-radius: 8rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					background-color: white;
					position: relative;
				}
				.serviceLeft3{
					width: 680rpx;
					height: 350rpx;
					line-height: 100rpx;
					margin-top: 8rpx;
					margin-left: 20rpx;
					border-radius: 8rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					background-color: white;
					.serviceTitle{
						position: relative;
						width: 100%;
						height: 80rpx;
						position: relative;
						.topAll{
							position: absolute;
							top: 0;
							right: 0;
						}
					}
					.serviceCotent{
						width: 100%;
						height: 260rpx;
						padding-left: 10rpx;
						padding-right: 10rpx;
						font-size: 28rpx;
						letter-spacing: 2rpx; /* 글자 간격 넓게 */
						overflow: hidden;
						.serviceItem{
							width: 100%;
							height: 100rpx;
							margin-top: 20rpx;
							display: flex;
							align-items: center;
							justify-content: space-between;
							image{
								width: 80rpx;
								height: 80rpx;
							}
							.serviceItemText{
								width: 500rpx;
								height: 80rpx;
								line-height: 90rpx;
								letter-spacing: 3rpx;
								font-size: 30rpx;
								text-shadow: 2rpx 2rpx 3rpx rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
								color: rgb(150, 150, 150);
							}
						}		
					}
				}
			}
		}
	}
	
	/**
	 * 서비스 밑에서 올라오는 창 
	 */
	.popupBottom{
		height: 800rpx;
		padding: 20rpx;
		border-radius: 38rpx 38rpx 0 0;
		z-index: 1000;
		background-color:white;
		
	}
	.specPopupText{
		width: 100%;
		height: 110rpx;
		display: flex;
		line-height: 110rpx;
		font-size: 26rpx;
		color: rgb(120, 120, 120);
		.specText{
			width: 50%;
			.specPopupName{
				color: rgb(255, 153, 51);
				letter-spacing: 2rpx; /* 글자 간격 넓게 */
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
			}
		}
	}
	
		.servicePopupTitle{
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			margin-top: 28rpx;
			font-size: 39rpx;
			color: rgb(255, 0, 0);
			letter-spacing: 2rpx; /* 글자 간격 넓게 */
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
		}
		.popupServiceContent{
			width: 100%;
			height: 310rpx;
			padding-left: 35rpx;
			padding-right: 35rpx;
			.popupServiceTitle{
				width: 100%;
				height: 100rpx;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 80rpx;
					height: 80rpx;
				}
				.popupServiceTitleText{
					width: 500rpx;
					height: 80rpx;
					line-height: 90rpx;
					letter-spacing: 3rpx;
					font-size: 30rpx;
					color: rgb(255, 153, 51);
					text-shadow: 2rpx 2rpx 3rpx rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
				}
			}
			.popupServiceDetail{
				width: 100%;
				height: 210rpx;
				font-size: 28rpx;
				color: rgb(150, 150, 150);
				letter-spacing: 3rpx;
				padding-top: 10rpx;
			}
		}
	
	/**
	 * 밑에부분 높이를 커버
	 */
	.hiddenView{
		width: 100%;
		height: 165rpx;
	}

</style>
