<template>
  <div id="faq">
      <el-row class="faq-row">
        <el-collapse accordion  @change="onChange()">
            <el-collapse-item v-for="item in allFaqList" :key="item.id" style="line-height:20px;">
                <template slot="title" class="tem-faq" style="line-height:20px;">
                    <i class="el-icon-plus" v-if="i == 1"></i>
                    <i class="el-icon-plus" v-if="i == 0"></i>
                    <span style="font-size:17px;line-height:20px">Question:</span>
                    <span style="font-size:14px;line-height:20px">{{item.title}}</span>
                </template>
                <div v-if="item.content1" class="faq-content"><p>{{item.content1}}</p></div>
                <div v-if="item.content2" class="faq-content"><p>{{item.content2}}</p></div>
                <div v-if="item.content3" class="faq-content"><p>{{item.content3}}</p></div>
                <div v-if="item.content4" class="faq-content"><p>{{item.content4}}</p></div>
            </el-collapse-item>
        </el-collapse>
        <!-- <ul class="fag-row-ul">
          <li v-for="item in allFaqList" :key="item.id">
            <h3>Question:<span style="font-size:14px;">{{item.title}}</span></h3>
            <p>{{item.content1}}</p>
            <p>{{item.content2}}</p>
            <p>{{item.content3}}</p>
            <p>{{item.content4}}</p>
          </li>
        </ul> -->
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
        console.log(data)
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
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  /* margin-top: 20px; */
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
}
</style>
