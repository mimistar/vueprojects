<template>
<div class="myself-box">
    <div class="content-box">
    <div class="title"><h5>{{this.$route.params.title}}</h5></div>
    <div class="titleInfo"><h3>摘要</h3></div>
    <div class="content-center-box">
      基于vue2.0在vue-cli的基础上搭建的一个简易后台管理系统，ui没有用到框架手写的,有需要的也可以用Element UI套上.
    </div>
    <div class="titleInfo"><h3>涉及知识点</h3></div>
    <div class="content-center-box">
      这个系统内容功能不多但是涉及到的内容几乎涵盖vue的全部知识点.<br/>
      1、vue语法的考察<br/>
      2、动画的使用的<br/>
      3、路由的使用及路由传参,别名设置等<br/>
      4、组件的封装及组件之间的通讯<br/>
      5、列表的渲染,涉及数据的更新，vue数组,对象的变异方法的使用<br/>
      6、经典单选全选的实现<br/>
      7、数据图形渲染，涉及vue插件的使用.<br/>
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
