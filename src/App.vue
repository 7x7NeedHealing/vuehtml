<template>
  <first></first>
</template>

<script>
import first from "@/views/first";

export default {
  name: 'App',
  components: {
    first,
  }
}
</script>

<style>
body{
  min-width: 1200px;
}
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  /*去除转换成行内块后的间隙*/
  /*font-size: 0;*/
  /*去除默认行为*/
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
li{
  list-style: none;
}
img{
  display: block;
}
input{
  outline: none;
}

</style>
