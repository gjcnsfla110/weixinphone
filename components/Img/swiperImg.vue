<template>
	<Card color="white" margin-top="0">
		<swiper class="imgSwiper" indicator-dots autoplay>
			<swiper-item class="imgSwiperItem" v-for="item in items" @click="itemDetail(item.goods_id)">
				<image :src="item.img" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</Card>
</template>

<script>
	import Card from "@/components/cardPage/cardPage.vue"
	import { watch,ref } from "vue";
	export default{
		comments:{
			Card
		},
		props:{
			itemData:{
				type:Object,
				default:{items:[]}
			},
		},
		setup(props, context) {
			const items = ref(props.itemData.items);
			watch(
			  () => props.itemData.items,
			  (newItems) => {
				items.value = newItems;
			  },
			  { deep: true, immediate: true }
			);
			return{
				items,
			}
		},
		methods:{
			itemDetail(id){
				uni.navigateTo({
				        url: `/pages/itemPage/oldItemPage?id=${id}` // 이동할 페이지 경로
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.imgSwiper{
		width: 100%;
		height:330rpx;
		margin-top: 8rpx;
		margin-bottom: 26rpx;
		.imgSwiperItem{
			width: 100%;
			height: 330rpx;
			background-color: #eee;
			border-radius: 15rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
