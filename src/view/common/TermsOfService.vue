<template>
    <div id="termsservice">
        <el-row class="termsservice-row">
          <el-row class="el-row-termsservice-strong">
            <strong>Terms Of Service</strong>
          </el-row>
          <el-row class="el-row-termsservice-title">
              <el-col :span="24" :xs="24" class="el-col-termsservice-content-col">
                    <strong>Information We Collect</strong><br>
                    <p>We receive and may store any information you enter on our websites. For example, we collect information from you when you place an order, or use any of our services.</p><br>
                    <p>The information we collect from you includes things like:</p><br>
                    <span>Your name</span><br>
                    <span>Your address</span><br>
                    <span>Your company information</span><br>
                    <span>Your e-mail address</span><br>
                    <span>Your phone number</span><br>
                    <span>Your payment information</span><br>
                </el-col>
            <!-- <el-col :span="6" :xs="24" class="el-col-termsservice-title">
                <strong>This Privacy Policy tells you:</strong><br>
                <p>What information we collect?</p><br>
                <p>How do we use the information we collect?</p><br>
                <p>How do we secure your personal information?</p><br>
                <p>Your choices regarding your personal information</p>
            </el-col>
            <el-col :span="16" :xs="24" class="el-col-termsservice-content">
                <el-col :span="24" :xs="24" class="el-col-termsservice-content-col">
                    <strong>Information We Collect</strong><br>
                    <p>We receive and may store any information you enter on our websites. For example, we collect information from you when you place an order, or use any of our services.</p><br>
                    <p>The information we collect from you includes things like:</p><br>
                    <span>Your name</span><br>
                    <span>Your address</span><br>
                    <span>Your company information</span><br>
                    <span>Your e-mail address</span><br>
                    <span>Your phone number</span><br>
                    <span>Your payment information</span><br>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-termsservice-content-col">
                    <strong>Information From Other Sources</strong><br>
                    <p>We may also receive information about you from other sources, including third parties that help us update, expand and analyze our records and identify new customers.</p><br>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-termsservice-content-col">
                    <strong>How Do We Use the Information We Collect</strong><br>
                    <p>We use the information we collect for things like:</p><br>
                    <span>Fulfilling orders and requests for products, services or information</span><br>
                    <span>Processing returns and exchanges</span><br>
                    <span>Delivering products</span><br>
                    <span>Marketing and advertising products and services</span><br>
                    <span>Conducting research and analysis</span><br>
                    <span>Establishing and managing your accounts with us</span><br>
                    <span>Communicating things like special events, promotions and surveys</span><br>
                    <p>We may send occasional e-mail updates with information about new products, software, or promotions.Operating, evaluating and improving our business</p>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-termsservice-content-col">
                    <strong>How Do We Protect the Information We Collect</strong><br>
                    <p>We may use the information we collect to improve our products, services, and bjdgroup.cc  website. We also use this information for auditing, research, and analysis. In addition, we send occasional e-mail updates with information about new products, software, or promotions. If you do not want to receive e-mails from BJD, you may notify us to remove you from our mailing list. We use reasonable security measures to protect the confidentiality of personal information under our control and appropriately limit access to it. We cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.</p>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-termsservice-content-col">
                    <strong>Your Choices Regarding the Information We Collect</strong><br>
                    <p>You may choose to:</p><br>
                    <span>Stop receiving marketing or promotional e-mails, direct mail, phone and mobile marketing communications</span><br>
                    <span>Update and correct your personal information</span><br>
                    <span> Cancel your account or request that we no longer use your information to provide you services</span><br>
                    <p>To do any of these, let us know by one of these methods:</p>
                    <span>Follow the directions in a marketing e-mail or direct mail or mobile communication that you receive from us.</span><br>
                    <span>Send an e-mail with your request and current contact information to 888@szbdd.com </span><br>
                    <span>Send a letter with your request and current contact information to our headquarters.</span><br>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-termsservice-content-col">
                    <strong>Links to Other Websites</strong><br>
                    <p>Our websites link to other websites, many of which have their own privacy policies. Be sure to review the privacy policy on the site you're visiting.</p>
                </el-col>
                <el-col :span="24" :xs="24"  class="el-col-termsservice-content-col">
                    <strong>Privacy Policy Updates</strong><br>
                    <p>We may need to update our Privacy Policy as our customers grow and evolve. If we make significant changes to the Privacy Policy, we'll post a prominent message on our website(s).</p>
                </el-col> -->
            <!-- </el-col> -->
          </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'TermsOfService',
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>

<style>
.termsservice-row{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
  margin-top: 20px;
}
.el-row-termsservice-strong{
    font-size: 24px;
    text-align: left;
    border-bottom: 1px solid #000000;
    margin: 20px 0 10px 0;
}
.el-col-termsservice-title{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
}
.el-col-termsservice-title p{
    margin: 5px 0 0 0;
}
.el-col-termsservice-content{
    margin: 20px 0px 0px 20px;
    text-align: left;
    font-size: 15px;
    border-left: 1px solid #ddd;
}
.el-col-termsservice-content-col{
    margin: 20px 0 20px 10px;
    text-align: left;
}
.el-col-termsservice-content-col p{
    /* margin: 5px 0 0 20px; */
}
.el-col-termsservice-content-col span{
    /* margin: 0 0 0 40px; */
    font-size: 14px;
}
</style>
