<template>
  <div>
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
        <el-col :span="24" :xs="24">
            <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                @change="onEditorChange">
            </quill-editor>
        </el-col>
        <el-col :span="24" :xs="24">
            <el-button type="primary" class="add-news-button" @click="getUEContent()">Submit</el-button>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import api from '@/utils/api'

export default {
  name: 'quill',
  data () {
    return {
      title: '',
      content: '',
      picture: '',
      summarize: '',
      dialogImageUrl: '',
      editorOption: {},
      uploadPath: 'http://www.gugualao.top',
      dialogVisible: ''
    }
  },
  methods: {
    onEditorBlur (quill) {
      // console.log('editor blur!', quill)
    },
    onEditorFocus (quill) {
      // console.log('editor focus!', quill)
    },
    onEditorReady (quill) {
      // console.log('editor ready!', quill)
    },
    onEditorChange ({ quill, html, text }) {
      // console.log('editor change!', quill, html, text)
      this.content = html
      console.log(this.content)
    },
    getUEContent () {
      let that = this
      let params = {
        'title': that.title,
        'content': that.content,
        'picture': that.picture,
        'summarize': that.summarize
      }
      console.log(params)
      api.post('/news/add-news', params).then(data => {
        if (data.code === '0') {
          alert(data.msg)
          that.title = ''
        } else {
          alert(data.msg)
        }
      })
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
    },
    beforeAvatarUpload () {}
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  components: {quillEditor}
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
