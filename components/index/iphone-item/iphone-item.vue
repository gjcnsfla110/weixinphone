<template>
	<view class="iphoneContent">
		
	</view>
</template>

<script>
	import { ref } from 'vue';
	import LoadingView from '@/utill/LoadingView.vue'
	import SwiperBanner from '@/components/Img/swiperBanner.vue';
	import ItemContentList from '@/components/item/itemContentList.vue';
	import ItemContentOne from '@/components/item/itemContentOne.vue';
	import ItemContentTitle from '@/components/item/itemContentTitle.vue';
	import ItemContentTwo from '@/components/item/itemContentTwo.vue';
	import ItemList from '@/components/item/itemList.vue';
	import ItemNew from '@/components/item/itemNew.vue';
	import ItemScrollView from "@/components/item/itemScrollView.vue";
	import ItemTitle from '@/components/item/itemTitle.vue';
	import ImgBanner from '@/components/Img/imgBanner.vue';
	import OneImg from '@/components/Img/oneImg.vue';
	import SwiperImg from '@/components/Img/swiperImg.vue';
	
	export default{
		components:{
			LoadingView,
			ItemScrollView,
			ItemContentList,
			SwiperBanner,
			ItemTitle,
			ItemNew,
			ItemList,
			ImgBanner,
			OneImg,
			SwiperImg,
			ItemContentOne,
			ItemContentTitle,
			ItemContentTwo
			
		},
		
	}
 
</script>

<style lang="scss">
	.iphoneContent{
		width: 100vw;

	}
</style>
