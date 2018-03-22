<template>
  <div class="mapBox">
    <div class="searchMap">
      <el-amap-search-box id="searchText" class="search-box"  :on-search-result="onSearchResult"></el-amap-search-box>
      <div class="toolbar">
        <span v-if="loaded">
          location: 经度 = {{ lng }} 纬度 = {{ lat }}
        </span>
        <span v-else>正在定位...</span>
      </div>
    </div>
     <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
       <el-amap-marker v-for="(marker,i) in markers" :position="marker" :key="i" ></el-amap-marker>
     </el-amap>

  </div>
</template>
<script>
  import Vue from 'vue'
  import VueAMap from 'vue-amap';
  Vue.use(VueAMap);
  // 初始化vue-amap
  VueAMap.initAMapApiLoader({
    // 高德的key
    key: '84414e712093f34179e02410df9779dc',
    // 插件集合
    plugin: [
      'AMap.Autocomplete',
      'AMap.PlaceSearch',
      'AMap.Scale',
      'AMap.OverView',
      'AMap.ToolBar',
      'AMap.MapType',
      'AMap.PolyEditor',
      'AMap.CircleEditor',
      'Geolocation',
    ],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
  });
  export default {
    components:{
    },
    data(){
      let self = this;
      return{
        zoom: 15,
        center: [114.029113, 22.609725],
        circle: {
          clickable: true,
          center: [121.5273285, 31.21515044],
          radius: 200,
          fillOpacity: 0.3,
        },
        lng: 0,
        lat: 0,
        loaded: false,
        markers: [
          [114.029113, 22.609725],
          [114.085947, 22.547],
          [113.934478,22.679107]
        ],
        plugin: [{
          pName: 'Geolocation',
          showMarker:true,//标记显示
          showCircle:true,
          zoomToAccuracy:true,//定位放大显示
          events: {
            init(map) {
              // map 是高德地图定位插件实例
              map.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  console.log(self.lng)
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }else{

                  self.onError()
                }
              });
            }
          }
        }]
      }
    },
    methods:{
      //搜索定位
      onSearchResult(pois) {
        let latSum = 0;
        let lngSum = 0;
        if (pois.length > 0) {
          pois.forEach(poi => {
            let {lng, lat} = poi;
            lngSum += lng;
            latSum += lat;
            this.markers.push([poi.lng, poi.lat]);
          });
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          };
          this.center = [center.lng, center.lat];
        }
      },
    }
  }
</script>
<style scoped>
  .toolbar{
    height:30px;
    min-width:200px;
    line-height: 30px;
    position: absolute;
    right:0;
    top:15px;
    padding-right:50px;
  }
  #searchText{
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border:1px solid #c7c7c7;
    height:33px;
    width:200px;
    padding-left:15px;
  }
  .searchMap{
    padding:15px;
    position: relative;
  }
  .mapBox{
    height:100%;
  }
</style>
