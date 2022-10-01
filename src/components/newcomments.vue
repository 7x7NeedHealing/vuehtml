<template>
  <div class="third">
    <img src="~@/assets/IMG/user2.png" alt="">
    <div class="third-right">
      <h1>爱吃爱玩的粒粒
        <span>
                                            2020-9-5
                                        </span>
      </h1>
      <p>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <span>4.8分</span>
      </p>
      <span>这里的课堂互动性特别强，环境也很好全新的钢琴好喜欢这边的环境和老师，最喜欢他们的音乐沙泷，能学到很多知<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;识。</span>
      <div class="third-tu">
        <img src="~@/assets/IMG/ppp1.png" @click.self="showBigImage($event)" alt="">
        <img src="~@/assets/IMG/ppp2.png" @click.self="showBigImage($event)" alt="">
        <big-i-m-g :visible="photoVisible" :url="bigImgUrl" @closeClick="()=>{photoVisible=false}"></big-i-m-g>
      </div>
    </div>
  </div>
  <div class="fourth">
    <img src="~@/assets/IMG/user3.png" alt="">
    <div class="third-right">
      <h1>隔壁家的猪
        <span>
                                            2020-8-3
                                        </span>
      </h1>
      <p>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <span>5.0分</span>
      </p>
      <span>对钢琴有兴趣，来尝试了ー下，环境不错，新开张的，服务也挺好，学钢琴的一些基础，也摸了ー下钢琴，弹了简单的段<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;落老师还不错,挺耐心的,如果要以后报课,会考虑的。</span>
      <div class="third-tu">
        <img src="~@/assets/IMG/ppp3.png" @click.self="showBigImage($event)" alt="">
        <img src="~@/assets/IMG/ppp4.png" @click.self="showBigImage($event)" alt="">
      </div>
    </div>
  </div>
  <div class="second">
    <img src="~@/assets/IMG/user1.png" alt="">
    <div class="second-right">
      <h1>雨的记忆
        <span>
                                            2020-5-8
                                        </span>
      </h1>
      <p>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <span>5.0分</span>
      </p>
      <span>小时候学过钢季没有坚持下去，现在孩子三岁，自己还是很感兴趣，也想见一见以后好辅导孩子。购买了练琴卡去练<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;琴顺使了解下价格，以为很贵，没想到折算下来比美吉姆的一节早教课还使宜，带孩子上了节体验课，杨老师耐心，和<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业，和我小时候学的太不一样了，制新了我对钢琴课枯燥的认知。学校很负责，建议四岁再来学。年会考虑报名。</span>
    </div>
  </div>
  <div class="seventh">
    <img src="~@/assets/IMG/user3.png" alt="">
    <div class="third-right">
      <h1>贪吃的小狗
        <span>
                                            2020-3-9
                                        </span>
      </h1>
      <p>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <span>5.0分</span>
      </p>
      <span>今天去艾弗瑞钢琴学校了体验课，环境不错，而且又是在商场里面，是家很值得去学的机构，且老师讲课又很详细。<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交通便利,环境也不错。</span>
      <div class="third-tu">
        <img src="~@/assets/IMG/ppp5.png" @click.self="showBigImage($event)" alt="">
        <img src="~@/assets/IMG/ppp6.png" @click.self="showBigImage($event)" alt="">
      </div>
    </div>
  </div>
  <div class="fifth">
    <img src="~@/assets/IMG/user4.png" alt="">
    <div class="fifth-right">
      <h1>james
        <span>
                                            2020-1-9
                                        </span>
      </h1>
      <p>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <span>4.7分</span>
      </p>
      <span>之前在团购看到有体验课,正好在附近有时间就过来试试体验课,感觉还不错,环境也很好,小孩子很喜欢,一下买了两<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年的课程,老师上课很有耐心,认真,孩子听起来也不费劲,值得推荐!</span>
    </div>
  </div>
  <div class="sixth">
    <img src="~@/assets/IMG/user5.png" alt="">
    <div class="fifth-right">
      <h1>5645
        <span>
                                            2020-1-7
                                        </span>
      </h1>
      <p>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <i class="star"></i>
        <span>5.0分</span>
      </p>
      <span>小时候学过钢琴没有坚持下去,现在孩子三岁,自己还是很感兴趣,也想见一见以后好辅导孩子。购买了练琴卡去练<br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;琴顺便了解下价格,以为很贵,没想到折算下来比美吉姆的一节早教课还便宜带孩子上了节体验课。</span>
    </div>
  </div>
</template>

<script>
import bigIMG from "@/components/bigIMG";

export default {
  name: "newcomments",
  components: {
    bigIMG
  },
  data() {
    return {
      photoVisible: false,
      bigImgUrl: "",
    }
  },
  methods: {
    showBigImage(e) {//点击图片函数，点击后，把photoVisible设置成true
      console.log("1")
      if (e !== "") {
        console.log("2")
        this.photoVisible = true;
        this.bigImgUrl = e.currentTarget.src;
      }
    },

  }
}
</script>

<style scoped>

</style>