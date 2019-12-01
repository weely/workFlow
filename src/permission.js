import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import { getToken } from '@/utils/auth' // get token from cookie
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // 路由白名单

router.beforeEach(async (to, from, next) => {
  // 开启进度条
  NProgress.start()

  // 设置当前页标题
  document.title = getPageTitle(to.meta.title)

  // 判断用户是否登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 已登录，跳转到首页
      next({ path: '/' })
      NProgress.done()
    } else {
      // 通过getInfo接口确定用户权限
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户信息
          // 注意：角色需为数组对象！例如：['admin'] 或，['developer','editor']
          const { roles } = await store.dispatch('user/getInfo')
          // 基于角色生成路由map
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // 动态添加可访问路由
          router.addRoutes(accessRoutes)
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // 清除token跳转到登录页
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* 未登录，无accessToken */

    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单中路由直接continue
      next()
    } else {
      // 其他路由跳转到登录页面.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 结束顶部进度条
  NProgress.done()
})
