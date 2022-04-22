export default {
    namespaced: true,
    state: {
        activeIndex: '/HomeMin', //顶部导航栏
        isFullscreen: false, //是否全屏
        language: 'zh', //语言
        primaryColor: '#409eff', //颜色
        Colorstyle: "",
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
        },
        primaryColor(state: any, name: any){
            state.primaryColor = name
        },
        colorstyle(state: any, name: any){
            state.Colorstyle = name
        }
    }
}