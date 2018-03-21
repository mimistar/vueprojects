<template>
  <div class="loginBox">
    <div class="loginInfo">
      <h2>登录界面</h2>
      <div class="userInfo">
        <div class="userName">
          <input class="userNameIp" type="text" v-model="userName" placeholder="请输入用户名"/>
          <transition name="animation">
            <p class="nullName" v-if="showName" ref="userName">请输入用户名</p>
          </transition>
        </div>
        <div class="userPassword">
          <input type="text" class="userPasswordIp" v-model="userPassword" placeholder="请输入密码"/>
          <transition name="animation">
            <p class="nullPassword"  v-if="showPassword">请输入密码</p>
          </transition>
        </div>
      </div>
      <button @click="goLogin" class="loginIn">
        登录
      </button>
      <p class="tips">提示:随便写点什么</p>
    </div>
  </div>
</template>
<script>
  import HomeIndex from './HomeIndex'
    export default {
      data(){
        return{
          userName:'',
          userPassword:'',
          showName:false,
          showPassword:false
        }
      },
      methods:{
        goLogin(){
            if(this.userName&&this.userPassword){
              window.localStorage.setItem('loginName',this.userName)
              window.localStorage.setItem('userPassword',this.userPassword)
              this.$emit('login',false)
            }
             if(!this.userName&&!this.userPassword){
                 this.showName=true
                 this.showPassword=true
                  return;
             }
             if(!this.userName){this.showName=true ;return;}
             else{this.showName=false}
             if(!this.userPassword){this.showPassword=true;return;}
             else{this.showPassword=false}
        }
      }
    }
</script>
<style scoped>
  .animation-leave-active,.animation-enter-active{
    transition: all 0.5s;
  }
  .animation-enter,.animation-leave-to{
    transform:translateY(-10px);
    opacity: 0;
  }
  .nullName,.nullPassword{
    font-size:12px;
    color:#e62129;
    text-align: center;
    margin:0px;
    position: absolute;

  }
    .tips{
      font-size:12px;
      color:#8e8e93
    }
    .loginIn{
      outline: none;
      cursor: pointer;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      background-color:#20a0ff;
      color:#fff;
      width:100%;
      border:1px solid #20a0ff;
      padding:10px 0px
    }
  .userNameIp,.userPasswordIp{
    width:100%;
    height:44px;
    border-radius: 4px;
    border:1px solid #c7c7c7;
    box-sizing:border-box;
    padding-left:15px;
    position: relative;
  }

  .userName,.userPassword{
    width:100%;
    margin-bottom:20px;
  }
  .userInfo{
    width:100%;
  }
.loginBox{
  background-color:rgba(0,0,0,0.5);
  width:100%;
  height:100%;
  position:relative;
}
  .loginInfo{
    width:350px;
    height:250px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-125px;
    margin-left:-175px;
    border-radius:4px;
    background-color:#fff;
    padding:15px 30px;
  }
</style>
