<template>
  <section class="banner">
    <img src="~@/assets/IMG/banner2.jpg">
    <div class="box">

      <div class="center-don">
        <i class="don active"></i>
        <i class="don"></i>
        <i class="don"></i>
      </div>
    </div>
  </section>
  <section class="briefly">
    <div class="center">
      <div class="two-title">
        <div class="move">
          <h1>BUSINESS FIELD</h1>
          <span>-------业务领域-------</span>
        </div>
      </div>
      <div class="tutu">
        <ul>
          <li>
            <img src="~@/assets/IMG/q1.png" alt="">
            <div>
              <h2>教学科学化</h2>
              <span>Teaching is scientific</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/IMG/q2.png" alt="">
            <div>
              <h2>设施完善化</h2>
              <span>facilities are perfect</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/IMG/q3.png" alt="">
            <div>
              <h2>教师专业化</h2>
              <span>Teacher specialization</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="about-us">
    <div class="center">
      <div class="box">
        <img class="fort" src="~@/assets/IMG/about.png" alt="">
        <h2>关于我们</h2>
        <span>
                广州趣学旅程网络科技有限公司 （简称“趣学旅程”），是一家专注<br>
                于HTML5前端教学，以就业为导向，集课程研发、线上线下教学、校<br>
                企合作、就业推荐服务为一体的IT职业教育机构。趣学旅程专业IT培<br>
                训学校 ，顺势而生 ，WEB大前端课程 ，打造年薪20W + 的全栈工程<br>
                师。点击领取试学资格 ,我们的优势 :校区环境优美 ,专注于web前<br>
                端 ,小班教学, 低学费，高品质。
            </span>
      </div>
    </div>
    <img class="felt" src="~@/assets/IMG/about2.png" alt="">
  </section>
  <section class="Senior-team">
    <div class="center">
      <div class="two-title">
        <div class="move">
          <h1>BUSINESS FIELD</h1>
          <span>-------资深教学团队-------</span>
        </div>
      </div>
      <div class="mg">
        <img src="~@/assets/IMG/about3.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "quxuezhuanti"
}
</script>

<style scoped>

.banner{
  width: 100%;
  height:500px;
  min-width: 1200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #04bbba;
}

.banner>img{
  position: absolute;
  left:50%;
  width: 1200px;
  height: 500px;
  transform: translateX(-50%);
}

.banner .box{
  width: 1200px;
  height: 500px;
  position: relative;
}

.briefly .center{

  margin-top: 30px;
}

.two-title{
  display: flex;
  justify-content: center;
}

.move>h1{
  font-size: 32px;
  color: #3c83c2;
}

.move>span{
  display: flex;
  justify-content: center;
  color: #5d5b69;
}

.briefly .tutu{
  display: flex;
  justify-content: center;
}

.briefly .tutu>ul{
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-left: 30px;
}

.tutu li h2{
  font-weight: normal;
  font-size: 20px;
  margin-left: 14px;
  color: #333;
}

.tutu li span{
  display: block;
  margin-top: 20px;
  font-size: 16px;
  color: #a1a1a1;
}

.box{
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 50px;
}

.box>h2{
  font-size: 20px;
  font-weight: normal;
  position: absolute;
  border-bottom: 1px solid #333;
  left: 48%;
  top: 40%;
}

.box>span{
  font-size: 14px;
  position: absolute;
  left: 56%;
  top: 40%;
  color: #565656;
}

.fort{
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
}

.felt{
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
}

.mg{
  margin-top: 80px;
  display: flex;
  justify-content: center;
}
</style>