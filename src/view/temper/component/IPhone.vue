<template>
  <div class="iPhone">
    <el-row class="iPhone-row">
      <el-col :span="6" :xs="24" v-for="item in temperList" :key="item.id"  class="iPhone-row-col">
        <el-card :body-style="{ padding: '0px' }" class="iPhone-row-col-card" shadow="hover">
           <router-link :to="{path: '/temper-pro/'+item.id}">
            <img :src="img+item.picture" class="image">
          </router-link>
          <router-link :to="{path: '/temper-pro/'+item.id}">
            <p class="iPhone-row-col-p">{{item.name}}</p>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="iPhone-row-pagination">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'iPhone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      currentPage: 5,
      pageNum: 1,
      pageSize: 10,
      total: 0,
      temperList: [],
      img: 'http://47.107.57.42/img/'
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.getTemperList()
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.getTemperList()
    },
    getTemperList () {
      let that = this
      let params = {
        type: '1',
        pageSize: that.pageSize,
        pageNum: that.pageNum
      }
      api.post('/temper/query-temper', params).then(data => {
        if (data.code === '0') {
          that.temperList = data.list
          that.total = data.total
        }
      })
    }
  },
  created () {
    this.getTemperList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iPhone{
  margin: 0px;
  padding: 0px;
}
.iPhone-col-img{
  width: 100%
}
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  height: 100%;
  display: block;
  margin: 20px 0 20px 0;
}
.iPhone-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.iPhone-row-col-p{
    margin: 0px 0px 21px 0px;
}
.el-pagination.is-background.el-pager li {
  background-color:#000;
  color:#fff;
}
</style>
