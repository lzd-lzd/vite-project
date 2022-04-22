<template>
    <el-row>
      <el-col :span="7">
        <HanderSquare />
      </el-col>
      <el-col :span="11">
        <HeaderMenu :active="handers.activeIndex"/>
      </el-col>
      <el-col :span="6">
        <div class="handermes">
          <div class="handerMe">
            <el-image fit="fill" v-if="!handers.isFullscreen" src="/src/assets/magnify.png" @click="clickFullscreen(true)" class="elImage"/>
            <el-image fit="fill" v-else src="/src/assets/lessen.png" @click="clickFullscreen(false)" class="elImage"/>
          </div>
          <div class="handerMe">
            <HanderLang/>
          </div>
          <div class="handerM">
            <ChangeTheme/>
          </div>
          <div class="handerMe">
            <HanderBadge/>
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
import HanderLang from "./HanderLang.vue";
import HanderBadge from "./HanderBadge.vue";
import screenfull from 'screenfull';
import { useStore } from 'vuex';

const store = useStore();
const handers = computed(() => { return store.state.handers } )

const clickFullscreen =(isFscreen) =>{
  if(!screenfull.isEnabled){
    return;
  }
  screenfull.toggle();
  store.commit('handers/isFscreen', isFscreen);
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
.handermes {
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: right
}
.handerM {
  margin-right: 15px;
}
.handerMe {
  margin-right: 15px;
  margin-top: 6px
}
.elImage {
  width: 2.5em;
  height: 2.5em
}
</style>