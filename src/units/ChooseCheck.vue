<template>
  <div class="ckeck row-one">
    <label class="replacecheck"  :class="{'ischeck':acticle.ischeck}"  v-on:click="showone(acticle.id,chooseArray)"></label>
  </div>
</template>
<script>
export default{
  props:{
    showcheckall:'',
    row:'',
    acticelArray:{
      type:Array,
    },
    chooseArray:{
      type:Array,
    },
    acticle:{
      type:Object,
    }
  },
  data(){
    return{
      showcheck:this.showcheckall||false,
    }
  },
  beforeMount:function(){

  },
  watch:{
    pokerHistory(newValue, oldValue) {
  　　　　console.log(newValue)
          console.log(oldValue)
　　}
  },
  methods:{
    showone(num,arrays){
      if(arrays.indexOf(num)==-1){
        arrays.push(num)
        this.$set(this.acticelArray[this.row], 'ischeck', true)
        this.$emit("addData")
      }else{
        this.showcheck=!this.showcheck
        var indexs =  arrays.indexOf(num)
        arrays.splice(indexs,1)
        this.$set(this.acticelArray[this.row], 'ischeck', false)
        this.$emit("deleData")
      }
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
.ckeck{
  width:120px;
  text-align:center
}
.row-one{
  height:40px;
  line-height:40px
}
.replacecheck{
  margin-top: 10px;
  width:18px;
  height:18px;
  border-radius:4px;
  border:1px solid #c7c7cc;
  display:inline-block;
  cursor:pointer;
}
</style>
