<template>
  <div id="faq">
      <el-row class="faq-row">
        <el-row class="el-row-faq-strong">
          <strong>Frequently Asked Questions</strong>
        </el-row>
        <el-col v-for="item in allFaqList" :span="24" :xs="24" :key="item.id" class="faq-row-col">
          <strong>Question:{{item.title}}</strong>
          <span v-if="item.content1" class="faq-content"><p>{{item.content1}}</p></span>
          <span v-if="item.content2" class="faq-content"><p>{{item.content2}}</p></span>
          <span v-if="item.content3" class="faq-content"><p>{{item.content3}}</p></span>
          <span v-if="item.content4" class="faq-content"><p>{{item.content4}}</p></span>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'FAQ',
  data () {
    return {
      allFaqList: [],
      Q: 0,
      i: 1
    }
  },
  methods: {
    getAllFaq () {
      let that = this
      api.post('/faq/query-all', null).then(data => {
        if (data.code === '0') {
          that.allFaqList = data.list
        }
      })
    },
    onChange (name) {
      console.log('faq')
    }
  },
  created () {
    this.getAllFaq()
  }
}
</script>

<style scoped>
.faq-row{
  /* margin: 0 0px 0 20px; */
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 30px 20px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
}
.fag-row-ul li{
  list-style: none;
  margin: 0 0 10px 0;
  border-bottom: 1px #ddd solid;
}
.fag-row-ul li p{
  margin: 10px 0 0px 20px;
}
.el-collapse-item.el-collapse-item__header{
  line-height: 20px;
}
.faq-content p{
  margin-left: 20px;
  /* color: #777777; */
  margin-top: 10px;
}
.faq-row-col{
  margin: 20px 0 0 0;
}
.el-row-faq-strong{
    font-size: 24px;
    text-align: left;
    border-bottom: 1px solid #000000;
    margin: 20px 0 0 0;
}
</style>
