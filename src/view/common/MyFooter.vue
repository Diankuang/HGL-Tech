<template>
    <div id="my-footer">
        <el-footer>
        <el-row class="footer-row">
            <el-col :sm="6" class="footer-col" :xs="24">
                <strong class="title">CORPORATE</strong>
                    <ul class="footer-ul">
                    <li>
                        <i class="el-icon-caret-right"></i><router-link to="/about-us">About us</router-link>
                    </li>
                    <li>
                        <i class="el-icon-caret-right"></i><router-link to="/contact-us">Contact us</router-link>
                    </li>
                        <li>
                        <i class="el-icon-caret-right"></i><router-link to="/my-account">My account</router-link>
                    </li>
                        <li>
                        <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/sales/order/history" title="Orders history">Orders history</a>
                    </li>
                        <li>
                        <!-- <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/catalogsearch/advanced" title="Advanced search">Advanced search</a> -->
                    </li>
                        <li>
                        <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/news.html" title="News">News</a>
                    </li>
                        <li>
                        <!-- <i class="el-icon-caret-right"></i><a href="https://www.visiontek.com/reviews-awards.html" title="Reviews &amp; Awards">Reviews &amp; Awards</a> -->
                    </li>
                </ul>
            </el-col>
            <el-col :sm="6" :xs="24">
                <strong class="title">CONTACT INFORMATION</strong>
                <ul class="footer-ul">
                    <li>
                        <p><i class="el-icon-location"></i><b>Address:</b><br><span class="contact-span">105 Prairie Lake Rd Unit C, East Dundee, IL 60118</span></p>
                        </li>
                    <li>
                        <!-- <i class="el-icon-phone"></i> -->
                        <p><i class="el-icon-phone"></i><b>Phone:</b><br><span class="contact-span">(866) 883-5411</span></p>
                    </li>
                        <li>
                        <!-- <i class="el-icon-phone"></i> -->
                        <p><i class="el-icon-message"></i><b>Email:</b><br> <a href="mailto:support@visiontek.com" style="padding-left: 8px;">support@visiontek.com</a></p>
                    </li>
                        <li>
                        <!-- <i class="el-icon-phone"></i> -->
                        <p><i class="el-icon-time"></i><b>Working Days/Hours::</b><br><span class="contact-span"> Mon - Fri / 8:00AM - 5:00PM CST</span></p>
                    </li>
                </ul>
            </el-col>
            <el-col :sm="6" :xs="24">
                <strong class="title">CUSTOMER SERVICE</strong>
                    <ul class="footer-ul">
                    <li>
                        <i class="el-icon-caret-right"></i><router-link to="/support"> Support</router-link>
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
            <el-col :sm="6" :xs="24">
                <strong class="title">BE THE FIRST TO KNOW</strong>
                <ul class="footer-ul">
                    <li>
                        <span class="contact-span">Get all the latest information on Events,<br>Sales and Offers. Sign up for newsletter today.</span>
                    </li>
                    <li  style="margin-top:20px;">
                        <span for="footer_newsletter" class="contact-span">Enter your email address</span>
                        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
                            <el-input v-model="form.email" class="footer-el-input"></el-input>
                            <el-button type="primary" @click="onSubmit('form')"><span>Subscribe</span></el-button>
                        </el-form>
                    </li>
                </ul>
            </el-col>
        </el-row>
        </el-footer>
    </div>
</template>

<script>
export default {
  name: 'MyFooter',
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

<style scope>
.el-footer{
    margin: 0px;
    padding: 0px;
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
    /* margin-bottom:20px; */
    line-height:30px;
    padding-top: 20px;
    text-align: left;
}
.el-menu-item, .el-submenu__title {
    height: 30px;
    /* padding: 0; */
    position: relative;
    line-height: 1;
    /* border-bottom: 1px solid #ddd; */
    color: #777;
    padding: 8px 15px;
    text-align: left;
}
.footer-col{
    /* text-align: left; */
    position: relative;
}
/* .footer-menu{
    margin: 30px;
    padding-left: 26%;
} */
p{
    display: inline-block;
    vertical-align: top;
    margin: 0;
}
.el-form-item__content{
    margin-left: 0px;
}
.footer-el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 50%;
    height: 30px;
}
.footer-el-input__inner {
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
a:hover {color: #777777; text-decoration:underline;} /*鼠标移近：红色、下划线 */
/* span{
    color: #777777;
    font-size: 0.9rem;
} */
.contact-span{
    padding-left: 8px;
    color: #777777;
}
</style>
