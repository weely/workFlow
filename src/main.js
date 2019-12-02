import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import '@/styles/index.scss' // 全局css样式
import App from './App.vue'
import router from './router'
import store from './store' // 状态管理
import './icons' // icon
import './permission' // 权限控制
import * as filters from './filters' // 全局过滤器，格式化部分数据

/* eslint-disable no-unused-vars */
// 开发使用mock模拟后端数据
// import mock from '../mock'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // 设置 element-ui 默认 size
})

// 注册全局有效的过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false // 阻止启动生产消息

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
