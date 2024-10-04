import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import shebeileixing from '@/views/modules/shebeileixing/list'
    import yuangong from '@/views/modules/yuangong/list'
    import shebeixinghao from '@/views/modules/shebeixinghao/list'
    import shebeiweixiu from '@/views/modules/shebeiweixiu/list'
    import dingjianxinxi from '@/views/modules/dingjianxinxi/list'
    import hetongxinxi from '@/views/modules/hetongxinxi/list'
    import peijiancaigou from '@/views/modules/peijiancaigou/list'
    import kehuxinxi from '@/views/modules/kehuxinxi/list'
    import shebeixinxi from '@/views/modules/shebeixinxi/list'
    import shebeibaoyang from '@/views/modules/shebeibaoyang/list'
    import peijianxinxi from '@/views/modules/peijianxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/shebeileixing',
        name: '设备类型',
        component: shebeileixing
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/shebeixinghao',
        name: '设备型号',
        component: shebeixinghao
      }
      ,{
	path: '/shebeiweixiu',
        name: '设备维修',
        component: shebeiweixiu
      }
      ,{
	path: '/dingjianxinxi',
        name: '定检信息',
        component: dingjianxinxi
      }
      ,{
	path: '/hetongxinxi',
        name: '合同信息',
        component: hetongxinxi
      }
      ,{
	path: '/peijiancaigou',
        name: '配件采购',
        component: peijiancaigou
      }
      ,{
	path: '/kehuxinxi',
        name: '客户信息',
        component: kehuxinxi
      }
      ,{
	path: '/shebeixinxi',
        name: '设备信息',
        component: shebeixinxi
      }
      ,{
	path: '/shebeibaoyang',
        name: '设备保养',
        component: shebeibaoyang
      }
      ,{
	path: '/peijianxinxi',
        name: '配件信息',
        component: peijianxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
