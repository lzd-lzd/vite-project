import { createRouter, createWebHistory } from "vue-router";
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
                import('@/views/Home/HomeMin.vue'),
            meta: {
                menu: false
              }
            },
            {
                path: '/hobby',
                name: '兴趣爱好',
                component: () =>
                    import('@/views/hobby/hobby.vue'),
                meta: {
                    menu: true
                }
            },
            {
                path: '/television',
                name: '追番日常',
                component: () =>
                    import('@/views/television/television.vue'),
                meta: {
                    menu: true
                }
            },
            {
                path: '/track',
                name: '活动轨迹',
                component: () =>
                    import('@/views/track/track.vue'),
                meta: {
                    menu: true
                }
            },
            {
                path: '/skill',
                name: '技能扩展',
                component: () =>
                    import('@/views/skill/skill.vue'),
                meta: {
                    menu: true
                }
            },
            {
                path: '/note',
                name: '笔记便签',
                component: () =>
                    import('@/views/note/note.vue'),
                meta: {
                    menu: true
                }
            },
      ]
    },
    {
        path: '/HomePage',
        name: '个人主页',
        component: Home,
        children:[
            { path: '/', redirect: 'HomePageHome' },
            {
                path: 'HomePageHome',
                name: '个人主页',
                component: () =>
                    import('@/views/HomePage/HomePage.vue'),
                meta: {
                    menu: true
                },
            },
            {
                path: 'Azsx',
                name: '个人主页',
                component: () =>
                    import('@/views/HomePage/HomePageA.vue')
            },
            {
                path: 'Bzzz',
                name: '个人主页',
                component: () =>
                    import('@/views/HomePage/HomePageB.vue')
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
    history: createWebHistory(),
    routes
});

export default router;