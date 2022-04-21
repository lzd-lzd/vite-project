import { createApp } from 'vue'
import App from './App.vue'
import "/public/css/index.scss";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import i18n from "./lang"

const app = createApp(App)

app.use(ElementPlus, {
    i18n: i18n,
    size: "small"
});
app.use(i18n)
app.use(Antd)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
