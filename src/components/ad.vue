<template>
  <!--广告图片-->
  <div class="ad">
    <swiper
        class="swiper-container"
        :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }" :pagination="{ clickable: true }"
        :autoplay="{ autoplay: true }"
        loop
    >
      <swiper-slide class="swiper-slide" v-for="(item, i) in imgs" :key="i">
        <img :src="item" alt=""/>
      </swiper-slide>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

// Import Swiper styles
import 'swiper/css/bundle';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ad",
  data: function () {
    return{
      imgs:[
        require('../assets/IMG/banner_01.jpg'),
        require('../assets/IMG/banner_02.jpg'),
        require('../assets/IMG/banner_03.jpg'),
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
}


</script>

<style scoped>


.ad {
  position: relative;
  width: 100%;
  /*min-width: 1200px;*/
  height: 500px;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  /*min-width: 1200px;*/
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
}
.swiper-slide{
  position: relative;
  overflow: hidden;
}
.swiper-slide>img{
  width: 1900px;
  height: 500px;
  /*margin: 0 auto;*/
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.adnav{
  display: flex;
  justify-content: center;
}
.nav{
  width: 1200px;
  height: 50px;
}
.nav ul{
  display: flex;
  justify-content: start;
}
.nav li {
  margin-right: 20px;
}
.nav a{
  display: block;
  height: 47px;
  font-size: 20px;
  line-height: 50px;
  color: #4a4a4a;
}

.nav  a:hover{
  color: #29b8f7;
  border-bottom: 3px solid #29b8f7;
}

</style>