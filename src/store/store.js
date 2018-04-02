import Vue from 'vue'
import Vuex from 'vuex'
import teggter from './modules/chooseStore'
import choose_storeOne from './modules/chooseStoreOne'
Vue.use(Vuex);
export default  new Vuex.Store({
  modules:{
    teggter:teggter,
    choose_storeOne:choose_storeOne,
  }
})
