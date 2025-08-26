<template>	
		<view class="swiper-content">
			<view>
				<swiperBanner></swiperBanner>
			</view>	
			<LoadingView>
				<view class="subMenu">
					<view v-for="item in subMenu" class="subMenuItem">
						<image class="subMenuImg" :src="item.img"></image>
						<view class="subMenuText">{{item.name}}</view>
					</view>
				</view>
				<view class="hotItem">
					<itemNew :margin="5" left="新品发布" right="热销商品"></itemNew>
				</view>
				<view class="hotPeijian">
					<HotPeijian left="手机配件" right="爆款商品"></HotPeijian>
				</view>
				<view class="hotNew">
					<HotNew></HotNew>
				</view>
			</LoadingView>
		</view>
</template>

<script setup>
	import { ref } from 'vue';
	import LoadingView from '@/utill/LoadingView.vue'
	import itemNew from '@/components/item/itemNew.vue';
	import HotPeijian from "@/components/item/itemScrollView.vue";
	import HotNew from "@/components/item/itemContentList.vue";
	import ItemTitle from '../../item/itemTitle.vue';
	import swiperBanner from '@/components/Img/swiperBanner.vue';
	import {useMainStores} from '../../../stores/mainData';
	const mainStores = useMainStores();
	const subMenu = mainStores.subMenu;
	console.log(mainStores.subMenu);
	
</script>

<style lang="scss" scoped>
	/*下面轮播图的css*/
	.swiper-content{
		margin-top: 3rpx;
		width: 100vw;
	}
	/*小菜单css*/
	.subMenu{
		display: grid;
		grid-template-columns: repeat(4,1fr);
		gap: 10rpx;
		width: 100vw;
		margin-top:30rpx;
		padding:0 25rpx;
		.subMenuItem{				
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.subMenuImg{
					width: 80%;
					height: 100rpx;
					margin-bottom: 10rpx;
				}
				.subMenuText{
					text-align: center;
					font-size: 20rpx;
					
				}
		}
	}
</style>
