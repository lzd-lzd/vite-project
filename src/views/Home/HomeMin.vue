<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="1"><el-avatar :size="50" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" /></el-col>
      <el-col :span="15">
        <div style="font-size: 30px">您好 ！超级管理员 ，祝您开心每一天 ！</div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </el-card>
  <el-row>
    <el-col :span="16">
      <el-card style="margin: 1vh 0.5vh 0 1vh">
        <fe-table
            :data="tableData"
            :show-header="false">
          <template #column>
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </template>
        </fe-table>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card style="margin: 1vh 1vh 0 0.5vh">

      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import feTable from "/src/components/common/FeTable.vue"
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
]
</script>

<style scoped>
.box-card {
  width: 99%;
  margin-left: 0.5%;
  margin-top: 0.5%;
}
.flip-down {
  font-size: 20px;
}
</style>