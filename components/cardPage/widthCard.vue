<template>
	<view class="cardItme" :style="{padding:padding}">
		<view class="cardItme_pd" :style="{backgroundColor:color,marginTop:marginTop}">
		<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import {defineProps} from "vue";
	const props = defineProps(
	  {
		  color:{
			  default:"white"
		  },
		  marginTop:{
			  default:"30rpx"
		  },
		  padding :{
			  default:"0 25rpx"
		  }
	  }
	)
</script>

<style lang="scss">
   .cardItme{
	  width: 100%;  
	  .cardItme_pd{
		  padding: 15rpx 10rpx;
		  border-radius: 20rpx;
	  }
   }
</style>
