<template>
  <div  class="infoDataBox-IndexPage">
    <h5 class="wcInfo">欢迎使用网站后台管理系统</h5>
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
    <div class="infoData-IndexPage">
      <div class="infoDataLeft-IndexPage">
        <div class="titleInfo-IndexPage">
          <h5>折线图</h5>
        </div>
        <div class="chartsbox-IndexPage">
          <sChart
            :canvasId=sChartline.canvasId
            :type=sChartline.type
            :width=sChartline.width
            :height=sChartline.height
            :data=sChartline.data
            :options=sChartline.options
          >
          </sChart>
        </div>
      </div>
      <div class="infoDataRight-IndexPage">
        <div class="titleInfo-IndexPage">
          <h5>环形图</h5>
        </div>
        <div class="chartsbox-IndexPage">
          <sChart
            :canvasId=sChartring.canvasId
            :type=sChartring.type
            :width=sChartring.width
            :height=sChartring.height
            :data=sChartring.data
            :options=sChartring.options
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
    },
    sChartline:{
      canvasId: 'myCanvasline',
      type:'line',
      width: 500,
      height: 400,
      data: [
        {name:'2012', value:10},
        {name:'2013', value:1499},
        {name:'2014', value:2260},
        {name:'2015', value:1170},
        {name:'2016', value:970},
        {name:'2017', value:1450}
      ],
      options:{
        title: '折线图像数据',
        padding: 50,
        yEqual: 5,
        bgColor: '#ffffff',
        fillColor: '#FF4949',
        axisColor: '#666666',
        contentColor: '#e4e4e4',
        titleColor: '#000000',
        titlePosition: 'top'
      }
    },
    sChartring:{
      canvasId: 'myCanvasring',
      type:'ring',
      width: 500,
      height: 400,
      data: [
        {name:'2012', value:1000},
        {name:'2013', value:1499},
        {name:'2014', value:2260},
        {name:'2015', value:1170},
        {name:'2016', value:970},
        {name:'2017', value:1450}
      ],
      options:{
        title: '环状数据',
        padding: 50,
        yEqual: 5,
        bgColor: '#ffffff',
        fillColor: '#FF4949',
        axisColor: '#666666',
        contentColor: '#e4e4e4',
        colorList: ['#e62129', '#8e8e93', '#F7BA2A', '#FF4949', '#72f6ff'],
        titleColor: '#000000',
        titlePosition: 'top'
      }
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
  padding-bottom: 50px;
  margin-bottom:50px;
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
