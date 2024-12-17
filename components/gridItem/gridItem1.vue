<template>
	<view class="griditem1">
		<view class="content">
			<view class="listItem1">
				<swiper class="listItem1Swiper" autoplay indicator-dots circular="true">
					<swiper-item v-for="item in list1" class="listItem1SwiperItem">
						<view class="item1Text">
							<view class="item1Name">{{item.description.name}}</view>
							<view class="item1Storage">{{item.description.storage}}</view>
							<view class="item1Price">韩币{{item.description.price}}万</view>
						</view>
						<view class="item1Phone">
							 <image class="phone1Img" :src="item.src"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="listItem2" v-for="item in 6">
				<view class="item2Text">
					{{item}}
				</view>
				<view class="item2Phone">
					<image class="phone2Img"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const list1 = ref([
		{
		  description :{
			  name:"苹果16proMax",
			  storage : "256GB",
			  price : 180
		  },
		  src:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
		},
		{
			description :{
						  name:"苹果16pro",
						  storage : "256GB",
						  price : 160
			},
			src:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
		},
		{
			description :{
						  name:"苹果16proPlus",
						  storage : "128GB",
						  price : 120
			},
			src:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
		},
		{
			description :{
						  name:"苹果16proMax",
						  storage : "512GB",
						  price : 200
			},
			src:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
		},
		{
			description :{
						  name:"苹果16pro",
						  storage : "256GB",
						  price : 180
			},
			src:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
		}
	]);
	const list2 = ref([
		 
	]);
</script>

<style lang="scss">
	
	.griditem1{
		margin-top: 50rpx;
		padding: 0 25rpx;
		width: 100vw;
		.content{	
			display: grid;
			grid-template-columns: repeat(2,1fr);
			gap: 10rpx;
			width: 100%;
			background-color: #F6FCFF;
			padding: 20rpx 10rpx;
			border-radius: 20rpx;
			.listItem1{
				width: 100%;
				grid-row: 1/3;
				.listItem1Swiper{
					width: 100%;
					height: 100%;
					background-color: white;
					border-radius: 20rpx;
					.listItem1SwiperItem{
						width: 100%;
						padding-left:30rpx;
						.item1Text{
							height: 30%;
							width: 100%;
							display: flex;
							padding-left: 15rpx;
							flex-direction: column;
							justify-content: center;
						}
						.item1Phone{
							width: 100%;
							height: 70%;
							text-align: center;
							.phone1Img{
								width: 200rpx;
								height: 300rpx;
								padding: 30rpx;
							}
						}
					}					
				}
				
			}
			.listItem2{
				width: 100%;	
				height: 300rpx;
				background-color: white;
				border-radius: 15rpx;
				.item2Phone{
					width: 100%;
					.phone2Img{
						width: 60%;
					}
				}
			}
		}
	}
</style>
