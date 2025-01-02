<template>
	<view class="listContainer">
		<TopNav></TopNav>
		<ListItem></ListItem>
	</view>
</template>

<script setup>
import TopNav from '@/components/list/listTopNeb.vue';
import ListItem from '@/components/list/listItem.vue'
</script>

<style lang="scss" scoped>
	.listContainer{
		width: 100%;
	}
</style>
