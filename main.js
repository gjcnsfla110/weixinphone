import App from './App'
import { createPinia } from 'pinia'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
// npm 方式
import uViewPro from 'uview-pro';
// uni_modules 方式
// import uViewPro from "@/uni_modules/uview-pro";
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia();
  app.use(pinia);
  app.use(uViewPro) // uView를 Vue 3 앱에 등록
  uni.$u.config.unit = 'rpx'
  return {
	app
  }
}
// #endif