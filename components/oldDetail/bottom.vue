<template>
	<view class="goods-carts">
		<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" />
	</view>
	<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">
		<view class="popupBuy">
			
		</view>
	</uni-popup>
</template>
<script setup>
	import {ref} from 'vue'
	const popup = ref(null);
	const options = [
			{
				icon: 'headphones',
				text: '客服'
			}, 
			{
				icon: 'heart',
				text: '收藏',
			},
			];
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
		    ];
	const buttonClick = (e)=>{
		if(e.index === 1){
			popup.value.open();
		}else{
			
		}
	}
</script>

<style lang="scss" scoped>
	.goods-carts{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.popupBuy{
		width: 100%;
		height: 800rpx;
		background-color: white;
		border-top-right-radius: 30rpx;
		border-top-left-radius:30rpx;
	}
</style>