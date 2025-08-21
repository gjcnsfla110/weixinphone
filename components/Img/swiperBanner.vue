<template>
	<view class="hotBanner">
		<swiper class="hotBannerSwiper" indicator-dots  catchtouchmove="true"  interval="5000" duration="2000"
		 autoplay circular indicator-color="rgba(0, 0, 0, 0.2)" indicator-active-color="#ffffff">
			<swiper-item v-for="item in banners" class="hotBannerSwiperitem">
				<view class="hotBannerSwiperitemImg">
						<image class="bannerImg" :src="item.src" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import { ref } from "vue";
	const banners = ref([
		{
			src:"https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg"
		},
		{
			src:"https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg"
		},
		{
			src:"https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
		},
		{
			src:"https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
		},
		{
			src:"https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
		},
	]);
</script>

<style lang="scss" scoped>
	.hotBanner{
		width: 100vw;
		height: 300rpx;
		.hotBannerSwiper{
			width: 100vw;
			height: 300rpx;
			.hotBannerSwiperitem{
				height: 100%;
				width: 100%;
				.hotBannerSwiperitemImg{
					height: 300rpx;
					width: 100%;					
					.bannerImg{
						height: 300rpx;
						width: 100%;
					}
				}
			}
		}
	}
</style>