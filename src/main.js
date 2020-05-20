import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//toast
import toast from 'components/common/toast'

import VueLazyload from 'vue-lazyload'


//调用 install函数
Vue.use(toast)

//lazyload
Vue.use(VueLazyload, {
	loading: require('./assets/img/common/loading.jpg')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
