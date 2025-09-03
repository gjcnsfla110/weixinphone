<template>
	<view class="titleContent">
		<view class="tleft" v-if="left">{{left}}</view>
		<view class="tright" v-if="right">{{right}}</view>
		<view class="more" v-if="more" style="color:rgb(50,50,50)"> 更多+ </view>
	</view>
</template>
<script setup>
	import {defineProps } from "vue";
	const props = defineProps({
		left:{
			type:String,
			default:""
		},
		right:{
			type:String,
			default:""
		},
		more:{
			type:Boolean,
			default:false
		}
	})
</script>

<style lang="scss" scoped>
	.titleContent{
		width: 100%;
		margin-top: 15rpx;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		.tleft{
			width: 200rpx;
			margin-left: 25rpx;
			font-size: 33rpx;
		}
		.tright{
			width: 280rpx;
			font-size: 23rpx
		}
		.more{
			width: 150rpx;
			margin-left: auto;
			font-size: 30rpx;
			font-weight: bold;
			text-align: right;
			margin-right: 39rpx;
		}
	}
</style>