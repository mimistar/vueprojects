import Vue from 'vue'
import router from './router'
import HomeIndex from './webpage/HomeIndex'
import App from './app'
Vue.config.productionTip = true
Vue.config.debug =true
new Vue({
  el: '#app',
  router,
  template:'<App/>',
  components:{App},
})
