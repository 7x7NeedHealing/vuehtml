<template>
  <article class="article">
    <div class="articleContent">
      <div class="articleContenttitle">
        <div class="trainHead">
          <span class="trainHeadtitle">文章</span>
          <a href="javascript:">更多文章 ></a>
        </div>
      </div>
      <div class="articleContentbody">
        <ul>
          <li>
            <a href="javascript:">
              <i class="articleInfo" :style="{'background-image': `url(${require('@/assets/IMG/d1.jpg')})`}"></i>
              <span class="article-title">有关孩子“兴趣班”，看这一篇，就够了!</span>
            </a>
            <a href="javascript:" style="position:absolute;bottom: 20px;right: 280px;">
              <img style="display: inline-block;vertical-align: bottom;margin-right: 3px" src="~@/assets/IMG/good.png" alt="">
              <span style="font-size: 14px;color:#2ab8f3;line-height: 18px;">10000</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <i class="articleInfo" :style="{'background-image': `url(${require('@/assets/IMG/d2.jpg')})`}"></i>
              <span class="article-title">关于小型(少儿编程/创客培训)机构讲师的现状</span>
            </a>

            <a href="javascript:" style="position:absolute;bottom: 20px;right: 280px;">
              <img style="display: inline-block;vertical-align: bottom;margin-right: 3px" src="~@/assets/IMG/good.png">
              <span style="font-size: 14px;color:#2ab8f3;line-height: 18px;">10000</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <i class="articleInfo" :style="{'background-image': `url(${require('@/assets/IMG/d3.jpg')})`}"></i>
              <span class="article-title">孩子的兴趣班，您报对了吗?</span>
            </a>

            <a href="javascript:" style="position:absolute;bottom: 20px;right: 280px;">
              <img style="display: inline-block;vertical-align: bottom;margin-right: 3px" src="~@/assets/IMG/good.png">
              <span style="font-size: 14px;color:#2ab8f3;line-height: 18px;">10000</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <i class="articleInfo" :style="{'background-image': `url(${require('@/assets/IMG/d4.jpg')})`}"></i>
              <span class="article-title">什么年龄上什么兴趣班，这篇文章你值得收藏!</span>
            </a>
            <a href="javascript:" style="position:absolute;bottom: 20px;right: 280px;">
              <img style="display: inline-block;vertical-align: bottom;margin-right: 3px" src="~@/assets/IMG/good.png">
              <span style="font-size: 14px;color:#2ab8f3;line-height: 18px;">10000</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <i class="articleInfo" :style="{'background-image': `url(${require('@/assets/IMG/d5.jpg')})`}"></i>
              <span class="article-title">少儿英语培训机构排名表有嘛?求推荐!</span>
            </a>

            <a href="javascript:" style="position:absolute;bottom: 20px;right: 280px;">
              <img style="display: inline-block;vertical-align: bottom;margin-right: 3px" src="~@/assets/IMG/good.png">
              <span style="font-size: 14px;color:#2ab8f3;line-height: 18px;">10000</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <i class="articleInfo" :style="{'background-image': `url(${require('@/assets/IMG/d6.jpg')})`}"></i>
              <span class="article-title">少儿英语培训机构排名表有嘛?求推荐!</span>
            </a>

            <a href="javascript:" style="position:absolute;bottom: 20px;right: 280px;">
              <img style="display: inline-block;vertical-align: bottom;margin-right: 3px" src="~@/assets/IMG/good.png">
              <span style="font-size: 14px;color:#2ab8f3;line-height: 18px;">10000</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "eightarticle"
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
.article{
  display: flex;
  justify-content: center;
  height: 875px;

}
.articleContent{
  width: 1200px;

}
.articleContentbody{
  width: 1200px;
}
.articleContentbody>ul{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.articleContentbody>ul>li{
  display: inline-block;
  width: 588px;
  height: 200px;
  position: relative;
  margin-bottom: 24px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgb(0,0,0,.3);
}
.articleInfo{
  display:inline-block;
  width: 200px;
  height: 150px;
  margin: 30px 15px 20px 30px;
  vertical-align: top;
}
/*.articleContentbody>ul>li>i{}*/
.article-title{
  display: inline-block;
  width: 303px;
  height: 140px;
  font-size: 18px;
  font-weight: bold;
  color: #4a4a4a;
  margin:30px 40px 20px 0;
  overflow: hidden;
}
.articleContentbody>ul>li>a:first-child:hover .article-title{
  color: #29b8f7;
}


</style>