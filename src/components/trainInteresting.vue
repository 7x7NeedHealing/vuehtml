<template>
  <!--兴趣课-->
  <div class="trainInteresting">
    <div style="width: 1200px;overflow-x: auto;overflow-y: hidden;">
      <div class="trainHead">
        <!--放在同一盒子下的span或者label会自动对齐-->
        <span class="trainHeadtitle">热门兴趣课</span>
        <span style="font-size:24px;color: #a0a0a0;padding:24px">看看她们学什么</span>
        <a href="javascript:">更多兴趣课 ></a>
      </div>
      <div class="trainBodyInteresting">
        <ul>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/a1.jpg" alt="图片失效">
              <div>
                <span class="trainBodytitleInteresting">尤克里里</span>
                <span class="trainBodyinfoInteresting">增强自信心，培养情操及涵养。</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/a2.jpg" alt="图片失效">
              <div>
                <span class="trainBodytitleInteresting">芭蕾舞</span>
                <span class="trainBodyinfoInteresting">改善孩子形体，提升气质。</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/a3.jpg" alt="图片失效">
              <div>
                <span class="trainBodytitleInteresting">围棋</span>
                <span class="trainBodyinfoInteresting">开发智力，提高综合素质。 </span>
              </div>
            </a>
          </li>
          <li >
            <a href="javascript:">
              <img src="~@/assets/IMG/a4.jpg" alt="图片失效">
              <div>
                <span class="trainBodytitleInteresting">少儿绘画</span>
                <span class="trainBodyinfoInteresting">培养想象力，激发美术创作。</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trainInteresting"
}
</script>

<style scoped>

.trainInteresting{
  display: flex;
  /*水平居中*/
  justify-content: center;
  /*垂直居中*/
  /*  align-items: center;
    !*以Y轴为基准排列*!
    flex-direction: column;*/
  height: 615px;
  background-color: #f6f9f9;
}
.trainHead{
  /*方便给右边的[更多]定位*/
  position: relative;
  height: 127px;
}

.trainHeadtitle{
  display: inline-block;
  padding: 58px 0 29px 0;
  line-height: 40px;
  font-size:48px;
  font-weight:400;
  color:#333;
}
.trainHead>a{
  position: absolute;
  display: inline-block;
  right: 0;
  bottom: 20px;
  /*  text-decoration: none;*/
  font-size: 20px;
  color: #29b8f7;
}
.trainBodyInteresting{
  height: 483px;
  background-color: #f6f9f9;
}
.trainBodyInteresting>ul{
  /*自动处理间距*/
  display: flex;
  justify-content: space-between;
}
.trainBodyInteresting > ul>li{
  display: inline-block;
}
.trainBodyInteresting > ul>li>a:hover .trainBodytitleInteresting{
  color: #29b8f7;
}
.trainBodyInteresting > ul>li>img{
  width: 282px;
  height: 350px;
}
.trainBodytitleInteresting{
  display: block;
  color: #333333;
  padding:20px 0 13px 0 ;
  font-size: 23px;
}

.trainBodyinfoInteresting{
  display: block;
  font-size: 18px;
  color: #a7a7a8;
}


</style>