<template>
	<scroll-view  scroll-y :style="{height:screenHeight+'px'}" style="background-color: rgb(247, 247, 247);">
		<view class="listItem">	
				<view class="itemContent" v-for="i in 10">
					<navigator url="/pages/detailPage/detailPage">
						<view class="itemTop">
							<image src="/static/subMenu/watch.jpg" mode="scaleToFill"></image>
						</view>
						<view class="itemBottom">
							<view class="itemBottomTitle"> 공간을 넘어가더라도 한줄로 표현하게 된다. 공백들을 하나로 합치며, 줄 바꿈은 <br>요소에서만 일어나게 된다. </view>
							<view class="itemBottomPrice"></view>
						</view>
					</navigator>
				</view>	
		</view>
	</scroll-view>
</template>

<script setup>
	import {getNaviBar} from '@/utill/systemData.js'
	import {ref} from 'vue'
	const screenHeight = getNaviBar().noTabScreen()-100;
</script>

<style lang="scss" scoped>
	.listItem{
		width: 100%;
		padding:25rpx 25rpx;
		display:grid;
		grid-template-columns: repeat(2,1fr);
		gap: 20rpx;
		.itemContent{
			width: 100%;
			height: 480rpx;
			background-color: white;
			border-radius: 15rpx;
			.itemTop{
				width: 100%;
				height: 300rpx;
				text-align: center;
				image{
					width: 80%;
					height: 280rpx;
					margin-top: 20rpx;
				}
			}
			.itemBottom{
				height: 180rpx;
				width: 100%;
				.itemBottomTitle{
					width: 100%;
					height: 78rpx;
					padding: 0 15rpx;				
					font-size: 27rpx;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>