<template>
  <div class='modify'>
    <el-form ref='form' :model='userDataObj' label-width='80px'>
      <el-form-item label='姓名'>
        <el-input v-model='userDataObj[0].name'></el-input>
      </el-form-item>
      <el-form-item label='性别' style="text-align:left">
        <el-select v-model='userDataObj[0].region' placeholder='请选择性别'>
          <el-option label='女' value='女'></el-option>
          <el-option label='男' value='男'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label='年龄'>
        <el-input v-model='userDataObj[0].age'></el-input>
      </el-form-item>
      <el-form-item label='手机号码'>
        <el-input v-model='userDataObj[0].phone'></el-input>
      </el-form-item>
      <el-form-item label='密码'>
        <el-input v-model='userDataObj[0].pwd'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='onSubmit'>保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'modify',
  data () {
    return {
      userDataObj: {}
    }
  },
  props: {
    userData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    userData (val) {
      console.log(val)
    }
  },
  created () {
    this.dataTransform()
  },
  methods: {
    onSubmit () {
      // submitModify().then((res) => {
      //   console.log(res)
      // })
      this.$message('保存成功！')
    },
    dataTransform () {
      for (let key in this.userData) {
        this.userDataObj[key] = this.userData[key]
      }
      console.log(this.userDataObj[0].name)
    }
  }
}
</script>
