<template>
    <div class="QA">
      <div class="QAcontent">
        <div class="QALeft">
          <div class="QALeft-top">
            <div class="QASearch">
              <label>
                <a href="javascript:">
                  <input type="text"  placeholder="找寻答案">
                  <span>立即查找</span>
                </a>
              </label>
            </div>
          </div>
          <div class="QALeft-bottom">
            <div class="QALeft-bottomTitle">
              <!--评论区标题-->
              <ul>
                <li><router-link to="/QAcommunity/QAall" active-class="activeTitle">全部</router-link></li>
                <li><router-link to="/QAcommunity/QAzixun"  active-class="activeTitle">咨询讨论</router-link></li>
                <li><router-link to="/QAcommunity/QAbug"  active-class="activeTitle">BUG反馈</router-link></li>
                <li><router-link to="/QAcommunity/QAfunction" active-class="activeTitle">功能建议</router-link></li>
                <li><router-link to="/QAcommunity/QAteach" active-class="activeTitle">教程攻略</router-link></li>
                <li><router-link to="/QAcommunity/QAtalking" active-class="activeTitle">闲谈灌水</router-link></li>
                <li><router-link to="/QAcommunity/QAother" active-class="activeTitle">其他</router-link></li>
              </ul>
            </div>
            <div class="QALeft-bottomBody">
              <ul>
                <router-view></router-view>
              </ul>
            </div>
          </div>
        </div>
        <div class="QARight">
          <div class="QARight-top">
            <a href="javascript:">发布新帖</a>
            <a href="javascript:">提交工单</a>
          </div>
          <div class="QARight-bottom">
            <div class="QARight-bottomTitle">
              <span>问题列表</span>
            </div>
            <div class="QARight-bottomBody">
              <ul>
                <li><a href="javascript:">自定义首页内容宽度</a></li>
                <li><a href="javascript:">批量导入网址详细版</a></li>
                <li><a href="javascript:">导入演示数据后怎样把wordpress后台更改为默认的地址</a></li>
                <li><a href="javascript:">友情链接页面坏了</a></li>
                <li><a href="javascript:">使用阿里图标注意事项</a></li>
                <li><a href="javascript:">关于验证码功能反馈</a></li>
                <li><a href="javascript:">建议可以支持第三方云储存，比如七牛</a></li>
                <li><a href="javascript:">左侧菜单怎么设置不在右侧显示</a></li>
                <li><a href="javascript:">希望添加搜索框翻译功能</a></li>
                <li><a href="javascript:">新手求助</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "QAcommunity"
}
</script>

<style scoped>
.QA{
  display: flex;
  justify-content: center;
  height: 1800px;
  background-color: rgb(249,249,249);
}
.QAcontent{
  display: flex;
  justify-content: space-between;
  width: 1200px;
}
.QALeft{
  width: 800px;
  height: 90px;
}
.QALeft-top{
  display: flex;
  justify-content: center;
}
.QASearch{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  height: 90px;
}

.QASearch>label>a>span{
  display: inline-block;
  width: 100px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  vertical-align: middle;
  border-radius: 0 5px 5px 0;
  text-align: center;
  color: white;
  background-color: rgb(170,32,255);
}
.QASearch>label>a>span:hover{
  background-color: black;
}
.QASearch>label>a>input{
  display: inline-block;
  border: none;
  width: 500px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding-left: 20px;
  border-radius: 5px 0 0 5px;
  background-color: rgb(241,243,246);
  vertical-align: middle;
}
.QALeft-bottom{
  width: 800px;
  height: 1680px;
}
.QALeft-bottomTitle{
  width: 800px;
  height: 60px;
}
.QALeft-bottomTitle>ul{
  height: 60px;
}
.QALeft-bottomTitle>ul>li{
  display: inline-block;
  height: 60px;
  margin-left: 20px;
  line-height: 60px;
}

.QALeft-bottomTitle>ul>li>a{
  display: inline-block;
  text-align: center;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  padding: 4px 10px;
  color: #414141;
}
.QALeft-bottomTitle>ul>li>a:hover{
  color: rebeccapurple;
  border-bottom: 3px solid rebeccapurple;
 border-radius: 0 0 2px 2px;
}
.activeTitle{
  color: rebeccapurple;
  border-bottom: 3px solid rebeccapurple;
  border-radius: 0 0 2px 2px;
}
.QALeft-bottomBody{
  width: 800px;
  height: 1620px;
}
.QALeft-bottomBody>ul{
  display: flex;
  height: 1620px;
  flex-direction: column;
  justify-content: start;
}
.QALeft-bottomBody>ul>li{
  display: block;
  width: 800px;
  height: 70px;
  background-color: rgb(241,243,246);
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.1);
}
.QALeft-bottomBody>ul>li:hover{
  background-color: white;
}
.QALeft-bottomBody>ul>li>a{
  display: block;
  width: 800px;
  height: 70px;
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
.QARight{
  width: 350px;
  height: 1800px;
}
.QARight-top{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  height: 150px;
}
.QARight-top>a{
  display: block;
  width: 350px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(170,32,255);
  color: white;
  font-size: 16px;
  margin-top: 24px;
}
.QARight-top>a:hover{
  background-color: black;
}
.QARight-bottom{
  width: 300px;
  height: 500px;
  padding: 25px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.1);
}
.QARight-bottomTitle{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 98px;
  border-bottom: 2px solid rgba(0,0,0,.2);
}
.QARight-bottomTitle>span{
  font-size: 26px;
}
.QARight-bottomBody>ul{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.QARight-bottomBody>ul>li{
  display: block;
  width: 300px;
  height: 40px;
}
.QARight-bottomBody>ul>li>a{
  display: block;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  color: #414141;
}
.QARight-bottomBody>ul>li>a:hover{
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
}
</style>