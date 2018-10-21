import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/Layout'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)


/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},

  {
    path: '/',
    component: Layout,
    redirect: '/article/list',
    name: '主页'
  }, {
    path: '/article',
    component: Layout,
    redirect: '/article/create',
    meta: {title: '文章管理', icon: 'edit'},
    alwaysShow: true,
    children: [
      {
        path: 'create',
        name: '发布文章',
        component: () => import('@/views/article/create'),
        meta: {title: '发布文章'}
      }, {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/article/edit'),
        name: '文章编辑',
        meta: {title: '文章编辑', noCache: true},
        hidden: true
      }, {
        path: 'list',
        name: '文章列表',
        component: () => import('@/views/article/list'),
        meta: {title: '文章列表'}
      }
    ]
  }
]

export default new Router({
  //mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

//异步挂载的路由,动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: '用户管理',
    alwaysShow: true,
    meta: {title: '用户管理', icon: 'user', roles: ['admin']},//页面需要的权限超级管理员
    children: [
      {
        path: 'list',
        name: '用户列表',
        component: () => import('@/views/users/list'),
        meta: {title: '用户列表', roles: ['admin']} //页面需要的权限超级管理员
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

