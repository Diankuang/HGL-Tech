<template>
  <div class="latest-news">
    <el-row class="el-row-latest-news">
      <span class="el-row-latest-news-span">Latest News</span>
      <ul class="el-row-latest-news-ul">
          <li class="el-row-latest-news-ul-li" v-for="item in ulList" :key="item.path">
              <router-link to="item.path">{{item.title}}</router-link>
          </li>
      </ul>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'LatestNews',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: require('@/assets/1539869424.jpg'),
      ulList: [
        {path: 'news-info1', title: 'VisionTek Launches the VT100 Universal USB 3.0 Portable Dock'},
        {path: 'news-info2', title: 'VisionTek Launches Portable Thunderbolt 3 SSD Enclosures for Mac and PC'},
        {path: 'news-info3', title: 'VisionTek Introduces New Thunderbolt™ 3 eGFX External Graphics Accelerator Enclosure'},
        {path: 'news-info4', title: 'VisionTek Unveils Radeon RX Vega 64 Editions'},
        {path: 'news-info5', title: 'VisionTek Adds The Radeon RX 550 To Its GPU Family'},
        {path: 'news-info6', title: 'VisionTek Launches Radeon RX 580 8GB and RX 570 4GB Overclocked Editions'}
      ]
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.latest-news{
  margin: 0px;
  padding: 0px;
}
/* .el-row-latest-news{ */
    /* font-size: 1.8rem; */
    /* font-weight: 300;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
        font-size: 16px; */
    /* color: #777; */
    /* font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    /* font-style: normal; */
    /* font-weight: 400;
    line-height: 1.4;
    font-size: 1.3rem; */
/* } */
.el-row-latest-news-span{
    color: #777;
    font-size: 17px;
    font-family: MingLiU;
    font-style: normal;
}
.el-row-latest-news-ul{
    list-style:none;
    line-height:30px;
    padding-top: 10px;
    text-align: left;
    font-size: 12px;
}
</style>
