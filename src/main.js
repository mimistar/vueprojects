import Vue from 'vue'
import router from './router'
import HomeIndex from './webpage/HomeIndex'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template:'<HomeIndex/>',
  components:{HomeIndex},
})
