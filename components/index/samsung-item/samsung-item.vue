<template>
	<view class="samsungContent">
		<BarnerImg src="https://www.alezay.com/wp-content/uploads/2024/01/SAMSUNG-GALAXY-S24-SAMSUNG-GALAXY-S24-MAIN-BANNER-ALEZAY-KUWAIT.jpg"></BarnerImg>
	</view>
	<Title left="新品上市"></Title>
	<ContentTitle></ContentTitle>
	<ContentList></ContentList>
	<SwiperImg></SwiperImg>
	<Title left="手机配件"></Title>
	<ScrollViewItem></ScrollViewItem>
	<Title left="S24系列" right="晓龙8gn3芯片"></Title>
	<ContentTwo></ContentTwo>
	<ContentList color="rgb(247,247,247)"></ContentList>
	<OneImg src="https://cdn.seoulfn.com/news/photo/202507/600386_400223_1018.jpeg"></OneImg>
	<Title left="A系列" right="待机神器"></Title>
	<ContentOne></ContentOne>
	<ContentList color="black"></ContentList>
	<Title left="三星 Pad" right="超薄待机王者" more="true"></Title>
	<ContentOne></ContentOne>
	<ContentList color="rgb(247,247,247)"></ContentList>
	<Title left="二手机 系列" right="绝对值得买"></Title>
	<ItemList :data="data"></ItemList>
</template>
<script setup>
import {ref} from "vue"
import BarnerImg from "@/components/Img/imgBanner.vue"
import ContentTitle from "@/components/item/itemContentTitle.vue"
import Title from "@/components/item/itemTitle.vue"
import ContentList from "@/components/item/itemContentList.vue"
import SwiperImg from "@/components/Img/swiperImg.vue"
import ScrollViewItem from "@/components/item/itemScrollView.vue"
import OneImg from "@/components/Img/oneImg.vue"
import ContentOne from "@/components/item/itemContentOne.vue"
import ContentTwo from "@/components/item/itemContentTwo.vue"
import ItemList from "@/components/item/itemList.vue"

const data = ref([
	{
		src:"/images/testImg/ss1.jpg"
	},
	{
		src:"/images/testImg/ss2.jpg"
	},
	{
		src:"/images/testImg/ss3.jpg"
	},
	{
		src:"/images/testImg/ss4.jpg"
	},
	{
		src:"/images/testImg/ss5.jpg"
	},
	{
		src:"/images/testImg/ss6.jpg"
	},
	{
		src:"/images/testImg/ss7.jpg"
	},
	{
		src:"/images/testImg/ss8.jpg"
	}
])
</script>

<style lang="scss">

</style>
