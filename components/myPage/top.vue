<template>
	<view>
		<view class="profil">
			<view class="userImg"><image src="/static/my.png"></image></view>
			<view class="title"><view class="title1">小韩手机</view><view class="title2">-在韩中国同胞最大手机平台-</view></view>
		</view>
		<view class="myData">
			<view class="myData-name">
				注册登录会员
			</view>
			<view class="myData-bottom">
				<view class="myData-bottom-left">
					<view class="myData-bottom-left-title">购买商品</view>
					<view class="myData-bottom-left-data">10</view>
				</view>
				<view class="myData-bottom-center">			
				</view>
				<view class="myData-bottom-right">
					<view class="myData-bottom-right-title">出售商品</view>
					<view class="myData-bottom-right-data">5</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.profil{
		display: flex;
		flex-direction: row;
		padding-top: 30rpx;
		.userImg{
			width: 110rpx;
			height: 110rpx;
			background-color: white;
			border-radius: 100rpx;
			text-align: center;
			margin-left: 65rpx;
			image{
				width: 70rpx;
				height: 70rpx;
				margin-top: 15rpx;
			}
		}
		.title{
			width: 575rpx;
			height: 110rpx;
			color: rgb(150, 150, 150);
			padding-left: 65rpx;
			.title1{
				font-size: 33rpx;
				height: 55rpx;
				line-height: 55rpx;
				color: black;
			}
			.title2{
				font-size: 25rpx;
				height: 45rpx;
				line-height: 45rpx;
			}
		}
	}
	.myData{
		width: 650rpx;
		margin-top: 30rpx;
		margin-left: 50rpx;
		height: 280rpx;
		.myData-name{
			width: 100%;
			height: 120rpx;
			border-bottom: 10rpx solid rgb(200, 100, 0);
			background: rgb(230, 230, 230);
			border-top-right-radius: 10rpx;
			border-top-left-radius: 10rpx;
			text-align: center;
			line-height: 130rpx;
		}
		.myData-bottom{
			width: 100%;
			height: 160rpx;
			background-color: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom-right-radius: 10rpx;
			border-bottom-left-radius: 10rpx;
			text-align: center;
			.myData-bottom-left{
				width: 323rpx;
				height: 110rpx;
				.myData-bottom-left-title{
					height: 60rpx;
					font-size: 30rpx;
					font-weight: bold;
					color: rgb(100, 100, 100);
				}
				.myData-bottom-left-data{
					height: 50rpx;
					font-size: 30rpx;
					color:rgb(150, 150, 150);
				}
			}
			.myData-bottom-center{
				width: 4rpx;
				height: 60rpx;
				background-color: rgb(240, 240, 240);
			}
			.myData-bottom-right{
				width: 323rpx;
				height: 110rpx;
				.myData-bottom-right-title{
					height: 60rpx;
					font-size: 30rpx;
					font-weight: bold;
					color: rgb(100, 100, 100);
				}
				.myData-bottom-right-data{
					height: 50rpx;
					font-size: 30rpx;
					color:rgb(150, 150, 150);
				}
			}
		}
	}
</style>