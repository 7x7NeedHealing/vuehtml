<template>
  <!--广告图片-->
  <Ad></Ad>
  <!-- 热门学校 -->
  <hot-school></hot-school>
  <!--兴趣课-->
  <train-interesting></train-interesting>
  <!--家长种草推荐-->
  <trainRecommend></trainRecommend>
  <!--直播试听课-->
  <live-class></live-class>
  <!--文章-->
  <eightarticle></eightarticle>
</template>

<script>
import Ad from "@/components/ad";
import hotSchool from "@/components/hotSchool";
import trainInteresting from "@/components/trainInteresting";
import trainRecommend from "@/components/trainRecommend";
import liveClass from "@/components/liveClass";
import eightarticle from "@/components/eightarticle";

export  default {
  name:"zhuye",
  components:{
    Ad,
    hotSchool,
    trainInteresting,
    trainRecommend,
    liveClass,
    eightarticle,
  },

}
</script>

<style scoped>

</style>