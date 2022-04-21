<template>
  <div class="container">
    <el-container>
      <el-header>
<!--        顶部导航栏-->
          <HeaderNavCont/>
      </el-header>
      <el-container>
        <el-aside width="220px" v-if="false">
          <sidebar/>
        </el-aside>
        <el-main>
          <keep-live>
            <router-view/>
          </keep-live>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import HeaderNavCont from "../components/HeaderNavCont/HeaderNavCont.vue";
import sidebar from "../components/HeaderNavCont/sidebar.vue";


</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-size: 100%;
  overflow: hidden;
  background-color: #f0f2f5;
}

.el-header {
  background-color: #FFFFFF;
}

.el-main {
  padding: 0 !important;
}

html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}
html.contrast {
  filter: contrast(2);
}
</style>