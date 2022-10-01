<template>
  <div class="liveClass">
    <div class="liveContent">
      <div class="liveContenttitle">
        <div class="trainHead">
          <span class="trainHeadtitle">直播试听课</span>
          <a href="javascript:">更多直播课 ></a>
        </div>
      </div>
      <div class="liveContentbody">
        <ul ref="ulPic" style="left:-1224px;">
          <li ref="1">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c1.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">胜狮少儿口才培训</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi2.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小强老师</span>
                </div>
                <a href="javascript:">《自信口才语言表达体验课》</a>
              </div></a>
          </li>
          <li ref="2">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c2.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">大本象美术教育</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi1.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">张修</span>
                </div>
                <a href="javascript:">少儿美术体验课</a>
              </div>
            </a>
          </li>
          <li ref="3">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c3.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">心乐艺术中心</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi2.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小王老师</span>
                </div>
                <a href="javascript:">【架子鼓】少儿零基础课</a>
              </div>
            </a>
          </li>
          <li ref="4">
            <a href="javascript:"><i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c4.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">乐博乐博STEAM少儿编程</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi1.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小张老师</span>
                </div>
                <a href="javascript:">少儿编程基础入门试听课</a>

              </div></a>
          </li>

          <li ref="1">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c1.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">胜狮少儿口才培训</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi2.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小强老师</span>
                </div>
                <a href="javascript:">《自信口才语言表达体验课》</a>
              </div></a>
          </li>
          <li ref="2">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c2.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">大本象美术教育</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi1.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">张修</span>
                </div>
                <a href="javascript:">少儿美术体验课</a>
              </div>
            </a>
          </li>
          <li ref="3">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c3.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">心乐艺术中心</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi2.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小王老师</span>
                </div>
                <a href="javascript:">【架子鼓】少儿零基础课</a>
              </div>
            </a>
          </li>
          <li ref="4">
            <a href="javascript:"><i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c4.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">乐博乐博STEAM少儿编程</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi1.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小张老师</span>
                </div>
                <a href="javascript:">少儿编程基础入门试听课</a>

              </div></a>
          </li>

          <li ref="1">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c1.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">胜狮少儿口才培训</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi2.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小强老师</span>
                </div>
                <a href="javascript:">《自信口才语言表达体验课》</a>
              </div></a>
          </li>
          <li ref="2">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c2.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">大本象美术教育</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi1.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">张修</span>
                </div>
                <a href="javascript:">少儿美术体验课</a>
              </div>
            </a>
          </li>
          <li ref="3">
            <a href="javascript:">
              <i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c3.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">心乐艺术中心</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi2.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小王老师</span>
                </div>
                <a href="javascript:">【架子鼓】少儿零基础课</a>
              </div>
            </a>
          </li>
          <li ref="4">
            <a href="javascript:"><i class="livePic" :style="{'background-image': `url(${require('@/assets/IMG/c4.jpg')})`}"></i>
              <div class="liveInfo">
                <span style="font-size: 20px">乐博乐博STEAM少儿编程</span>
                <span style="font-size: 10px;color: #b7b7b7;">开播时间：2020年10月15日</span>
                <div class="liveTeacher">
                  <i class="liveTeacherLogo" :style="{'background-image': `url(${require('@/assets/IMG/laoshi1.png')})`}"></i>
                  <span style="font-size: 15px;color: #999;">讲师:</span>
                  <span style="font-size: 20px;color: #666;">小张老师</span>
                </div>
                <a href="javascript:">少儿编程基础入门试听课</a>

              </div></a>
          </li>
        </ul>
      </div>
    </div>
    <!--左右标签-->
    <a href="javascript:" id = "liveLeft" @click='changeLeftpic' style="top: 50%;left:10%">
      <img src="~@/assets/IMG/left1.png" class="liveDir">
    </a>
    <a href="javascript:" id = "liveRight" @click="changeRightpic" style="top: 50%;right: 10%">
      <img src="~@/assets/IMG/right2.png" class="liveDir">
    </a>
  </div>
</template>

<script>
export default {
  name: "liveClass",
  methods:{
    changeLeftpic(){
      if(parseInt(this.$refs.ulPic.style.left)<=-2448){
        this.$refs.ulPic.style.left =(0).toString()+'px';
      }
      else {
        this.$refs.ulPic.style.left = (parseInt(this.$refs.ulPic.style.left)-306+"px").toString();
      }
    },
    changeRightpic() {
      //  未到达
      if (parseInt(this.$refs.ulPic.style.left) < 0) {
        this.$refs.ulPic.style.transition = 'left ' + '0.8s';
        this.$refs.ulPic.style.left = (parseInt(this.$refs.ulPic.style.left) + 306 + "px").toString();
      } else {
        this.$refs.ulPic.style.transition = 'none';
        this.$refs.ulPic.style.left = (-2142).toString() + 'px';
      }
    }
  },
  mounted() {
    setInterval(this.changeRightpic,3000);
  }
}
</script>

<style scoped>
.trainHead{
  position: relative;
  width: 1200px;
  height: 128px;
}
.trainHead>span
{

  display: inline-block;
  font-size: 35px;
  padding: 60px 10px 20px 5px;
}
.trainHead>a{
  position: absolute;
  bottom: 20px;
  right: 0;
  font-size: 15px;
  color: #29b8f7;
}
.liveClass{
  display: flex;
  justify-content: center;
  height: 536px;
  background-color: #f6f9f9;
  position: relative;
}
#liveLeft>img:hover{
  background-image: url('~@/assets/IMG/left.png');
}
#liveRight>img:hover{
  background-image: url('~@/assets/IMG/right.png');
}
.liveContent{
  /*  display: flex;
    justify-content: space-between;*/
  width: 1200px;
  z-index: 2;
}
.liveContentbody{
  position: relative;
  width: 1200px;
  height: 408px;
  overflow: hidden;
}
.liveClass>a{
  position: absolute;
  display:block;
  width: 50px;
  height: 50px;
  /*z-index: -1;*/
}
.liveDir{
  display: block;
  width: 50px;
  height: 50px;

}
.liveContentbody>ul{
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-between;
  transition: left 0.8s;
}
.liveContentbody>ul>li{
  display: inline-block;
  width: 282px;
  height: 350px;
  margin-right: 24px ;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,.3);
  /*  background-color: pink;*/
}
.livePic{
  display: inline-block;
  width: 282px;
  height: 200px;
  border-radius: 10px;
  /*background-color: pink;*/
}
.liveInfo{
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  width: 262px;
  height: 110px;
  padding: 20px 0 20px 20px;
  background-color: white;
  border-radius: 0 0 10px 10px;
}
.liveInfo>span:first-child{
  color: #333333;
}
.liveContentbody>ul>li:hover .liveInfo>span:first-child{
  color: #29b8f7;
}
.liveInfo >a{
  display: block;
  position: absolute;
  width: 282px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
  top: -40px;
  left:0;
  color: rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
  transition: color 0.5s;
  /*animation-fill-mode:forwards;*/
}
.liveInfo:hover a{
  animation-name: move;
  animation-duration: 1.5s;
  animation-fill-mode:forwards;

}
.liveTeacher i{
  display: inline-block;
  width: 50px;
  height: 50px;
  vertical-align: bottom;
}
.liveTeacher span{
  display: inline-block;
  line-height: 50px;
  margin-left: 10px;
}
@keyframes move {
  /*50%{
    background-color: rgba(0,0,0,.4);
  }*/
  from{
    color: rgba(0,0,0,0);
    /*background-color: rgba(0,0,0,.1);*/
  }
  to{
    color: white;
    background-color: rgba(0,0,0,.4);
  }
}

</style>