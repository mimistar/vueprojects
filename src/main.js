import Vue from 'vue'
import router from './router'
import HomeIndex from './webpage/HomeIndex'
Vue.config.productionTip = false
Vue.config.debug=true
new Vue({
  el: '#app',
  router,
  template:'<HomeIndex/>',
  components:{HomeIndex},
})
