<template>
	<Custom :back="true" title="商品详细"></Custom>
	<view class="accessoriesContainer">
		<view class="topImg">
			<image :src="item.img"></image>
		</view>
		<view class="top">
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
					<view class="itemBottomMaterial"><view class="materialTitle">材质</view><view class="materialCenter"></view><view class="materialContent">{{item.material}}</view></view>
			</view>
		</view>
		<view class="center">
			<view class="itemNumber"><text class="itemNumberLeft">No.</text>{{item.item_number}}</view>
			<view class="detail">
				<view class="agreementContentTitle"><view class="borderLeft"></view><view class="titleRight">套餐介绍</view></view>
				<view class="detailContent">
					{{item.accessories_detail}}
				</view>
			</view>
			<view class="introduction">
				<view class="agreementContentTitle"><view class="borderLeft"></view><view class="titleRight">基本信息</view></view>
				<view class="itemContent">
					<view class="itemImage" v-for="img in JSON.parse(item.banner)">
						<image :src="img" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Custom from '@/components/custom-nav-bar/customNav.vue'
import { formattedPrice } from '@/utill/common';
import { ref } from 'vue';
export default{
	components:{
		Custom
	},
	props:{
		
	},
	setup(props, context) {
		const item = ref([]);
		return {
			item,
			formattedPrice
		}
	},
	methods:{
		
	},
	async onLoad(op){
		const storegeItem = uni.getStorageSync('accessoriesItem');
		if(storegeItem){
			this.item = storegeItem.accessories;
		}else{
			this.item = await servicePost('app/accessories/item/detail',{id:op.id});
		}
	}
}
</script>

<style lang="scss" scoped>
	.itemNumber{
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		letter-spacing: 5rpx;
		color: rgb(120, 120, 120);
		font-size: 30rpx;
		margin-bottom: 20rpx;
		.itemNumberLeft{
			color: rgb(255, 153, 51);
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
			letter-spacing: 8rpx;
			font-size: 38rpx;
		}
	}
	.accessoriesContainer{
		width: 750rpx;
		.topImg{
			width: 100%;
			height: 420rpx;
			text-align: center;
			image{
				width: 350rpx;
				height: 399rpx;
			}
		}
		.top{
			width:750rpx;
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
					line-height: 40rpx;
					font-size: 36rpx;
					color: rgb(50, 50, 50);
					letter-spacing: 3rpx; /* 글자 간격 넓게 */
					font-weight: bold;
					overflow: hidden;
				}
				
				.itemBottomMaterial{
					width: 750rpx;
					height: 50rpx;
					font-size: 28rpx;
					letter-spacing: 3rpx;
					margin-top: 20rpx;
					margin-bottom: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 60rpx;
					text-align: center;
					color: rgb(180, 180, 180);
					.materialTitle{
						width: 200rpx;
						height: 50rpx;
						margin-left: 100rpx;
					}
					.materialCenter{
						width: 5rpx;
						height: 25rpx;
						background-color:rgb(180, 180, 180);
					}
					.materialContent{
						width: 350rpx;
						height: 50rpx;
						overflow: hidden;
					}
				}
			}
		}
		.center{
			width: 750rpx;
			padding: 50rpx;
			.agreementContentTitle{
				width: 650rpx;
				height: 60rpx;
				font-size: 32rpx;
				display: flex;
				.borderLeft{
					width: 10rpx;
					height: 30rpx;
					margin-top: 15rpx;
					border-radius: 5rpx;
					background-color: rgb(102, 102, 255);
				}
				.titleRight{
					width: 600rpx;
					height: 60rpx;
					line-height: 60rpx;
					margin-left: 20rpx;
					letter-spacing: 10rpx; /* 글자 간격 넓게 */
					text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
					color:rgb(120, 120, 120);
				}
			}
			.agreementContent{
				.content {
					padding: 15px;
					color: rgb(88, 88, 88);
					font-size: 28rpx;
					letter-spacing: 5rpx; /* 글자 간격 넓게 */
				}
			}
			.detail{
				width: 650rpx;
				border-bottom: 3rpx solid rgb(230, 230, 230);
				margin-bottom: 30rpx;
				.detailContent{
					padding: 25rpx 25rpx 35rpx 25rpx;
					color: rgb(88, 88, 88);
					font-size: 27rpx;
					letter-spacing: 5rpx; /* 글자 간격 넓게 */
				}		
			}
			.introduction{
				width: 650rpx;
				padding: 25rpx 0 35rpx 0;
				border-bottom: 3rpx solid rgb(230, 230, 230);
				margin-bottom: 30rpx;
				.itemContent{
					width: 100%;
					margin-top: 35rpx;
					.itemImage{
						width: 100%;
						image{
							width: 100%;
						}
					}
				}	
			}
		}
	}
</style>