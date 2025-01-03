<template>	
		<view class="swiper-content">
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
			<view class="subMenu">
				<view v-for="item in subMenu" class="subMenuItem">
					<image class="subMenuImg" :src="item.src"></image>
					<view class="subMenuText">{{item.text}}</view>
				</view>
			</view>
			<view class="hotItem">
				<HotItem></HotItem>
			</view>
			<view class="hotPeijian">
				<HotPeijian></HotPeijian>
			</view>
			<view class="hotNew">
				<HotNew></HotNew>
			</view>
			<view class="hotUsed">

			</view>
		</view>
</template>

<script setup>
	import { ref } from 'vue';
	import HotItem from '@/components/gridItem/gridItem1.vue';
	import HotPeijian from "@/components/item/itemScrollView.vue";
	import HotNew from "@/components/item/itemContentList.vue";
	const banners = ref([ 
		{
			src:"https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
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
		{
			src:"https://img.hankyung.com/photo/202404/01.36531376.1.jpg"
		},
	]);
	const subMenu = ref([
		{
			src:"/static/subMenu/hotMenu.png",
			text:"热门机型"
		},
		{
			src:"/static/subMenu/iphone.png",
			text:"苹果手机"
		},
		{
			src:"/static/subMenu/samsung.png",
			text:"三星手机"
		},
		{
			src:"/static/subMenu/iphone.png",
			text:"二手"
		},
		{
			src:"/static/subMenu/samsung.png",
			text:"二手"
		},
		{
			src:"/static/subMenu/heyue.jpg",
			text:"合约机"
		},
		{
			src:"/static/subMenu/usim.png",
			text:"电话卡"
		},
		{
			src:"/static/subMenu/watch.jpg",
			text:"手机配件"
		},
		{
			src:"/static/subMenu/ipad.jpg",
			text:"苹果Ipad"
		},
		{
			src:"/static/subMenu/sPad.jpg",
			text:"三星Pad"
		}
	]);
	
</script>

<style lang="scss" scoped>
	/*下面轮播图的css*/
	.swiper-content{
		margin-top: 3rpx;
		width: 100vw;
		.hotBanner{
			width: 100vw;
			height: 300rpx;
			.hotBannerSwiper{
				width: 100vw;
				height: 300rpx;
				.hotBannerSwiperitem{
					height: 100%;
					width: 100%;
					padding: 0 25rpx;
					.hotBannerSwiperitemImg{
						height: 300rpx;
						width: 100%;					
						.bannerImg{
							height: 300rpx;
							width: 100%;
							border-radius: 18rpx;
						}
					}
				}
			}
		}
	}
	/*小菜单css*/
	.subMenu{
		display: grid;
		grid-template-columns: repeat(5,1fr);
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
