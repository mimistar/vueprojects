<template>
    <div class="list-page-box">
        <div class="titel">{{this.$route.query.title}}</div>
    </div>
</template>

<script>
    export default {
      data(){
        return{

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
  .list-page-box{
    padding-top: 55px;
  }
  .list-page-box .titel{
    text-align: center;
  }
</style>
