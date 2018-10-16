<template>
  <div class="address-book">
    <el-row class="address-book-row">
      <el-row class="address-book-row-strong">
        <strong>Address Book</strong>
      </el-row>
      <el-row class="address-book-row-content">
        <el-col :sm="8" :xs="8" :span="8" :offset="2" class="address-book-row-content-col">
          <el-row class="address-book-row-content-col-title">
            <strong>DEFAULT BILLING ADDRESS</strong>
          </el-row>
          <el-row class="address-book-row-content-col-content">
            <p>You have not set a default billing address.</p>
          </el-row>
          <el-row class="address-book-row-content-col-actions">
            <a href="/edit-address-book">Edit Address</a>
          </el-row>
        </el-col>
        <el-col :sm="8" :xs="8" :span="8" :offset="2" class="address-book-row-content-col">
          <el-row class="address-book-row-content-col-title">
            <strong>DEFAULT SHIPPING ADDRESS</strong>
          </el-row>
          <el-row class="address-book-row-content-col-content">
            <p>You have not set a default shipping address.</p>
          </el-row>
          <el-row class="address-book-row-content-col-actions">
            <a href="/edit-address-book">Edit Address</a>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AddressBook',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.address-book-information{
  position: relative;
}
.address-book-row-content{
  padding-top: 20px;
}
</style>
