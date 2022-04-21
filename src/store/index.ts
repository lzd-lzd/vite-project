import {
    createStore
} from 'vuex';
import handers from "./modules/handers";
const store = {
    modules: {
        handers
    }
}
export default createStore(store)