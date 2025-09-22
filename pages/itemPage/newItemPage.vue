<template>
	<view class="newItem">
		<CustomNav back="true"></CustomNav>
		<view class="content">
			<SwiperImg :banner="item.banner"></SwiperImg>
			<view class="goodsTop">
				<view class="price">
					<view class="priceLeft"><text class="priceT">原价</text>{{formattedPrice(item.price)}}<text class="priceY">韩元</text></view>
					<view class="priceRight"><text class="priceT">优惠价</text>{{formattedPrice(item.price1)}}<text class="priceY">韩元</text></view>
				</view>
				<view class="title">
					{{item.title1}}
				</view>
			</view>
			<view class="itemService" :class="heightClass">
				<view class="serviceLeft1" style="display: flex; justify-content: space-between;"><p>商品归属</p><p style="color: rgb(255, 153, 51);">{{item.isShop}}</p></view>
				<view class="serviceLeft2" v-if="hasSpec">
					<view class="specTitle">手机配置<span class="topAll" @click="specPopupToggle('bottom')">查看全部</span></view>
					<view class="spec">
						<view class="specTop"> <text class="specT">处理器</text> : {{spec.cpu}} </view> <view class="specTop"> <text class="specT"> 电池 </text> : {{spec.battery}}</view> <view class="specTop"> <text class="specT"> 像素 </text> : {{spec.camera}}</view>
						<view class="specBttom1"> <text class="specT">屏幕</text> : {{spec.display}}</view> <view class="specBttom2"> <text class="specT">颜色</text> : {{spec.color}}</view>
					</view>
				</view>
				<view class="serviceLeft3">
					<view class="serviceTitle">公司服务<span class="topAll" @click="servicePopupToggle('bottom')">查看全部</span></view>
					<view class="serviceCotent">
						 <view v-for="(i,index) in item.service" class="serviceCotentItem">
							  <text class="serviceText">No{{index+1}}.</text> {{i.title}}
						 </view>
					</view>
				</view>
			</view>
			<view class="Accessories">
				<view class="AccessoriesContent">
					<view class="AccessoriesTitle"><text class="AccessoriesTitleLeft">添加！！</text> 40,000 韩币</view>
					<view class="AccessoriesText"><image class="AccessoriesImg" src="/static/me/free.png"></image> 1. 赠送 高品质蓝牙耳机</view>
					<view class="AccessoriesText"><image class="AccessoriesImg" src="/static/me/free.png"></image> 2. 赠送 精品手机壳</view>
					<view class="AccessoriesText"><image class="AccessoriesImg" src="/static/me/free.png"></image> 3. 赠送 高速充电头 + 60w棉制精品数据线</view>
				</view>		
			</view>
			<view class="content">
				<view class="contentItem" v-for="i in item.content">
					<image class="contentItemImg" :src="i"></image>
				</view>
			</view>
			<view class="hiddenView">
				
			</view>
		</view>
		<view>
			<!-- 스펙popup부분 -->
			<uni-popup ref="specPopup" style="z-index: 500; overflow: hidden;">
				<view class="popupBottom">
					<view class="specPopupTtile"><text class="specPopupTtileModel">{{spec.model}}</text> 详细信息</view>
					<view class="specPopupText" style="margin-top: 20rpx;">
						<view class="specText">
							<text class="specPopupName">处理器</text> : {{spec.cpu}}
						</view>
						<view class="specText">
							<text class="specPopupName">像素</text> : {{spec.camera}}
						</view>
					</view>
					<view class="specPopupText">
						<view class="specText">
							<text class="specPopupName">内存</text> : <text v-for="i in JSON.parse(spec.ram)">{{i}}</text>
						</view>
						<view class="specText">
							<text class="specPopupName">存储容量</text>: <text v-for="i in JSON.parse(spec.storage)">{{i}}/</text>
						</view>
					</view>
					<view class="specPopupText">
						<view class="specText">
							<text class="specPopupName">屏幕</text> : {{spec.display}}
						</view>
						<view class="specText">
							<text class="specPopupName">电池</text> : {{spec.battery}}
						</view>
					</view>
					<view class="specPopupText">
						<view class="specText">
							<text class="specPopupName">防水</text> : {{spec.water}}
						</view>
						<view class="specText">
							<text class="specPopupName">重量</text> : {{spec.weight}}
						</view>
					</view>
					<view class="specPopupText">
						<view class="specText">
							<text class="specPopupName">网络</text> : {{spec.type}}
						</view>
						<view class="specText">
							<text class="specPopupName">颜色</text> : {{spec.color}}
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
		<view>
			<!-- 상품 서비스부분 -->
			<uni-popup ref="servicePopup" style="z-index: 500; overflow: hidden;">
				<view class="popupBottom">
					<view class="servicePopupTitle">购买商品提供服务。</view>
					<view class="servicePopupText" v-for="i in item.service">
						 <text class="servicePopupTextL">{{JSON.parse(i.description).title ? JSON.parse(i.description).title : ""}}</text><text class="servicePopupTextR">{{JSON.parse(i.description).description ? JSON.parse(i.description).description : ""}}</text>
					</view>
				</view>
			</uni-popup>
		</view>
		<Bottom></Bottom>
	</view>
</template>

<script>
	import CustomNav from "@/components/custom-nav-bar/customNav.vue";
	import SwiperImg from '@/components/pageDetail/swiperImg.vue'
	import Bottom from '@/components/pageDetail/itemBottom.vue'
	import { servicePost } from "@/utill/request";
	import { ref } from "vue";
	import {useMainStores } from "@/stores/mainData";
	import {formattedPrice} from "@/utill/common.js";
	export default{
		components:{
			CustomNav,
			SwiperImg,
			Bottom,
		},
		props:{

		},
		setup(props, context) {
			const item = ref({});
			const useData = useMainStores();
			const {goodsSpecs} = useData;
			const spec = ref({});
			return {
				item,
				goodsSpecs,
				spec,
				formattedPrice
			}
		},
		computed: {
			hasSpec() {
				return this.spec && Object.keys(this.spec).length > 0;
			},
			heightClass() {
			  return this.hasSpec ? 'height-765' : 'height-460';
			}
	    },
		methods:{
			specPopupToggle(type) {
				this.$refs.specPopup.open(type)
			},
			servicePopupToggle(type) {
				this.$refs.servicePopup.open(type)
			},
		},
		async onLoad(op){
			try{
				const res = await servicePost('app/goods/item',{id:op.id});
				this.item = res;
				this.item.banner = this.item.banner ? JSON.parse(this.item.banner):[];
				this.item.content = this.item.content ? JSON.parse(this.item.content):[];
				this.item.service = this.item.service ? JSON.parse(this.item.service):[];
				this.item.delivery = this.item.delivery ? JSON.parse(this.item.delivery):[];
				this.spec = this.goodsSpecs.filter(item1=>item1.id == this.item.spec_id)[0] || {};
			}catch(error){
				console.error('onLoad 에러:', error);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.height-765 {
	  height: 765rpx;
	}
	.height-460 {
	  height: 460rpx;
	}
	.newItem{
		width: 100%;
		.content{
			width: 100%;
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
					background-color: rgb(0, 204, 0);
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-left: 30rpx;
					padding-right: 30rpx;
					color: white;
					font-size: 33rpx;
					font-weight: bold;
					.priceLeft{
						text-decoration: line-through;
						text-decoration-color: rgb(180, 180, 160); /* 선 색상 */
						text-decoration-style: solid; /* 선 스타일: solid, dashed, dotted 등 */
						text-decoration-thickness: 2rpx; /* 선 두께 */
					   .priceT{
					   	font-size: 26rpx;
					   	color: rgb(255, 0, 0);
					   	margin-right: 10rpx;
					   }
					}
					.priceRight{
						.priceT{
							font-size: 26rpx;
							color: rgb(255, 128, 0);
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
			.itemService{
				background-color: rgb(249,249,249);
				width: 720rpx;
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
				.serviceLeft2{
					width: 680rpx;
					height: 300rpx;
					line-height: 100rpx;
					margin-top: 8rpx;
					margin-left: 20rpx;
					border-radius: 8rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					background-color: white;
					.specTitle{
						width: 100%;
						height: 80rpx;
						position: relative;
						.topAll{
							position: absolute;
							top: 0;
							right: 20rpx;
						}
					}
					.spec{
						width: 670rpx;
						height: 210rpx;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						.specTop{
							width: 220rpx;
							height: 90rpx;
							font-size: 24rpx;
							.specT{
								color: rgb(255, 153, 51);
								font-size: 26rpx;
							}
						}
						.specBttom1{
							width: 220rpx;
							height: 90rpx;
							font-size: 24rpx;
							.specT{
								color: rgb(255, 153, 51);
								font-size: 26rpx;
							}
						}
						.specBttom2{
							width: 430rpx;
							height: 90rpx;
							font-size: 24rpx;
							.specT{
								color: rgb(255, 153, 51);
								font-size: 26rpx;
							}
						}
					}
					
				}
				.serviceLeft3{
					width: 680rpx;
					height: 300rpx;
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
							right: 20rpx;
						}
					}
					.serviceCotent{
						width: 100%;
						height: 210rpx;
						padding-left: 10rpx;
						padding-right: 10rpx;
						font-size: 28rpx;
						letter-spacing: 2rpx; /* 글자 간격 넓게 */
						overflow: hidden;
						.serviceCotentItem{
							width: 100%;
							height: 65rpx;
							overflow: hidden;  /* 넘친 부분 숨김 */
						    white-space: nowrap;  /* 줄바꿈 방지 */
						    text-overflow: ellipsis;  /* ... 표시 */
							.serviceText{
								color: rgb(255, 153, 51);
								font-size: 35rpx;
								font-weight: bold;
								text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
								margin-right: 10rpx;
							}
						}
						
					}
				}
			}
			.Accessories{
				background-color: rgb(249,249,249);
				width: 720rpx;
				height: 340rpx;
				margin-left: 15rpx;
				margin-top: 26rpx;
				border-radius: 10rpx;
				padding: 15rpx;
				.AccessoriesContent{
					width: 100%;
					height: 310rpx;
					background-color: white;
					border-radius: 8rpx;
					padding-top: 15rpx;
					.AccessoriesTitle{
						width: 100%;
						height: 80rpx;
						line-height: 80rpx;
						text-align: center;
						color: rgb(255, 153, 51);
						font-size: 35rpx;
						font-weight: bold;
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 부드러운 그림자 */
						letter-spacing: 2rpx; /* 글자 간격 넓게 */
						.AccessoriesTitleLeft{
							font-size: 40rpx;
							color: rgb(255, 0, 0);
							letter-spacing: 3rpx; /* 글자 간격 넓게 */
						}
					}
					.AccessoriesText{
						width: 100%;
						height: 70rpx;
						font-size: 28rpx;
						color: rgb(50, 50, 50);
						letter-spacing: 2rpx; /* 글자 간격 넓게 */
						text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
						display: flex;
						align-items: center;
						.AccessoriesImg{
							width: 50rpx;
							height: 50rpx;
							margin-left: 26rpx;
							margin-right: 20rpx;
						}
					}
				}	
			}
		}
	}
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
	/**
	 * 서비스 밑에서 올라오는 창 
	 */

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
		.servicePopupText{
			width: 100%;
			height: 120rpx;
			line-height: 120rpx;
			font-size: 28rpx;
			padding-left: 20rpx;
			padding-right: 20rpx;
			border-bottom: 1rpx solid #eee;
			.servicePopupTextL{
				height: 80rpx;
				background-color: rgb(255, 229, 204,0.3);
				padding: 10rpx 20rpx 10rpx 20rpx;
				color: rgb(255, 153, 51);
				font-size: 30rpx;
				border-radius: 8rpx;
				letter-spacing: 2rpx; /* 글자 간격 넓게 */
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
				margin-right: 30rpx;
			}
			.servicePopupTextR{
				color: rgb(50, 50, 50);
				letter-spacing: 2rpx; /* 글자 간격 넓게 */
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
			}
		}
		
	/**
	 * 스팩부분 밑에서 올라오는창
	 */
	.specPopupTtile{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-top: 28rpx;
		color: rgb(50, 50, 50);
		letter-spacing: 2rpx; /* 글자 간격 넓게 */
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
		.specPopupTtileModel{
			font-size: 39rpx;
			color: rgb(255, 0, 0);
		}
	}
	/**
	 * 화면내용부분
	 */
	.content{
		padding: 0;
		margin: 0;
		width: 100%;
		margin-top: 20rpx;
		.contentItem{
			width: 100%;
			text-align: center;
			.contentItemImg{
				
			}
		}
	}
	
	.hiddenView{
		width: 100%;
		height: 165rpx;
	}
</style>