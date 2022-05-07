<template>
    <el-row>
      <el-col :span="2">
        <HanderSquare />
      </el-col>
      <el-col :span="16">
        <HeaderMenu :active="handers.activeIndex"/>
      </el-col>
      <el-col :span="6">
        <div class="handermes">
          <div class="handerMe">
            <el-tooltip
                class="box-item"
                effect="dark"
                content="放大/缩小"
                placement="bottom"
            >
              <el-image fit="fill" v-if="!handers.isFullscreen" src="/src/assets/magnify.png" @click="clickFullscreen(true)" class="elImage"/>
              <el-image fit="fill" v-else src="/src/assets/lessen.png" @click="clickFullscreen(false)" class="elImage"/>
            </el-tooltip>
          </div>
          <div class="handerMe">
            <el-tooltip
                class="box-item"
                effect="dark"
                content="语言切换"
                placement="bottom"
            >
              <HanderLang/>
            </el-tooltip>
          </div>
          <div class="handerM">
            <el-tooltip
                class="box-item"
                effect="dark"
                content="主题色"
                placement="bottom"
            >
              <ChangeTheme/>
            </el-tooltip>
          </div>
          <div class="handerMe">
            <el-tooltip
                class="box-item"
                effect="dark"
                content="消息通知"
                placement="bottom"
            >
              <HanderBadge/>
            </el-tooltip>
          </div>
          <div>
            <el-dropdown trigger="click">
              <el-avatar :size="50" src="/src/assets/tuox.jpeg" />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>{{ $t('header.dashboard') }}</el-dropdown-item>
                  <el-dropdown-item divided>{{ $t('header.logOut') }}</el-dropdown-item>
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
//.elMenuDemo {
//  background-color: #FFFFFF;
//  width: 100%;
//  margin-top: 1vh;
//  height: 40px;
//  border-bottom: none !important;
//  font-size: 30px;
//  .elMenuItem {
//    font-size: 30px;
//    font-weight: 500;
//  }
//}
.handermes {
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: right
}
.handerM {
  margin-right: 15px;
  overflow: hidden;
}
.handerMe {
  margin-right: 15px;
  margin-top: 6px;
  overflow: hidden;
}
.elImage {
  width: 2.5em;
  height: 2.5em
}
</style>