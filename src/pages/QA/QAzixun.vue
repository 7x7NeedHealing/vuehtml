<template>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user1.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>账号注册为什么不发送邮件</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>咨询讨论</span>
          <span>1周前</span>
          <span>最后回复来自于&nbsp;一为</span>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user6.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>友情链接设置“更多链接”有疑问</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>咨询讨论</span>
          <span>3周前</span>
          <span>最后回复来自于&nbsp;1103nlj</span>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user6.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>次级导航的搜索栏怎么独立出来</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>咨询讨论</span>
          <span>3周前</span>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user5.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>WP ALL IMPORT批量导入书籍，书籍信息元数据-作者这里栏目怎么填</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>咨询讨论</span>
          <span>3周前</span>
          <span>最后回复来自于&nbsp;Timeleaper</span>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user2.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>个人中心网址管理添加书签提示添加失败</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>咨询讨论</span>
          <span>1个月前</span>
          <span>最后回复来自于&nbsp;路然</span>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user7.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>咨询这个网站导航，移动端，怎么设置一行显示一个</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>咨询讨论</span>
          <span>1个月前</span>
          <span>最后回复来自于&nbsp;TerryTT</span>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user8.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>为什么设置自动通过后还是会复审</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>咨询讨论</span>
          <span>1个月前</span>
          <span>最后回复来自于&nbsp;一为</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "QAzixun"
}
</script>

<style scoped>
li{
  display: block;
  margin-top: 8px;
  width: 800px;
  height: 70px;
  background-color: rgb(241,243,246);
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.1);
}
li:hover{
  background-color: white;
}
li>a{
  display: block;
  width: 800px;
  height: 70px;
}
.QALeft-bottomBody-left{
  display: inline-block;
  width: 60px;
  height: 70px;
  vertical-align: bottom;
}
.QALeft-bottomBody-left>img{
  display: block;
  margin: 8px auto;
  width: 54px;
  height: 54px;
}
.QALeft-bottomBody-right{
  display: inline-block;
  width: 740px;
  height: 70px;
}
.bottomBody-rightTop{
  width: 740px;
  height: 40px;
  vertical-align: bottom;
}
.bottomBody-rightTop>span:first-child{
  display: inline-block;
  width: 50px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  border-radius: 5px;
  margin: 10px 0;
  color: white;
  padding:0 2px;
  background-color: rebeccapurple;
}
.bottomBody-rightTop>span:nth-child(2){
  display: inline-block;
  width: 650px;
  font-size: 18px;
  color: #414141;
  padding:0 2px;
  margin: 10px 0;
  margin-left: 14px;
}
.bottomBody-rightTop>span:nth-child(2):hover{
  color: rebeccapurple;
}
.bottomBody-rightBottom{
  height: 30px;
}
.bottomBody-rightBottom>span:first-child{
  display: inline-block;
  font-size: 14px;
  color: white;
  border-radius: 5px ;
  padding: 0 5px;
  background-color: hotpink;
  vertical-align: middle;
  margin: 5px 0;
}
.bottomBody-rightBottom>span:nth-child(2){
  display: inline-block;
  font-size: 14px;
  color: #414141;
  border-radius: 5px ;
  padding: 0 5px;
  vertical-align: middle;
  margin: 5px 16px;
}
.bottomBody-rightBottom>span:nth-child(3){
  display: inline-block;
  font-size: 14px;
  color: #414141;
  border-radius: 5px ;
  padding: 0 5px;
  vertical-align: middle;
  margin: 5px 16px;
}
</style>