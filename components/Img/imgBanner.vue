<template>
	<view class="Banner">
		<image class="BannerImg" :src="src" mode="aspectFill" :style="{height:height}"></image>
	</view>
</template>

<script setup>
import {defineProps} from "vue"
const props = defineProps({
	src:{
		default : "https://byline.network/wp-content/uploads/2024/09/iphone-16-event-94.jpg"
	},
	height:{
		default: "330rpx"
	}
})
</script>
<style lang="scss" scoped>
	.Banner{
		width: 100%;
		.BannerImg{
			width: 100%;
			height: 100%;
		}
	}
</style>