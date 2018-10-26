<template>
    <div id="layout">
        <myheader></myheader>
        <!-- <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{path: item.path}">
                    <span class="breadcrumb-span">{{ item.name }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col> -->
         <!-- <el-row>
            <div class="my-account-row-div"></div>
            <div class="grid-content bg-purple-dark"></div>
        </el-row> -->
        <el-col :span="24" :xs="24" class="breadcrumb-container">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{ path: item.path }">
                    <!-- <router-link  class="breadcrumb-a">{{item.name }}</router-link> -->
                    <a class="breadcrumb-a" :href="item.path">{{ item.name }}</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-main>
           <router-view/>
        </el-main>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myheader from '@/view/my-header/MyHeader'
import myfooter from '@/view/my-footer/MyFooter'
export default {
  name: 'LayOut',
  data () {
    return {
      form: {
        email: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {myheader, myfooter},
  methods: {
    handleSelect (key, keyPath) {
      console.log(key + '==' + keyPath)
      this.$router.push(keyPath)
    },
    onSubmit (form) {
    //   console.log(form)
      this.$refs[form].validate((valid) => {
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

<style scoped>
/* .el-footer{
    padding: 0 0;
}
.footer-row{
    background-color: #F5F5F5;
    margin: 0px;
    padding: 30px 40px;
    position: relative;
    min-height: 1px;
}
.footer-ul{
    list-style:none;
    line-height:30px;
    padding-top: 20px;
    text-align: left;
}
.el-menu-item, .el-submenu__title {
    height: 30px;
    position: relative;
    line-height: 1;
    color: #777;
    padding: 8px 15px;
    text-align: left;
}
.footer-col{
    position: relative;
}
p{
    display: inline-block;
    vertical-align: top;
    margin: 0;
}
.el-form-item__content{
    margin-left: 0px;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 50%;
    height: 30px;
}
.el-input__inner {
    height: 30px;
}
.el-button--primary {
    color: #fff;
    background-color: rgb(3, 7, 12);
    border-color: rgb(3, 7, 12);
}
a{
    color: #777777;
}
a:link {color: #777777; text-decoration:none;}
a:hover {color: #777777; text-decoration:underline;}
span{
    color: #777777;
}
.contact-span{
    padding-left: 8px;
} */
.breadcrumb-container{
    padding: 10px;
    margin: 0;
    max-width: 100%;
    background-color: #171717;
    color: #fff;
    padding: 10px;
}
.breadcrumb-a{
    color: #fff;
}
.breadcrumb-a:hover{
    color:#fff;
}
.my-account-row-div{
  height: 60px;
  margin: 0px;
  padding: 0px;
  background-color: rgb(84, 92, 100);
  position: relative;
}
.el-icon-arrow-right{
    padding: 5px;
}
</style>
