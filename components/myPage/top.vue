<template>
	<view>
		<view class="profil">
			<view class="userImg"><image src="/static/my.png"></image></view>
			<view class="title"><view class="title1">在韩最良心手机店</view><view class="title2">-小韩手机与你共享美好生活-</view></view>
		</view>
		<view class="myData">
			
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.profil{
		display: flex;
		flex-direction: row;
		padding-top: 50rpx;
		.userImg{
			width: 110rpx;
			height: 110rpx;
			background-color: white;
			border-radius: 100rpx;
			text-align: center;
			margin-left: 25rpx;
			image{
				width: 70rpx;
				height: 70rpx;
				margin-top: 15rpx;
			}
		}
		.title{
			width: 575rpx;
			height: 110rpx;
			color: rgb(130, 130, 130);
			padding-left: 50rpx;
			.title1{
				font-size: 35rpx;
				height: 55rpx;
			}
			.title2{
				font-size: 26rpx;
			}
		}
	}
</style>