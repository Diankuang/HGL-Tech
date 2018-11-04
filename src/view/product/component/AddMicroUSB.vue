<template>
    <div id="add-micro-usb">
        <el-row class="add-micro-usb-row">
            <el-col class="add-micro-usb-upload">
                <strong>上传图片</strong>
                <el-upload
                    :action="uploadPath+'/file/upload'"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    accept="img"
                    :on-success="upload">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-col>
            <el-col class="add-micro-usb-form">
                <el-form :model="mictousbForm"  ref="mictousbForm" label-width="100px" class="demo-mictousbForm">
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="name" prop="name">
                    <el-input v-model="mictousbForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="price" prop="price">
                        <el-input v-model="mictousbForm.price"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="type" prop="type">
                        <el-select v-model="mictousbForm.type" placeholder="Select Type">
                        <el-option label="Wireles schargers" value="1"></el-option>
                        <el-option label="Car Chargers" value="2"></el-option>
                        <el-option label="Single USB Chargers" value="3"></el-option>
                        <el-option label="Wall Chargers" value="4"></el-option>
                        <el-option label="Multi-function" value="5"></el-option>
                        <el-option label="Power Socket" value="6"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="material" prop="material">
                        <el-input v-model="mictousbForm.material"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="size" prop="size">
                        <el-input v-model="mictousbForm.size"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="input" prop="input">
                        <el-input v-model="mictousbForm.input"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="output" prop="output">
                        <el-input v-model="mictousbForm.output"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="color" prop="color">
                        <el-input v-model="mictousbForm.color"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="power" prop="power">
                        <el-input v-model="mictousbForm.power"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="circuitProtections" prop="circuitProtections">
                        <el-input v-model="mictousbForm.circuitProtections"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="dimension" prop="dimension">
                        <el-input v-model="mictousbForm.dimension"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="service" prop="service">
                        <el-input v-model="mictousbForm.service"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="port" prop="port">
                        <el-input v-model="mictousbForm.port"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="pin" prop="pin">
                        <el-input v-model="mictousbForm.pin"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="plug" prop="plug">
                        <el-input v-model="mictousbForm.plug"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="introductions" prop="introductions">
                        <el-input v-model="mictousbForm.introductions"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="12" :xs="24"> -->
                    <el-form-item label="modelNo" prop="modelNo">
                        <el-input v-model="mictousbForm.modelNo"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <!-- <el-col :span="24" :xs="24"> -->
                    <el-form-item label="certificate" prop="certificate">
                        <el-input v-model="mictousbForm.certificate"></el-input>
                    </el-form-item>
                    <!-- </el-col> -->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('mictousbForm')">Submit</el-button>
                        <el-button @click="resetForm('mictousbForm')">Reset</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'AddMicroUSB',
  data () {
    return {
      mictousbForm: {
        name: '',
        /**
        *1Wirelesschargers,2CarChargers,3SingleUSBChargers,4WallChargers,5Multi-function,6PowerSocket,
        */
        price: '',
        type: '',
        material: '',
        size: '',
        input: '',
        output: '',
        color: '',
        power: '',
        circuitProtections: '',
        dimension: '',
        service: '',
        port: '',
        pin: '',
        plug: '',
        introductions: '',
        modelNo: '',
        certificate: '',
        picture: []
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      uploadPath: 'http://47.107.57.42:9002/',
      orderNo: 0
    }
  },
  methods: {
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = that.mictousbForm
          api.post('/product/add-power-products', params).then(data => {
            console.log(data)
            if (data.code === '0') {
              alert(data.msg)
            } else {
              alert(data.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    upload (file) {
      let that = this
      if (file.code === '0') {
        let orderNo = that.orderNo + 1
        that.orderNo = orderNo
        let picture = {orderNo: orderNo, picture: file.fileName}
        that.mictousbForm.picture.push(picture)
      }
    }
  },
  computed: {
    userInfo () {
      return JSON.parse(this.$store.state.user)
    }
  }
}
</script>

<style>

</style>
