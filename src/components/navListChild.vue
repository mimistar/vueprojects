<template>
<div class="navList-child">
    <dt v-on:click="showOrfade(indexParent)" :class="{'active':indexParent===eqindex}">
      <!--img class="navIcon" src="../assets/logo.png"-->
      <p class="navTitle">
        <router-link v-if="morenav.url" :to="{name:morenav.url,params:{title:morenav.title}}">{{morenav.title}}</router-link>
        <!--router-link :to="{path:morenav.url}">{{morenav.title}}</router-link-->
        <a v-else>{{morenav.title}}</a>
      </p>
      <img  v-if="morenav.child" class="upDownIcon" :class="{'fiexdClass':show}" src="../assets/logo.png">
    </dt>
    <transition-group name="slide-fade" tag="p">
        <div class="childNav" v-if="show" v-bind:key="morenav" >
          <dd
            class="childClass"
            v-for="(navchild,i) in morenav.child"
            @click="routerGo(navchild.url,navchild.title,i)"
            :key="i"
            :class="{'childActive':chilIndex===i}"
          >
            <!--<router-link-->
              <!--@click="routerGo(navchild.url,navchild.title)"-->
              <!--:to="{name:navchild.url,params:{title:navchild.title}}"-->
              <!--v-on:setChild="changeStyle($event)"-->
            <!--&gt;-->
              <!--{{navchild.title}}-->
            <!--</router-link>-->
            <span>{{navchild.title}}</span>
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
      indexParent:{
        type:Number
      },
      eqindex:{
        type:Number
      }
    },
    data(){
      return{
        show:false,
        chilIndex:-1,
      }
    },
    methods: {
      showOrfade (i) {
        this.show=!this.show
        this.chilIndex=-1,
        this.$emit("setIndex",i)
      },
      routerGo(url,title,i){
        console.log(url,title,i)
        this.chilIndex=i
        //和react native中的navigator.push差不多的意思
        this.$router.push({
          name:url,
          params:{
            title:title
          }
        })
      }
    }
  }
  </script>
<style scoped>
  .childClass{
    cursor: pointer;
    color: #fff;
  }
  .active {
    background-color: #48576a
  }
  .childActive span{
    color: #1e9fff !important;
  }
  .childNav {
    margin: 0
  }
  .childNav dd:hover span{
    color: #1e9fff;
  }
  p {
    margin: 0
  }

  .slide-fade-enter {
    transform: translateY(-40px);
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.5s ease;
    opacity: 0;
    transform: translateX(-215px);
  }

  .fiexdClass {
    width: 10px;
    height: 10px;
    transition: all 0.5s ease;
    transform: rotate(180deg);
  }

  .navList-child dt {
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    color: #fff;
    border-radius: 2px;
    font-size: 14px;
    height: 56px;
    line-height: 56px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    cursor: pointer;
  }

  .navList-child dt:hover {
    background-color: #48576a
  }

  .navList-child dt .navIcon {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }

  .navList-child dt .navTitle {
    display: inline-block;
    margin: 0px;
    padding: 0px;
    flex: 1;
    -webkit-flex: 1;
  }

  .navList-child dt .navTitle a {
    color: #fff;
    color: #fff;
    text-decoration: none;
    display: block
  }

  .navList-child dt .upDownIcon {
    width: 10px;
    height: 10px;
    transition: all 0.5s ease;
  }

  .navList-child dd {
    margin: 0px;
    padding: 0px 0px 0px 40px;
    text-align: left;
    position: relative;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    background-color: #202E3E;
  }

  .navList-child dd a {
    color: #fff;
    text-decoration: none;
    display: block;
    outline: none;
  }
</style>
