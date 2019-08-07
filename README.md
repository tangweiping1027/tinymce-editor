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

vue 项目中 main.js 引入

```js
import tinymceEditor from 'tinymce-editor'
Vue.use(tinymceEditor)
```

```js
<template>
  <div>
    {{ msg }}
    <tinymce-editor v-model="msg" :disabled="disabled" :plugins="plugins" @onClick="onClick" ref="editor"></tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      disabled: false,
      plugins: ""
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

plugins 插件自己配置

```js
lists  列表插件允许您添加编号和项目符号列表到TinyMCE。要启用高级列表(例如alpha编号列表、方框)，还应该启用高级列表(advlist)插件。
advlist  advlist插件通过向控件添加CSS列表样式类型样式的数字格式和项目符号类型，扩展了核心的bullist和numlist工具栏控件。
image 这个插件允许用户将图片插入TinyMCE的可编辑区域。插件还在插入菜单下添加了一个工具栏按钮和一个插入/编辑图像菜单项。
imagetools Image Tools (imagetools)插件向编辑器中的图像添加上下文编辑工具栏。
media 媒体插件增加了用户向可编辑区域添加HTML5视频和音频元素的能力。它还在“插入”菜单和工具栏按钮下添加了“插入/编辑视频”项。
table  table插件将表管理功能添加到TinyMCE。它还添加了一个新的菜单栏项表，在其下拉列表中包含各种选项，包括Insert表和修改单元格、行和列的选项，以及具有相同功能的工具栏按钮。
bbcode  这个插件可以通过将类似[b]的标签转换为<strong>，然后当用户提交内容时返回，从而以所见即所见的方式编辑BBCode。
anchor 此插件向工具栏添加锚/书签按钮，该按钮在编辑器的光标插入点插入锚。它还在Insert菜单下添加菜单项锚。
autolink 当用户输入一个有效的、完整的URL时，Autolink插件会自动创建超链接。
autoresize 这个插件会自动调整编辑器的大小以适应其中的内容。它通常用于防止编辑器在用户键入可编辑区域时无限扩展
code 这个插件添加了一个工具栏按钮，允许用户编辑WYSIWYG视图隐藏的HTML代码。它还在Tools菜单下添加菜单项源代码。
codesample 代码示例插件(codesample)允许用户在可编辑区域中插入和嵌入语法颜色突出显示的代码片段。它还在工具栏上添加了一个按钮，单击该按钮将打开一个对话框以接受原始代码输入。
paste 这个插件将过滤/清除粘贴自Microsoft Word的内容。这个插件的强大之处在于它的选项，所以请花点时间在下面了解更多关于它们的信息。
nonbreaking 这个插件添加了一个按钮，用于插入不间断的空间实体在当前插入符号位置(光标插入点)。它还在Insert菜单下拉列表和工具栏按钮下添加了一个菜单项nonbreakspace。
insertdatetime insertdatetime插件提供了工具栏控件和菜单项Insert date/time(在Insert菜单下)，用户可以轻松地将当前日期和/或时间插入光标插入点的可编辑区域。
fullscreen 这个插件为TinyMCE添加了全屏编辑功能。当工具栏按钮被按下时，可编辑区域将填充浏览器的视窗。该插件在视图菜单下添加了一个工具栏按钮和一个全屏菜单项。
searchreplace 这个插件将搜索/替换对话框添加到TinyMCE。它还添加了一个工具栏按钮和“查找和替换”菜单项。
pagebreak 这个插件添加了分页符支持，使用户能够在可编辑区域中插入分页符。当CMS使用特殊的分隔符将内容分成页面时，这非常有用。
hr
preview 这个插件在工具栏上添加了一个预览按钮。按下此按钮将打开一个对话框，在预览模式下显示当前内容。它还在文件和视图菜单下拉列表下添加了一个菜单项预览。
print 这个插件向工具栏添加了一个打印按钮。它还向文件菜单下拉菜单添加了一个打印项。
autosave 如果用户对编辑器实例中的内容进行了修改，但没有提交修改，这个插件将向用户发出警告。它还在文件菜单下添加了一个菜单项“恢复最后的草稿”。它还向工具栏添加了一个可选按钮，如果您不打算使用菜单，这将非常有用。
charmap 这个插件向编辑器添加了一个带有特殊unicode字符映射的对话框，这些字符不能直接从键盘添加。对话框可以通过工具栏按钮(charmap)或作为插入>特殊字符添加的专用菜单项来调用。
directionality  这个插件向工具栏添加了方向性控件，使TinyMCE能够更好地处理从右向左编写的语言。它还为每个值添加了一个工具栏按钮，ltr表示从左到右的文本，rtl表示从右到左的文本。
fullpage  此插件允许用户编辑某些元数据和文档属性，如标题、关键字和描述。这是通过按下添加到工具栏的控件后出现的对话框来完成的。如果启用了代码插件，fullpage将在源代码视图中公开<head>、<body>和各种元标记。
legacyoutput legacyoutput插件更改TinyMCE的输出，生成遗留元素，如font、b、i、u、strike和use align属性。
link link插件允许用户将外部资源(如网站url)链接到文档中选定的文本。
noneditable 此插件允许您阻止用户编辑分配给mceNonEditable类的元素中的内容。
quickbars Quick Toolbar插件(quickbar)启用新的用户界面组件，帮助用户更快地创建内容。它可以用来创建类似于Medium、Quip和其他现代编辑工具的体验。
spellchecker 这个插件支持TinyMCE的拼写检查功能。它还在工具菜单下拉菜单下添加了一个工具栏按钮和菜单项拼写检查。
tabfocus 这个插件增加了tab in/out TinyMCE的可能性。
textpattern 文本模式插件匹配文本中的特殊模式，并对这些模式应用格式、替换文本或执行命令。
visualblocks 这个插件允许用户查看可编辑区域中的块级元素。它类似于所见即所得的隐藏字符功能，但在块级别。它还在视图菜单下拉菜单下添加了一个工具栏按钮和一个菜单项Show blocks。
wordcount 这个插件将计数单词的功能添加到TinyMCE编辑器中，方法是在状态栏的右边放置一个计数器。在状态栏中单击Word Count可以在计算单词和字符之间切换。可以使用“工具”下拉菜单项或“工具栏”按钮打开包含单词和字符计数的对话框。
```

项目根目录下创建 public

然后加入 tinymce 静态文件
