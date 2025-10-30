<template>
	<Custom :back="true" title="商店"></Custom>
	<view class="itemContent">
		<view class="name">{{item.name}}</view>
		<view class="header">
			<view class="shopImg">
				<swiper class="imgSwiper" :indicator-dots="true" indicator-active-color="#ff9933" indicator-color="rgb(255,255,255)">
					<swiper-item v-for="img in item.shopImg" class="imgSwiperItem">
						<image :src="img"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="content">
			<view class="contentItem">
				<view class="contentItemTitle">门店地址</view>
				<view class="contentItemDetail">{{item.address}}</view>
			</view>
			<view class="contentItem">
				<view class="contentItemTitle">营业时间</view>
				<view class="contentItemDetail">{{item.hours}}</view>
			</view>
			<view class="contentItem">
				<view class="contentItemTitle">商店联系电话</view>
				<view class="contentItemDetail">{{item.phone}}</view>
				<view class="contentItemDetail" v-if="item.phone1">{{item.phone1}}</view>
			</view>
			<view class="contentItem">
				<view class="contentItemTitle">门店介绍</view>
				<view class="contentItemDetail">{{item.shop_introduction}}</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottomTitle">门店地图</view>
			<view class="bottomImg"><image :src="item.directionsImg"></image></view>
		</view>
	</view>
</template>

<script>
import Custom from '@/components/custom-nav-bar/customNav.vue'
import { ref } from 'vue';
export default{
	components:{
		Custom
	},
	props:{
		
	},
	setup(props, context) {
		const item =ref({});
		return[
			item
		]
	},
	methods:{
		
	},
	async onLoad(op){
		const storegeItem = uni.getStorageSync('shopItem');
		if(storegeItem){
			this.item = storegeItem.shopItem;
		}else{
			this.item = await servicePost('app/shop/item/detail',{id:op.id});
			this.item.forEach((item)=>{
				item.shopImg = JSON.parse(item.shopImg);
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.itemContent{
		width: 750rpx;
		.name{
			margin-top: 50rpx;
			margin-bottom: 10rpx;
			width: 750rpx;
			height: 100rpx;
			line-height: 100rpx;
			padding-left: 30rpx;
			font-size: 39rpx;
			letter-spacing: 5rpx;
			color: rgb(100, 100, 100);
			text-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
			font-weight: bold;
		}
		.header{
			width: 750rpx;
			.shopImg{
				width: 750rpx;
				height: 420rpx;
				.imgSwiper{
					width: 750rpx;
					height: 420rpx;
					.imgSwiperItem{
						width: 750rpx;
						height: 420rpx;
						image{
							width: 750rpx;
							height: 420rpx;
						}
					}
				}
			}
		}
		.content{
			width:750rpx;
			padding: 35rpx;
			.contentItem{
				width: 680rpx;
				padding: 40rpx 0;
				letter-spacing: 3rpx;
				border-bottom: 2rpx solid rgb(230, 230, 230);
				.contentItemTitle{
					width: 680rpx;
					height: 100rpx;
					font-size: 30rpx;
					line-height: 100rpx;
					color: rgb(50, 50, 50);
					text-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
				}
				.contentItemDetail{
					width: 680rpx;
					font-size: 28;
					line-height: 50rpx;
					color: rgb(150, 150, 150);
				}
			}
			
		}
		.bottom{
			width:750rpx;
			padding: 35rpx;
			.bottomTitle{
				width: 680rpx;
				height: 80rpx;
				font-size: 30rpx;
				line-height: 80rpx;
				color: rgb(50, 50, 50);
				text-shadow: 2rpx 2rpx 4rpx rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
			}
			.bottomImg{
				width: 680rpx;
				height: 450rpx;
				margin-bottom: 80rpx;
				margin-top: 30rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>