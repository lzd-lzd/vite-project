export default {
    namespaced: true,
    state: {
        activeIndex: 2, //顶部导航栏
        isFullscreen: false, //是否全屏
        language: '简体中文' //语言
    },
    getters: {
        activeIndex(state: any) { return state.activeIndex },
    },
    mutations: {
        languag(state: any, name: any) {
            state.language = name
        },
        isFscreen(state: any, name: any){
            state.isFullscreen = name
        }
    }
}