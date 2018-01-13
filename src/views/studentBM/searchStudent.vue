<template>
  <div>
    <search-student></search-student>
    <div class="table">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="学号"
          width="180">
        </el-table-column>
        <el-table-column
        prop="Sname"
        label="姓名">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchStudent from 'components/studentSM/searchStudent'

  export default {
    data() {
      return {
        currentPage4: 4,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    components: {
      searchStudent
    }
  }
</script>

<style scoped>
  .table {
    margin-top: 50px;
    width: 80%;
    margin-left: 20px;
    margin-right: 20px;
  }
  .block {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
