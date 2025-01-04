<template>
	<view class="layout">
		<view class="navBar" :style="{height:custumH + 'px', backgroundColor:bgColor}">
			<view class="statuBar" :style="{height:statuBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:titleBarheight()+'px'}">
				<view @click="goBack" v-if="back" class="back"><uni-icons type="arrow-left" size="25"></uni-icons></view>
				<view v-else class="logo">LOGO</view>
				<view class="search">
					{{title}}
				</view>
			</view>
			<slot></slot>
		</view>
		<view v-if="customFill" class="fill" :style="{height:custumH+'px'}"></view>
	</view>
</template>

<script setup>
	import { getNaviBar } from '@/utill/systemData';
	import {ref,defineProps} from 'vue';
	const {
		statuBarHeight,
		titleBarheight,
		custumHeiht
	} = getNaviBar();
	const props = defineProps({
		title:{
			type:String,
			default:"小韩手机"
		},
		back:{
			type:Boolean,
			default:false
		},
		topHeight:{
			type:Number,
			default:0
		},
		bgColor:{
			type:String,
			default:"white"
		},
		customFill:{
			type:Boolean,
			default:true,
		}
	})
	const custumH = ref(custumHeiht()+props.topHeight);
	const goBack = ()=>{
		let pages = getCurrentPages(); // 현재 페이지 스택 확인
		if (pages.length > 1) {
			uni.navigateBack(); // 페이지 스택이 있는 경우 뒤로 가기
		} else {
			uni.reLaunch({ url: '/pages/index/index' }); // 스택이 없으면 특정 페이지로 이동
		}
	}
</script>

<style lang="scss">

.layout{
	.navBar{
		position: fixed;
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
			.back{
				margin-left: 30rpx;
			}
			.search{
				width: 350rpx;
				height: 50rpx;
				margin-left:39rpx;
				color:#999;
				font-size: 33rpx;
				text-align: center;
				line-height: 50rpx;
			}
		}
		.slotContent{
			background-color: red;
		}
	}
	.fill{
		width: 100%;
	}
}
</style>