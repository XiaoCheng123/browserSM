import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  **/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/studentBM',
    component: Layout,
    redirect: 'noredirect',
    name: '学生信息管理',
    icon: 'zujian',
    children: [
      { path: 'searchStudent', name: '查找学生', icon: 'zonghe', component: _import('studentBM/searchStudent'), meta: { role: ['admin', 'editor'] } },
      { path: 'addStudent', name: '添加学生', icon: 'zonghe', component: _import('studentBM/addStudent'), meta: { role: ['admin'] } },
      { path: 'deleteStudent', name: '删除学生', icon: 'zonghe', component: _import('studentBM/deleteStudent'), meta: { role: ['admin'] } },
      { path: 'reviseStudent', name: '修改学生', icon: 'zonghe', component: _import('studentBM/reviseStudent'), meta: { role: ['admin'] } }
    ]
  },

  {
    path: '/studentGM',
    component: Layout,
    redirect: 'noredirect',
    name: '学生成绩管理',
    icon: 'zujian',
    children: [
      { path: 'searchGrade', name: '查找成绩', icon: 'zonghe', component: _import('studentGM/searchGrade'), meta: { role: ['admin', 'editor'] } },
      { path: 'setGrade', name: '添加成绩', icon: 'zonghe', component: _import('studentGM/setGrade'), meta: { role: ['admin'] } },
      { path: 'deleteGrade', name: '删除成绩', icon: 'zonghe', component: _import('studentGM/deleteGrade'), meta: { role: ['admin'] } },
      { path: 'reviseGrade', name: '修改成绩', icon: 'zonghe', component: _import('studentGM/reviseGrade'), meta: { role: ['admin'] } }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
