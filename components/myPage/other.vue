<template>
	<view class="other-container">
		<view class="other-item" v-for="item in data">
			<view class="other-item-img"><image :src="item.src"></image></view>
			<view class="other-item-text">{{item.title}}</view>
			<view class="other-item-right">></view>
		</view>
	</view>
	<view style="height: 5rpx;">
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const data = ref([
		{
			title : "联系客服",
			src :'/static/me/kefu.png'
		},
		{
			title : "个人信息",
			src :'/static/me/me.png'
		},
		{
			title : "收货地址",
			src :'/static/me/adress.png'
		},
		{
			title : "小韩公司",
			src :'/static/me/gongsi.png'
		},
		{
			title : "退出账号",
			src :'/static/me/logout.png'
		},
	])
</script>
<style lang="scss" scoped>
	.other-container{
		width: 720rpx;
		height: 700rpx;
		background-color: white;
		margin: 15rpx 15rpx;
		border-radius: 15rpx;
		padding: 0 30rpx;
		.other-item{
			width: 100%;
			height: 130rpx;
			border-bottom: 1rpx solid rgb(230, 230, 230);
			display: flex;
			flex-direction: row;
			align-items: center;
			.other-item-img{
				width: 150rpx;
				height: 70rpx;
				text-align: center;
				image{
					width: 70rpx;
					height: 70rpx;
				}
			}
			.other-item-text{
				width: 450rpx;
				height: 70rpx;
				line-height: 70rpx;
				font-size: 28rpx;
				color: rgb(100, 100, 100);
			}
			.other-item-right{
				height: 70rpx;
				width: 50rpx;
				line-height: 70rpx;
				color: rgb(180, 180, 180);
			}
		}
	}
</style>