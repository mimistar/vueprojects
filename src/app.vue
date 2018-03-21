<template>
  <div class="content">
    <Login v-if="nologin" @login="goLogin($event)"/>
    <HomeIndex v-else :username="username" :userpass="userpass"/>
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
      let username =  window.localStorage.getItem('loginName')
      let userpass = window.localStorage.getItem('userPassword')
      if(username&&userpass){
        this.nologin=false
        this.username=username
        this.userpass=userpass
      }
    },
    methods:{
      goLogin(e){
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
