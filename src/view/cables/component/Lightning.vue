<template>
  <div class="lightning">
    <el-col class="el-col-lightning" :span="24">
      <img :src="imgUrl" class="lightning-col-img">
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'Lightning',
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
.lightning{
  margin: 0px;
  padding: 0px;
}
.lightning-col-img{
  width: 100%
}
</style>
