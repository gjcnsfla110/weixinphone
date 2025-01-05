<template>
	<view class="myPageContent">
		<CustomNav></CustomNav>
		<Top></Top>
		<Shopping></Shopping>
	</view>
</template>

<script setup>
	import CustomNav from '@/components/custom-nav-bar/customNav.vue'
	import Top from '@/components/myPage/top.vue'
	import Shopping from '@/components/myPage/shoppingHistory.vue'
</script>

<style>
	.myPageContent{
		width: 100%;
		background-color: rgb(248, 248, 248);
	}   
</style>
