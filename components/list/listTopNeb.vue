<template>
	<CustomNav back="true" :topHeight="100">
		<scroll-view scroll-x class="menuList">
			<view class="menubutton" v-for="(i,index) in 10">
				<view class="top">
					<image src="/static/subMenu/iphoneT.png" mode="scaleToFill"></image>
				</view>
				<view class="bottom" :style="{color : activeMenu == index ? 'black':'rgb(180, 180, 180)'}">
					title{{i}}
				</view>
			</view>
		</scroll-view>
	</CustomNav>
</template>

<script setup>
	import CustomNav from '@/components/custom-nav-bar/customNav.vue';
	import {ref} from 'vue'
	const activeMenu = ref(0)
</script>

<style lang="scss" scoped>
	.menuList{
		width: 100%;
		height: 100px;
		white-space: nowrap;
		.menubutton{
			width: 25%;
			height: 100%;
			display: inline-block;
			.top{
				width: 100%;
				height: 61px;
				text-align: center;
				padding-top: 10px;
				image{
					width: 45px;
					height: 50px;
				}
			}
			.bottom{
				width: 100%;
				line-height: 39px;
				height: 39px;
				text-align: center;
				font-size: 26rpx;
			}
		}
	}
</style>