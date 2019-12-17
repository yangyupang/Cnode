import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CnodeBasis from '../views/cnode/CnodeBasis'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        meta: {
            title: "登录"
        },
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/cnode',
        component: CnodeBasis,
        children: [{
            meta: {
                title: '首页'
            },
            path: '',
            name: 'cnode',
            component: () =>
                import ('../views/cnode/Cnode.vue'),
        }]
    },
    {
        path: '/content',
        component: CnodeBasis,
        children: [{
            meta: {
                title: '首页'
            },
            path: '',
            name: 'content',
            component: () =>
                import ('../views/cnode/Content.vue'),
        }]
    },
    {
        path: '*',
        component: () =>
            import ('../views/Error.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let user = localStorage.getItem('user')
    next()
        // user ? next() :next('/login')
})

export default router