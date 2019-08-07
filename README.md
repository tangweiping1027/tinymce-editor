# tinymce-editor

> 一个 tinymce-vue 自己封装的编辑器

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 项目应用

npm install tinymce-editor -D

```js
import tinymceEditor from 'tinymce-editor'
Vue.use(tinymceEditor)
```

```js
<template>
  <div>
    {{ msg }}
    <tinymce-editor v-model="msg" :disabled="disabled" @onClick="onClick" ref="editor"></tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      disabled: false
    };
  },
  methods: {
    //鼠标单击的事件
    onClick(e, editor) {},
    //清空内容
    clear() {
      this.$refs.editor.clear();
    }
  }
};
</script>

```

项目根目录下创建 public

然后加入 tinmce 静态文件

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
