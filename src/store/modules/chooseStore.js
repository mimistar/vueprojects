import actions from '../actions'
import mutations from '../mutations'
export default {
  state:{
    show:true
  },
  mutations:{
    mutations_common(state){
      mutations.mutations.teggter(state)
    }
  },
  actions:{
    actions_common(context){
      actions.actions.teggter_aciton(context,'mutations_common')
    }
  },

}
