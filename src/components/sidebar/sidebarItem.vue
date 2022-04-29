<template>
  <template v-for="item in menu">
      <el-menu-item :index="item.index" v-if="item.childern.length <= 0">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    <el-sub-menu :index="item.index" v-else>
          <template #title>
            <el-icon></el-icon>
            <span>{{ item.name }}</span>
          </template>
         <sidebar-item :menu="item.childern"/>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps({
  menu: Array
})
const { menu } = toRefs(props);

</script>

<style scoped>

</style>