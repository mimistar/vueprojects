<template>
    <div class="pageBody">
      <div class="head">
        <div class="nav-list">
          <ul>
            <li
              v-for="(nav,index) in navArray"
              :key="index"
              :class="{'active':index===thisIndex}"
              @click="routerGo(nav.url,nav.title,index)"
            >
              {{nav.title}}
            </li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <!-- slides -->
          <swiper-slide><img src="../assets/banner1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/banner2.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
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
          thisIndex:0,
          swiperOption:{
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          },

        }
      },
      methods:{
        routerGo(url,title,i){
          this.thisIndex=i
          this.$router.push({
            path:'/ModelPage/'+url,// 这里一个 / 都不能少否则会有问题
            query:{
              title:title
            }
          })
        },
        callback(){

        },
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
    padding:0px;
    list-style: none;
    margin:0px;
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
  .banner{
    min-height: 500px;
  }
  .banner img{
    width: 100%;
  }
</style>
