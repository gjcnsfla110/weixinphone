<template>
	<view class="content">
		<CustomNav back="true" :customFill="false" bgColor="rgb(255,255,255,0)"></CustomNav>
		<SwiperImg></SwiperImg>
		<button open-type="contact" session-from="user123">고객 서비스 채팅</button>
		<Bottom></Bottom>
	</view>
</template>

<script>
import CustomNav from '@/components/custom-nav-bar/customNav.vue'
import SwiperImg from '@/components/pageDetail/swiperImg.vue'
import Bottom from '@/components/pageDetail/bottom.vue'

export default{
	components:{
		CustomNav,
		SwiperImg,
		Bottom
	},
	props:{
		
	},
	setup(props, context) {
		
	},
	methods:{
		
	},
	onLoad(options){
		console.log(options.id);
	}
}

</script>

<style lang="scss" scoped>
	
</style>
