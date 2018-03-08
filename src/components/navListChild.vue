<template>
<div class="navList-child">
    <dt v-on:click="showOrfade">
      <!--img class="navIcon" src="../assets/logo.png"-->
      <p class="navTitle">
        <router-link v-if="morenav.url" :to="{name:morenav.url,params:{title:morenav.title}}">{{morenav.title}}</router-link>
        <!--router-link :to="{path:morenav.url}">{{morenav.title}}</router-link-->
        <a v-else>{{morenav.title}}</a>
      </p>
      <img  v-if="morenav.child" class="upDownIcon" :class="{'fiexdClass':show}" src="../assets/logo.png">
    </dt>
    <transition-group name="slide-fade" tag="p">
        <div style="margin:0" v-if="show" v-bind:key="morenav" >
          <dd v-for="navchild in morenav.child"  v-bind:key="navchild" >
            <router-link :to="{name:navchild.url,params:{title:navchild.title}}">{{navchild.title}}</router-link>
          </dd>
        </div>
    </transition-group>
  </div>
  </template>
  <script>
  export default{
    props:{
      morenav:{
        type:Object
      },
      test:'',
    },
    data(){
      return{
        show:false,
      }
    },
    methods: {
      showOrfade () {
        this.show=!this.show
        this.class='fiexdClass'
      }
    }
  }
  </script>
<style scoped>
p{margin:0}
.slide-fade-enter{
  transform: translateY(-40px);
  opacity: 0;
}
.slide-fade-enter-active{
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 0.5s ease;
    opacity: 0;
    transform: translateX(-215px);
}
.fiexdClass{
  width:10px;height:10px;
  transition: all 0.5s ease;
  transform:rotate(180deg);
}
.navList-child dt{
    text-align:left;
    padding-left:20px;
    padding-right:20px;
    color:#fff;
    border-radius:2px;
    font-size:14px;
    height:56px;
    line-height:56px;
    display:flex;
    display:-webkit-flex;
    align-items:center;
    cursor:pointer;
}
.navList-child dt:hover {
background-color:#48576a
}
.navList-child dt .navIcon{
  width:10px;height:10px;
  margin-right:10px;
}
.navList-child dt .navTitle{
  display:inline-block;
  margin:0px;
  padding:0px;
  flex:1;
  -webkit-flex:1;
}
.navList-child dt .navTitle a{
  color:#fff;
  color:#fff;text-decoration: none;
  display:block
}
.navList-child dt .upDownIcon{
  width:10px;height:10px;
  transition: all 0.5s ease;
}
.navList-child dd{
  margin:0px;
  padding:0px 0px 0px 40px;
  text-align:left;
  position:relative;
  height:56px;
  line-height:56px;
  font-size:14px;
  background-color:#202E3E;
}
.navList-child dd a{
color:#fff;text-decoration: none;
display:block;
outline:none;
}
</style>
