<template>
  <div class="power-bank">
    <el-row class="power-bank-row">
      <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 0" class="power-bank-row-col">
        <el-card :body-style="{ padding: '0px' }" class="power-bank-row-col-card" shadow="hover">
          <router-link to="/login"><img src="@/assets/factory-scene/57b6cf5a9e40b.jpg" class="image"></router-link>
        </el-card>
        <router-link to="/login">
          <span class="power-bank-row-col-span">Car Chargers</span>
        </router-link>
      </el-col>
    </el-row>
    <el-row class="power-bank-row-pagination">
      <el-pagination
        background
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
  name: 'MicroUsb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5
    }
  },
  methods: {
    handleSizeChange () {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange () {
      // console.log(`当前页: ${val}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.power-bank{
  margin: 0px;
  padding: 0px;
}
.power-bank-col-img{
  width: 100%
}
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  display: block;
  height: 300px;
}
.power-bank-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.el-pagination.is-background.el-pager li {
  background-color:#000;
  color:#fff;
}
</style>
