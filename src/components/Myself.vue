<template>
<div class="myself-box">
    <div class="content-box">
    <div class="title"><h5>{{this.$route.params.title}}</h5></div>
    <div class="titleInfo"><h3>列表渲染有对比</h3></div>
    <div class="content-center-box">
      这个其实react的diff机制有点相似，列表渲染的时候数据源会进行一个对比，如果数据源一直则不会渲染列表，这点是相同的.
      这算vue比较重要的一个点,对列表渲染vue官网有提供几种，这里用到的有set...只用到这个
    </div>
  </div>
</div>
</template>
<style scoped>
.content-center-box{
  padding:5px 40px;
  line-height:26px
}
  .titleInfo{
    padding-left:10px;
    border-bottom:1px solid #c7c7cc;
    margin:0px 30px;
  }
  .myself-box{
    padding:30px;
    height:100%;
  }
  .content-box{
    border:1px solid #c7c7cc;
    height:100%;
    border-radius:4px;
  }
  .title{
    padding:10px 0px 10px 15px;
    background-color:#f5f5f5;
    border-bottom:1px solid #d8d8d8;
  }
  .title h5{
    margin:0px;
    color:#8e8e93
  }
</style>
