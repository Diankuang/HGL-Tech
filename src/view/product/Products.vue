<template>
  <div class="products">
    <el-row class="products-row">
      <el-col :span="17" class="products-row-col-left">
        <el-col class="products-row-col-left-col-left" :span="7">
          <div class="block">
            <el-carousel trigger="click"  indicator-position="none">
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.idView" style="wight:100%;height:100%">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="goodDetails_name_img">
              <div style="width: 300px;height: 300px">
                      <img :src="ImgUrl" style="width: 100%;height: 100%">
              </div>
              <div class="little_img" >
                  <ul>
                      <li v-for="item in imgList" :key="item.id" @click='getIndex(item.idView)'>
                          <img :src="item.idView" style="width: 50px; height: 50px" >
                      </li>
                  </ul>
              </div>
          </div>
        </el-col>
        <el-col class="products-row-col-left-col-right" :span="17">
          <h1>Thunderbolt™ 3 eGFX External GPU Enclosure</h1>
        </el-col>
      </el-col>
      <el-col :span="5" :offset="2" class="products-row-col-right">
        <el-row class="products-row-col-right-questions">
          <LatestNews></LatestNews>
        </el-row>
        <e-row class="products-row-col-right-latest-news">
          <LatestNews></LatestNews>
        </e-row>
        <el-row class="products-row-col-right-latest-faq">
          <LatestNews></LatestNews>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LatestNews from '@/view/latest-news/LatestNews'
export default {
  name: 'MicroUsb',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      currentPage: 5,
      imgList: [
        {id: 1, idView: require('@/assets/images/1.jpg')},
        {id: 2, idView: require('@/assets/images/2.jpg')},
        {id: 3, idView: require('@/assets/images/3.jpg')},
        {id: 4, idView: require('@/assets/images/4.jpg')}
      ],
      ImgUrl: require('@/assets/images/1.jpg')
    }
  },
  methods: {
    handleSizeChange () {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange () {
      // console.log(`当前页: ${val}`);
    },
    getIndex (imgUrl) {
      this.ImgUrl = imgUrl
    }
  },
  components: {LatestNews}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products{
  margin: 0px;
  padding: 0px;
}
.products-row{
  text-align: left;
}
.products-col-img{
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
.products-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.products-row-col-left-col-right{
  padding: 0px 10px 0px;
}

</style>
