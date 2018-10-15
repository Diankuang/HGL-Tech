<template>
    <div id="myheader">
        <el-header>
            <el-row class="header-row">
                <ul class="header-ul">
                    <li><span class="header-span">Welcome to VisionTek</span></li>
                    <li><a class="header-a" href="https://www.visiontek.com/frequently-asked-questions.html" title="FAQ">FAQ</a></li>
                    <li><a class="header-a" href="https://www.visiontek.com/customer/account/login/">Sign In</a></li>
                    <li><a class="header-a" href="https://www.visiontek.com/customer/account/create/">Create an Account</a></li>
                </ul>
            </el-row>
            <el-row class="header-row1">
                <!-- <a href="/"><img src="@/assets/logo.png"></a> -->
                <el-menu
                router
                :default-active="$router.path"
                class="el-menu-demo demo-header"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                     <!-- <el-menu-item index="/"><img src="@/assets/logo.png"></el-menu-item> -->
                    <el-menu-item index="banner">Home</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">About us</template>
                        <el-menu-item index="structure">Structure</el-menu-item>
                        <el-menu-item index="2-2">Factory Scene</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">Cables</template>
                        <el-menu-item index="3-1">Micro USB</el-menu-item>
                        <el-menu-item index="3-2">Type-C</el-menu-item>
                        <el-menu-item index="3-3">Lightning </el-menu-item>
                        <el-menu-item index="3-4">Others</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">Temper</template>
                        <el-menu-item index="4-1">iPhone</el-menu-item>
                        <el-menu-item index="4-2">Huawei</el-menu-item>
                        <el-menu-item index="4-3">Samsung</el-menu-item>
                        <el-menu-item index="4-4">Oppo</el-menu-item>
                        <el-menu-item index="4-5">Vivo</el-menu-item>
                        <el-menu-item index="4-6">Others</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">Support</template>
                        <el-menu-item index="5-1">FAQ</el-menu-item>
                        <el-menu-item index="5-2">Map</el-menu-item>
                        <el-menu-item index="5-3">After sale Policy</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">Contact us</template>
                        <el-menu-item index="6-1">Online Message</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="my-account">My Account</el-menu-item>
                </el-menu>
            </el-row>
        </el-header>
    </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key + '==' + keyPath)
      this.$router.push(keyPath)
    }
  }
}
</script>

<style scope>
.el-header{
    margin: 0px;
    padding: 0px;
    background-color:#545c64;
    position: absolute;
    width: 100%;
    z-index: 1;
    /* height: 100px; */
}
.demo-header{
    /* height: 100px; */
    /* line-height: 10px; */
}
.header-row{
    position: absolute;
    margin-top: 5px;
    z-index: 2;
    float: right;
    position: relative;
}
.header-ul{
    margin-top: 10px;
    width: auto;
}
.header-ul li{
    float:left;
    list-style: none;
    border-right: 1px solid;
    border-color: #fff;
    margin-left: 10px;
    /* margin-top: 5px; */
    /* padding-left: 5px; */
    padding-right: 10px;
}
.header-span, .header-a{
    color: #fff;
    font-size: 13px;
}
.header-a:link{
    color: #fff;
}
</style>
