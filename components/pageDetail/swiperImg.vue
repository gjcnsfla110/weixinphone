<template>
	<swiper class="pageSwiper" :circular="true">
		<swiper-item class="swiperItem" v-for="i in 10" > 
			<view>
				{{i}}
			</view>
		</swiper-item>
	</swiper>
</template>
<script setup>
</script>

<style lang="scss" scoped>
	.pageSwiper{
		width: 100%;
		height: 650rpx;
		.swiperItem{
			width: 100%;
			height: 100%;
			background-color: skyblue;
		}
	}
</style>