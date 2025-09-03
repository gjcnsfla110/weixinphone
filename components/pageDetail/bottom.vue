<template>
	<view class="goodsCarts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="optionClick"
				@buttonClick="buttonGroupClick" />
	</view>
	<uni-popup ref="popupCart" type="bottom">
		<view class="popupView">
			<view @click="popupClose(1)" class="popupCloseIcon">
				<view>确认收藏</view>
				<uni-icons type="closeempty" size="25"></uni-icons>
			</view>			
		</view>
	</uni-popup>
	<uni-popup ref="popupBuy" type="bottom">
		<view class="popupView">
			<view @click="popupClose(2)" class="popupCloseIcon">
				<view>确认购买</view>
				<uni-icons type="closeempty" size="25"></uni-icons>
			</view>			
		</view>
	</uni-popup>
</template>

<script setup>
	import {ref} from 'vue'
	const popupCart = ref(null);
	const popupBuy = ref(null);
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
	//popup잠그기함수
	const popupClose = (i)=>{
		console.log(i)
		if(i === 1){
			popupCart.value.close();
		}else if(i === 2){
			popupBuy.value.close();
		}
		
	}
	const optionClick = (e)=>{
			options.value[1].icon = "heart-filled";
		}
	const buttonGroupClick = (e)=>{
		   if(e.index === 0){
			   popupCart.value.open();
		   }else{
			   popupBuy.value.open();
		   }
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
		background-color: rgb(255, 255, 255);
		position: relative;
		.popupCloseIcon{
			position: absolute;
			top: 25rpx;
			right: 25rpx;
		}
	}
</style>