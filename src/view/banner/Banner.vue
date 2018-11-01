<template>
    <div id="banner">
      <el-col :span="24" :xs="24" class="banner-col">
        <el-carousel indicator-position="outside" :height = "imgHeight-28+'px'">
        <el-carousel-item v-for="item in imgList" :key="item.id" :style = "imgClass" >
            <el-row>
            <el-col :span="24" :xs="24"><img ref="imgHeight+'px'" :src="img+item.idView" class="banner_img"/></el-col>
            </el-row>
        </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="24" :xs="24">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel >
          <el-carousel-item v-for="item in miniImg" :key="item.id">
            <el-card>
              <img :src="img+item.idView" class="banner_img"/>
              <img :src="img+item.idView" class="banner_img"/>
              <img :src="img+item.idView" class="banner_img"/>
              <span>好吃的汉堡</span>
            </el-card>
          </el-carousel-item>
        </el-carousel>
        <span>好吃的汉堡</span>
      </el-col>
    </div>
</template>

<script>
export default {
  name: 'Baner',
  data () {
    return {
      img: 'http://47.107.57.42/img/',
      imgList: [
        {id: 1, idView: '57c778644a448.jpg'},
        {id: 2, idView: '57c778b2decd8.jpg'},
        {id: 3, idView: '57c778ca85728.jpg '},
        {id: 4, idView: '57c778fae4f48.jpg'}
      ],
      imgHeight: 0,
      miniImg: [
        {id: 1, idView: '57d5facb1a838.jpg'},
        {id: 2, idView: '57d3a28202968.jpg'},
        {id: 3, idView: '57d3b94aa89a8.jpg'}
      ]
    }
  },
  methods: {
    hh () {
      // console.log(window.innerHeight)
      this.imgHeight = window.innerHeight
      this.imgClass = 'height:  ' + window.innerHeight + 'px;'
      console.warn('重新计算', this.imgHeight)
    }
  },
  created () {
    let that = this

    this.hh()
    window.addEventListener('resize', that.hh, false)
  }
}
</script>

<style scope>
/* * {
    margin: 0;
    padding: 0;
} */
.el-carousel {
    overflow: hidden;
    position: relative;
}
#banner{
  overflow: hidden;
}
</style>
