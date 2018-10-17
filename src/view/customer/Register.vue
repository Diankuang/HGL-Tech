<template>
  <div class="register">
    <el-row class="el-row-register">
      <el-row class="el-row-register-strong">
        <strong>Create New Customer Account</strong>
      </el-row>
      <el-row class="el-row-register-content">
        <el-form :label-position="labelPosition" :model="registerFrom" ref="registerForm" class="demo-dynamic register-form">
            <el-col :span="10" class="el-row-register-content-col">
                <el-card shadow="never" class="el-row-register-content-col-card">
                    <strong>PERSONAL INFORMATION</strong>
                    <el-form-item prop="firstName" label="First Name" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="registerFrom.firstName"></el-input>
                    </el-form-item>
                    <el-form-item prop="lastName" label="Last Name" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="registerFrom.lastName"></el-input>
                    </el-form-item>
                     <el-form-item class="register-form">
                        <input type="checkbox" name="is_subscribed" title="Sign Up for Newsletter" value="1" id="is_subscribed" class="checkbox">
                        <label for="is_subscribed" class="label"><span>Sign Up for Newsletter</span></label>
                    </el-form-item>
                    <el-form-item class="register-form">
                        <el-button type="primary" class="sign-in" @click="submitForm('registerFrom')">Create an Account</el-button>
                    </el-form-item>
                </el-card>
            </el-col>
            <el-col :span="10" :offset="4" class="el-row-register-content-col">
                <el-card shadow="never" class="el-row-register-content-col-card">
                    <strong>SIGN-IN INFORMATION</strong>
                    <el-form-item prop="email" label="Email" class="register-form-item" :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]">
                        <el-input v-model="registerFrom.email"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="registerFrom.password"></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="Confirm Password" class="register-form-item" :rules="[{ required: true, message: 'This is a required field.'}]">
                        <el-input v-model="confirmPasswprd"></el-input>
                    </el-form-item>
                </el-card>
            </el-col>
        </el-form>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelPosition: 'top',
      registerFrom: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      confirmPasswprd: ''
    }
  },
  methods: {
    submitForm (formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row-register-strong{
  text-align: left;
}
.el-row-register-content{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-register-content-col-card{
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
.register-form-item{
    margin-top: 0px;
    margin-bottom: 5px;
    color: #fff;
}
.sign-in{
  background: #000000;
  color: #fff;
  font-size: 15px;
}
.el-row-register-content-col-card-row{
  margin-top: 20px;
}
.el-row-register-content-col-card-row a{
  background: #000000;
  padding: 5px 15px;
  color: #fff;
}
</style>
