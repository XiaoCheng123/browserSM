<template>
  <div class="wrap">
    <el-form :inline="true" :model="addGrade" class="demo-form-inline">
      <el-form-item label="学号">
        <el-input v-model="addGrade.Sno"></el-input>
      </el-form-item>
      <el-form-item label="课程号">
        <el-input v-model="addGrade.Cno"></el-input>
      </el-form-item>
      <el-form-item label="成绩">
        <el-input v-model="addGrade.Grade"></el-input>
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
        addGrade: {
          Sno: "",
          Cno: "",
          Grade: ""
        }
      }
    },
    methods: {
      onSubmit () {
        console.log(this.addGrade)
        this.$axios({
          method: 'post',
          url: 'http://localhost:3000/addGrade',
          data: this.addGrade
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
