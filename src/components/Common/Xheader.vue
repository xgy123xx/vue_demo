<template>
  <el-container>
    <el-header height="100px">
      <div class="header">
        <div class="nav-left">
          <img src="../../../static/images/website_log.png" alt />
        </div>
        <div class="nav-center">
          <ul>
            <li>
              <router-link :to="{name:'Home'}">主页</router-link>
            </li>
            <li>
              <router-link :to="{name:'Games',params:{device:'steam'}}">steam游戏</router-link>
            </li>
            <li>
              <router-link :to="{name:'Games',params:{device:'ns'}}">ns游戏</router-link>
            </li>
            <li>
              <router-link :to="{name:'Comic'}">动漫</router-link>
            </li>
          </ul>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  line-height: 100px;
  overflow: hidden;
}
.header .nav-left {
  float: left;
}
.header .nav-left img {
  width: 60px;
  padding: 15px;
}
.header .nav-center {
  float: left;
  margin-left: 50px;
}
.header .nav-center ul {
  overflow: hidden;
}
.header .nav-center ul li {
  display: inline;
  padding: 0 10px 15px 10px;
}
.header .nav-center ul li:hover {
  border-bottom: 3px solid #e6a23c;
}
.header .nav-center ul li a {
  font-weight: 700;
  font-size: 24px;
}
</style>