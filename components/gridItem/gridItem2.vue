<template>
	<CardPage>
		<scroll-view class="scrollX" scroll-x enableFlex>
			<view v-for="item in 3" class="scrollXlist" >
				<view class="listItem">					
						<view class="content" v-for="it in 3">
							<view class="title"></view>
							<view class="price"></view>
							<view class="img">
								
							</view>
						</view>
				</view>
			</view>
		</scroll-view>
	</CardPage>
</template>

<script setup>
import CardPage from "@/components/cardPage/cardPage.vue"
import {ref} from 'vue'
const data = ref([
	{
		title : "",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
	{
		title : "",
		price : 2500000,
		src :"/static/subMenu/watch.jpg"
	},
])
</script>

<style lang="scss" scoped>
	.scrollX{
		height:380rpx;
		width: 100%;
		white-space: nowrap;
		.scrollXlist{
			display: inline-block;
			width: 700rpx;
			height: 380rpx;
			line-height: 380rpx;
			text-align: center;
			font-size: 36rpx;
			.listItem{
					width: 100%;
					height: 100%;
					display: grid;
					grid-template-columns: repeat(3,1fr);
					gap: 15rpx;
					padding-right: 15rpx;
					.content{
						background-color: white;
						border-radius: 15rpx;
					}							
			}
					
		}
	}
</style>
