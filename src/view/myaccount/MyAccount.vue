<template>
  <div class="my-account">
    <el-row class="tac">
        <el-col :span="4">
            <h5>默认颜色</h5>
            <el-menu
            :default-active="$router.path"
            class="el-menu-vertical-demo my-account"
            @open="handleOpen"
            @close="handleClose">
                <el-menu-item index="dashboard"><i class="el-icon-caret-right"></i>Dashboard</el-menu-item>
                <el-menu-item index="account-information"><i class="el-icon-caret-right"></i>Account Information</el-menu-item>
                <el-menu-item index="address-book"><i class="el-icon-caret-right"></i>Address Book</el-menu-item>
                <el-menu-item index="my-downloadable-products"><i class="el-icon-caret-right"></i>My Downloadable Products</el-menu-item>
                <el-menu-item index="my-orders"><i class="el-icon-caret-right"></i>My Orders</el-menu-item>
                <el-menu-item index="my-product-reviews"><i class="el-icon-caret-right"></i>My Product Reviews</el-menu-item>
                <el-menu-item index="newsletter-subscriptions"><i class="el-icon-caret-right"></i>Newsletter Subscriptions</el-menu-item>
                <el-menu-item index="my-credit-cards"><i class="el-icon-caret-right"></i>My Credit Cards</el-menu-item>
                <el-menu-item index="billing-agreements"><i class="el-icon-caret-right"></i>Billing Agreements</el-menu-item>
                <el-menu-item index="my-wish-list"><i class="el-icon-caret-right"></i>My Wish List</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="20">
            <router-view></router-view>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.my-account{
    text-align: left;
}
.el-menu-item, .el-submenu__title {
    height: 30px;
    /* padding: 0; */
    position: relative;
    line-height: 1;
    border-bottom: 1px solid #ddd;
    color: #777;
    padding: 8px 15px;
}
</style>
