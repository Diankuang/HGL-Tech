<template>
  <div id="banner">
    <!-- <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item.path">
        <h3>{{ item }}</h3>
        <img v-bind:src="item.path">
        </el-carousel-item>
    </el-carousel> -->
    <h1>fdahfhjdkfhjsdkfahj</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgList: [
        {path: require('@/assets/eGFX_Slide.jpg')},
        {path: require('@/assets/OCPC_gaming.jpg')},
        {path: require('@/assets/SoundTubePRO-head.jpg')},
        {path: require('@/assets/TB3_Header_Graphic_16x9.jpg')}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
