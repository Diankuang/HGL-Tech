<template>
  <div class="type-c">
    <el-row class="type-c-row">
      <el-col :span="6" :xs="24" v-for="item in productList" :key="item.id"  class="type-c-row-col">
        <el-card :body-style="{ padding: '0px' }" class="type-c-row-col-card" shadow="hover">
          <!-- <router-link :to="{name: 'Products',params: { productId: item.id}}">
            <img src="@/assets/factory-scene/57b6cf5a9e40b.jpg" class="image">
          </router-link> -->
          <router-link :to="{path: '/power-bank/'+item.id}">
            <img :src="img+item.picture" class="image">
          </router-link>
        </el-card>
        <router-link :to="{path: '/power-bank/'+item.id}">
          <p class="type-c-row-col-p">{{item.name}}</p>
        </router-link>
      </el-col>
    </el-row>
    <el-row class="type-c-row-pagination">
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
  name: 'TypeC',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5,
      pageNum: 1,
      img: 'http://pbzoyemzp.bkt.clouddn.com/image/',
      productList: []
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
        type: 'Wireless charger',
        pageSize: 10,
        pageNum: this.pageNum
      }
      console.log(params)
      api.post('/product/query-power-products', params).then(data => {
        if (data.code === '0') {
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
.type-c{
  margin: 0px;
  padding: 0px;
}
.type-c-col-img{
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
.type-c-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.el-pagination.is-background.el-pager li {
  background-color:#000;
  color:#fff;
}
</style>
