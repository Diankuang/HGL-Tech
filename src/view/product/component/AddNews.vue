<template>
    <div class="add-news">
        <ueditor :model="content"></ueditor>
        <button @click="check">check</button>
    </div>
</template>
<script>
import ueditor from './ueditor'

export default {
  name: 'AddNews',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content: ''
    }
  },
  methods: {
    check () {
      alert(this.content)
    }
  },
  components: {ueditor}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
