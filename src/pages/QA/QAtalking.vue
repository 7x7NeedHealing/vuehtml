<template>
  <span class="nothingSpan">还没有人发表相关帖子哦~</span>
</template>

<script>
export default {
  name: "QAtalking"
}
</script>

<style scoped>
.nothingSpan{
  font-size: 24px;
  color: #7f7f80;
  margin: 100px auto;
}
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