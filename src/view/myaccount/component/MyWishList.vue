<template>
  <div class="my-wish-list">
    <el-row>
      <el-col :span="4" :xs="24" v-for="item in wishList" :key="item.id">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <router-link to="register">
            <img :src="img+item.picture" class="image" style="heght:100%;width:100%">
          </router-link>
          <div style="padding: 14px;">
            <router-link to="register">
              <span>{{item.name}}</span>
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
      wishList: [],
      img: 'http://www.gugualao.top/img/'
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
