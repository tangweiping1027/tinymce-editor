import TinymceEditor from './index.vue'
const Editor = {
  install(Vue, options) {
    Vue.component(TinymceEditor.name, TinymceEditor);
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TinymceEditor);
}
export default Editor
