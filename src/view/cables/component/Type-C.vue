<template>
  <div class="type-c">
    <el-col class="el-col-type-c" :span="24">
      <img :src="imgUrl" class="type-c-col-img">
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'Type-C',
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
.type-c{
  margin: 0px;
  padding: 0px;
}
.type-c-col-img{
  width: 100%
}
</style>
