<template>
  <div class="temper-detail">
    <el-row class="temper-detail-row">
      <el-col :span="14" :offset="5" class="temper-detail-row-col-left" :xs="24">
        <el-col class="temper-detail-row-col-left-col-left" :span="8" :xs="24">
          <el-col :span="24" :xs="24" class="big-img">
            <swiper :options="swiperOptionTop" ref="swiperTop" class="gallery-top">
              <swiper-slide v-for="item in temperPictures" :key="item.id" class="banner-col-top-col-slide">
                  <img :src="img+item.picture" style="width:100%;height:100%" >
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </el-col>
          <el-col class="little-img" >
            <swiper :options="swiperOptionThumbs" ref="swiperThumbs" class="gallery-thumbs">
            <swiper-slide v-for="item in temperPictures" :key="item.id">
              <img :src="img+item.picture" style="width:100%;height:100%" >
            </swiper-slide>
          </swiper>
          </el-col>
        </el-col>
        <el-col class="temper-detail-row-col-left-col-right" :span="16" :xs="24">
          <h1 style="margin-top:20px;"><span class="temper-detail-row-col-left-col-right-span">{{temper.item}}</span></h1>
          <el-col class="temper-detail-row-col-left-col-right-2"></el-col>
          <el-col class="temper-detail-row-col-left-col-right-3" :span="24" :xs="24">
            <!-- <p>{{temper.introductions}}</p> -->
            <!-- <p><strong><span>Features:</span></strong></p> -->
            <el-row>
              <ul>
                <!-- <el-col  :span="12" :xs="24"  v-for="(value,key,index) in temper"  :key="index" class="temper-detail-row-col-left-col-right-3">
                <li v-if="key !== 'createTime' && value !== '' && key !== 'id' && key !== 'type' && key !== 'status'
                 && key !== 'picture'" ><strong>{{key}}：</strong>&nbsp;{{value}}</li>
                </el-col> -->
                <li><strong>item:&nbsp;</strong>{{temper.item}}</li>
                <li><strong>model:&nbsp;</strong>{{temper.model}}</li>
                <li><strong>dimension:&nbsp;</strong>{{temper.dimension}}</li>
                <li><strong>material:&nbsp;</strong>{{temper.material}}</li>
                <li><strong>thickness:&nbsp;</strong>{{temper.thickness}}</li>
                <li><strong>hardness:&nbsp;</strong>{{temper.hardness}}</li>
                <li><strong>features:&nbsp;</strong>{{temper.features}}</li>
              </ul>
            </el-row>
          </el-col>
        </el-col>
        <el-col class="temper-detail-row-col-left-col-right-4" :span="24" :xs="24">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" value="Detail">
            <el-tab-pane label="Detail" name="Detail">
              <ul>
                <li v-for="item in temperDetails" :key="item.id">
                  <img :src="img+item.picture" style="width:100%;height:100%">
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-col>
      <el-col :span="5" class="temper-detail-row-col-right" :xs="24">
        <el-row class="temper-detail-row-col-right-questions">
          <img :src="techSupport">
        </el-row>
        <e-row class="temper-detail-row-col-right-latest-news">
          <LatestNews></LatestNews>
        </e-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
import LatestNews from '@/view/latest/LatestNews'
import LatestFAQ from '@/view/latest/LatestFAQ'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'TemperPro',
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
      ImgUrl: require('@/assets/images/1.jpg'),
      temper: {},
      temperPictures: [],
      temperDetails: [],
      img: 'http://www.gugualao.top/files/',
      activeName: 'Detail',
      techSupport: require('@/assets/images/Tech-Support.jpg'),
      swiperOptionTop: {
        autoplay: true,
        interval: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  created () {
    this.getProductDetail()
  },
  methods: {
    handleSizeChange () {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange () {
      // console.log(`当前页: ${val}`);
    },
    getIndex (imgUrl) {
      // console.log()
      // console.log(imgUrl)
      this.ImgUrl = imgUrl
    },
    getProductDetail () {
      let that = this
      let param = {
        temperId: this.$route.params.productId
      }
      api.postC('/temper/query-detail', param).then(data => {
        if (data.code === '0') {
          that.temper = data.temper
          that.temperPictures = data.temperPictures
          that.temperDetails = data.temperDetails
        }
      })
    },
    change1 (val, oldVal) {
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {LatestNews, LatestFAQ, swiper, swiperSlide},
  props: [],
  watch: {
    change1 (val, oldVal) {
      console.log('--------------')
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style scoped>
.temper-detail{
  margin: 0px;
  padding: 5px 10px;
  /* overflow: hidden; */
}
.temper-detail-row{
  text-align: left;
}
.big-img{
  /* border:#ddd 1px solid; */
}
/* .little-img-ul li{
  list-style: none;
  float:left;
  border:#ddd 1px solid;
  margin: 5px 5px 0 0;
} */
.little-img-ul-li{
  list-style: none;
  float:left;
  /* border:#000 1px solid; */
  margin: 5px 5px 0 0;
}
.little-img{
  height: 20%;
  box-sizing: border-box;
  /* padding: 10px 0; */
  position: relative;
  border:#ddd 1px solid;
}

.temper-detail-row-col{
  margin-left: 0px;
  margin-bottom: 20px;
  text-align: center
}
.temper-detail-row-col-left-col-right{
  padding: 0px 20px 0px;
}
.temper-detail-row-col-left-col-right-span{
    font-size: 28px;
    font-weight: 600;
    line-height: 1;
    color: #555;
}
.temper-detail-row-col-left-col-right-1{
    padding: 0 15px 0 10px;
    display: inline-block;
    vertical-align: middle;
    margin-top: 0;
    line-height: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.temper-detail-row-col-left-col-right-1 a{
    color: #bdbdbd;
    text-decoration: none;
}
.temper-detail-row-col-left-col-right-2{
    border-bottom: 1px #ebebeb solid;
    display: table;
    width: 100%;
    margin-bottom: 15px;
    display: table-cell;
    vertical-align: top;
}
.temper-detail-row-col-left-col-right-3{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-size: 0.8rem;
}
.temper-detail-row-col-left-col-right-3 p{
    display: block;
    -webkit-margin-before: 0.9em;
    -webkit-margin-after: 0.9em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.temper-detail-row-col-left-col-right-3 li{
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 20px;
    margin: 5px 5px 0px 0px;
}
.temper-detail-row-col-left-col-right-4{
    margin: 30px 10px 10px 0;
}
.temper-detail-row-col-left-col-left{
  position: relative;
  /* border: #777 1px solid; */
}
.gallery-thumbs {
    height: 15%!important;
    box-sizing: border-box;
    /* padding: 10px 0; */
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
.swiper-button-next, .swiper-button-prev{
  top: 40%;
}
.temper-detail-row-col-right{
  padding-left: 10px;
}
</style>
