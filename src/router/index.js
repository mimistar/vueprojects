import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import VuetableList from '@/components/VuetableList'
import Myself from '@/components/Myself'
import Maps from '@/components/Maps'
import TableList from '@/components/TableList'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
    },
    {
      path: '/Myself',
      name: 'Myself',
      component: Myself,
    },
    {
      path: '/TableList',
      name: 'TableList',
      component: TableList,
    },
    {
      path: '/VuetableList',
      name: 'VuetableList',
      component: VuetableList,
    },
    {
      path:'/Maps',
      name: 'Maps',
      component:Maps,
      // children:[
      // {
      //   path: 'Chlidrenpage',
      //   component: Chlidrenpage,
      // }]
    },
    { path:"*", redirect:"/" }
  ]
})
