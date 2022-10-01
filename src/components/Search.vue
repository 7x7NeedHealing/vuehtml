<template>
  <!--搜索栏-->
  <div class="search">
    <div class="searchContent">
      <div class="searchLogo">
        <a href="javascript:" @click="addRoutergrandson" >
          <img src="~@/assets/IMG/logo.png" alt="logo">
        </a>
      </div>
      <div>
        <div class="searchInput">
          <label class="searchLoacation">
            <img src="~@/assets/IMG/location.png" alt="定位">
            <a href="javascript:" class="searchLocationname">广州</a>
          </label>
          <label class="searchSearch">
            <img src="~@/assets/IMG/search.png" alt="" style="position: absolute;top:12px;left: 14px">
            <input type="text" placeholder="搜索培训机构或课程">
            <a href="javascript:" class="searchSearchbutton">搜索</a>
          </label>
        </div>
      </div>
      <div>
        <div class="searchSelf">
          <a href="javascript:">足迹</a>
          <a href="javascript:">消息</a>
          <a href="javascript:">收藏</a>
          <a href="javascript:">
            <img src="~@/assets/IMG/user.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods:{
      addRoutergrandson(){
        this.$router.push('/zhuye')
      }
  }
}
</script>

<style scoped>
.search{
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  height: 65px;
}
.searchContent{
  /*让顶部元素均分排列*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*核心画布大小*/
  width: 1200px;
  height: 65px;
  overflow-x: auto;
  overflow-y: hidden;
}

.searchLogo{
  /*display: inline-block;*/
  width: 130px;
  height: 38px;
  /*flex-shrink: 0;*/
}
.searchInput
{
  /*让搜索栏和定位标均分居中排列*/
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 570px;
  height: 45px;
}
.searchLoacation{
  display: block;
  width: 60px;
  height: 42px;
  line-height: 42px;
}

.searchLoacation>img{
  display: inline-block;
  width: 16px;
  height: 21px;
  vertical-align: middle;
}
.searchLocationname{
  font-size: 15px;
  margin-left: 5px;
  color: #a9a9a9;
  vertical-align:middle;
}
.searchLocationname:hover{
  color: #2ab8f3;
}

.searchSearch{
  position: relative;
  height: 45px;
}
.searchSearchbutton{
  display: inline-block;
  width: 83px;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  border: #29b8f7 solid 1px;
  border-radius: 0 25px 25px 0;
  background-color: #21baf6;
  color: white;
  vertical-align: bottom;
}
.searchInput>label>input{
  width: 380px;
  height: 38px;
  border: #29b8f7 solid 2px;
  border-radius: 25px 0 0 25px;
  font-size: 15px;
  padding-left: 35px;
}
.searchSelf{
  /*让搜索栏右边的元素均分排列*/
  display: flex;
  justify-content: space-between;
  width: 222px;
}
.searchSelf>a{
  font-size: 15px;
  line-height: 40px;
  color: #a9a9a9;
}
.searchSelf>a:visited{
  color: #29b8f7;
}
.searchSelf>a:hover{
  color: #29b8f7;
}

</style>