<template>
  <div class="micro-usb">
    <el-row class="micro-usb-row">
      <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 0" class="micro-usb-row-col">
        <el-card :body-style="{ padding: '0px' }" class="micro-usb-row-col-card" shadow="hover">
          <router-link to="/login"><img src="@/assets/factory-scene/57b6cf5a9e40b.jpg" class="image"></router-link>
        </el-card>
        <span class="micro-usb-row-col-span">好吃的汉堡</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'MicroUsb',
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
.micro-usb{
  margin: 0px;
  padding: 0px;
}
.micro-usb-col-img{
  width: 100%
}
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  display: block;
}
.micro-usb-row-col{
  margin-left: 0px;
  margin-bottom: 0px;
  text-align: center
}
</style>
