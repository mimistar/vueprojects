import Vue from 'vue'
import vuex from 'vuex'
import teggter from './modules/chooseStore'
import choose_storeOne from './modules/chooseStoreOne'
Vue.use(vuex);
export default  new vuex.Store({
  modules:{
    teggter:teggter,
    choose_storeOne:choose_storeOne,
  }
})
