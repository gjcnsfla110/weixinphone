<template>
	<view class="layout">
		<view class="navBar" :style="{height:fillHeight()+'px'}">
			<view class="statuBar" :style="{height:statuBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:titleBarheight()+'px'}">
				<view class="logo">小韩手机</view>
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
		}
	}
	.fill{
			margin-bottom: 30rpx;
	}
}
</style>