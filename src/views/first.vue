<template>
  <!-- 搜索栏 -->
  <Search></Search>
  <!--广告导航栏-->
  <div class="adnav">
    <div class="nav">
      <ul>
        <li><router-link to="/zhuye" active-class="blue">主页</router-link></li>
        <li><router-link to="/zhaoxuexiao" active-class="blue" @click="deleteAHTML" ref="zhaoxuexiao">找学校</router-link></li>
        <li><router-link to="/QAcommunity" active-class="blue" >问答社区</router-link></li>
        <li><router-link to="/jianshezhong" active-class="blue" >资讯文章</router-link></li>
        <li><router-link to="/quxuezhuanti" active-class="blue" >趣学专题</router-link></li>
      </ul>
    </div>
  </div>
  <!--显示区域-->
  <router-view ref="zhaoxuexiaoview"></router-view>
  <!--底部-->
  <allfooter></allfooter>
</template>

<script>

import allfooter from "@/components/allfooter";
import Search from "@/components/Search";

export default {
  name: "first",
  components: {
    allfooter,
    Search,
  },
  methods:{
    deleteAHTML(){
      let a = document.querySelectorAll('#nothing');
      a.forEach(function (i) {
        i.remove()
      })
    }
  }
}
</script>

<style scoped>

.blue{
  color: #29b8f7;
  border-bottom: 3px solid #29b8f7;
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