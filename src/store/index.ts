import {
    createStore
} from 'vuex';
import handers from "./modules/handers";
import createPersistedState from "vuex-persistedstate";

const store = {
    state: {
        menu: false, //左侧导航栏是否显示
        isCollapse: true, //左侧导航栏是否展开
        theme: "", //主题
    },
    mutations: {
        SET_IS_MENU(state: any, name: any) {
            state.menu = name;
        }
    },
    modules: {
        handers
    },
    plugins: [createPersistedState()]
}
export default createStore(store)