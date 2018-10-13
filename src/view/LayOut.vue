<template>
    <div id="layout">
        <myheader></myheader>
        <el-main>
            <el-col :span="24" class="breadcrumb-container">
                <strong class="title">{{$route.name}}</strong>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{path: item.path}">
                    {{ item.name }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
           <router-view/>
        </el-main>
    </div>
</template>

<script>
import myheader from '@/view/my-header/MyHeader'
export default {
  name: 'LayOut',
  data () {
    return {

    }
  },
  components: {myheader}
}
</script>

<style scoped>
/* .title{
    text-align: left;
} */
</style>
