<template>
	<view class="itemTcontent">
		<Card color="rgb(247, 247, 247)" marginTop="0">
			<view class="itemTtop">
				<view class="Ttopleft">
					<view class="titleTop">Ipone16pro系列</view>
					<view class="titlebottom">绝对的机黄鸡 </view>
				</view>
				<view class="Ttopright">
					<image src="/static/subMenu/iphoneT.png"></image>
				</view>
			</view>
			<view class="itemTmid">
				<image src="/images/testImg/banner2.jpg" mode="aspectFill"></image>
			</view>
			<view class="itemTbottom">
				<view class="TbottomItem" v-for="item in 4">
					<view class="tbleft">
						<view class="tbTitle">苹果16promax</view>
						<view class="tbContent">256G</view>
						<view class="tbPrice">205万韩元</view>
					</view>
					<view class="tbright">
						<image src="/static/subMenu/iphonT.jpg"></image>
					</view>
				</view>
			</view>
		</Card>
	</view>
</template>
<script setup>
 import {defineProps} from "vue";
 import Card from "@/components/cardPage/cardPage.vue"
 const props = defineProps();
</script>

<style lang="scss" scoped>
	.itemTcontent{
		width: 100v;
		position: relative;
		.itemTtop{
			width: 100%;
			height: 160rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.Ttopleft{
				width: 60%;
				height: 100%;
				padding-left: 15rpx;
				.titleTop{
					width: 100%;
					margin-top: 30rpx;
					margin-bottom: 5rpx;
					font-size: 42rpx;
				}
				.titlebottom{
					width: 100%;
					font-size: 25rpx;
				}
			}
			.Ttopright{
				width: 35%;			
				image{ 
					position: absolute;
					top: -10rpx;
					right: 80rpx;
					width: 140rpx;
					height: 160rpx;
				}
			}
		}
		.itemTmid{
			width: 100%;
			pading:0 10rpx;
			image{
				width: 100%;
				height: 380rpx;
				border-radius: 18rpx;
			}
		}
		.itemTbottom{
			width: 100%;
			margin-top:15rpx;
			display: grid;
			grid-template-columns: repeat(2,1fr);
			gap: 15rpx;
			.TbottomItem{
				width: 100%;
				height: 180rpx;
				background-color: white;
				border-radius: 10rpx;
				position: relative;
				.tbleft{
					width: 100%;
					padding-left: 18rpx;
					.tbTitle{
						margin-top: 25rpx;
						font-size: 28rpx;
					}
					.tbContent{
						margin-top: 8rpx;
						font-size: 25rpx;
						color: royalblue;
					}
					.tbPrice{
						margin-top: 18rpx;
						font-size: 24rpx;
					}
				}
				.tbright{
					image{
						position: absolute;
						bottom: 2rpx;
						right: 5rpx;
						width: 80rpx;
						height: 150rpx;
					}
				}
			}
		}
	}
</style>
