<template>
	<view class="Banner">
		<image class="BannerImg" :src="itemData.img" mode="aspectFill" :style="{height:height}"></image>
	</view>
</template>

<script>
import { ref } from "vue";
export default{
	components:{
		
	},
	props:{
		height:{
			default: "330rpx"
		},
		itemData:{
			type:Object,
			default:{items:[]}
		}
	},
	setup(props, context) {
	},
	methods:{
		
	}
}
</script>
<style lang="scss" scoped>
	.Banner{
		width: 100%;
		.BannerImg{
			width: 100%;
			height: 100%;
		}
	}
</style>