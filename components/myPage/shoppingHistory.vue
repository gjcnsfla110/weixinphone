<template>
	<view class="shopping-data">
		<view class="buy">
			<view class="buy-top">
				<view class="buy-top-left">我的订单</view>
				<view class="buy-top-right">全部订单 ></view>
			</view>
			<view class="buy-main">
				<view class="buy-main-item">
					<view class="buy-main-item-img"><image src="/static/shopping/daifukuan.png"></image></view>
					<view class="buy-main-item-title">待付款</view>
				</view>
				<view class="buy-main-item">
					<view class="buy-main-item-img"><image src="/static/shopping/yifukuan.png"></image></view>
					<view class="buy-main-item-title">已付款</view>
				</view>
				<view class="buy-main-item">
					<view class="buy-main-item-img"><image src="/static/shopping/daifahuo.png"></image></view>
					<view class="buy-main-item-title">待发货</view>
				</view>
				<view class="buy-main-item">
					<view class="buy-main-item-img"><image src="/static/shopping/yifahuo.png"></image></view>
					<view class="buy-main-item-title">已发货</view>
				</view>
				<view class="buy-main-item">
					<view class="buy-main-item-img"><image src="/static/shopping/wuliu.png"></image></view>
					<view class="buy-main-item-title">查看物流</view>
				</view>
			</view>
			<view class="buy-bottom">
				
			</view>
		</view>
		<view class="border-center"></view>
		<view class="sell">
			
		</view>
	</view>
	<view style="height: 50rpx;"></view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.shopping-data{
		background-color: white;
		border-radius: 15rpx;
		width: 720rpx;
		height: 655rpx;
		margin-left: 15rpx;
		margin-top: 15rpx;
		.buy{
			width: 100%;
			height: 350rpx;
			border-top-right-radius: 15rpx;
			border-top-left-radius: 15rpx;
			.buy-top{
				width: 100%;
				height: 80rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 0 35rpx;
				line-height: 60rpx;
				.buy-top-left{
					width: 300rpx;
					font-size: 30rpx;
					height: 60rpx;
					font-weight: bolder;
					color: rgb(80, 80, 80);
				}
				.buy-top-right{
					font-size: 25rpx;
					width: 150rpx;
					height: 60rpx;
					text-align: right;
					color: rgb(130, 130, 130);
				}
			}
			.buy-main{
				width: 100%;
				height: 115rpx;
				display:flex;
				flex-direction: row;
				justify-content: center;
				.buy-main-item{
					width: 140rpx;
					height: 115rpx;
					.buy-main-item-img{
						width: 65rpx;
						height: 65rpx;
						margin-left: 34rpx;
						image{
							width: 65rpx;
							height: 65rpx;
						}
					}
					.buy-main-item-title{
						width: 100%;
						text-align: center;
						font-size: 27rpx;
						color: rgb(130, 130, 130);
						height: 50rpx;
						line-height: 50rpx;
					}
				}
			}
			.buy-bottom{
				width: 700rpx;
				margin-left: 10rpx;
				margin-top: 15rpx;
				height: 120rpx;
				border-radius: 10rpx;
				background-color: rgb(248, 248, 248);
			}
		}
		.border-center{
			height: 3rpx;
			width: 380rpx;
			margin-left: 170rpx;
			background-color: rgb(200, 200, 200);
		}
		.sell{
			left: 15rpx;
			height: 300rpx;
			background-color: white;
			margin-left: 15rpx;
		}
	}
</style>