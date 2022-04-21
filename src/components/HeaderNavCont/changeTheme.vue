<template>
  <el-color-picker v-model="state.color" @change="changeTheme"></el-color-picker>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import { mix } from "@/utils/color";

const pre = "--el-color-primary";
// 白色混合色
const mixWhite = "#ffffff";
// 黑色混合色
const mixBlack = "#000000";
// 默认主题
const defaultTheme = "#409eff";

const node = document.documentElement;

const state = reactive({
  color: localStorage.getItem("primaryColor") || defaultTheme
});
  /**
   * @description: 更改主题
   * @param {String} color 颜色
   */
const changeTheme = (color = state.color) => {
    node.style.setProperty(pre, color);
    localStorage.setItem("primaryColor", color);
    // 这里是覆盖原有颜色的核心代码
    for (let i = 1; i < 10; i += 1) {
      node.style.setProperty(`${pre}-light-${i}`, mix(color, mixWhite, i * 0.1));
    }
    node.style.setProperty("--el-color-primary-dark", mix(color, mixBlack, 0.1));
    // 本地缓存style，样式持久化，你也可以存在后端
    localStorage.setItem("style", node.style.cssText);
};

changeTheme(state.color);

</script>

<style scoped>

</style>