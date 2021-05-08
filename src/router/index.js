import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import(/* webpackChunkName: "views" */ '@/views/index.vue'),
            hidden: true
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "views" */ '@/views/login'),
            hidden: true
        },
        {
            path: '/info',
            name: 'info',
            component: () => import(/* webpackChunkName: "views" */ '@/views/info'),
            meta: {
                title: '上传头像'
            }
        }
    ]
})