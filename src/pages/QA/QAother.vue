<template>
  <li>
    <a href="javascript:">
      <div class="QALeft-bottomBody-left">
        <img src="~@/assets/IMG/user4.png" alt="">
      </div>
      <div class="QALeft-bottomBody-right">
        <div class="bottomBody-rightTop">
          <span></span>
          <span>博客页面文章分类不显示</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>其他</span>
          <span>3周前</span>
          <span>最后回复来自于&nbsp;俗人网络科技</span>
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
          <span>前天文章投稿页面编辑器无法输入</span>
        </div>
        <div class="bottomBody-rightBottom">
          <span>其他</span>
          <span>3周前</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "QAother"
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