import Vue from 'vue'
import router from './router'
import HomeIndex from './webpage/HomeIndex'
import App from './app'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template:'<App/>',
  components:{App},
})
