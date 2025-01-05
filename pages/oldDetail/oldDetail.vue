<template>
	<view class="content">
		<CustomNav back="true" :customFill="false" bgColor="rgb(255,255,255,0)"></CustomNav>
		<SwiperImg></SwiperImg>
		<OldBottom></OldBottom>
	</view>
</template>

<script setup>
import CustomNav from '@/components/custom-nav-bar/customNav.vue'
import SwiperImg from '@/components/listDetail/swiperImg.vue'
import OldBottom from '@/components/oldDetail/bottom.vue'
</script>

<style lang="scss" scoped>

</style>
