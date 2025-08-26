<template>
    <view>
        <view v-if="mainStores.isLoading">加载中...</view>
        <slot v-else-if="mainStores.isDataAvailable" />
        <view v-else>数据未加载</view>
    </view>
</template>

<script>
import { useMainStores } from '../stores/mainData';

export default {
    setup() {
        const mainStores = useMainStores();
        return { mainStores };
    }
};
</script>