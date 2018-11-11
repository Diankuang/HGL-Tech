<template>
  <div class="components-container">
    <el-row>
      <el-col :span="2" :xs="24"><strong>News Title:</strong></el-col>
      <el-col :span="22" :xs="24"><el-input v-model="title"></el-input></el-col>
      <el-col :span="2" :xs="24"><strong>Summarize:</strong></el-col>
      <el-col :span="22" :xs="24"><el-input v-model="summarize"></el-input></el-col>
      <el-col class="add-micro-usb-upload">
        <strong>上传图片</strong>
        <!-- <el-upload
          class="avatar-uploader"
          :action="uploadPath+'/file/upload'"
          :show-file-list="false"
          :on-success="upload"
          :before-upload="beforeAvatarUpload">
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload> -->
        <el-upload
            :action="uploadPath+'/file/upload'"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            accept="img"
            :on-success="upload">
            <i class="el-icon-plus"></i>
        </el-upload>
        <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog> -->
      </el-col>
      <el-col :span="24">
         <button @click="getUEContent()">获取内容</button>
        <button @click="getUEContentTxt()">获取无文本内容</button>
        <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
        <el-button type="primary" class="add-news-button" @click="getUEContent()">Submit</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import UE from '@/view/common/ue'
import api from '@/utils/api'

export default {
  components: { UE },
  data () {
    return {
      defaultMsg: '',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      ue1: 'ue1', // 不同编辑器必须不同的id
      ue2: 'ue2',
      title: '',
      uploadPath: 'http://www.gugualao.top',
      content: '',
      picture: '',
      summarize: ''
    }
  },
  methods: {
    getUEContent () {
      let that = this
      let content = this.$refs.ue.getUEContent() // 调用子组件方法
      this.$notify({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      })
      let params = {
        'title': that.title,
        'content': content,
        'picture': that.picture,
        'summarize': that.summarize
      }
      console.log(content)
      api.post('/news/add-news', params).then(data => {
        if (data.code === '0') {
          alert(data.msg)
          that.title = ''
        } else {
          alert(data.msg)
        }
      })
    },
    getUEContentTxt () {
      let content = this.$refs.ue.getUEContentTxt() // 调用子组件方法
      this.$notify({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      })
      console.log(content)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    upload (file) {
      debugger
      let that = this
      if (file.code === '0') {
        that.picture = file.fileName
      }
    }
  }
}
</script>
<style>
.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
.add-news-button{
  background: #000000;
  color: #fff;
  font-size: 15px;
  margin-top: 5px;
  align-self: right;
}
</style>
