import Vue from 'vue'
import router from './router'
import App from './app'
import Resource from 'vue-resource'
Vue.config.productionTip = true
Vue.config.debug =true
Vue.use(Resource)
new Vue({
  el: '#app',
  router,
  template:'<App/>',
  components:{App},
})
