import Vue from 'vue'
import Vuex from 'vuex'
import teggter from './chooseStore'
import choose_storeOne from './chooseStoreOne'
Vue.use(Vuex);
export default  new Vuex.Store({
  modules:{
    teggter:teggter,
    choose_storeOne:choose_storeOne,
  }
})
