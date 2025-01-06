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
				<view class="buy-bottom-item">
					<view class="buy-bottom-item-img"><image src="/static/shopping/huishoujia.png"></image></view>
					<view class="buy-bottom-item-title">回收价</view>
				</view>
				<view class="buy-bottom-border"></view>
				<view class="buy-bottom-item">
					<view class="buy-bottom-item-img"><image src="/static/shopping/pingjia.png"></image></view>
					<view class="buy-bottom-item-title">购买评价</view>
				</view>
			</view>
		</view>
		<view class="border-center"></view>
		<view class="sell">
			<view class="sell-top">
				<view class="sell-top-left">我商品单</view>
				<view class="sell-top-right">全部订单 ></view>
			</view>
			<view class="sell-main">
				<view class="sell-main-item">
					<view class="sell-main-item-img"><image src="/static/shopping/jimai1.png"></image></view>
					<view class="sell-main-item-title">寄卖商品</view>
				</view>
				<view class="sell-main-item">
					<view class="sell-main-item-img"><image src="/static/shopping/jishouwan1.png"></image></view>
					<view class="sell-main-item-title">已卖寄品</view>
				</view>
				<view class="sell-main-item">
					<view class="sell-main-item-img"><image src="/static/shopping/fabupin.png"></image></view>
					<view class="sell-main-item-title">发布商品</view>
				</view>
				<view class="sell-main-item">
					<view class="sell-main-item-img"><image src="/static/shopping/fabupin1.png"></image></view>
					<view class="sell-main-item-title">卖出商品</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.shopping-data{
		background-color: white;
		border-radius: 15rpx;
		width: 720rpx;
		height: 625rpx;
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
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.buy-bottom-item{
					width: 175rpx;
					height: 89rpx;
					.buy-bottom-item-img{
						width: 44rpx;
						height: 44rpx;
						margin: auto;
						image{
							width: 44rpx;
							height: 44rpx;
						}
					}
					.buy-bottom-item-title{
						width: 100%;
						text-align: center;
						font-size: 26rpx;
						color: #2c2c2c;
						height: 45rpx;
						line-height: 55rpx;
					}
				}
				.buy-bottom-border{
					width: 3rpx;
					height: 60rpx;
					background-color: rgb(230, 230, 230);
				}
			}
		}
		.border-center{
			height: 3rpx;
			width: 380rpx;
			margin-left: 170rpx;
			background-color: rgb(230, 230, 230);
		}
		.sell{
			left: 15rpx;
			height: 230rpx;
			padding-top: 30rpx;
			background-color: white;
			border-bottom-left-radius: 15rpx;
			border-bottom-right-radius: 15rpx;
			.sell-top{
				width: 100%;
				height: 80rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 0 35rpx;
				line-height: 60rpx;
				.sell-top-left{
					width: 300rpx;
					font-size: 30rpx;
					height: 60rpx;
					font-weight: bolder;
					color: rgb(80, 80, 80);
				}
				.sell-top-right{
					font-size: 25rpx;
					width: 150rpx;
					height: 60rpx;
					text-align: right;
					color: rgb(130, 130, 130);
				}
			}
			.sell-main{
				width: 100%;
				height: 115rpx;
				margin-top: 10rpx;
				display:flex;
				flex-direction: row;
				.sell-main-item{
					width: 140rpx;
					height: 115rpx;
					.sell-main-item-img{
						width: 65rpx;
						height: 65rpx;
						margin-left: 34rpx;
						image{
							width: 65rpx;
							height: 65rpx;
						}
					}
					.sell-main-item-title{
						width: 100%;
						text-align: center;
						font-size: 27rpx;
						color: rgb(130, 130, 130);
						height: 50rpx;
						line-height: 50rpx;
					}
				}
			}
		}
	}
</style>