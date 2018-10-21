<template>
  <div class="other">
    <el-col class="el-col-other" :span="24">
      <img :src="imgUrl" class="other-col-img">
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'Other',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg')
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.other{
  margin: 0px;
  padding: 0px;
}
.other-col-img{
  width: 100%
}
</style>
