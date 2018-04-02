export default {
  state:{
    show:true
  },
  mutations:{
    teggter(state){
      state.show=state.show?false:true;
    }
  },
  actions:{
    teggter_aciton(context){
      context.commit('teggter')
    }
  }

}
