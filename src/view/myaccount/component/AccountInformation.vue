<template>
  <div class="account-information">
    <el-row class="account-row">
      <el-row class="account-row-strong">
        <strong>Account Information</strong>
      </el-row>
      <el-row class="account-row-content">
        <el-col :sm="12" :xs="12" :span="12" class="account-row-content-col">
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
        <el-col :sm="12" :xs="12" :span="12" class="account-row-content-col">
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
  padding-top: 20px;
}
</style>
