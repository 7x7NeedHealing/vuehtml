<template>
  <div class="footer">
    <div style="width: 1200px;">
      <div class="footContenttop">
        <div class="footContenttopLeft">
          <a href="https://www.huawei.com/cn/contact-us" target="_blank">联系我们</a>
          <router-link to="/legalNotices">法律声明</router-link>
          <a href="https://www.huawei.com/cn/privacy-policy" target="_blank">隐私政策</a>
          <a href="https://www.mi.com/shop/aptitude/list?id=62" target="_blank">用户协议</a>
          <a href="https://hr.xiaomi.com/" target="_blank">加入我们</a>
        </div>
        <div class="footContenttopRight">
          <a href="https://weibo.com/u/5742766725" target="_blank">
            <i  class="footLogo" :style="{'background-image': `url(${require('@/assets/IMG/icon.png')})`}"></i>
            <span>新浪微博</span>
          </a>
          <router-link to="/wechatQR">
            <i  class="footLogo1" :style="{'background-image': `url(${require('@/assets/IMG/icon.png')})`}"></i>
            <span>微信公众号</span>
          </router-link>
        </div>
      </div>
      <div class="footContentbottom">
        <div style="height: 35px;display: flex;justify-content: center;align-items: center;">

          <a href="tel:15220542846">客服热线：400 8536 100</a>
          <hr>
          <a href="https://console.huaweicloud.com/smartadvisor/" target="_blank">在线客服：趣学网-我-在线客服</a>
          <hr>
          <a href="tel:15220542846">违法和不良信息举报电话： 400 8536 100 转 7</a>
          <hr>
          <a href="mailto:1349769188@qq.com?subject=举报邮件">举报邮箱: gwykf@quexue.com</a>
          <hr>
          <a  href="javascript:">网上有害信息举报</a>
        </div>
        <div style="height: 35px;display: flex;justify-content: center;align-items: center;">
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备15039397号</a>
          <hr>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702002388" target="_blank">粤公网安备1101502035430号</a>
          <hr>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤B2-20170890</a>
          <hr>

          <a href="https://www.mi.com/shop/business-license" target="_blank">营业执照</a>
          <hr>
          <a href="javascript:">出版物证</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allfooter"
}
</script>

<style scoped>
.footer{
  display: flex;
  justify-content: center;
  height: 150px;
  background-color: #414141;
}
.footContenttop{
  display: flex;
  justify-content: space-between;
  height: 79px;
  border-bottom: 1px solid #999;
}
.footContenttopLeft{
  display: flex;
  justify-content: space-between;
  width: 635px;
}
.footContenttopLeft a{
  line-height: 80px;
  font-size: 18px;
  color: #b7b7b7;
}
.footContenttopLeft>a:hover{
  color: white;
}
.footContenttopRight{
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 290px;
}
.footContenttopRight a{
  display: block;
  line-height: 80px;
  height: 80px;
  font-size: 18px;
  color:#b7b7b7;
}
.footContenttopRight span{
  display: inline-block;
  line-height: 80px;
  height: 80px;
  font-size: 18px;
  padding-left: 36px;
  color:#b7b7b7;
}

.footLogo
{
  display: inline-block;
  position: absolute;
  top:24px;
  line-height: 80px;
  width: 26px;
  height: 26px;
  /*background-image: url('/img/icon.png');*/
  background-size: 500px 500px;
  background-position: -470px -130px;

}
.footLogo1
{
  display: inline-block;
  position: absolute;
  top:26px;
  width: 26px;
  height: 26px;
  /*background-image: url('/img/icon.png');*/
  background-size: 500px 500px;
  background-position: -474px -259px;
}
.footContenttopRight>a:hover span{
  color: white;
}
.footContentbottom{
  height: 70px;
}
.footContentbottom a{
  font-size: 12px;
  color:#b7b7b7;
}
.footContentbottom hr{
  width: 0.0025rem;
  border-bottom: 20px solid #b7b7b7;
  margin: 0 5px;
  color: #b7b7b7;
}
</style>