<template>
    <div id="banner" :height = "imgHeight + 'px'" >
        <el-carousel indicator-position="outside" :height = "imgHeight-28+'px'">
        <el-carousel-item v-for="item in imgList" :key="item.id" :style = "imgClass" >
            <el-row>
            <el-col :span="24"><img ref="imgHeight+'px'" :src="item.idView" class="banner_img"/></el-col>
            </el-row>
        </el-carousel-item>
        </el-carousel>
        <div style="height:200px; background: pink;"></div>

    </div>
</template>

<script>
export default {
  name: 'Baner',
  data () {
    return {
      imgList: [
        {id: 1, idView: require('@/assets/images/1.jpg')},
        {id: 2, idView: require('@/assets/images/2.jpg')},
        {id: 3, idView: require('@/assets/images/3.jpg')},
        {id: 4, idView: require('@/assets/images/4.jpg')}
      ],
      imgHeight: 0
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
* {
    margin: 0;
    padding: 0;
}
.el-carousel {
    overflow: hidden;
    position: relative;
}
#banner{
  overflow: hidden;
}
</style>
