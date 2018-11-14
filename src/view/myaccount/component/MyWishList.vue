<template>
  <div class="my-wish-list">
    <el-row>
      <el-col :span="8" :xs="24" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <router-link to="register">
            <img :src="imgList.idView" class="image">
          </router-link>
          <div style="padding: 14px;">
            <router-link to="register">
              <span>好吃的汉堡</span>
            </router-link>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  name: 'MyWishList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgList: [
        {id: 1, idView: require('@/assets/images/timg.jpg')}
      ],
      currentDate: '2018-11-05',
      wishList: []
    }
  },
  methods: {
    getMyWishList () {
      let that = this
      let params = {
        userId: this.userInfo.userId
      }
      api.postC('/user/query-my-wish-List', params).then(data => {
        if (data.code === '0') {
          that.wishList = data.list
          debugger
          console.log(that.wishList)
        } else {

        }
      })
    }
  },
  computed: {
    userInfo () {
      // let user = JSON.parse(this.$store.state.user)
      return JSON.parse(sessionStorage.getItem('user'))
    }
  },
  created () {
    this.getMyWishList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
