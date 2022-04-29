<template>
  <el-table
      :data="data"
      :row-style="rowStyle"
      :show-header="showHeader"
      style="width: 100%">
    <slot name="column"/>
  </el-table>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps({
  showHeader: String,
  data: Array
});

const { data, showHeader } = toRefs(props);

const rowStyle = {
  fontSize: '16px',

};
</script>

<style scoped>

</style>