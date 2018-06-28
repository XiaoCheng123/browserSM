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
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <el-dialog title="修改学生信息" :visible.sync="dialogFormVisible">
      <el-form :inline="true" :model="gradeData" class="demo-form-inline">
        <el-form-item label="学号">
          <el-input v-model="newGrade.Sno"></el-input>
        </el-form-item>
        <el-form-item label="课程号">
          <el-input v-model="newGrade.Cno"></el-input>
        </el-form-item>
        <el-form-item label="成绩">
          <el-input v-model="newGrade.Grade"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="postEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchStudent from 'components/studentSM/searchStudent'

  export default {
    data() {
      return {
        gradeData: [
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        newGrade: {
          Sno: "",
          Cno: "",
          Grade: ""
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        this.dialogFormVisible = true
        this.newGrade = this.gradeData[index]
        console.log(this.revieseStudent)
      },
      postEdit() {
        this.dialogFormVisible = false
        this.$axios({
          method: 'post',
          url: 'http://localhost:3000/reviseGrade',
          data: this.newGrade
        })
//        this.getStudent()
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
