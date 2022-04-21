import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

const routes = [{
       path: '/',
       redirect: '/Home'
    },
    {
        path: '/Home',
        name: '首页',
        component: Home,
        children: [{
            path: '/HomeMin',
            name: '首页详情',
            component: () =>
                import('@/views/Home/HomeMin.vue')
            },
            {
                path: '/HomePage',
                name: '个人主页',
                component: () =>
                    import('@/views/HomePage/HomePage.vue')
            },
            {
                path: '/hobby',
                name: '兴趣爱好',
                component: () =>
                    import('@/views/hobby/hobby.vue')
            },
            {
                path: '/television',
                name: '追番日常',
                component: () =>
                    import('@/views/television/television.vue')
            },
      ]
    },
    {
        path: '/:pathMatch(.*)',
        name: '/404',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;