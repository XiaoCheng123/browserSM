<template>
  <div>
    <search-student></search-student>
    <div class="table">
      <el-table
        :data="studentData"
        border
        style="width: 100%">
        <el-table-column
          prop="Sno"
          label="学号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Sname"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="Ssex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="Sage"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="Scome"
          label="入学时间">
        </el-table-column>
        <el-table-column
          prop="Sdistrict"
          label="家庭地址">
        </el-table-column>
        <el-table-column
          prop="Sphone"
          label="联系电话">
        </el-table-column>
      </el-table>
    </div>
    <button @click="getStudent"></button>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchStudent from 'components/studentSM/searchStudent'

  export default {
    data() {
      return {
        currentPage: 1,
        studentData: [
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
    components: {
      searchStudent
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
