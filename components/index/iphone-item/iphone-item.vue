<template>
	<view class="iphoneContent">
		<BannerImg src="https://byline.network/wp-content/uploads/2024/09/iphone-16-event-94.jpg"></BannerImg>
		<Title left="新品上市" />
		<TitleContent />
		<Title left="特们推荐" />
		<SwiperImg></SwiperImg>
		<Title left="Pro 系列" right="最强悍苹果"/>
		<TcontentTwo></TcontentTwo>
		<ContentList color="rgb(248,248,248)"></ContentList>
		<Title left="Ipad 和 配件" right="最强悍平板电脑" more="true"/>
		<TcontentOne></TcontentOne>
		<ContentList color="rgb(248,248,248)"></ContentList>
		<Title left="二手机 系列" right="性价比高二手手机"/>
		<ItemList :data="ershou"></ItemList>
	</view>
</template>

<script setup>
 import {ref} from "vue";
 import Title from "@/components/item/itemTitle.vue";
 import TitleContent from "@/components/item/itemContentTitle.vue"
 import SwiperImg from "@/components/Img/swiperImg.vue"
 import TcontentTwo from "@/components/item/itemContentTwo.vue"
 import TcontentOne from "@/components/item/itemContentOne.vue"
 import ContentList from "@/components/item/itemContentList.vue"
 import ItemList from "@/components/item/itemList.vue"
 import BannerImg from "@/components/Img/imgBanner.vue"
 const ershou =ref([
	 {
			src:"/images/testImg/er1.jpg"
	 },
	 {
	 		 src:"/images/testImg/er2.jpg"
	 },
	 {
	 		 src:"/images/testImg/er3.jpg"
	 },
	 {
	 		 src:"/images/testImg/er4.jpg"
	 },
	 {
	 		 src:"/images/testImg/er5.jpg"
	 },
	 {
	 		 src:"/images/testImg/ershou.jpg"
	 },
 ])

</script>

<style lang="scss">
	.iphoneContent{
		width: 100vw;

	}
</style>
