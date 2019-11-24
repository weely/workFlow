import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 全局注册svg-icon
Vue.component('svg-icon', SvgIcon)

// 引入当前目录的svg目录下所有.svg文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
