<template>
  <div class="userList">
    <el-table :data="userData" stripe style="width: 100%" @row-click="userDetail">
      <el-table-column prop="creteTime" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <DialogDetail :currentUserData = "currentUserData" :dialogFormVisible.sync = "dialogFormVisible"></DialogDetail>
  </div>
</template>

<script>
import DialogDetail from 'components/common/dialog-detail/dialog-detail'
export default {
  name: 'user-list',
  data () {
    return {
      dialogFormVisible: false,
      currentUserData: {}
    }
  },
  components: {
    DialogDetail
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
    userData () {
      console.log('数据已改变！')
    }
  },
  methods: {
    userDetail (row) {
      this.currentUserData = row
      this.dialogFormVisible = true
    }
  }
}
</script>
