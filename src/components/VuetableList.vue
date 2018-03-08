<template>
  <div class="table-box">
    <div class="title"><h5>{{this.$route.params.title}}</h5></div>
    <div class="acticlTtitle-box">文章标题<input v-model="acticlTtitle" placeholder="" type="text" name="title" class="acticlTtitle"/></div>
    <div class="acticlAuther-box">作者选择<i class="sanjiao" :class="{'daosanjiao':rotateShow}"></i><input  v-on:click="chooseAuther" placeholder="请选择" v-bind:value="acticlAuther"  type="text" class="acticlAuther" readonly/>
    <transition-group name="slide-fade" tag="p">
      <ul class="authList"  v-if="rotateShow" v-bind:key="AuthList">
        <li v-for="(Auth,i) in AuthList" v-bind:key="i" v-on:click="chooseTrue(Auth)">{{Auth}}</li>
      </ul>
    </transition-group>
    </div>
    <div class="acticlTime-box">发布时间<input v-model="acticlTime" placeholder="" name="title" class="acticlTime"/></div>
  </div>
</template>
<script>
export default{
  data(){
  return {
    rotateShow:false,
    AuthList:['star','star1','star2'],
    acticlAuther:'',
    acticlTtitle:'',
    acticlTime:''
    }
  },
  methods:{
    chooseAuther(){
      this.rotateShow=!this.rotateShow
    },
    chooseTrue(auther){
      this.acticlAuther=auther
      this.rotateShow=!this.rotateShow
    }
  },
    components:{

    }
  }
</script>
<style scoped>
.slide-fade-enter{
  transform: translateY(-40px);
  opacity: 0;
}
.slide-fade-enter-active{
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 1s ease;
    opacity: 0;
    transform: translateY(0px);
}
.authList li{
  padding:10px 5px;
  cursor:pointer;
}
.authList{
  list-style:none;
  position:absolute;
  background-color:#fff;
  width:155px;
  margin:0px;
  padding:0px;
  z-index:2;
  left:70px;
  border:1px solid #c7c7cc;
  top:40px;
  border-radius:4px;
  transition: all 0.5s ease;
}
.authList{

}
.acticlTtitle-box,.acticlAuther-box,.acticlTime-box{
  display:block;
  margin-bottom:15px;
  font-size:14px;
  color:#48576a;
  position:relative;
}
.acticlTtitle,.acticlAuther,.acticlTime{
  border:1px solid #c7c7cc;
  height:33px;
  border-radius:4px;
  margin-left:15px;
  font-size:14px;
  padding-left:10px;
}
.sanjiao{
  width:0;
  height:0;
  border-top:8px solid #48576a;
  border-bottom:8px solid transparent;
  border-left:8px solid transparent;
  border-right:8px solid transparent;
  position:absolute;
  left: 200px;
  top:14px;
  transition: all 0.5s ease;
}
.daosanjiao{
  transform:rotate(180deg);
  -webkit-transform:rotate(180deg);
  transition:all 0.5s;
  -webkit-transition:all 0.5s;
  top:8px;
  left: 200px;
}
.acticlAuther{
  width:150px;
  cursor:pointer;
}
.acticlTtitle{
width:350px;
}
.table-box{
  padding:30px;
  height:100%;
}
.title{
  padding:10px 0px 10px 15px;
  margin-bottom:15px;
}
.title h5{
  margin:0px;
  color:#8e8e93
}
</style>
