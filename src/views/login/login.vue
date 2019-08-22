<template>
  <!-- <div>
    登录页 aaa
    <router-link to="/index">首页</router-link>
  </div> -->
  <div class="login">
      <el-row>
        <el-col :span = "12" :offset="6">
          <el-form :model = "ruleForm" :rules = "rules" ref="ruleForm" class="login-ruleForm">
            <el-form-item label="用户手机号" prop="phone" >
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="用户登录密码" prop="pass" >
                <el-input v-model="ruleForm.pwd" type="password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data () {
    // var checkPhone = (rule,value,callback) => {
    //   if (!/^1[3456789]\d{9}$/.test(value)) {
    //     return callback(new Error('请输入正确的手机号！'));
    //   }
    // }
    return {
      ruleForm: {
        phone: '',
        pwd: ''
      },
      rules: {
        phone: [{
          required: true,
          message: '请输入正确的手机号',
          trigger: 'blur',
          pattern: /^1[3456789]\d{9}$/
        }],
        pwd: [{
          required: true,
          message: '请输入6-20位数字或密码组合！',
          trigger: 'blur',
          pattern: /^[a-zA-Z0-9]{6,10}$/
        }]
      }
    }
  },
  mounted () {
    this.getLocalUser()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ name: 'index', params: this.ruleForm })
          sessionStorage.setItem('phone', this.ruleForm.phone)
          sessionStorage.setItem('pwd', this.ruleForm.pwd)
        } else {
          return false
        }
      })
    },
    getLocalUser () {
      this.ruleForm.phone = sessionStorage['phoneNum']
      this.ruleForm.pwd = sessionStorage['pwd']
    }
  }
}
</script>
