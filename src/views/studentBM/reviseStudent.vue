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
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="修改学生信息" :visible.sync="dialogFormVisible">
      <el-form :inline="true" :model="revieseStudent" class="demo-form-inline" :visible.sync="dialogFormVisible">
        <el-form-item label="学号">
          <el-input v-model="revieseStudent.Sno"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="revieseStudent.Sname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select  v-model="revieseStudent.Ssex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生年月">
          <el-date-picker type="date" placeholder="选择日期" v-model="revieseStudent.Sbirth"></el-date-picker>
        </el-form-item>
        <el-form-item label="身份证号码">
          <el-input v-model="revieseStudent.Sid"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌">
          <el-input v-model="revieseStudent.Spolitic"></el-input>
        </el-form-item>

        <el-form-item label="出生年月">
          <el-date-picker type="date" placeholder="选择日期" v-model="revieseStudent.Scome"></el-date-picker>
        </el-form-item>
        <el-form-item label="民族">
          <el-input v-model="revieseStudent.Sminzu"></el-input>
        </el-form-item>

        <el-form-item label="籍贯">
          <el-input v-model="revieseStudent.Sjiguan"></el-input>
        </el-form-item>
        <el-form-item label="住址">
          <el-input type="textarea" v-model="revieseStudent.Sdistrist"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="revieseStudent.Sphone"></el-input>
        </el-form-item>
        <div></div>
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
        studentData: [
        ],
        revieseStudent: {
          Sno: "",
          Sname: "",
          Ssex: "",
          Sbirth: "",
          Sid: "",
          Spolitic: "",
          Scome: "",
          Sminzu: "",
          Sjiguan: "",
          Sdistrist: "",
          Sphone: ""
        },
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    },
    methods: {
      handleEdit(index, row) {
//        console.log(index, row);
        this.dialogFormVisible = true
        this.revieseStudent = this.studentData[index]
        console.log(this.revieseStudent)
      },
      postEdit() {
        this.dialogFormVisible = false
        this.$axios({
          method: 'post',
          url: 'http://localhost:3000/reviseStudent',
          data: this.revieseStudent
        })
        this.getStudent()
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
