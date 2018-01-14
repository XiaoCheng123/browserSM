<template>
  <div>
    <search-student></search-student>
    <div class="table">
      <el-table
        :data="gradeData"
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
          prop="Cno"
          label="课程号">
        </el-table-column>
        <el-table-column
          prop="Cname"
          label="课程名">
        </el-table-column>
        <el-table-column
          prop="Grade"
          label="成绩">
        </el-table-column>
        <el-table-column
          prop="Tnmae"
          label="指导老师">
        </el-table-column>
      </el-table>
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
