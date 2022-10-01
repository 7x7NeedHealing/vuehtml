<template>
  <div>
    <div class="chooseSchoolbody">
      <ul>
        <li>
          <span>区域</span>
          <div class="chooseSchoolselection">
            <ul>
              <li><a href="javascript:" style="color: #2ab8f3">天河区</a></li>
              <li><a href="javascript:">越秀区</a></li>
              <li><a href="javascript:">荔湾区</a></li>
              <li><a href="javascript:">海珠区</a></li>
              <li><a href="javascript:">番禺区</a></li>
              <li><a href="javascript:">白云区</a></li>
              <li><a href="javascript:">黄浦区</a></li>
              <li><a href="javascript:">增城区</a></li>
              <li><a href="javascript:">花都区</a></li>
              <li><a href="javascript:">南沙区</a></li>
            </ul>
            <a href="javascript:"></a>
          </div>
        </li>
        <li>
          <span>年龄阶段：</span>
          <div class="chooseSchoolselection">
            <ul>
              <li><a href="javascript:">年龄前(2-3岁)</a></li>
              <li><a href="javascript:">幼儿园(4-5岁)</a></li>
              <li><a href="javascript:" style="color: #2ab8f3">小学(6-12岁)</a></li>
              <li><a href="javascript:">初中(13-15岁)</a></li>
              <li><a href="javascript:">高中(16-18岁)</a></li>

            </ul>
            <a href="javascript:"></a>
          </div>
        </li>
        <li>
          <span>才艺培训</span>
          <div class="chooseSchoolselection">
            <ul>
              <li><a href="javascript:" style="color: #2ab8f3">音乐</a></li>
              <li><a href="javascript:">美术</a></li>
              <li><a href="javascript:">书法</a></li>
              <li><a href="javascript:">国学</a></li>
              <li><a href="javascript:">少儿舞蹈</a></li>
              <li><a href="javascript:">围棋象棋</a></li>
              <li><a href="javascript:">其他才艺</a></li>
            </ul>
            <a href="javascript:"></a>
          </div>
        </li>
        <li>
          <span>运动培训</span>
          <div class="chooseSchoolselection">
            <ul>
              <li><a href="javascript:">球类</a></li>
              <li><a href="javascript:">武术拳类</a></li>
              <li><a href="javascript:">游泳</a></li>
              <li><a href="javascript:">滑轮滑板</a></li>
              <li><a href="javascript:">其他运动培训</a></li>
            </ul>
            <a href="javascript:"></a>
          </div>
        </li>
        <li>
          <span>语言培训</span>
          <div class="chooseSchoolselection">
            <ul>
              <li><a href="javascript:">英语</a></li>
              <li><a href="javascript:">日语</a></li>
              <li><a href="javascript:">西班牙语</a></li>
              <li><a href="javascript:">其他语言培训</a></li>
            </ul>
            <a href="javascript:"></a>
          </div>
        </li>
        <li>
          <span>升学辅导</span>
          <div class="chooseSchoolselection">
            <ul>
              <li><a href="javascript:">小学辅导</a></li>
              <li><a href="javascript:">中学辅导</a></li>
              <li><a href="javascript:">高中辅导</a></li>
              <li><a href="javascript:">艺考</a></li>
            </ul>
            <a href="javascript:"></a>
          </div>
        </li>
        <li>
          <span>STEM培训</span>
          <div class="chooseSchoolselection">
            <ul>
              <li><a href="javascript:">乐高积木</a></li>
              <li><a href="javascript:">少儿编程</a></li>
              <li><a href="javascript:">其他STEM</a></li>
            </ul>
            <a href="javascript:"></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="index2-introduce">
      <div class="index2-introduceLeft">
        <div class="index2-introduceLeftheader">
          <ul ref="jkl">
            <li><router-link to="/zhaoxuexiao/haoxiao/zonghepaixu" active-class="whiteFont">综合排序</router-link></li>
            <li><router-link to="/zhaoxuexiao/haoxiao/renqizuigao" active-class="whiteFont">人气最高</router-link></li>
            <li><router-link to="/zhaoxuexiao/haoxiao/pingjiazuigao" active-class="whiteFont">评价最高</router-link></li>
          </ul>
        </div>
        <div class="index2-introduceLeftarticle">
          <router-view></router-view>
        </div>
        <div class="index2-introduceLeftfooter">
          <div class="index2-introduceLeftfooterContent">
            <ul>
              <li><a href="javascript:">-</a></li>
              <li><a href="javascript:">1</a></li>
              <li><a href="javascript:" style="background-color: #29b8f7;color: white;">2</a></li>
              <li><a href="javascript:">3</a></li>
              <li><a href="javascript:">···</a></li>
              <li><a href="javascript:">7</a></li>
              <li><a href="javascript:">></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="index2-introduceRight">
        <div class="index2-introduceRight-title">当月口碑排行榜</div>
        <div class="index2-introduceRight-middle">
          <ul>
            <li><a href="javascript:" class="introduceRight-content" >
              <i :style="{'background-image': `url(${require('@/assets/IMG/xx1.jpg')})`}"></i>
              <div>
                <div style="display: flex;justify-content: space-between;flex-direction: column;height: 60px;">
                  <a href="javascript:">柿子音乐工作室</a>
                  <div class="introduceRight-contentstar">
                    <ul>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                    </ul>
                    <span>5.0分</span>
                  </div>
                  <span>广州市天河区体育西路...</span>
                </div>
              </div>
            </a></li>
            <li><a href="javascript:" class="introduceRight-content" >
              <i :style="{'background-image': `url(${require('@/assets/IMG/xx2.jpg')})`}"></i>
              <div>
                <div style="display: flex;justify-content: space-between;flex-direction: column;height: 60px;">
                  <a href="javascript:" @click="addRoutergrandson1">童程童美教育</a>
                  <div class="introduceRight-contentstar">
                    <ul>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                    </ul>
                    <span>5.0分</span>
                  </div>
                  <span>广州市天河区天河东路168号...</span>
                </div>
              </div>
            </a></li>
            <li><a href="javascript:" class="introduceRight-content" >
              <i :style="{'background-image': `url(${require('@/assets/IMG/xx3.jpg')})`}"></i>
              <div>
                <div style="display: flex;justify-content: space-between;flex-direction: column;height: 60px;">
                  <a href="javascript:" @click="addRoutergrandson">艾瑞佛钢琴学校</a>
                  <div class="introduceRight-contentstar">
                    <ul>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                      <li :style="{'background-image': `url(${require('@/assets/IMG/star.png')})`}"></li>
                    </ul>
                    <span>5.0分</span>
                  </div>
                  <span>广州市珠江新城高德置...</span>
                </div>
              </div>
            </a></li>
          </ul>
        </div>
        <div class="index2-introduceRight-bottom">
          <ul>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">裴乐蓓成长中心</span>
                <span class="index2-introduceRight-bottomcomment">1356条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">UFO飞船舞蹈室</span>
                <span class="index2-introduceRight-bottomcomment">6545条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">糖果音乐教育中心</span>
                <span class="index2-introduceRight-bottomcomment">3622条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">ASFA亚体儿童...</span>
                <span class="index2-introduceRight-bottomcomment">1000条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">碧海湾少儿运动...</span>
                <span class="index2-introduceRight-bottomcomment">985条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">夏日时光画社</span>
                <span class="index2-introduceRight-bottomcomment">862条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">宫羽五方少儿艺术</span>
                <span class="index2-introduceRight-bottomcomment">1369条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span class="index2-introduceRight-bottomtitle">美时光生活美学</span>
                <span class="index2-introduceRight-bottomcomment">1995条评论</span>
                <span class="index2-introduceRight-bottomnice">5.0分</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "haoxiao",
  methods:{
    addRoutergrandson(){
      let a =document.createElement("a");
      a.href = "javascript:"
      a.text=">艾瑞佛钢琴学校";
      a.id='nothing';
      //为何需要四层才能找到理应是爷组件的ref
      this.$parent.$parent.$refs.zhaoxuexiaoNav.appendChild(a);
      this.$router.push('/zhaoxuexiao/gangqingone/allcomments')
    },
    addRoutergrandson1(){
      let a =document.createElement("a");
      a.href = "javascript:"
      a.text=">童程童美教育";
      a.id='nothing';
      //为何需要四层才能找到理应是爷组件的ref
      this.$parent.$parent.$refs.zhaoxuexiaoNav.appendChild(a);
      this.$router.push('/zhaoxuexiao/tongcengjiaoyu/allcomments')
    },
  }

}
</script>

<style scoped>
@import '~@/assets/CSS/index2-articleChoose.css';
@import '~@/assets/CSS/index2-articleIntroduce.css';
.whiteFont{
  background-color: #2ab8f3;
  color: white;
}
</style>