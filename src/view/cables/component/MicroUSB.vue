<template>
  <div class="micro-usb">
    <el-row class="micro-usb-row">
      <el-col :span="6" v-for="item in productList" :key="item.id"  class="micro-usb-row-col">
        <el-card :body-style="{ padding: '0px' }" class="micro-usb-row-col-card" shadow="hover">
          <router-link :to="{name: 'Products',params: { productId: item.id}}">
            <img src="@/assets/factory-scene/57b6cf5a9e40b.jpg" class="image">
          </router-link>
        </el-card>
        <router-link :to="{name: 'Products',params: { productId: item.id}}">
          <span class="micro-usb-row-col-span">{{item.name}}</span>
        </router-link>
      </el-col>
    </el-row>
    <el-row class="micro-usb-row-pagination">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'MicroUsb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5,
      pageNum:1,
      productList:[]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.getMicroUsbList()
      console.log(`当前页: ${val}`)
    },
    getMicroUsbList () {
      let that = this
      let params = {
        type:"Wireless charger",
        pageSize:10,
        pageNum:this.pageNum
      }
      console.log(params)
      api.post("/product/query-power-products",params).then(data => {
        if(data.code === '0'){
          that.productList = data.list
          console.log(that.productList)
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
  height: 300px;
}
.micro-usb-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.el-pagination.is-background.el-pager li {
  background-color:#000;
  color:#fff;
}
</style>
