<template>
  <div class="container">
    <!-- 广告 -->
    <div class="top-banner">
      <a href="#">
        <img src="../../../static/images/advertisement.jpg" alt />
      </a>
    </div>
    <div class="content">
      <!-- 文章标题 -->
      <div class="article-header">
        <h2 class="title">steam游戏部分</h2>
        <p class="loc">当前位置：首页>steam游戏</p>
      </div>
      <!-- 文章列表 -->
      <div class="article-body">
        <div class="article-list">
          <ul>
            <li class="item">
              <div class="l">
                <a href="/ArticleDetail">
                  <img src="../../../static/images/articlei.jpg" alt />
                </a>
              </div>
              <div class="r">
                <h4 class="title">
                  <a href="/ArticleDetail">索尼新专利：借助AI为游戏作曲 引导玩家情绪</a>
                </h4>
                <p class="desc">索尼公开了一项新专利“DYNAMIC MUSIC CREATION IN GAMING（在游戏中的动态音乐生成）”。</p>
                <div class="sub">
                  <span class="iconfont">&#xe64f;</span>
                  <span class="time">2020-05-24</span>
                  <span class="iconfont">&#xe617;</span>
                  <span class="watcherNum">1674</span>
                  <span class="iconfont">&#xe61c;</span>
                  <span class="messageNum">51</span>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="l">
                <a href>
                  <img src="../../../static/images/articlei.jpg" alt />
                </a>
              </div>
              <div class="r">
                <h4 class="title">
                  <a href>索尼新专利：借助AI为游戏作曲 引导玩家情绪</a>
                </h4>
                <p class="desc">索尼公开了一项新专利“DYNAMIC MUSIC CREATION IN GAMING（在游戏中的动态音乐生成）”。</p>
                <div class="sub">
                  <span class="iconfont">&#xe64f;</span>
                  <span class="time">2020-05-24</span>
                  <span class="iconfont">&#xe617;</span>
                  <span class="watcherNum">1674</span>
                  <span class="iconfont">&#xe61c;</span>
                  <span class="messageNum">51</span>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="l">
                <a href>
                  <img src="../../../static/images/articlei.jpg" alt />
                </a>
              </div>
              <div class="r">
                <h4 class="title">
                  <a href>索尼新专利：借助AI为游戏作曲 引导玩家情绪</a>
                </h4>
                <p class="desc">索尼公开了一项新专利“DYNAMIC MUSIC CREATION IN GAMING（在游戏中的动态音乐生成）”。</p>
                <div class="sub">
                  <span class="iconfont">&#xe64f;</span>
                  <span class="time">2020-05-24</span>
                  <span class="iconfont">&#xe617;</span>
                  <span class="watcherNum">1674</span>
                  <span class="iconfont">&#xe61c;</span>
                  <span class="messageNum">51</span>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="l">
                <a href>
                  <img src="../../../static/images/articlei.jpg" alt />
                </a>
              </div>
              <div class="r">
                <h4 class="title">
                  <a href>索尼新专利：借助AI为游戏作曲 引导玩家情绪</a>
                </h4>
                <p class="desc">索尼公开了一项新专利“DYNAMIC MUSIC CREATION IN GAMING（在游戏中的动态音乐生成）”。</p>
                <div class="sub">
                  <span class="iconfont">&#xe64f;</span>
                  <span class="time">2020-05-24</span>
                  <span class="iconfont">&#xe617;</span>
                  <span class="watcherNum">1674</span>
                  <span class="iconfont">&#xe61c;</span>
                  <span class="messageNum">51</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="article-ranking">
          <div class="header">
            <h4>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxiala" />
              </svg>热点新闻排行榜
            </h4>
          </div>
          <ol class="rank">
            <li>
              <a href>任天堂泄露事件愈演愈烈 3DS操作系统源代码泄露</a>
            </li>
            <li>
              <a href>任天堂泄露事件愈演愈烈 3DS操作系统源代码泄露</a>
            </li>
            <li>
              <a href>任天堂泄露事件愈演愈烈 3DS操作系统源代码泄露</a>
            </li>
            <li>
              <a href>任天堂泄露事件愈演愈烈 3DS操作系统源代码泄露</a>
            </li>
            <li>
              <a href>任天堂泄露事件愈演愈烈 3DS操作系统源代码泄露</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../static/global/font/iconfont";
export default {};
</script>

<style scoped>
/* 广告部分 */
.top-banner {
  width: 100%;
  margin-bottom: 20px;
}
.top-banner img {
  width: 100%;
  height: 90px;
}
/* 文章标题、导航*/
.article-header {
  position: relative;
  margin-bottom: 20px;
}
.article-header .loc {
  right: 0;
  top: 0;
  position: absolute;
  font-size: 14px;
  color: #778899;
}
/* 左侧文章列表 */
.article-body {
  overflow: hidden;
}
.article-body .article-list {
  float: left;
}
/* 每个li文章栏目 */
.item {
  overflow: hidden;
  border-bottom: 2px dotted #ced3d3;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.item .l {
  float: left;
  width: 200px;
  text-align: center;
}
.item .l img {
  width: 90%;
}
.item .r {
  float: right;
  width: 500px;
  padding: 0 10px;
}
.item .r .title {
  padding-bottom: 12px;
}
.item .r .title a:hover {
  text-decoration: underline;
  color: #ff6666;
}
.item .r .desc {
  font-size: 14px;
  color: #708582;
  padding-bottom: 14px;
}
.item .r .sub {
  font-size: 14px;
  color: #a3acad;
  text-align: right;
}
/* 右侧文章列表 */
.article-ranking {
  float: right;
}
.article-ranking .header {
  padding: 10px 0;
}
.article-ranking .header svg {
  margin-right: 10px;
}
.article-ranking .rank {
  list-style-type: lower-alpha;
}
.rank li {
  font-size: 14px;

  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 2px dotted #ced3d3;
}
.rank li a {
  color: #526466;
}
.rank li a:hover {
  text-decoration: underline;
  color: #ff6666;
}
</style>