<template>
    <div id="afterSalePolicy">
        <el-row class="afterSalePolicy-row">
            <p style="margin-bottom:10px;">BJD committees to provide 30-Days for Return & Refund, 18 Months Quality Warranty and Lifetime Technical Support,.</p>
            <p>Detail Information are as follows:</p>
            <p>1. Return & Refund, 18-Months Warranty, Lifetime Technical Support</p>
            <p>• First. For all purchases through BJD direct store, if there goes any kinds of malfunction, we provide 30-Days for Return & Refund, 18-Months Quality Warranty and Lifetime Technical Support.</p>
            <p>Second. Return and Refund:
                We guarantee all of our products against quality defects within the defined period (eg, 30 Days for US buyers, for specific warranty period please refer to related local laws), customers could apply for return and refund under the condition that items (including accessories) are qualified for second sale.
                Products with no quality-related issues can be returned within warranty period of receiving your order, however, you will be responsible for all shipping fees. For defect products, we will cover the shipping charge.</p>
            <p>Third. If a product is not specifically listed, the warranty period is 18 months. plus lifetime technical support.</p>
            <p>2. For your own benefits, please mind the following information</p>
            <p>For a smooth return and refund, quality warranty and technical support, please follow these steps</p>
            <p>1. Please submit detail information of buyers account, or invoice
                2. Describe the malfunctions you had experienced
                3. Return, exchange and quality warranty are not compatible with the following conditions
            </p>
            <!-- <el-col class="afterSalePolicy-row-col" :span="24" :xs="24" v-for="item in policyList" :key="item.id">
                <strong style="font-size:17px;line-height:20px"><span>{{item.orderNo}}.{{item.title}}</strong>
                <p style="font-size:17px;line-height:20px">{{item.orderNo}}.{{item.title}}</p>
                <p v-for="content in item.detail" :key="content.id">{{content.orderNo}}.{{content.content}}</p>
            </el-col> -->
        </el-row>
    </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'AfterSalePolicy',
  data () {
    return {
      policyList: []
    }
  },
  methods: {
    getASPList () {
      let that = this
      api.post('/after-sale-policy/query-asp', null).then(data => {
        console.log(data)
        if (data.code === '0') {
          that.policyList = data.list
        } else {
          alert('AfterSalePolicy NUll')
        }
      })
    }
  },
  created () {
    this.getASPList()
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
