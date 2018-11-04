<template>
  <div class="lightning">
    <el-row class="lightning-row">
      <el-col :span="6" :xs="24" v-for="item in productList" :key="item.id"  class="lightning-row-col">
        <el-card :body-style="{ padding: '0px' }" class="lightning-row-col-card" shadow="hover">
          <!-- <router-link :to="{name: 'Products',params: { productId: item.id}}">
            <img src="@/assets/factory-scene/57b6cf5a9e40b.jpg" class="image">
          </router-link>
        </el-card>
        <router-link :to="{name: 'Products',params: { productId: item.id}}">
          <span class="lightning-row-col-span">{{item.name}}</span>
        </router-link> -->
        <router-link :to="{path: '/power-bank/'+item.id}">
            <img :src="img+item.picture" class="image">
          </router-link>
        </el-card>
        <router-link :to="{path: '/power-bank/'+item.id}">
          <p class="lightning-row-col-p">{{item.name}}</p>
        </router-link>
      </el-col>
    </el-row>
    <el-row class="lightning-row-pagination">
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
  name: 'Lightning',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5,
      pageNum: 1,
      total: 0,
      pageSize: 10,
      img: 'http://47.107.57.42/img/',
      productList: []
    }
  },
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.getMicroUsbList()
      // console.log(`当前页: ${val}`)
    },
    getMicroUsbList () {
      let that = this
      let params = {
        type: '1',
        pageSize: that.pageNum,
        pageNum: this.pageNum
      }
      api.post('/product/query-power-products', params).then(data => {
        if (data.code === '0') {
          that.productList = data.list
          that.total = data.total
        } else {
          alert('source not found')
        }
      })
    }
  },
  created () {
    this.getMicroUsbList()
  }
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
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  display: block;
  height: 300px;
}
.lightning-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.el-pagination.is-background.el-pager li {
  background-color:#000;
  color:#fff;
}
.lightning-row-col-card{
  margin-bottom: 20px;
}
</style>
