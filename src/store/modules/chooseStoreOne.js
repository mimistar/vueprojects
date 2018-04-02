export default {
  state:{
    chooseall:false
  },
  mutations:{
    chooseFun(state){
      state.chooseall=state.chooseall?false:true;
    }
  }
}
