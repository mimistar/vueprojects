<template>
  <div  class="infoDataBox-IndexPage">
    <h5 class="wcInfo">欢迎使用专业的php网站管理系统,轻松建站首选利器--织梦内容管理系统</h5>
    <div class="infoData-IndexPage">
      <div class="infoDataLeft-IndexPage">
          <div class="titleInfo-IndexPage">
            <h5>信息统计</h5>
          </div>
          <div class="chartsbox-IndexPage">
            <sChart
            :canvasId=sCharTbar.canvasId
            :type=sCharTbar.type
            :width=sCharTbar.width
            :height=sCharTbar.height
            :data=sCharTbar.data
            :options=sCharTbar.options
            >
            </sChart>
          </div>
      </div>
      <div class="infoDataRight-IndexPage">
          <div class="titleInfo-IndexPage">
            <h5>SEO信息统计</h5>
          </div>
          <div class="chartsbox-IndexPage">
            <sChart
            :canvasId=sChartpie.canvasId
            :type=sChartpie.type
            :width=sChartpie.width
            :height=sChartpie.height
            :data=sChartpie.data
            :options=sChartpie.options
            >
            </sChart>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import sChart from 'vue-schart';
export default{
  data(){
    return{
    sCharTbar:{
        canvasId: 'myCanvasbar',
        type: 'bar',
        width: 500,
        height: 400,
        data: [
            {name: '会员数', value: 152},
            {name: '文档数', value: 139},
            {name: '评论数', value: 200},
        ],
        options: {
            title: '系统信息统计',
            padding: 50,
            bgColor: '#FFFFFF',
            titlePosition: 'top',       // 图表标题位置: top / bottom
            yEqual: 6,
            fillColor: '#13CE66',
            contentColor: '#c7c7cc',       // 内容横线颜色
            axisColor: '#4e4e4e',          // 坐标轴颜色
            titleColor:'#4F7632',
        },
    },
    sChartpie:{
      canvasId: 'myCanvaspie',
      type: 'pie',
      width: 500,
      height: 400,
      data: [
          {name: 'Alexa全球排名', value: 3659},
          {name: 'Alexa地区排名', value: 2569},
          {name: '百度收录数', value: 11592},
          {name: '搜狗收录数', value: 11200},
          {name: '360收录数', value: 15962},
      ],
      options: {
          title: 'SEO信息统计',
          bgColor: '#ffffff',
          titleColor: '#000000',
          titlePosition: 'top',
          legendColor: '#000000',
          legendTop: 40,
          colorList: ['#1E9FFF', '#13CE66', '#F7BA2A', '#FF4949', '#72f6ff'],    // 饼图颜色列表
          radius: 100,
      },
    }
  }
},
components:{
   sChart
 }
}
</script>
<style scoped>
h5.wcInfo{margin:0 10px;padding:10px 10px;border-bottom:1px solid #c7c7cc}
.infoDataBox-IndexPage{

}
.infoData-IndexPage{
  display:flex;
  display:-webkit-flex;
}
.infoDataLeft-IndexPage,.infoDataRight-IndexPage{
  flex:1;-webkit-flex:1;
  margin:0 10px;
}
.titleInfo-IndexPage{
  border-bottom:1px solid #c7c7cc;
  padding:10px 10px;
}
.titleInfo-IndexPage h5{
  margin:0px;
}
.chartsbox-IndexPage{
  height:400px;
}
</style>
