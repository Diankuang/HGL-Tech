<template>
    <div id="afterSalePolicy">
        <el-row class="afterSalePolicy-row">
            <p style="margin-bottom:10px;">BJD committees to provide 30-Days for Return & Refund, 18 Months Quality Warranty and Lifetime Technical Support,.</p>
            <p>Detail Information are as follows:</p>
            <p>1. Return & Refund, 18-Months Warranty, Lifetime Technical Support</p>
            <el-col class="afterSalePolicy-row-col" :span="24" :xs="24" v-for="item in policyList" :key="item.id">
                <strong></strong>
                <p></p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'AfterSalePolicy',
  data () {
      return {
        policyList: []
      }
  }
}
</script>

<style>
.afterSalePolicy-row{
  display: block;
  border: 1px solid #ececec;
  border-radius: 8px;
  background: #fff;
  border-top: 4px solid #000000;
  padding: 15px 10px 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.08);
}
</style>
