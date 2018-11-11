<template>
    <div id="news-detail">
        {{news.content}}
    </div>
</template>

<script>
import api from '@/utils/api'

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
          console.log(that.news)
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
