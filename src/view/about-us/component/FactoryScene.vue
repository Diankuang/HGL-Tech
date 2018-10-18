<template>
  <div class="factory-scene">
    <el-row class="el-row-factory-scene">
      <el-row class="el-row-factory-scene-strong">
        <strong>Customer factory-scene</strong>
      </el-row>
      <el-row class="el-row-factory-scene-content">
        <el-col :span="10" class="el-row-factory-scene-content-col">
          <el-card shadow="never" class="el-row-factory-scene-content-col-card">
            <strong>factory-scene Customers</strong>
            <el-form :label-position="labelPosition" :model="factory-sceneFrom" ref="factory-sceneForm" class="demo-dynamic factory-scene-form" size="mini">
              <p>If you have an account, sign in with your email address.</p>
              <el-form-item prop="email" label="Email" class="factory-scene-form-item" :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ]">
                <el-input v-model="factory-sceneFrom.email"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="Password" class="factory-scene-form-item" :rules="[{ required: true, message: 'Password can not be null'}]">
                <el-input v-model="factory-sceneFrom.password"></el-input>
              </el-form-item>
              <el-form-item class="factory-scene-form-item">
                <el-button type="primary" class="sign-in" @click="submitForm('factory-sceneFrom')"> Sign In</el-button>
                <a href="forgot-password" class="factory-scene-a-a">Sign InForgot Your Password?</a>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="10" :offset="4" class="el-row-factory-scene-content-col">
          <el-card shadow="never" class="el-row-factory-scene-content-col-card">
            <strong>New Customers</strong>
            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
            <el-row class="el-row-factory-scene-content-col-card-row">
              <router-link to="register">Create an Account</router-link>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'factory-scene',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'top',
      factory-sceneFrom: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row-factory-scene-strong{
  text-align: left;
}
.el-row-factory-scene-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-factory-scene-content-col-card{
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
.factory-scene-form-item{
    margin-top: 20px;
    margin-bottom: 5px;
    color: #fff;
}
.el-row-factory-scene-content-col-card a{
    color: #777;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
}
.factory-scene-a-a{
    padding-left: 20px;
}
.sign-in{
  background: #000000;
  color: #fff;
  font-size: 15px;
}
.el-row-factory-scene-content-col-card p{
  margin-top: 20px;
  font-size: 0.8rem;
}
.el-row-factory-scene-content-col-card-row{
  margin-top: 20px;
}
.el-row-factory-scene-content-col-card-row a{
  background: #000000;
  padding: 5px 15px;
  color: #fff;
}
</style>
