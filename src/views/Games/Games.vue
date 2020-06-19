<template>
  <div class="container">
    <div class="sub-topbar">
      <ul class="years">
        <li
          :class="{active:i==years_choice}"
          v-for="(v,i) in years_list"
          :key="i"
          @click="yearHandler(i)"
        >
          <a href="javascript:void(0);">{{v}}</a>
        </li>
      </ul>
    </div>
    <table class="game-content" cellspacing="0" cellpadding="0">
      <thead>
        <tr class="header">
          <th>游戏名</th>
          <th>评分</th>
          <th>发售价格</th>
          <th>发售时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game,i) in game_list" :key="i">
          <td>
            <div class="game-img" >
              <img :src="game.gameImg" alt />
            </div>
            <div class="desc">
              <p>{{game.name}}</p>
              <p>{{game.desc}}</p>
            </div>
          </td>
          <td>{{game.score}}</td>
          <td>{{game.price}}</td>
          <td>{{game.time}}</td>
        </tr>
        <tr></tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <p>查看更多</p>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game_list:[],
      years_list: [2020, 2019, 2018, 2017],
      years_choice: 0
    };
  },
  methods: {
    yearHandler(index) {
      this.years_choice = index;
      // console.log(index);
    },
    getDate(){
      this.$http.getGameDate(this.$route.params.device)
      .then(ret=>{
        // console.log(ret);
        if(ret.error_code == 0){
          this.game_list = ret.data;
        }
      })
    }
  },
  watch:{
    $route:"getDate"
  }
  ,
  created() {
    // 根据不同信息  发送不同ajax请求
    console.log(this.$route.params.device);
    this.getDate();
  }
};
</script>

<style scoped>
/* 年份选择 */
.sub-topbar {
  padding: 20px 0 20px 50px;
  /* height: 100px; */
}
.years li {
  display: inline-block;
  margin-right: 20px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.years li a:hover {
  color: #ff9900;
}
.years li.active {
  border: 2px solid #ff9900;
  border-radius: 10px;
}
.years li.active a {
  color: #ff9900;
}
/* 游戏内容区 */
.game-content {
  width: 100%;
  margin-bottom: 50px;
}
.game-content .header {
  background-color: #c8d0cf;
  height: 40px;
}
.game-content .header th {
  width: 20%;
  text-align: center;
}
.game-content .header th:nth-child(1) {
  width: 40%;
}
/* 游戏列表 */
tbody tr:last-child {
  height: 30px;
}
tbody tr {
  border-bottom: 1px solid #294541;
}
tbody tr:hover {
  font-weight: 700;
  background-color: #fff;
  border: none;
  cursor: pointer;
}
tbody tr td {
  text-align: center;
}
tbody tr td:first-child {
  overflow: hidden;
}
tbody tr td:first-child .game-img {
  float: left;
}
tbody tr td:first-child .game-img img {
  width: 200px;
  height: 100px;
}
tbody tr td:first-child .desc {
  float: left;
  padding-left: 50px;
  padding-top: 20px;
}
/* 更多部分 */
.game-content tfoot p {
  padding: 10px 0;
  text-align: center;
  border: 1px solid #ced3d3;
}
.game-content tfoot p:hover {
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
}
</style>