<template>
  <div class="wrapper">
    <el-container>
      <el-header height class="pad-header">
        <span class="iconfont pad-icon">&#xe613;</span>
        <h3 class="pad-title">{{title}}</h3>
      </el-header>
      <el-main class="pad-main" style="padding-left:0;padding-right:0">
        <slot name="content">111</slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.wrapper {
}
el-header {
  padding: 0;
}
.pad-header {
  padding: 10px 0;
  border-bottom: 2px solid #ccccff;
}
.pad-header .pad-icon {
  font-size: 22px;
}
.pad-header .pad-title {
  color: #cc6600;
  display: inline-block;
}
</style>