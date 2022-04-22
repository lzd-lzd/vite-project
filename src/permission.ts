import router from './router';
import store from './store/index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
    NProgress.start();
    const meta = to.meta || {};
    if(meta.menu != undefined){
        store.commit('SET_IS_MENU', meta.menu);
    }
    next();
});

router.afterEach(to => {
    NProgress.done();
});