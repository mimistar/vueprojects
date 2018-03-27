<template>
    <div class="pageBody">
      <div class="head">
        <div class="nav-list">
          <ul>
            <li  v-for="(nav,index) in navArray" :key="index" :class="{'active':index===0}">{{nav.name}}</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <!-- slides -->
          <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
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
            name:'首页',
            },
            {
            name:'列表页',
            },
            {
            name:'关于我们',
            },
            {
            name:'网站简介',
            },
          ],
          swiperOption:{

          },
        }
      },
      methods:{
        callback(){

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
  }
  .nav-list{
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    align-items: center;
    justify-content: center;
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
