<template>
	<view class="goodsCarts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="optionClick"
				@buttonClick="buttonGroupClick" />
	</view>

</template>

<script setup>
	import {ref} from 'vue'
	const popup = ref(null);
	const options = ref([{
				icon: 'headphones',
				text: '客服'
			},{
				icon: 'heart',
				text: '收藏',
			},{
				icon: 'cart',
				text: '购物车',
				info: 2
			}]);
	const buttonGroup = [
		{
	      text: '加入购物车',
	      backgroundColor: '#ff0000',
	      color: '#fff'
	    },
	    {
	      text: '立即购买',
	      backgroundColor: '#ffa200',
	      color: '#fff'
	    }
	    ]
	const optionClick = ()=>{
			options.value[1].icon = "heart-filled";
		}
	const buttonGroupClick = ()=>{
			popup.value.open();
		}
</script>

<style lang="scss" scoped>
	
	.goodsCarts{
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.popupView{
		width: 100%;
		height: 1150rpx;
		border-top-right-radius: 55rpx;
		border-top-left-radius: 55rpx;
		background-color: #eee;
	}
</style>