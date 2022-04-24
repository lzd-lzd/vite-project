<template>
  <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      router
  >
    <el-menu-item index="/HomeMin" @click="open('/HomeMin')">{{ $t('header.dashboard') }}</el-menu-item>
    <el-menu-item index="/HomePage" @click="open('/HomePage')">{{ $t('header.personage') }}</el-menu-item>
    <el-menu-item index="/hobby" @click="open('/hobby')">{{ $t('header.interest') }}</el-menu-item>
    <el-menu-item index="/television" @click="open('/television')">{{ $t('header.TV') }}</el-menu-item>
    <el-menu-item index="/track" @click="open('/track')">{{ $t('header.activity') }}</el-menu-item>
    <el-menu-item index="/skill" @click="open('/skill')">{{ $t('header.skill') }}</el-menu-item>
    <el-menu-item index="/note" @click="open('/note')">{{ $t('header.note') }}</el-menu-item>
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

const open = ( indexPath: any ) => {
  store.commit('handers/active', indexPath);
}

</script>

<style scoped>
.el-menu-demo {
  border-bottom: none;
}
</style>