<template>
  <el-badge is-dot class="item">
    <el-image fit="fill" src="/src/assets/tuoz_fill.png" style="width: 1.6em;height: 1.6em" @click="dialogVisible = true"/>
  </el-badge>
  <el-dialog
      v-model="dialogVisible"
      title="消息通知"
      width="60%"
      top="17vh"
      custom-class="my-info-dialog"
  >
    <el-row>
      <el-col :span="4">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo-badge"
        >
          <el-menu-item index="1" class="menuItem">
            <el-icon><icon-menu /></el-icon>
            <span>所以消息</span>
          </el-menu-item>
          <el-menu-item index="2" class="menuItem">
            <el-icon><chat-dot-square /></el-icon>
            <span>系统消息</span>
          </el-menu-item>
          <el-menu-item index="3" class="menuItem">
            <el-icon><message /></el-icon>
            <span>系统公告</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-menu
            mode="horizontal"
            default-active="1"
            class="el-menu-vertical-demo-badge"
        >
          <el-menu-item index="1" class="menuItem">未读消息</el-menu-item>
          <el-menu-item index="2" class="menuItem">已读消息</el-menu-item>
        </el-menu>
        <el-table
            :data="tableData"
            max-height="300"
            :row-style="{height:'50px'}"
            :show-header="false"
            style="font-size: 16px;margin-top: 10px">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="date" />
          <el-table-column prop="name" />
          <el-table-column prop="address" />
        </el-table>

      </el-col>
    </el-row>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  Menu as IconMenu,
  Message,
  ChatDotSquare,
} from '@element-plus/icons-vue';

let dialogVisible = ref(false);

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]

</script>

<style lang="scss">
.el-menu-vertical-demo-badge {
   border: none;
   .el-menu-item {
      border: none;
   }
  .el-menu-item.is-active {
      border: none;
  }
}

.menuItem {
  height: 40px;
}

 .my-info-dialog .el-dialog__body {
     padding: calc(var(--el-dialog-padding-primary) + 5px) var(--el-dialog-padding-primary);
   }

</style>