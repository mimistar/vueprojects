<template>
    <div class="pageBody">
      <div class="head">
        <div class="nav-list">
          <ul>
            <li
              v-for="(nav,index) in navArray"
              :key="index"
              :class="{'active':index===0}"
              @click="routerGo(nav.url,nav.title,index)"
            >
              {{nav.title}}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      components:{
        swiper,
        swiperSlide
      },
      data(){
        return{
          navArray:[
            {
            title:'首页',
            url:''
            },
            {
            title:'列表页',
            url:'ListPage'
            },
            {
            title:'关于我们',
            url:'AbouteUs'
            },
            {
            title:'网站简介',
            url:'ListPage'
            },
          ],

        }
      },
      methods:{
        routerGo(url,title,i){
          this.$router.push({
            path:'/ModelPage/'+url,//一个/都不能少否则会有问题
            query:{
              title:title
            }
          })
        }
      }
    }
</script>

<style scoped>
  ul,li,h1,h2,h3,h4,h5,h6,p,from{
    padding:0px;
    list-style: none;
    margin:0px;
  }
  .pageBody{
    height: 100%;
    width:100%;
    margin:0px;
    padding:0px;
    position: relative;
  }
  .head{
    height: 55px;
    width: 100%;
    background-color: rgba(0,0,0,0.67);
    position: absolute;
    top:0;
    z-index: 2;
  }
  .nav-list{
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    align-items: center;
    justify-content: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
  }
  .nav-list ul{
    overflow: hidden;
  }
  .nav-list ul li{
    color: #fff;
    padding:0 50px;
    display: inline-block;
    line-height: 55px;
    text-align: center;
    cursor: pointer;
  }
  .nav-list ul li:hover {
    color:#1e9fff;
  }
  .nav-list ul li.active {
    color:#1e9fff
  }
</style>
