<template>
  <div>
    <search-student></search-student>
    <div class="table">
      <el-table
        :data="studentData"
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
          label="姓名"
          width="180">
          <template scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.Sname }}</p>
              <p>住址: {{ scope.row.Sdistrist }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag>{{ scope.row.Sname }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
        studentData: [
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(this.addStudent)
        this.$axios({
          method: 'post',
          url: 'http://localhost:3000/deleteStudent',
          data: this.studentData[index]
        })
        this.getStudent()
        console.log(index, row);
      },
      getStudent() {
        const that = this
        this.$axios.get('http://localhost:3000/searchStudent')
          .then(function (response) {
            console.log(response);
            that.studentData = response.data.data
            console.log(studentData)
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
