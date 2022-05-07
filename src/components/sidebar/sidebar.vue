<template>
  <el-scrollbar class="sidear-menu">
    <transition name="el-zoom-in-center">
        <div class="logo_title" v-show="show">后台模板</div>
    </transition>
    <el-menu
        unique-opened
        :show-timeout="200"
        class="el-menu-vertical-demo"
        active-text-color="#ffffff"
        background-color="#20222a"
        text-color="#e6e6e6"
        router
    >
      <sidebar-item :menu="arr"/>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import sidebarItem from "./sidebarItem.vue";
import { computed,ref } from "vue";
import { useStore } from 'vuex';

const show = ref(true);

const arr = [
  {
    name:"选项1",
    index: "/HomePage/HomePageHome",
    childern:[]
  },
  {
    name:"选项2",
    index: "/HomePage/Azsx",
    childern:[]
  },
  {
    name:"选项3",
    index: "/HomePage/Bzzz",
    childern:[]
  },
];

</script>

<style lang="scss">
.sidear-menu {
  width: 229px;
  user-select: none;
  height: 100%;
  background-color: #20222a;
  transition: width 0.2s;
  box-sizing: border-box;
  .el-menu {
    border: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
  }
  .logo_title {
    width: 100%;
    height: 50px;
    color: rgb(230, 230, 230);
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    display: block;
    font-weight: bold;
  }
}
.el-scrollbar .el-menu-vertical-demo {
  .is-active {
    background-color: rgba(0, 0, 0, 0.8);
  }
}
.el-scrollbar .el-menu-item.is-active:before {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: var(--el-color-primary);
  position: absolute;
}
</style>