<template>
  <div class="centent-box">
   <div class="header-index-vue">
     <div class="logo-index-vue">
      <img src="../assets/logo.png"/>
     </div>
      <div class="headr-right-vue">
       <div class="header-center-vue">
         <p class="info-right-vue">您好啊!</p>
       </div>
       <div class="userimgBox" @click="outLoginshow">
        <img class="userimg"  src="../assets/logo.png"/>
          {{username}}
         <transition name="outLanimation">
          <div class="outLogin" @click="outLogin" v-if="outstats">退出</div>
         </transition>
       </div>
      </div>
   </div>
    <div class="centent-center-box">
      <div class="navlist-left">
        <div class="navlist-left-r">
        <dl>
          <NavChild
            v-for="(morenav,i) in morenavArray"
            :morenav="morenav"
            :key="i"
            test="hello,word"
            :indexParent="i"
            :eqindex="eqindex"
            @setIndex="setEqindex($event)"
          >

          </NavChild>
        </dl>
        </div>
      </div>
      <div class="center-centent-left">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavChild from '../components/navListChild'
export default {
  components:{
    'NavChild':NavChild
  },
  props:{
    username:{
      type:String
    }
  },
  data () {
    return {
      morenavArray:[
        {
            title:'简述',
            url:'Myself',
        },
        {
            title:'图形',
            url:'IndexPage',
        },
        {
            title:'table',
            url:'',
            child:[
              {title:'文章列表',url:'TableList'},
              {title:'编辑编辑',url:'VuetableList'}
            ]
        },

        {
            title:'会员',
            url:'',
        },
        {
            title:'模板',
            url:'',
        },
        {
            title:'系统',
            url:'',
        },
        ],
      show:false,
      eqindex:1,
      outstats:false,
    }
  },
  created:function () {

  },
  methods:{
    setEqindex(e){
      this.eqindex=e
    },
    outLoginshow(){
      this.outstats=!this.outstats
    },
    outLogin(){
      window.localStorage.removeItem('loginInfo')
      this.$emit('login',true)
    }
  }
}
</script>
<style scoped>
    .outLanimation-enter-active,.outLanimation-leave-active{
      transition:all 0.5s;
    }
   .outLanimation-enter,.outLanimation-leave-to{
     transform:translateY(-10px);
     opacity: 0;
   }
  .outLogin{
    position: absolute;
    width:60px;
    height:25px;
    padding:5px 0;
    color:#fff;
    right:-5px;
    top:60px;
    line-height: 25px;
    border-radius: 4px;
    text-align: center;
    background-color: #c7c7c7;
    cursor: pointer;
    z-index: 5;
  }
  .centent-box{
    margin:0px auto;
    height:100%;width:100%
  }
  ul{
  list-style:none;
  margin:0 auto;
  padding:0px;
  }
  .header-index-vue{
    height: 70px;
    width:100%;
    background-color:#242f42;
  }
  .logo-index-vue{
    float:left;
    margin:0px 0px 0px 15px;
  }
  .logo-index-vue img{
      height:70px;
      width:70px;
  }
  .info-right-vue{
    display:inline-block;
    margin:0px;
    font-size:12px;color:#fff
  }
  .headr-right-vue{
    float:right;
    line-height:70px;
    height:70px;
    margin:0px 50px 0px 0;
  }
  .headr-right-vue ul{
    display:inline-block;
  }
  .userimgBox{
    display:inline-block;
    position:relative;
    padding-left:50px;
    height:70px;
    color:#fff;
    cursor: pointer;
  }
  .userimgBox img{
    height:40px;
    width:40px;
    border-radius:50%;
    position:absolute;
    top:15px;
    left:0px;
  }
  .headr-right-vue ul li{
    float:left;
    margin-left:20px;
  }
  .headr-right-vue ul li a{
    color:#fff;
    font-size:12px;
    color:#CBDAB3
  }
  .header-center-vue{
    float:left;
    margin-right:20px;
    color:#fff;
  }
  .right-after-border{
    position:relative;
  }
  .right-after-border::after{
    content:'';
    border:1px solid #CBDAB3;
    width:0;
    height:10px;
    top:15px;
    left:-10px;
    position:absolute;
  }
  .centent-center-box{
    width:100%;
    display:flex;
    display:-webkit-flex;
    height:100%;
    position: relative;
    top: -5px;
    overflow:hidden;
  }
  .navlist-left{
    width:215px;
    display:flex;
    display:-webkit-flex;
    background-color:#324157;
    height:100%;
  }
  .navlist-left-l{
    width:50px;
  }
  .navlist-left-r{
    flex:1;
    -webkit-flex:1;
    border-right:1px solid #c7c7cc;
  }
  .center-centent-left{
    flex:1;
    -webkit-flex:1;
    overflow:scroll;
  }
  .navlist-left-l dl{
    margin:10px 15px 0px 10px;
  }
  .navlist-left-l dd{
    padding:5px 6px ;
    margin:2px 0px ;
    border:1px solid #c7c7cc;
    width:14px;
    font-size:14px;
    color:#4F7632;
  }

  .navlist-left-r dl{
    margin-top:0px;
    width:215px;
  }


</style>
