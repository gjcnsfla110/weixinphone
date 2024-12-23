<template>
	<Card color="white" margin-top="0">
		<swiper class="imgSwiper" indicator-dots autoplay>
			<swiper-item class="imgSwiperItem" v-for="item in 5">
				<image src="/testImg/banner5.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</Card>
</template>

<script setup>
	import Card from "@/components/cardPage/cardPage.vue"
</script>

<style lang="scss" scoped>
	.imgSwiper{
		width: 100%;
		height:240rpx;
		margin-top: 25rpx;
		.imgSwiperItem{
			width: 100%;
			height: 240rpx;
			background-color: #eee;
			border-radius: 15rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
