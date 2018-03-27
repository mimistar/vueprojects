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
          <swiper-slide><img src="../assets/banner1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/banner2.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
      <div class="contentTitle">
        <h1>专业值得信赖</h1>
      </div>
      <div class="aboutUs">
        <ul class="aboutUs-list-box">
          <li class="jisu">
            <i></i>
            <p>一流的技术</p>
          </li>
          <li class="sudu">
            <i></i>
            <p>飞一般的开发速度</p>
          </li>
          <li class="team">
            <i></i>
            <p>强大的团队</p>
          </li>
          <li class="zhil">
            <i></i>
            <p>质量有保障</p>
          </li>
        </ul>
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
  .banner{
    min-height: 500px;
  }
  .banner img{
    width: 100%;
  }
  .contentTitle{
    text-align: center;
    padding:50px 0;
  }
  .contentTitle h1{
    position: relative;
  }
  .contentTitle h1::before{
    position: absolute;
    left: 50%;
    margin-left:-400px;
    top:50%;
    content: '';
    display: inline-block;
    width: 200px;
    height: 2px;
    background-color: #dbdbdb;
  }
  .contentTitle h1::after{
    position: absolute;
    right: 50%;
    margin-right:-400px;
    top:50%;
    content: '';
    display: inline-block;
    width: 200px;
    height: 2px;
    background-color: #dbdbdb;
  }
  .aboutUs{
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    align-items: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -moz-box-align: center;
    justify-content: center;
    -webkit-justify-content: center;
    -moz-justify-content:center;
    -ms-justify-content:center;
  }
  .aboutUs-list-box{
    overflow: hidden;
    margin-bottom: 50px;
  }
  .aboutUs-list-box li{
    padding:0 80px;
    float: left;
    text-align: center;
  }
  .aboutUs-list-box li p{
    text-align: center;
    margin: 30px 0;
  }
  .aboutUs-list-box li:hover p{
    color:#1296db;
  }
  .aboutUs-list-box li i{
    display:inline-block;
    width: 100px;
    height: 100px;
    background:url("../assets/icons.png") no-repeat;
    cursor: pointer;
  }
  .aboutUs-list-box li.jisu i {
      background-position: 0 0;
  }
  .aboutUs-list-box li.jisu:hover i {
    background-position: -101px 0px;
  }
  .aboutUs-list-box li.sudu i {
    background-position: -202px 0;
  }
  .aboutUs-list-box li.sudu:hover i {
    background-position: -303px 0px
  }
  .aboutUs-list-box li.team i {
    background-position: -404px 0px;
  }
  .aboutUs-list-box li.team:hover i {
    background-position: -505px 0px;
  }
  .aboutUs-list-box li.zhil i {
      background-position: -606px 0px;
  }
  .aboutUs-list-box li.zhil:hover i {
    background-position: -707px 0px;
  }
</style>
