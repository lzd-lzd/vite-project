<template>
    <el-row>
      <el-col :span="7">
        <HanderSquare />
      </el-col>
      <el-col :span="11">
        <HeaderMenu />
      </el-col>
      <el-col :span="6">
        <div style="width: 100%;height:100%;display: flex;align-items: center;justify-content: right">
          <div style="margin-right: 15px;margin-top: 6px">
            <el-image fit="fill" v-if="!handers.isFullscreen" src="/src/assets/magnify.png" @click="clickFullscreen(true)" style="width: 2.5em;height: 2.5em"/>
            <el-image fit="fill" v-else src="/src/assets/lessen.png" @click="clickFullscreen(false)" style="width: 2.5em;height: 2.5em"/>
          </div>
          <div style="margin-right: 15px;margin-top: 6px">
            <el-dropdown>
              <span style="font-size: 14px">{{ handers.language }}</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="languag('简体中文')">简体中文</el-dropdown-item>
                  <el-dropdown-item @click="languag('English')">English</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            </div>
              <div style="margin-right: 15px">
            <ChangeTheme/>
              </div>
          <div style="margin-right: 15px">
            <el-badge is-dot class="item">
              <el-image fit="fill" src="/src/assets/tuoz_fill.png" style="width: 1.6em;height: 1.6em"/>
            </el-badge>
          </div>
          <div>
            <el-dropdown trigger="click">
              <el-avatar :size="50" src="/src/assets/tuox.jpeg" />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>首页</el-dropdown-item>
                  <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import ChangeTheme from "./changeTheme.vue";
import HanderSquare from "./HeaderSquare.vue";
import HeaderMenu from "./HanderMenu.vue";
import screenfull from 'screenfull';
import { useStore } from 'vuex';
const store = useStore();
const handers = computed(() => store.state.handers || {})

const clickFullscreen =(isFscreen) =>{
  if(!screenfull.isEnabled){
    return;
  }
  screenfull.toggle();
  store.commit('handers/isFscreen', isFscreen);
};
const languag = (res) =>{
  store.commit('handers/languag', res);
};
</script>

<style lang="scss" scoped>
.containerHander {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}

.handerImg {
  width: 40px;
  height: 40px;
}
.elMenuDemo {
  background-color: #FFFFFF;
  width: 100%;
  margin-top: 1vh;
  height: 40px;
  border-bottom: none !important;
  font-size: 20px;
  .elMenuItem {
    font-size: 15px;
    font-weight: 500;
  }
}

</style>