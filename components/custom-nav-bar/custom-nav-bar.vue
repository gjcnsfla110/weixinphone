<template>
	<view class="layout">
		<view class="navBar" :style="{height:fillHeight()+'px'}">
			<view class="statuBar" :style="{height:statuBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:titleBarheight()+'px'}">
				<view class="logo"><image src="/static/navLog.png"></image></view>
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
			justify-content: center;
			width: 100%;
			.logo{
				image{
					width: 200rpx;
					height: 70rpx;
				}
			}
		}
	}
	.fill{
			margin-bottom: 30rpx;
	}
}
</style>