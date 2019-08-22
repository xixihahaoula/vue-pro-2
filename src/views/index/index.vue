<template>
  <div class='container'>
    <el-container style='height: 500px; border: 1px solid #eee'>
      <el-header>
        <el-row>
          <el-col :span='16' style='text-align: left; font-size: 12px'>
            <span>欢迎您 {{phone}}</span>
          </el-col>
          <el-col :span='8' style='text-align: right; font-size: 12px'>
            <el-dropdown @command='handleCommand'>
              <i class='el-icon-setting' style='margin-right: 15px'></i>
              <el-dropdown-menu slot='dropdown'>
                <el-dropdown-item command='singleEdit'>个人信息修改</el-dropdown-item>
                <el-dropdown-item command='logout'>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>个人中心</span>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <el-aside width='200px' style='background-color: rgb(238, 241, 246)'>
          <el-menu @select="handleSelect" :default-active="activeIndex">
            <el-menu-item index='1'>
              <i class='el-icon-menu'></i>
              <span slot='title'>会员列表</span>
            </el-menu-item>
            <el-menu-item index='2'>
              <i class='el-icon-document'></i>
              <span slot='title'>form表单</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-row>
            <el-col :span="24"><Breadrumb :breadrmbData = "breadrmbData"></Breadrumb></el-col>
          </el-row>
          <el-row style="margin-top:30px">
            <el-col :span="24"><router-view :userData='userData'></router-view></el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Breadrumb from 'components/common/breadcrumb/breadcrumb'
var tempData = require('./data.json')

export default {
  data () {
    return {
      phone: '',
      userData: [],
      initial: '1',
      breadrmbData: '会员列表',
      activeIndex: '1'
    }
  },
  components: {
    Breadrumb
  },
  mounted () {
    this.getCurrentUser()
    this.handleSelect(this.initial)
  },
  methods: {
    handleCommand (command) {
      if (command === 'singleEdit') {
        this.$router.push('/index/modify')
        // 接口数据
        // userList().then((res) => {
        //   console.log(res)
        // })
        this.userData = tempData.userList
        this.breadrmbData = '个人信息修改'
      } else if (command === 'logout') {
        this.$router.push('/login')
      } else {
        return false
      }
    },
    handleSelect (key, keypath) {
      this.userData = tempData.userList
      if (key === '1') {
        this.breadrmbData = '会员列表'
        this.$router.push('/index/user-list')
      } else if (key === '2') {
        this.breadrmbData = 'form表单'
        this.$router.push('/index/form-list')
      } else {
        return false
      }
    },
    getCurrentUser () {
      const currentUser = this.$route.params.phone
      currentUser
        ? (this.phone = this.$route.params.phone)
        : (this.phone = sessionStorage.getItem('phone'))
    }
  }
}
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
