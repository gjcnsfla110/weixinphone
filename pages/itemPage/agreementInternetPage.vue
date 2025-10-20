<template>
	<Custom :back="true"></Custom>
	<view class="internetContent">
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
					<view class="star">
						<image style="margin-left: 0;" src="/static/me/star.png"></image>
						<image src="/static/me/star.png"></image>
						<image src="/static/me/star.png"></image>
						<image src="/static/me/star.png"></image>
						<image src="/static/me/star.png"></image>
					</view>
			</view>
		</view>
		<view class="center">
			<view class="detail">
				<view class="agreementContentTitle"><view class="borderLeft"></view><view class="titleRight">套餐介绍</view></view>
				<view class="detailContent">
					{{item.detail}}
				</view>
			</view>
			<view class="introduction">
				<view class="agreementContentTitle"><view class="borderLeft"></view><view class="titleRight">基本信息</view></view>
				<view class="introductionItem">
					<view class="itemLeft">
						<image src="/static/shopping/wifi1.png"></image>
					</view>
					<view class="itemRight">
						<view class="itemRightTitle">fdafdafdsa</view>
						<view class="itemRightContent">fdasfdafdasfdas fdasfdafdasfdas fdasfdafdasfdas fdasfdafdasfdas</view>
					</view>
				</view>
				<view class="introductionItem">
					<view class="itemLeft">
						<image src="/static/shopping/wifi.png"></image>
					</view>
					<view class="itemRight">
						<view class="itemRightTitle">fdasfdafdasfdas</view>
						<view class="itemRightContent"> fdasfdafdasfdas fdasfdafdasfdas fdasfdafdasfdas</view>
					</view>
				</view>
				<view class="introductionItem">
					<view class="itemLeft">
						<image src="/static/shopping/TV.png"></image>
					</view>
					<view class="itemRight">
						<view class="itemRightTitle"> fdasfdafdasfdas</view>
						<view class="itemRightContent">fdasfdafdasfdas fdasfdafdasfdas fdasfdafdasfdas fdasfdafdasfdas</view>
					</view>
				</view>
			</view>
			<view class="agreementContent">
				<view class="agreementContentTitle"><view class="borderLeft"></view><view class="titleRight">合约网络/电视 详情介绍</view></view>
				<uni-section type="line" :show-animation="true">
					<uni-collapse  :accordion="true">
						<uni-collapse-item title="合约期限">
							<view class="content">
								<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
							</view>
						</uni-collapse-item>
						<uni-collapse-item title="无线网络介绍">
							<view class="content">
								<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
							</view>
						</uni-collapse-item>
						<uni-collapse-item title="安装费用">
							<view class="content">
								<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
							</view>
						</uni-collapse-item>
					</uni-collapse>
				</uni-section>
			</view>
		</view>
		<view class="hiddenBottom"></view>
		<view class="agreementBottom">
			<view class="monthTop">
				<view class="monthTopleft">
					<view class="monthTopleft1"><text class="leftText">安装费用只交一次</text></view>
					<view class="monthTopleft2"><text class="leftText">安装费用</text> {{formattedPrice(item.installationPrice)}}<text class="hanyuan">韩元</text></view>
				</view>
				<view class="monthTopRight">
					<view class="monthTopRight1">每月费用</view>
					<view class="monthTopRight2">{{formattedPrice(item.price)}}<text class="hanyuan">韩元</text></view>
				</view>
			</view>
			<view class="monthBottom">
				<view class="monthBottomButton">
					<button style="background-color:rgb(222, 11, 124);color: white;">知 询 客 服</button>
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
	async onLoad(){
		const storegeItem = uni.getStorageSync('agreementItem');
		if(storegeItem){
			this.item = storegeItem.agreement;
		}else{
			this.item = await servicePost('app/agreement/item/detail',{id:op.id});
		}
	}
}
</script>

<style lang="scss" scoped>
	.internetContent{
		width: 750rpx;
		.topImg{
			width: 100%;
			height: 360rpx;
			text-align: center;
			image{
				height: 360rpx;
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
		}
		.center{
			width: 750rpx;
			margin-top: 50rpx;
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
				border-bottom: 3rpx solid rgb(120, 120, 120);
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
				padding: 25rpx 25rpx 35rpx 0;
				border-bottom: 3rpx solid rgb(120, 120, 120);
				margin-bottom: 30rpx;
				.introductionItem{
					width: 650rpx;
					height: 250rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.itemLeft{
						width: 160rpx;
						height: 128rpx;
						image{
							width: 160rpx;
							height: 128rpx;
						}
					}
					.itemRight{
						width: 450rpx;
						height: 250rpx;
						letter-spacing: 5rpx; /* 글자 간격 넓게 */
						.itemRightTitle{
							width: 450rpx;
							height: 50rpx;
							line-height: 50rpx;
							font-size: 30rpx;
							font-weight: bold;
							color: rgb(88, 88, 88);
						}
						.itemRightContent{
							width: 450rpx;
							height: 200rpx;
							font-size: 27rpx;
							line-height: 40rpx;
							color: rgb(120, 120, 120);
						}
					}
				}
			}
		}
		.hiddenBottom{
				width: 100%;
				height: 310rpx;
		}
		.agreementBottom{
				border-top-right-radius: 50rpx;
				border-top-left-radius: 50rpx;
				position: fixed;
				bottom:0;
				left:0;
				width: 100vw;
				z-index: 10;
				height: 300rpx;
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
					width: 100%;
					height: 120rpx;
					.monthBottomButton{
						width: 100%;
						padding:20rpx;
						letter-spacing: 20rpx; /* 글자 간격 넓게 */
					}
				}
		}
			
	}
	
</style>