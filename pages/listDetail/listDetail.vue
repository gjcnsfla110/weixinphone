<template>
	<view>
		<CustomNav back="true" :customFill="false" bgColor="rgb(255,255,255,0)"></CustomNav>
		<SwiperImg></SwiperImg>
		<Buttom></Buttom>
	</view>
</template>
<script setup>
import CustomNav from '@/components/custom-nav-bar/customNav.vue'
import SwiperImg from '@/components/listDetail/swiperImg.vue'
import Buttom from '@/components/listDetail/bottom.vue'
</script>

<style lang="scss">
</style>
