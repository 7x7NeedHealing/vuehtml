<template>
  <div class="trainRecommend">
    <div class="Recommendbody">
      <div class="trainHead">
        <span class="trainHeadtitle">家长种草推荐</span>
        <a href="javascript:">更多兴趣课 ></a>
      </div>
      <div class="trainBodyRecommend">
        <ul>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/b1.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">舞蹈培训</span>
                <span class="trainBodyRecommendInfo">女儿从四岁多一直都在腾星学习啦，啦操培训，会努力坚持的!</span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/b2.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user2.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">口才培训</span>
                <span class="trainBodyRecommendInfo">上几节课，孩子的胆怯和怯场慢慢有了改善，以前总会有"生人勿...</span>
              </div></a>

          </li>
          <li>
            <a href="javascript:"><img src="~@/assets/IMG/b3.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user3.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">街舞培训</span>
                <span class="trainBodyRecommendInfo">老师很专业，教的很仔细，学下来感觉课堂氛围很好，舞蹈室很大...</span>
              </div></a>

          </li>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/b4.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user4.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">魔术指导</span>
                <span class="trainBodyRecommendInfo">魔术老师很有耐心。孩子很内向,希望跟着老师学习后能活泼开朗。</span>
              </div></a>

          </li>
          <li>
            <a href="javascript:"><img src="~@/assets/IMG/b5.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user5.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">少儿编程</span>
                <span class="trainBodyRecommendInfo">值得推荐,近在为孩子找报读兴趣班,也在团上看了很多，最终挑选到...</span>
              </div></a>
          </li>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/b6.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user6.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">音乐培训</span>
                <span class="trainBodyRecommendInfo">体验了—下何老师的吉他课,老师超nice. .上课很轻松。环境也很...</span>
              </div></a>
          </li>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/b7.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user7.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">美术绘画</span>
                <span class="trainBodyRecommendInfo">老师很专业，环境特别好，女儿学得非常认真。</span>
              </div></a>
          </li>
          <li>
            <a href="javascript:">
              <img src="~@/assets/IMG/b8.png" alt="图片失效">
              <div>
                <img src="~@/assets/IMG/user8.png" alt="头像" class="headpic">
                <span class="ID">依晨</span>
                <span class="classKind">智力围棋</span>
                <span class="trainBodyRecommendInfo">环境很好，者师也非常亲切，小宝很喜欢老师，只是需家远了!</span>
              </div></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trainRecommend"
}
</script>

<style scoped>

.trainRecommend{
  display: flex;
  justify-content: center;
  height: 813px;
  background-color: white;
}
.Recommendbody{
  width: 1200px;
  /*min-width: 1200px;
  flex-shrink: 0;*/
  /*避免缩小时左边内容被吃掉*/
  /*overflow: auto;*/
  overflow-x: auto;
  overflow-y: hidden;
}
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
.trainBodyRecommend{
  width: 1200px;
  height: 685px;
}
.trainBodyRecommend>ul{
  /*自动处理间距*/
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;
  height: 685px;
}
.trainBodyRecommend>ul>li{
  display: block;
  width: 282px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: 3px 3px 3px rgba(0,0,0,.1);
}
.trainBodyRecommend>ul>li>a>img{
  width: 282px;
  height: 200px;
}
.trainBodyRecommend>ul>li>a{
  /*子绝父相，方便头像和ID进行绝对定位*/
  display: block;
  width: 282px;
  height: 300px;
}
.trainBodyRecommend>ul>li>a>div{
  position: relative;
  height: 100px;
}
.trainBodyRecommend>ul>li>a>div>img{
  /*这是头像*/
  position: absolute;
  top: -22px;
  left: 28px;
}
.classKind{
  position: absolute;
  display: block;
  padding: 0 10px;
  top: -10px;
  right: 0;
  font-size: 15px;
  background-color:#29b8f7;
  color: white;
  border-radius: 5px 0 0 5px;
}
.ID{
  position: absolute;
  top: 3px;
  left: 90px;
  display: inline-block;
  color: #333333;
  font-size: 16px;
}
.trainBodyRecommend>ul>li>a:hover .ID{
  color: #29b8f7;
}
.trainBodyRecommendInfo{
  display: block;
  font-size: 15px;
  padding: 36px 28px 22px 30px;
  color:#a9a9a9;
}

</style>