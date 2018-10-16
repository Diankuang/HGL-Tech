<template>
  <div class="account-information">
    <el-row class="account-row">
      <el-row class="account-row-strong">
        <strong>Account Information</strong>
      </el-row>
      <el-row class="account-row-content">
        <el-col :sm="10" :xs="10" :span="10" class="account-row-content-col">
          <el-row class="account-row-content-col-title">
            <strong>CONTACT INFORMATION</strong>
          </el-row>
          <el-row class="account-row-content-col-content">
            <p>name<br>email</p>
          </el-row>
          <el-row class="account-row-content-col-actions">
            <a href="/edit-account">Edit</a>
            <a href="/change-password">Change Password</a>
          </el-row>
        </el-col>
        <el-col :sm="10" :xs="10" :span="10" :offset="4" class="account-row-content-col">
          <el-row class="account-row-content-col-title">
            <strong>NEWSLETTERS</strong>
          </el-row>
          <el-row class="account-row-content-col-content">
            <p>You subscribe to "General Subscription".</p>
          </el-row>
          <el-row class="account-row-content-col-actions">
            <a href="/edit-account">Edit</a>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AccountInformatoin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.account-information{
  position: relative;
}
.account-row-content{
  padding-top: 10px;
}
.account-row-content-col{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 1px solid #000000;
  padding: 15px 10px 0;
  /* box-shadow: 0 2px 3px rgba(0,0,0,0.08); */
  margin-top: 10px;
}
</style>
