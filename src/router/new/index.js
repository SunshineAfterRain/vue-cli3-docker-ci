export default [{
    path: 'new',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue')
}]