import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
Vue.use(Router)
const IndexRoute = {
    path: '/',
    component: Index,
    children: []
  }
  let routes = [
    IndexRoute,
    {
      path: '/login',
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]

const routerContext = require.context('./', true, /index\.js$/)
console.log(routerContext.keys())
routerContext.keys().forEach(route => {
    if(route.startsWith('./index')) return
    const routerModule = routerContext(route)
    IndexRoute.children = [
        ...IndexRoute.children,
        ...(routerModule.default || routerModule)
      ]
})


export default new Router({
    mode: 'hash',
    routes: routes
})