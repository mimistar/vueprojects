<template>
  <div class="ckeck row-one" v-on:click="checkthis()">
    <div class="replacecheck" :class="{'ischeck':ischeck}"></div>
    {{tagTitle}}
  </div>
</template>
<script>
export default {
  props:{
    tagTitle:'',
  },
  data:()=>{
    return{
      ischeck:false
    }
  },
  methods:{
    checkthis(){
      this.ischeck=!this.ischeck
    }
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
</style>
