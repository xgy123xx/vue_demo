// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 使用element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 导入全局样式
import "../static/global/global.css"
// 导入iconfont图标
import "../static/global/font-awesome.css"

// 注册公共组件
import Xheader from "./components/Common/Xheader"
import Xfooter from "./components/Common/Xfooter"
Vue.component("Xheader",Xheader);
Vue.component("Xfooter",Xfooter);

// 挂载axios
import * as api from "./restful/api.js"
Vue.prototype.$http = api;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
