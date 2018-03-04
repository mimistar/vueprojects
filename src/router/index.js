import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import TestPage from '@/components/TestPage'
import Myself from '@/components/Myself'
import Chlidrenpage from '@/components/Chlidrenpage'
import TableList from '@/components/TableList'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,

    },{
      path: '/Myself',
      name: 'Myself',
      component: Myself,
    },
    {
      path: '/TableList',
      name: 'TableList',
      component: TableList,
    },{
      path:'/TestPage',
      component:TestPage,
      children:[
      {
        path: 'Chlidrenpage',
        component: Chlidrenpage,
      }]
    },
    { path:"*", redirect:"/" }
  ]
})
