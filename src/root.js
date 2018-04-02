import Vue from 'vue'
import router from './router'
import App from './app'
import Resource from 'vue-resource'
import store from './store/store'
Vue.config.productionTip = true
Vue.config.debug =true
Vue.use(Resource)
new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components:{App},
})
