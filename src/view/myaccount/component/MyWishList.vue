<template>
  <div class="my-wish-list">
    <el-row>
      <el-col :span="5" :xs="24" v-for="item in wishList" :key="item.id" class="wish-col">
        <el-card class="wish-card" shadow="hover">
          <router-link v-if="item.status === 1 " :to="{path: '/power-bank/'+item.productId}">
            <img :src="img+item.picture" class="image" style="heght:100%;width:100%">
          </router-link>
          <router-link v-if="item.status === 0 " :to="{path: '/temper-pro/'+item.productId}">
            <img :src="img+item.picture" class="image" style="heght:100%;width:100%">
          </router-link>
          <div style="padding: 14px;">
            <!-- <el-button type="text" class="button">操作按钮</el-button> -->
            <router-link v-if="item.status === 1 " :to="{path: '/power-bank/'+item.productId}">
              <span>{{item.name}}</span>
            </router-link>
            <router-link v-if="item.status === 0 " :to="{path: '/temper-pro/'+item.productId}">
              <span>{{item.name}}</span>
            </router-link>
            <p>{{item.price}}</p>
            <div class="bottom clearfix">
              <!-- <time class="time">{{ currentDate }}</time> -->
              <el-button type="text" class="button" @click="remove(item)">remove</el-button>
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
          console.log(that.wishList)
        } else {

        }
      })
    },
    remove (param) {
      let params = {id: param.id}
      api.postC('/user/remove-wish-list', params).then(data => {
        if (data.code === '0') {
          this.$router.go(0)
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
.wish-col{
  padding: 0 10px 0 0;
}
.button{
  text-align: center;
}
</style>
