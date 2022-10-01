<template>
  <!--热门学校-->
  <div class="hotSchool" ref="hotschool">
    <div class="hotSchoolcontent">
      <div class="hotSchoolleftContent">
        <div class="hotSchoolleftTop">
          <div class="hotSchoolleftToptitle">
            <span style="font-size: 48px;color: black;">广州热门学校</span>
            <span style="font-size: 22px;margin-left: 10px;color: #a0a0a0">报课不迷路</span>
            <a href="javascript:" @click="jumpRoute()">更多热门学校 ></a>
          </div>
        </div>
        <div class="hotSchoolleftBottom">
          <ul>
            <li>
              <img src="~@/assets/IMG/xx1.jpg" alt="1">
              <a href="javascript:" @click="jumpRoute2">
                <div class="hotSchoolinfo">
                  <span style="font-size: 20px;">童程童美教育</span>
                  <span><div class="hotSchoolstar">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                 <span>5.0分</span>
              </div></span>
                  <span><span class="hotSchoollocation">少儿编程</span></span>
                  <span style="color: #b1b1b1;">天河公园/上社</span>
                </div>
              </a>
            </li>
            <li>
              <img src="~@/assets/IMG/xx2.jpg" alt="1">
              <a href="javascript:" @click="jumpRoute3"><div class="hotSchoolinfo">
                <span style="font-size: 20px;">丽态丽姿·形体仪态礼仪</span>
                <span><div class="hotSchoolstar">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                 <span>5.0分</span>
              </div></span>
                <span><span class="hotSchoollocation">礼仪口才</span></span>
                <span style="color: #b1b1b1;">珠江新城</span>
              </div></a></li>
            <li style="margin-right: 0;">
              <img src="~@/assets/IMG/xx3.jpg" alt="1">
              <a href="javascript:" @click="jumpRoute4"><div class="hotSchoolinfo">
                <span style="font-size: 20px;">新世界日语</span>
                <span><div class="hotSchoolstar">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                 <span>5.0分</span>
              </div></span>
                <span><span class="hotSchoollocation">日语</span></span>
                <span style="color: #b1b1b1;">天河城/体育中心</span>
              </div></a></li>
            <li>
              <img src="~@/assets/IMG/xx4.jpg" alt="1">
              <a href="javascript:" @click="jumpRoute5"><div class="hotSchoolinfo">
                <span style="font-size: 20px;">艾佛瑞钢琴学校</span>
                <span><div class="hotSchoolstar">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                 <span>5.0分</span>
              </div></span>
                <span><span class="hotSchoollocation">音乐</span></span>
                <span style="color: #b1b1b1;">车陂/东圃</span>
              </div></a>

            </li>
            <li>
              <img src="~@/assets/IMG/xx5.jpg" alt="1">
              <a href="javascript:"><div class="hotSchoolinfo">
                <span style="font-size: 20px;">美联少儿英语辅导</span>
                <span><div class="hotSchoolstar">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                 <span>5.0分</span>
              </div></span>
                <span><span class="hotSchoollocation">英语</span></span>
                <span style="color: #b1b1b1;">凯德广场</span>
              </div></a>

            </li>
            <li style="margin-right: 0;">
              <img src="~@/assets/IMG/xx6.jpg" alt="1">
              <a href="javascript:"><div class="hotSchoolinfo">
                <span style="font-size: 20px;">山谷私塾</span>
                <span><div class="hotSchoolstar">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                <img src="~@/assets/IMG/star.png" alt="星星">
                 <span>5.0分</span>
              </div></span>
                <span><span class="hotSchoollocation">书法</span></span>
                <span style="color: #b1b1b1;">兴盛路/跑马场</span>
              </div></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hotSchoolrightContent">
        <div class="hotSchoolrightTop"></div>
        <div class="hotSchoolrightBottom">
          <div class="hotSchoolrightTitle">
            <div style="width: 238px;height: 50px;">
              <span style="font-size: 30px;">热门讨论...</span>
              <a href="javascript:" @click='jumpRoute1' style="font-size: 15px;padding-left: 10px;color: #29b8f7;">(去社区看看)</a>
            </div>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:">我的假期学习计划</a>
            <span class="hotSchoolrightInfohot">热</span>
          </span>
            <span style="font-size: 13px;color:#a0a0a0">300万次浏览</span>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:">少儿英语该如何启蒙？</a>
            <span class="hotSchoolrightInfohot">热</span>
          </span>
            <span style="font-size: 13px;color:#a0a0a0">167.9万浏览</span>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:">掌握语言学习的技巧</a>
            <span class="hotSchoolrightInfohot">热</span>
          </span>
            <span style="font-size: 13px;color:#a0a0a0">300万次浏览</span>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:">少儿艺术培训机构现状如何？</a>
          </span>
            <span style="font-size: 13px;color:#a0a0a0">328.6万次浏览</span>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:" >少儿培训机构该怎么选？</a>
          </span>
            <span style="font-size: 13px;color:#a0a0a0">156.2万次浏览 </span>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:">如何提高学习效率</a></span>
            <span style="font-size: 13px;color:#a0a0a0">42.6万次浏览</span>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:">2020什么课程最热门</a>
          </span>
            <span style="font-size: 13px;color:#a0a0a0">320.2万次浏览</span>
          </div>
          <div class="hotSchoolrightInfo">
          <span>
            <a href="javascript:">国内十大少儿美术培训品牌对比</a>
          </span>
            <span style="font-size: 13px;color:#a0a0a0">100万次浏览</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotSchool",
  methods:{
    jumpRoute(){
      this.$router.push('/zhaoxuexiao/haoxiao/zonghepaixu')
    },
    jumpRoute1(){
      this.$router.push('/QAcommunity/QAall')
    },
    jumpRoute2(){
      this.$router.push('/zhaoxuexiao/tongcengjiaoyu/allcomments')
    },
    jumpRoute3(){
      this.$router.push('/zhaoxuexiao/litailizi/allcomments')
    },
    jumpRoute4(){
      this.$router.push('/zhaoxuexiao/newWorld/allcomments')
    },
    jumpRoute5(){
      this.$router.push('/zhaoxuexiao/gangqingone/allcomments')
      }
  }
}
</script>

<style scoped>
.hotSchool{
  display: flex;
  justify-content: center;
  height: 924px;
}
.hotSchoolcontent{
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 924px;
  overflow-x: auto;
  overflow-y: hidden;

}
.hotSchoolleftContent{
  display: inline-block;
  width: 894px;
  height: 924px;
  margin-right: 64px;
  /*解决转换成行内块后无法正确对齐的情况*/
  vertical-align: bottom;
}
.hotSchoolrightContent{
  display: inline-block;
  width: 262px;
  height: 924px;
}
.hotSchoolleftTop{
  width: 894px;
  height: 130px;
}
.hotSchoolleftBottom{
  width: 894px;
  height: 794px;
}
.hotSchoolleftToptitle{
  position: relative;
  padding: 50px 0 25px 0;
}
.hotSchoolleftToptitle>span{
  /*让大标题的padding生效*/
  display: inline-block;
}
.hotSchoolleftToptitle>a{
  position: absolute;
  font-size: 20px;
  color: #29b8f7;
  bottom: 30px;
  right: 0;
}
.hotSchoolleftBottom>ul{
  /*  display: flex;
    flex-wrap: wrap;
    justify-content: space-between;*/
}
.hotSchoolleftBottom>ul>li{
  display: inline-block;
  width: 282px;
  height: 356px;
  margin-bottom: 25px;
  margin-right: 24px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0,0,0,.1);
}
.hotSchoolleftBottom>ul>li>a{
  color: #333333;
}
.hotSchoolleftBottom>ul>li>a:hover  .hotSchoolinfo:first-child{
  color: #29b8f7;
}
.hotSchoolleftBottom>ul>li>img {
  width: 282px;
  height: 200px;
}
.hotSchoolinfo{
  height: 156px;
  margin-left: 10px;
}
.hotSchoolinfo>span{
  display: block;
  font-size: 15px;
  margin:15px 7px;
}
.hotSchoolstar{
  display: flex;
  justify-content: space-between;
  width: 160px;
  flex-shrink: 0;
}
.hotSchoolstar>img{
  width: 18px;
  height: 17px;
}
.hotSchoolstar>span{
  font-size: 15px;
  color: #fcc55b;
}
.hotSchoollocation{
  display: inline-block;
  padding: 0 5px 0 5px;
  height: 20px;
  font-size: 15px;
  color: white;
  background-color: #29b8f7;
  border-radius: 5px;
}
.hotSchoolrightTop{
  height: 70px;
}
.hotSchoolrightBottom{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 755px;
}
/*.hotSchoolrightTitle{
  width: 372px;
  height: 50px;
}*/
.hotSchoolrightInfo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
}
.hotSchoolrightInfo>span>a{
  font-size: 20px;
  color: #666;
}
.hotSchoolrightInfo>span>a:hover{
  color: #29b8f7;
}

.hotSchoolrightInfohot{
  font-size:15px;
  line-height: 15px;
  background-color: #fc7749;
  color: white;
  margin-left: 10px;
  padding: 3px;
  border-radius: 5px;
  /*vertical-align: bottom;*/
}

</style>