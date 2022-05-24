import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui'


Vue.use(require('vue-wechat-title'));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
