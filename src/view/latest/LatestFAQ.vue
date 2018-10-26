<template>
  <div class="latest-faq">
    <el-row class="el-row-latest-faq">
      <el-row class="el-row-latest-faq-title">
        <span class="el-row-latest-faq-span">Latest FAQ</span>
      </el-row>
      <el-row class="el-row-latest-faq-content">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
                <i class="el-icon-plus"></i>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
        </el-collapse>
        <ul class="el-row-latest-faq-ul">
          <li class="el-row-latest-faq-ul-li" v-for="item in ulList" :key="item.path">
              <router-link to="item.path">{{item.title}}</router-link>
          </li>
        </ul>
      </el-row>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'LatestFAQ',
  data () {
    return {
      ulList: [
        {path: 'faq-info1', title: 'VisionTek Launches the VT100 Universal USB 3.0 Portable Dock'},
        {path: 'faq-info2', title: 'VisionTek Launches Portable Thunderbolt 3 SSD Enclosures for Mac and PC'},
        {path: 'faq-info3', title: 'VisionTek Introduces New Thunderbolt™ 3 eGFX External Graphics Accelerator Enclosure'},
        {path: 'faq-info4', title: 'VisionTek Unveils Radeon RX Vega 64 Editions'},
        {path: 'faq-info5', title: 'VisionTek Adds The Radeon RX 550 To Its GPU Family'},
        {path: 'faq-info6', title: 'VisionTek Launches Radeon RX 580 8GB and RX 570 4GB Overclocked Editions'}
      ],
      activeName: '1'
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.latest-faq{
  margin: 0px;
  padding: 0px;
}
/* .el-row-latest-faq{ */
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
.el-row-latest-faq-span{
    color: #777;
    font-size: 17px;
    font-family: MingLiU;
    font-style: normal;
}
.el-row-latest-faq-ul{
    list-style:none;
    line-height:30px;
    padding-top: 10px;
    text-align: left;
    font-size: 12px;
}
.el-row-latest-faq{
    border: 1px solid #cccccc;
    margin-top: 10px;
}
.el-row-latest-faq-title{
    border-bottom: 1px solid #cccccc;
    padding: 7px 10px 7px 10px;
    background-color: #f4f4f4;
    color: #636363;
    text-transform: uppercase;
}
</style>
