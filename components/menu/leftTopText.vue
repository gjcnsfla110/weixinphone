<template>
	<view class="topMenuText" :style="{color:color}">
	   <slot></slot>
	</view>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
	 color:{
		 type:String,
		 default:"black"
	 }
})
</script>

<style lang="scss" scoped>
	.topMenuText{
		width: 100%;
		height: 70rpx;
		line-height: 56rpx;
		font-size: 26rpx;
		font-weight: bold;
	}
</style>