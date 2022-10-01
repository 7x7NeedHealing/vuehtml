<template>
  <article class="index2-article">
    <div class="index2-articleContent">
      <div class="index2-choose">
        <div class="chooseSchoolheader" ref="zhaoxuexiaoNav">
          <router-link to="/zhuye" href="javascript:">首页></router-link>
          <a href="javascript:" >找好校></a>
<!--          <router-link to="/zhaoxuexiao/gangqingone">找好校></router-link>-->
          <router-link to="/zhaoxuexiao/haoxiao/zonghepaixu" href="javascript:" @click="deleteAHTML">广州好校</router-link>
        </div>
      </div>
          <!-- 导航栏标签下的内容      -->
        <router-view></router-view>
    </div>
  </article>
</template>

<script>
export default {
  name: "zhaoxuexiao",
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


</style>