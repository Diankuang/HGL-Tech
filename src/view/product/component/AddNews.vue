<template>
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
</style>
