<template>
  <div class="other">
    <el-row class="other-row">
      <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 0" class="other-row-col">
        <el-card :body-style="{ padding: '0px' }" class="other-row-col-card" shadow="hover">
          <router-link to="/login"><img src="@/assets/factory-scene/57b6cf5a9e40b.jpg" class="image"></router-link>
        </el-card>
        <router-link to="/login">
          <span class="other-row-col-span">Car Chargers</span>
        </router-link>
      </el-col>
    </el-row>
    <el-row class="other-row-pagination">
      <el-pagination
        background
        background-color="#000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Other',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(val)
    },
    handleCurrentChange (val) {
      console.log(val)
    }
  }
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
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  display: block;
}
.other-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
</style>
