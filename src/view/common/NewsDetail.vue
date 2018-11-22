<template>
    <div id="news-detail">
        <!-- {{news.content}} -->
        <el-row class="news-detail-row" v-html="html">
          <div>{{html}}</div>
        </el-row>
        <!-- <p><img src="http://localhost:9002/upload/ueditor/image/20181121/1542805588397099707.jpg" title="1542805588397099707.jpg" alt="201804180938403840.jpg" width="287" height="276"/></p><p>fhdsjfhdsjf&nbsp;</p><p><span style="color: rgb(192, 80, 77);">fdsghfjksdfhjksdhfjkdsf</span></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://img.baidu.com/hi/jx2/j_0013.gif"/><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/></p> -->
    </div>
</template>

<script>
import api from '@/utils/api'
import '../../../static/UE/lang/zh-cn/zh-cn.js'
export default {
  name: 'NewsDetail',
  data () {
    return {
      news: '',
      html: ''
    }
  },
  methods: {
    getNewDetail () {
      let that = this
      let newsId = this.$route.params.newsId
      let params = {newsId: newsId}
      api.postC('/news/query-news-detail', params).then(data => {
        if (data.code === '0') {
          that.news = data.news
          that.html = that.news.content
          console.log(that.html)
        }
      })
    }
  },
  created () {
    this.getNewDetail()
  }
}
</script>

<style scoped>
</style>
