<template>
  <div>
    <search-student></search-student>
    <div class="table">
      <el-table
        :data="gradeData"
        border
        style="width: 100%">
        <el-table-column
          label="学号"
          width="180">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.Sno }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="课程号"
          width="180">
          <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.Sname }}</p>
              <p>课程名: {{ scope.row.Cname }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag>{{ scope.row.Cno }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="成绩"
          width="180">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.Grade }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>

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
        gradeData: [
        ]
      }
    },
    methods: {
      handleDelete(index, row) {
        console.log(this.gradeData)
        this.$axios({
          method: 'post',
          url: 'http://localhost:3000/deleteGrade',
          data: this.gradeData[index]
        })
        this.getStudent()
        console.log(index, row);
      },
      getStudent() {
        const that = this
        this.$axios.get('http://localhost:3000/searchGrade')
          .then(function (response) {
            console.log(response);
            that.gradeData = response.data.data
            console.log(gradeData)
          })
          .catch(function (response) {
            console.log(response);
          })
      }
    },
    created: function () {
      this.getStudent()
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
