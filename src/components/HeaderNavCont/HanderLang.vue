<template>
  <el-dropdown  trigger="click"
                @command="handleSetLanguage">
    <span style="font-size: 14px">{{ proxy.utils.findAllDataDict(language,'lang') }}</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh">简体中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, getCurrentInstance, ref } from "vue";
import { useI18n } from 'vue-i18n'//要在js中使用国际化

const { proxy } = getCurrentInstance();
const store = useStore();
let language = computed(()=>{ return store.state.handers.language });

const handleSetLanguage = (res) =>{
  store.commit('handers/languag', res);
  proxy.$i18n.locale = res;
};
</script>

<style scoped>

</style>