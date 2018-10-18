<template>
  <div class="structure">
    <el-col class="el-col-structure" :span="24">
      <img :src="imgUrl">
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'Structure',
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
.structure{
  margin: 0px;
  padding: 0px;
}
</style>
