<template>
  <el-dialog title='用户详细信息' :visible.sync='dialogFormVisible'>
      <el-row v-for = '(value,name,index) in currentUserData' :key = 'index' class="lineh">
        <el-col :span='12' >
          <span>{{name}}</span>
        </el-col>
        <el-col :span='12'>
          <span>{{value}}</span>
        </el-col>
      </el-row>
    <div slot='footer' class='dialog-footer'>
      <el-button type='primary' @click='hide'>关闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialog-detail',
  props: ['dialogFormVisible', 'currentUserData'],
  data () {
    return {
      formLabelWidth: '120px'
    }
  },
  watch: {
    currentUserData () {}
  },
  methods: {
    hide () {
      this.$emit('update:dialogFormVisible', false)
    }
  }
}
</script>
<style scoped>
.lineh{
  line-height: 30px
}
</style>
