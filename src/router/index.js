import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import VuetableList from '@/components/VuetableList'
import Myself from '@/components/Myself'
import Maps from '@/components/Maps'
import TableList from '@/components/TableList'
import ModelPage from '@/components/ModelPage'
import ListPage from '@/components/modelchild/ListPage'
import ModelIndex from '@/components/modelchild/Modelindex'
import AbouteUs from '@/components/modelchild/AbouteUs'
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
    },
    {
      path: '/ModelPage',
      // name: 'ModelPage',//有子类不能设置别名,设置了别名默认子类显示不出来,呵呵！
      component: ModelPage,
      children:[
      {
        path: '',//默认显示改页
        // name: 'ModelIndex',
        component: ModelIndex,
      },
      {
        path: 'ListPage',
        // name: 'ListPage',
        component: ListPage,
      },
      {
        path: 'AbouteUs',
        // name: 'AbouteUs',
        component: AbouteUs,
      },
      ]
    },
    { path:"*", redirect:"/" }
  ]
})
