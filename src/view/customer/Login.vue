<template>
  <div class="login">
    <el-row class="el-row-login">
      <el-row class="el-row-login-strong">
        <strong>Customer Login</strong>
      </el-row>
      <el-row class="el-row-login-content">
        <el-col :span="10" class="el-row-login-content-col">
          <el-card shadow="never" class="el-row-login-content-col-card">
            <strong>Login Customers</strong>
            <el-form :label-position="labelPosition" :model="loginFrom" ref="loginForm" class="demo-dynamic login-form" size="mini">
              <p>If you have an account, sign in with your email address.</p>
              <el-form-item prop="email" label="Email" class="login-form-item" :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ]">
                <el-input v-model="loginFrom.email"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="Password" class="login-form-item" :rules="[{ required: true, message: 'Password can not be null'}]">
                <el-input v-model="loginFrom.password"></el-input>
              </el-form-item>
              <el-form-item class="login-form-item">
                <el-button type="primary" class="sign-in" @click="submitForm('loginFrom')"> Sign In</el-button>
                <a href="forgot-password" class="login-a-a">Sign InForgot Your Password?</a>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="10" :offset="4" class="el-row-login-content-col">
          <el-card shadow="never" class="el-row-login-content-col-card">
            <strong>New Customers</strong>
            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            <el-row class="el-row-login-content-col-card-row">
              <router-link to="register">Create an Account</router-link>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'
import http from '@/utils/http'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'top',
      loginFrom: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm: async function () {
      let params = {
        email: '1832054053@qq.com',
        password: '123456'
      }
      const res = await http.post(api.login, params)
      if (res.data.success) {
        alert('请求成功')
      }
    }
    // async submitForm (formName) {
    //   console.log(formName)
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!')
    //       let params = {
    //         email: '1832054053@qq.com',
    //         password: '123456'
    //       }
    //       const res = await http.get(api.login, params)
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row-login-strong{
  text-align: left;
}
.el-row-login-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-login-content-col-card{
  text-align: left;
  border: none;
  /* padding: 0px; */
  color: #777;
}
.el-form-strong{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.3rem;
}
.login-form-item{
    margin-top: 20px;
    margin-bottom: 5px;
    color: #fff;
}
.el-row-login-content-col-card a{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
}
.login-a-a{
    padding-left: 20px;
}
.sign-in{
  background: #000000;
  color: #fff;
  font-size: 15px;
}
.el-row-login-content-col-card p{
  margin-top: 20px;
  font-size: 0.8rem;
}
.el-row-login-content-col-card-row{
  margin-top: 20px;
}
.el-row-login-content-col-card-row a{
  background: #000000;
  padding: 5px 15px;
  color: #fff;
}
</style>
