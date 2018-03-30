<template>
  <div class="list-page-box">
    <div class="titel">{{this.$route.query.title}}</div>
    <div class="center-content">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "aboute-us"
    }
</script>

<style scoped>
  ul,li,h1,h2,h3,h4,h5,h6,p,from{
    padding:0px;
    list-style: none;
    margin:0px;
  }
  .list-page-box{
    padding-top: 55px;
  }
  .list-page-box .titel{
    text-align: center;
    margin: 25px auto;
  }
  .list-page-box .center-content{
    width: 1200px;
    margin: 0 auto;

  }
  .list-page-box .center-content ul{
    padding:0;
    margin: 0 auto;
    list-style: none;
  }
  .list-page-box .center-content ul li:nth-child(odd){
    margin-left: 0px;
  }
  .list-page-box .center-content ul li{
    width: calc(50% - 5px);
    float: left;
    margin-left:10px;
    margin-bottom: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #c7c7c7;
    height: 500px ;
    max-height: 600px;
    -webkit-box-shadow: 0px 0px 5px 0px #c7c7c7;
    -moz-box-shadow: 0px 0px 5px 0px #c7c7c7;
    box-shadow: 0px 0px 5px 0px #c7c7c7;
  }
</style>
