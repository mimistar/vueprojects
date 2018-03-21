<template>
<div class="table-box">
    <div class="title"><h5>{{this.$route.params.title}}</h5></div>
    <div class="choosebox">
      <button class="alldele" v-on:click="allRemove">删除</button>
      <label>
        <div class="search"><input  v-model="searchInfo" type="text" placeholder="请输入关键词"/></div>
        <button class="searchBtn"v-on:click="searchFun">搜索</button>
      </label>
    </div>
    <div class="tablebox-rowcolumn">
    <div class="row-box row-bg">
      <div class="ckeck row-one">
        <label class="replacecheck"
               :class="{'ischeck':showcheckall}"
               for="allcheckbox"
               v-on:click="chooseall">

        </label>
      </div>
      <div class="time row-one"><span>日期</span></div>
      <div class="auther row-one"><span>作者</span></div>
      <div class="actilceTitle row-one"><span>文章标题</span></div>
      <div class="automore row-one"><span>操作</span></div>
    </div>
      <div class="row-box" v-for="(acticle,i) in acticelArray">
        <ChooseCheck
          v-on:deleData="unchooseDatafun($event)"
          v-on:addData="chooseDatafun($event)"
          :row="i" :chooseArray="chooseArray"
          :acticelArray="acticelArray"
          :acticle="acticle" >
        </ChooseCheck>
        <div class="time row-one"><span>{{acticle.date}}</span></div>
        <div class="auther row-one"><span>{{acticle.auther}}</span></div>
        <div class="actilceTitle row-one"><span>{{acticle.title}}</span></div>
        <div class="automore row-one">
          <button class="oneEdit"  v-on:click="editRemove(acticle.id)">编辑</button>
          <button class="onedele"  v-on:click="oneRemove(acticle.id)">删除</button>
        </div>
      </div>
      <div class="pageList">
        <ul>
          <li v-on:click="changePage('frist')"><span>首页</span></li>
          <li v-for="(page,i) in pagelistData"
              :class="{'active':pageindex==i}"
              v-on:click="changePage(i)" ><span>{{page}}</span></li>
          <li v-on:click="changePage('last')"><span>末页</span></li>
          <li v-on:click="changePage('up')"><span>上一页</span></li>
          <li  v-on:click="changePage('down')"><span>下一页</span></li>
        </ul>
      </div>
    </div>
    <div v-if="alertState" class="alertmodel">
      <p v-if="alertType=='dele'">你删除了第{{this.alertInfo}}行</p>
      <p v-else-if="alertType=='nodata'">请先选择你要删除的数据</p>
      <p v-else-if="alertType=='edit'">你要编辑第{{this.alertInfo}}行</p>
    </div>
</div>
</template>
<script>
import ChooseCheck from '../components/ChooseCheck'
export default{
  components:{
    'ChooseCheck':ChooseCheck
  },
  props:{
    indexC:{
      type:Number
    }
  },
  data(){
  return{
      showcheckall:false,
      acticelArray:[
        {id:1,date:'2018-2-1',auther:'star1',title:'1文章标题文章标题文章标题文章标题文章标题'},
        {id:2,date:'2018-2-2',auther:'star2',title:'2文章标题文章标题文章标题文章标题文章标题'},
        {id:3,date:'2018-2-3',auther:'star3',title:'3文章标题文章标题文章标题文章标题文章标题'},
        {id:4,date:'2018-2-4',auther:'star4',title:'4文章标题文章标题文章标题文章标题文章标题'},
        {id:5,date:'2018-2-5',auther:'star5',title:'5文章标题文章标题文章标题文章标题文章标题'},
        {id:6,date:'2018-2-6',auther:'star6',title:'6文章标题文章标题文章标题文章标题文章标题'},
        {id:7,date:'2018-2-7',auther:'star7',title:'7文章标题文章标题文章标题文章标题文章标题'},
      ],
      pagelistData:[1,2,3,4,5,6,7],
      chooseArray:[],
      alertState:false,
      alertInfo:'',
      alertType:'dele',
      pageindex:0,
      searchInfo:'',
    }
  },
  beforeMount:function(){
  },
  created:function(){
      // this.$emit("setChild",)
  },
  methods:{
    searchFun(){
    },
    /** 全选**/
    chooseall(){
        var arraylins=[]
      if(!this.showcheckall){
        this.chooseArray=[]
        this.acticelArray.forEach((items,i)=>{
          this.chooseArray.push(items.id)
          this.$set(items,'ischeck',true)
        })
      }else{
          this.chooseArray=[]
          this.acticelArray.forEach((items,i)=>{
            this.$set(items,'ischeck',false)
          })
      }
      this.showcheckall=!this.showcheckall
    },
    chooseDatafun(){
      if(this.chooseArray.length==this.acticelArray.length){
        this.showcheckall=true
      }
    },
    noDoubleClick(){
      return this.alertState
    },
    unchooseDatafun(){
      this.showcheckall=false
    },
    setTimeFun(){
      setTimeout(()=>{
        this.alertState=false
        this.alertInfo=""
      },1000)
    },
    deleteCommon(){
      this.alertInfo=this.chooseArray.join(',')
      this.acticelArray= this.acticelArray.filter((items)=>{
        this.$set(items,'ischeck',false)
        return  this.chooseArray.indexOf(items.id)==-1
      })
      this.chooseArray=[]
      this.showcheckall=false
      this.alertState=true
      this.setTimeFun()
    },
    oneRemove(id){
      if(this.noDoubleClick()){
        return;
      }
      this.chooseArray=[]
      this.chooseArray.push(id)
      this.deleteCommon()
    },
    editRemove(id){
        if(this.noDoubleClick()){
          return;
        }
        this.alertType='edit'
        this.alertInfo=id
        this.alertState=true
        this.setTimeFun()
    },
    allRemove(){
      let acticeSize=this.acticelArray.length
      let chooseSize=this.chooseArray.length
      this.alertType='dele'
      if(chooseSize==0){
        this.alertState=true
        this.alertType='nodata'
          this.setTimeFun()
          return;
      }
      this.deleteCommon()
    },
    changePage(i){
      if(i=='frist'){
        this.pageindex=0
      }else if(i=='last'){
        this.pageindex=this.pagelistData.length-1
      }else if(i=='up'){
        this.pageindex!==0?this.pageindex--:this.pageindex=this.pageindex;
      }else if(i=='down'){
        this.pageindex!==this.pagelistData.length-1?this.pageindex++:this.pageindex=this.pageindex
      }else{
        this.pageindex=i
      }
    }
  }
}
</script>
<style scoped>
.pageList{
  display:flex;
  display:-webkit-flex;
  margin-top:10px;
  }
  .pageList ul{
    list-style:none;
    padding:0;
    margin:0 auto;
  }
  .pageList ul li{
    float:left;
    padding:5px 10px;
    border:1px solid #c7c7cc;
    border-radius:4px;
    margin:5px;
    cursor:pointer;
  }
  .pageList ul li.active{
    background-color:#4DB3FF;
  }
  .pageList ul li.active span{
    color:#fff
  }
  .pageList ul li span{
    color:#2b2b2b;
    cursor:pointer
  }
.oneEdit{
  background-color:#4DB3FF;
  padding:5px 10px;
  border:none;
  outline:none;
  border-radius:4px;
  color:#fff;
  cursor:pointer;
}
.onedele{
  padding:5px 10px;
  border:none;
  outline:none;
  border-radius:4px;
  background-color:#e62129;
  color:#fff;
  cursor:pointer;
}
.alertmodel{
    width:250px;
    min-height:80px;
    position:absolute;
    left:50%;
    top:50px;
    margin-top:-40px;
    margin-left:-125px;
    background-color:#000;
    opacity:0.8;
    border-radius:5px;
    display:flex;
    display:-webkit-flex;
    align-items:center;
    justify-content:center;
    padding: 0px 15px;
}
.alertmodel p{
  color:#fff;
  margin:0px;
}
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
  transform-origin: center;
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
.onecheckbox{
  outline:none;
  border:none;
  display:none;
}
.allcheckbox{
  outline:none;
  border:none;
  display:none;
}
.automore{
  width:200px;
  text-align:center
}
.actilceTitle{
  flex:1;
  -webkit-flex:1;
    text-align:center
}
.auther{
  width:180px;
  text-align:center
}
.time{
  width:120px;
  text-align:center
}
.ckeck{
  width:120px;
  text-align:center
}
.row-one{
  height:40px;
  line-height:40px
}
.row-one span{
  color:#2b2b2b;
}
.row-box{
  display:flex;
  display:-webkit-flex;
  height:40px;
  align-items:center;
  border-bottom:1px solid #c7c7cc;
}
.row-bg{
  background-color:#EEF1F6
}
.tablebox-rowcolumn{
    width:100%;
    display:flex;
    display:-webkit-flex;
    border:1px solid #c7c7cc;
    height:100%;
    border-radius:4px;
    flex-direction:column
}
.searchBtn{
    padding:10px 20px;
    border:none;
    outline:none;
    border-radius:4px;
    background-color:#4db3ff;
    color:#fff;
    cursor:pointer;
}
.search{
  display:inline-block;
  border:1px solid #c7c7cc;
  border-radius:5px;
  padding-left:5px
}
.search input{
  outline:none;
  border:none;
  height:33px;
  font-size:16px;
  width:300px;
  border-radius:5px;
}
.alldele{
  padding:10px 20px;
  border:none;
  outline:none;
  border-radius:4px;
  background-color:#e62129;
  color:#fff;
  cursor:pointer;
}
.choosebox label{
  display:inline-block
}
.choosebox{
  padding:10px 15px;
}
.table-box{
  padding:30px;
  height:100%
}
.title{
  padding:10px 0px 10px 15px;
}
.title h5{
  margin:0px;
  color:#8e8e93
}
</style>
