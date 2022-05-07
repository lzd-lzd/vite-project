<template>
  <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      router
  >
    <el-menu-item class="el-menu_mo" index="/HomeMin" @click="open('/HomeMin')">{{ $t('header.dashboard') }}</el-menu-item>
    <el-menu-item class="el-menu_mo" index="/HomePage" @click="open('/HomePageHome')">{{ $t('header.personage') }}</el-menu-item>
    <el-menu-item class="el-menu_mo" index="/hobby" @click="open('/hobby')">{{ $t('header.interest') }}</el-menu-item>
    <el-menu-item class="el-menu_mo" index="/television" @click="open('/television')">{{ $t('header.TV') }}</el-menu-item>
    <el-menu-item class="el-menu_mo" index="/track" @click="open('/track')">{{ $t('header.activity') }}</el-menu-item>
    <el-menu-item class="el-menu_mo" index="/skill" @click="open('/skill')">{{ $t('header.skill') }}</el-menu-item>
    <el-menu-item class="el-menu_mo" index="/note" @click="open('/note')">{{ $t('header.note') }}</el-menu-item>
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
  margin-left: 3vh;
}
.el-menu_mo {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  margin: 0 10px;
}
</style>