<template>
	<view class="iphoneContent">
		<view class="ipBanner">
			<image class="ipBannerImg" src="https://byline.network/wp-content/uploads/2024/09/iphone-16-event-94.jpg" mode="aspectFill"></image>
		</view>
		<Title left="新品上市" />
		<TitleContent />
		<Title left="特们推荐" />
		<SwiperImg></SwiperImg>
		<Title left="Pro 系列" right="最强悍苹果"/>
		<TcontentTwo></TcontentTwo>
	</view>
</template>

<script setup>
 import Title from "@/components/item/itemTitle.vue";
 import TitleContent from "@/components/item/itemContentTitle.vue"
 import SwiperImg from "@/components/swiperImg/swiperImg.vue"
 import TcontentTwo from "@/components/item/itemContentTwo.vue"

</script>

<style lang="scss">
	.iphoneContent{
		width: 100vw;
		.ipBanner{
			width: 100%;
			height: 330rpx;
			.ipBannerImg{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
