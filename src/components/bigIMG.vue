<template>
  <div v-show="visible" @click="closeClick" class="showPhoto">
    <img class="img" :src="url" alt="图片加载失败" />
  </div>
</template>

<script>
export default {
  name:'bigIMG',
  props: {
    url: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeClick() {
      //子组件可以使用 $emit 触发父组件的自定义事件
      this.$emit("closeClick");
    },
  },
};
</script>
<style scoped>
.showPhoto {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showPhoto .img {
  display: block;
  margin: auto 0;
  width: 725px;
  height: 565px;
  text-align: center;
}
</style>