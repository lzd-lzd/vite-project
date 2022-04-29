<template>
  <el-scrollbar style="height:100%;background-color: #20222a">
    <el-menu
        unique-opened
        :show-timeout="200"
        class="el-menu-vertical-demo"
        active-text-color="#ffffff"
        background-color="#20222a"
        text-color="#e6e6e6"
    >
      <sidebar-item :menu="arr"/>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import sidebarItem from "./sidebarItem.vue";
import { computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const primaryColor = computed(() => { return store.state.handers.primaryColor } )

const arr = [
  {
    name:"选项1",
    index: 1,
    childern:[]
  },
  {
    name:"选项2",
    index: 2,
    childern:[
      {
        name:"选项1-1",
        index: 1-1,
        childern:[]
      },
      {
        name:"选项1-2",
        index: 1-2,
        childern:[
          {
            name:"选项1-1-1",
            index: 1-1-1,
            childern:[]
          },
          {
            name:"选项1-1-2",
            index: 1-1-2,
            childern:[]
          }
        ]
      },
    ]
  },
  {
    name:"选项3",
    index: 3,
    childern:[]
  },
  {
    name:"选项4",
    index: 4,
    childern:[]
  }
];


</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
}
.el-scrollbar .el-menu-vertical-demo {
    .is-active {
      background-color: rgba(0, 0, 0, 0.8);
    }
}
.el-scrollbar .el-menu-item.is-active:before {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: var(--el-color-primary);
  position: absolute;
}

</style>