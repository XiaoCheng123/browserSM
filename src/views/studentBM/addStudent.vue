<template>
  <div class="wrap">
    <el-form :inline="true" :model="addStudent" class="demo-form-inline">
      <el-form-item label="学号">
        <el-input v-model="addStudent.Sno"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="addStudent.Sname"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select  v-model="addStudent.Ssex">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生年月">
          <el-date-picker type="date" placeholder="选择日期" v-model="addStudent.Sbirth"></el-date-picker>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input v-model="addStudent.Sid"></el-input>
      </el-form-item>
      <el-form-item label="政治面貌">
        <el-input v-model="addStudent.Spolitic"></el-input>
      </el-form-item>

      <el-form-item label="出生年月">
        <el-date-picker type="date" placeholder="选择日期" v-model="addStudent.Scome"></el-date-picker>
      </el-form-item>
      <el-form-item label="民族">
        <el-input v-model="addStudent.Sminzu"></el-input>
      </el-form-item>

      <el-form-item label="籍贯">
        <el-input v-model="addStudent.Sjiguan"></el-input>
      </el-form-item>
      <el-form-item label="住址">
        <el-input type="textarea" v-model="addStudent.Sdistrist"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="addStudent.Sphone"></el-input>
      </el-form-item>
      <div></div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        addStudent: {
          Sno: '',
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
        }
      }
    },
    methods: {
      onSubmit () {
        console.log(this.addStudent)
        this.$axios({
          method: 'post',
          url: 'http://localhost:3000/addStudent',
          data: this.addStudent
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .wrap {
    margin-top: 20px;
    margin-left: 20px;
    width: 600px;
  }
</style>
