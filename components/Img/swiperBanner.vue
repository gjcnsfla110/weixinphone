<template>
	<view class="hotBanner">
		<swiper class="hotBannerSwiper" indicator-dots  catchtouchmove="true"  interval="5000" duration="2000"
		 autoplay circular indicator-color="rgba(0, 0, 0, 0.2)" indicator-active-color="#ffffff">
			<swiper-item v-for="item in componentData.items" class="hotBannerSwiperitem">
				<view class="hotBannerSwiperitemImg">
						<image class="bannerImg" :src="item.img" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { ref } from "vue";
	export default{
		components:{
			
		},
		props:{
			componentData:{
				type:Object,
				default:{
					items:[]
				}
			}
		},
		emits:[],
		setup(props, context) {

		},
		methods:{
			
		}

	}
	
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