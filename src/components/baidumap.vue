<template>
  <div class="home">
    <div id="container"
    :style="{width:width+'px',height:height+'px'}">
    </div>
  </div>
</template>

<script>

export default {
  name: "baidumap",
  data() {
    return {
      width: 282,
      height: 282,
      map: null,
    };
  },

  mounted() {
    //将指定的盒子作为地图容器
    this.map = new BMap.Map('container');
    /*设定地图中心点*/
    let point = new BMap.Point(113.381391, 23.14641);
    /*传入中心点坐标以及地图放大等级*/
    this.map.centerAndZoom(point, 18);
    /*开启滚轮滑动放大缩小的功能*/
    this.map.enableScrollWheelZoom(true);
  }
};
</script>

<style scoped>
#allmap {
  width: 282px ;
  height: 282px;
}
</style>