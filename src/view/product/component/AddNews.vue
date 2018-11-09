<template>
<<<<<<< HEAD
     <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      content: null,
      editorOption: {}
    }
  },
  methods: {
    onEditorBlur () {
      // 失去焦点事件
      console.log('失去焦点事件')
    },
    onEditorFocus () {
      // 获得焦点事件
      console.log('获得焦点事件')
      console.log(this.content)
    },
    onEditorChange () {
      // 内容改变事件
      console.log('内容改变事件')
    }
  },
  components: {quillEditor}
}
</script>
<style>
=======
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
>>>>>>> 0687c25336a63863a7d76ec4b5fa0e84bd1efb73
</style>
