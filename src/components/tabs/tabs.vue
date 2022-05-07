<template>
  <div class="tabs-tab">
      <el-tabs
          v-model="editableTabsValue"
          type="card"
          class="demo-tabs"
          closable
      >
          <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
              class="demo-tabs-pane"
          />
      </el-tabs>
    <div style="margin: 18px 0px 0 10px">
<!--      <el-button type="primary" :icon="ArrowDown" />-->
<!--      -->
      <el-dropdown>
        <el-button type="primary">更多</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>搜索</el-dropdown-item>
            <el-dropdown-item style="margin-top: 3px">关闭其他</el-dropdown-item>
            <el-dropdown-item style="margin-top: 3px">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  ArrowDown
} from '@element-plus/icons-vue'

const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  }
])

</script>

<style lang="scss">
.tabs-tab {
  background-color: #FFFFFF;
  overflow: hidden;
  height: 50px;
  width: 100%;
  display: flex;
  .demo-tabs {
    width: 95%;
    margin-top: 10px;
    margin-left: 10px;
  }
}
.el-tabs__nav-wrap .is-active {
  background-color: rgb(240, 242, 245);
}
</style>