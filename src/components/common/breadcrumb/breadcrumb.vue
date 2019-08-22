<template>
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="">{{breadrmbData}}</a></el-breadcrumb-item>
</el-breadcrumb>
</template>
<script>
export default {
  name: 'breadrumb',
  props: ['breadrmbData']
}
</script>
