<template>
	<CardPage color="white">
		<swiper class="imgSwiper" :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor" autoplay>
			<swiper-item class="imgSwiperItem" v-for="item in items" @click="itemDetail(item.goods_id)">
				<image :src="item.img" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</CardPage>
</template>

<script>
	import CardPage from "@/components/cardPage/cardPage.vue"
	import { watch,ref } from "vue";
	export default{
		components:{
			CardPage
		},
		props:{
			itemData:{
				type:Object,
				default:{items:[]}
			},
			indicatorDots:{
				type:Boolean,
				default:true
			},
			indicatorColor:{
				type:String,
				default:"rgba(255,255,255)"
			},
			indicatorActiveColor:{
				type:String,
				default:"rgba(255,153,51)"
			}
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
