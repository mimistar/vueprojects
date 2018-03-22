<template>
  <div class="content">
    <Login v-if="nologin" @login="goLogin($event)"/>
    <HomeIndex @login="goLogin($event)" v-else :username="username" :userpass="userpass"/>
  </div>
</template>
<script>
  import Login from './webpage/login'
  import HomeIndex from './webpage/HomeIndex'
  export default {
      components:{Login,HomeIndex},
      data(){
        return{
          nologin:true,
          username:'',
          userpass:''
        }
      },
    created:function () {
        //模拟登陆，用户密码存本地，
      let userObj =  window.localStorage.getItem('loginInfo')
      let username = JSON.parse(userObj).username
      let userpass =JSON.parse(userObj).userpass
      if(username&&userpass){
        this.nologin=false
        this.username=username
        this.userpass=userpass
      }
    },
    methods:{
      goLogin(e){
        let userObj =  window.localStorage.getItem('loginInfo')
        if(userObj){
          let username = JSON.parse(userObj).username
          let userpass =JSON.parse(userObj).userpass
          this.username=username
          this.userpass=userpass
        }
        this.nologin=e
      }
    }
  }
</script>

<style scoped>
  .content{
    width:100%;
    height:100%;
  }
</style>
