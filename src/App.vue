<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    var type = JSON.parse(sessionStorage.getItem('user'))
    console.log(type)
    var u = this.$store.state.user
    console.log(u)
    // 在页面加载时读取sessionStorage里的状态信息
    if (type !== 'undefined') {
      this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(sessionStorage.getItem('user'))))
    }
    window.addEventListener('beforeunload', () => {
      const user = this.$store.state.user
      console.log(user)
      if (user != null) {
        sessionStorage.setItem('user', JSON.stringify(this.$store.state.user))
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px ;
  padding:0px;
  margin-top: 0px;
  padding-top: 0px;
}
*{
  margin: 0px;
  padding: 0px;
}
</style>
