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
         <el-row>
            <div class="my-account-row-div"></div>
            <div class="grid-content bg-purple-dark"></div>
        </el-row>
        <el-col :span="24" class="breadcrumb-container">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{ path: item.path }">
                    <!-- {{item.name }} -->
                    <a class="breadcrumb-a" href="">{{ item.name }}</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-main>
           <router-view/>
        </el-main>
        <myfooter></myfooter>
        <!-- <el-footer>
            <el-row class="footer-row">
                <el-col :span="6" class="footer-col">
                    <strong class="title">CORPORATE</strong>
                     <ul class="footer-ul">
                        <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/about-visiontek" title="About us">About us</a>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/contact" title="Contact us">Contact us</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/customer/account" title="My account">My account</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/sales/order/history" title="Orders history">Orders history</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/catalogsearch/advanced" title="Advanced search">Advanced search</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/news.html" title="News">News</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/reviews-awards.html" title="Reviews &amp; Awards">Reviews &amp; Awards</a>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="6">
                    <strong class="title">CONTACT INFORMATION</strong>
                    <ul class="footer-ul">
                        <li>
                            <p><i class="el-icon-location"></i><b>Address:</b><br><span class="contact-span">105 Prairie Lake Rd Unit C, East Dundee, IL 60118</span></p>
                            </li>
                        <li>
                            <p><i class="el-icon-phone"></i><b>Phone:</b><br><span>(866) 883-5411</span></p>
                        </li>
                         <li>
                            <p><i class="el-icon-message"></i><b>Email:</b><br> <a href="mailto:support@visiontek.com">support@visiontek.com</a></p>
                        </li>
                         <li>
                            <p><i class="el-icon-time"></i><b>Working Days/Hours::</b><br><span> Mon - Fri / 8:00AM - 5:00PM CST</span></p>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="6">
                    <strong class="title">CUSTOMER SERVICE</strong>
                     <ul class="footer-ul">
                       <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/about-visiontek" title="About us">Product Support</a>
                        </li>
                        <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/contact" title="Contact us">Terms of Service</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/customer/account" title="My account">Privacy Policy</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/sales/order/history" title="Orders history">Warranty Information</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/catalogsearch/advanced" title="Advanced search">Warranty Registration</a>
                        </li>
                         <li>
                            <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/news.html" title="News">RMA Request</a>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="6">
                    <strong class="title">BE THE FIRST TO KNOW</strong>
                    <ul class="footer-ul">
                        <li>
                            <span>Get all the latest information on Events,<br>Sales and Offers. Sign up for newsletter today.</span>
                        </li>
                        <li  style="margin-top:20px;">
                            <span for="footer_newsletter">Enter your email address</span>
                            <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
                                <el-input v-model="form.email"></el-input>
                                <el-button type="primary" @click="onSubmit('form')"><span>Subscribe</span></el-button>
                                <el-form-item style="margin-left:0px;" prop="email">
                                    <el-input v-model="form.email"></el-input>
                                    <el-button type="primary" @click="onSubmit('form')"><span>Subscribe</span></el-button>
                                </el-form-item>
                            </el-form>
                        </li>
                    </ul>
                    <p style="margin-bottom: 15px;line-height: 1.5;">Get all the latest information on Events,<br>Sales and Offers. Sign up for newsletter today.</p>
                    <label for="footer_newsletter" style="margin-top:50px;margin-bottom:15px;">Enter your email address</label>
                    <form class="form subscribe" novalidate="novalidate" action="https://www.visiontek.com/newsletter/subscriber/new/" method="post" id="newsletter-validate-detail">
                        <div class="field newsletter">
                            <label class="label" for="footer_newsletter"><span>Sign Up for Our Newsletter:</span></label>
                            <div class="control">
                                <input name="email" type="email" id="footer_newsletter" data-validate="{required:true, 'validate-email':true}">
                            </div>
                        </div>
                        <div class="actions">
                            <button class="action subscribe primary" title="Subscribe" type="submit">
                                <span>Subscribe</span>
                            </button>
                        </div>
                    </form>
                </el-col>
            </el-row>
        </el-footer> -->
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
