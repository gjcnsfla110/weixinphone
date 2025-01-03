<template>
	<view class="oneImgContent" :style="{height:heigth}">
		<image :src="src" mode="aspectFill"></image>
	</view>
</template>

<script setup>
import {defineProps} from "vue"
	const props = defineProps({
		src:{
			default:""
		},
		heigth:{
			default:"200rpx"
		}
	})
</script>

<style lang="scss" scoped>
	.oneImgContent{
		width: 100vw;
		padding: 0 20rpx;
		margin-top: 30rpx;
		image{
			width: 100%;
			height: 100%;
			border-radius: 13rpx;
		}
	}
</style>