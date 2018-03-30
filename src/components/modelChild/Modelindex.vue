<template>
    <div>
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
      data(){
        return{

        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  ul,li,h1,h2,h3,h4,h5,h6,p,from{
    padding:0px;
    list-style: none;
    margin:0px;
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
    margin:0 0 50px 0 ;
    padding:0px;
    list-style: none;
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
    background:url("../../assets/icons.png") no-repeat;
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
