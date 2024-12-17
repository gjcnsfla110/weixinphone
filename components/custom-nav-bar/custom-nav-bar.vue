<template>
	<view class="layout">
		<view class="navBar" :style="{height:fillHeight()+'px'}">
			<view class="statuBar" :style="{height:statuBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:titleBarheight()+'px'}">
				<view class="logo">小韩手机</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜寻手机</text>
				</view>
			</view>
			<slot name="index"></slot>
		</view>
		<view class="fill" :style="{height:fillHeight()+'px'}"></view>
	</view>
</template>

<script setup>
	import { getNaviBar } from '@/utill/systemData';
	import {ref} from 'vue';
	
	const {
		statuBarHeight,
		titleBarheight,
		fillHeight
	} = getNaviBar();
</script>

<style lang="scss">

.layout{
	.navBar{
		position: fixed;
		background-color: white;
		top:0;
		left:0;
		width: 100vw;
		z-index: 100;
		.titleBar{
			display: flex;
			align-items: center;
			.logo{
				margin-left: 30rpx;
				font-size: 38rpx;
			}
			.search{
				width: 350rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(0,0,0,0.1);
				border:1px solid #fff;
				margin-left:30rpx;
				color:#999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
						margin-left:20rpx;
					}
				.text{
						padding-left:10rpx;
					}
			}
		}
	}
	.fill{
			margin-bottom: 30rpx;
	}
}
</style>