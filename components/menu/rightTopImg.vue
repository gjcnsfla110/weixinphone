<template>
	<WidthCard color="white" :margin-top="0">
		<navigator url="/pages/oldList/oldList">
		<image :src="src" class="topImg" mode="aspectFill"></image>
		</navigator>
	</WidthCard>
</template>

<script setup>
	import WidthCard from '@/components/cardPage/widthCard.vue';
	import {defineProps} from 'vue'
	const props = defineProps({
		src:{
			type:String,
			default:""
		}
	});

</script>

<style lang="scss" scoped>
	.topImg{
		margin-top: 18rpx;
		width: 100%;
		height: 260rpx;
		border-radius: 10rpx;
	}
</style>