import {
    createStore
} from 'vuex';
import handers from "./modules/handers";
const store = {
    state: {
        menu: false, //左侧导航栏是否显示
    },
    mutations: {
        SET_IS_MENU(state: any, name: any) {
            state.menu = name;
        }
    },
    modules: {
        handers
    }
}
export default createStore(store)