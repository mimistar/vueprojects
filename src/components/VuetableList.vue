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
    <div class="acticlTime-box">
      <label  class="myDate">
        发布时间
        <datepicker class="dateTime" v-model="dateTime" language="ch"></datepicker>
      </label>
    </div>
    <div class="acticlTtitle-box">
      显隐作者
      <label for="" class="ringbutton" :class="{'ColorChange':changeClose}" v-on:click="changeStyle()">
        <div class="buttonegg" :class="{'buttoneggMove':changeClose}"></div>
      </label>
    </div>
    <div class="acticlTtitle-box" id="acticlTtitle-box" >
      选择标签
      <clicktag/>
    </div>
  </div>
</template>
<script>
import datepicker from 'vue-date'
var clicktag={
  template:' <div class="ckeck row-one" v-on:click="checkthis()">\n' +
          '<div class="replacecheck" style="width:18px;\n' +
  '    height:18px;\n' +
  '    border-radius:4px;\n' +
  '    border:1px solid #c7c7cc;\n' +
  '    display:inline-block;\n' +
  '    cursor:pointer;\n' +
  '    margin-right:10px;"  :class="{\'ischeck\':ischeck}"></div>\n' +
          '哈哈\n'+'</div>',
  data:()=>{
    return{
      ischeck:true
    }
  },
  methods:{
    checkthis(){
      this.ischeck=!this.ischeck
    }
  },
}
export default{
  data(){
  return {
    rotateShow:false,
    AuthList:['star','star1','star2'],
    acticlAuther:'',
    acticlTtitle:'',
    acticlTime:'',
    dateTime: '2016-10-16',
    changeClose:false,
    ischeck:false,
    }
  },
  methods:{
    chooseAuther(){
      this.rotateShow=!this.rotateShow
    },
    chooseTrue(auther){
      this.acticlAuther=auther
      this.rotateShow=!this.rotateShow
    },
    changeStyle(){
      this.changeClose=!this.changeClose
    },
    checkthis(){
      this.ischeck=!this.ischeck
    }
  },
    components:{
      'datepicker':datepicker,
      "clicktag":clicktag
    }
  }
</script>
<style scoped>
  .ischeck{
    background-color:#4db3ff;
    border:1px solid #fff !important;
    position: relative;
  }
  .ischeck::after{
    content:'';
    border:2px solid #fff;
    border-top:0px;
    border-left:0px;
    width:4px;
    height:8px;
    left:6px;
    top:3px;
    position: absolute;
    transform:rotate(45deg) scaleY(1);
    -ms-transform:rotate(45deg) scaleY(1);
    -s-transform:rotate(45deg) scaleY(1);
    -webkit-transform:rotate(45deg) scaleY(1);
    transform-origin: center;
  }
  .ckeck{
    width:120px;
    text-align:center;
    margin-left:15px;
    cursor:pointer;
  }
  .row-one{
    height:40px;
    line-height:40px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  .replacecheck{
    width:18px;
    height:18px;
    border-radius:4px;
    border:1px solid #c7c7cc;
    display:inline-block;
    cursor:pointer;
    margin-right:10px;
  }
.buttonegg{
  width:35px;
  height:35px;
  border-radius:50%;
  background-color: #fff;
  position: absolute;
  left: 0;
  top:0px;
  transition: all 0.5s ease;
}
.ringbutton{
  background-color: #20a0ff;
  display: inline-block;
  width:80px;
  height:35px;
  border-radius:25px;
  cursor: pointer;
  position:relative;
  transition: all 0.5s ease-in;
  margin-left:15px;
}
.buttoneggMove{
  transition: all 0.5s ease;
  left: 45px;
}
.ColorChange{
  transition: all 0.5s ease-in-out;
  background-color: #8e8e93;
}
.dateTime{
  width:200px;
  margin-left:15px;
}
.dateTime .input-wrapper{
  height:44px
}
.myDate{
  display: flex;
  display: -webkit-box;
  align-items: center;
}
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
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.acticlTtitle,.acticlAuther,.acticlTime{
  border:1px solid #c7c7cc;
  height:28px;
  border-radius:2px;
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
