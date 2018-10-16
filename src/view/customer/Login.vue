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
            <el-form :label-position="labelPosition" :model="loginFrom" class="demo-ruleForm login-form" size="mini">
              <strong class="el-from-strong">If you have an account, sign in with your email address.</strong>
              <el-form-item label="Email" class="login-form">
                <el-input v-model="loginFrom.email"></el-input>
              </el-form-item>
              <el-form-item label="Password" class="login-form">
                <el-input v-model="loginFrom.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"> Sign In</el-button>
                <a href="#">Sign InForgot Your Password?</a>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="10" :offset="4" class="el-row-login-content-col">
          <el-card shadow="never" class="el-row-login-content-col-card">
            从不显示
          </el-card>
        </el-col>
        <!-- <el-col class="el-row-login-content-customer"></el-col>
        <el-col class="el-row-login-content-register"></el-col> -->
      </el-row>
    </el-row>
  </div>
</template>

<script>
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
.el-row-login-content-customer{
  border: none;
}
.el-row-login-content-register,.el-row-login-content-col-card{
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
.login-form{
    margin-top: 20px;
    margin-bottom: 5px;
}
</style>
