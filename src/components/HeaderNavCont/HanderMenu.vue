<template>
  <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      router
      @open="handleOpen"
  >
    <el-menu-item index="/HomeMin" @click="open('/HomeMin')">首页</el-menu-item>
    <el-menu-item index="/HomePage" @click="open('/HomePage')">personage homepage</el-menu-item>
    <el-menu-item index="/hobby" @click="open('/hobby')">hobby</el-menu-item>
    <el-menu-item index="/television" @click="open('/television')">Orders</el-menu-item>
    <el-menu-item index="/track" @click="open('/track')">aaaaaa</el-menu-item>
    <el-menu-item index="/skill" @click="open('/skill')">zzzzzz</el-menu-item>
    <el-menu-item index="/note" @click="open('/note')">笔记便签</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
  active: String
})
const { active } = toRefs(props);

const open = ( indexPath ) => {
  store.commit('handers/active', indexPath);
}

</script>

<style scoped>
.el-menu-demo {
  border-bottom: none;
}
</style>