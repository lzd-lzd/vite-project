export default {
    namespaced: true,
    state: {
        activeIndex: '/HomeMin', //顶部导航栏
        isFullscreen: false, //是否全屏
        language: 'zh', //语言
        color: "#000000", //颜色
    },
    mutations: {
        languag(state: any, name: any) {
            state.language = name
        },
        isFscreen(state: any, name: any) {
            state.isFullscreen = name
        },
        active(state: any, name: any){
            state.activeIndex = name
        }
    }
}