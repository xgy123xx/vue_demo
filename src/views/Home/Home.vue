<template>
  <div class="container">
    <el-container>
      <el-header class="recommend-container" height>
        <h3 class="recommend-title">站点推荐</h3>
        <!-- 这里写一个图片库 -->
        <ul>
          <li v-for="recommend in recommend_imgs" :key="recommend.id">
            <a :href="recommend.url">
              <img :src="recommend.imgSrc" alt />
            </a>
          </li>
        </ul>
      </el-header>
      <el-container class="site-content">
        <el-main style="padding-top: 0;padding-bottom:0">
          <div id="top-swiper">
            <el-carousel trigger="click" height="400px">
              <el-carousel-item v-for="item in swiper_imgs" :key="item.id">
                <img :src="item.imgSrc" alt height="400px" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-main>
        <!-- 中间，今日文章 -->
        <el-aside width="600px" class="sub-block">
          <!-- 今日内容头 -->
          <div class="sub-h">
            <h3 class="sub-title">
              <span class="iconfont title-icon">&#xe613;</span>
              今日内容
            </h3>
          </div>
          <!-- 文章列表 -->
          <div class="sub-b">
            <!-- 文章大标题 -->
            <div class="content-h">
              <div class="content-l">
                <a :href="article_desc.articleUrl">
                  <img :src="article_desc.articleImgSrc" alt />
                </a>
              </div>
              <div class="content-r">
                <h3 class="title-c">
                  <a :href="article_desc.articleUrl">{{article_desc.title}}</a>
                </h3>
                <p class="desc-c">{{article_desc.desc}}</p>
              </div>
            </div>
            <!-- 小文章列表 -->
            <ul class="sub-content">
              <li v-for="article in day_article_titles" :key="article.id" class="article-title">
                <a :href="article.articleUrl">
                  <p class="article-c">{{article.title}}</p>
                  <!-- 下面是小图标 -->
                  <span class="article-time">{{article.time}}</span>
                </a>
              </li>
            </ul>
          </div>
        </el-aside>
      </el-container>
      <el-footer height style="padding-right:0;">
        <content-section :pad_data="pads[0]"></content-section>
        <content-section :pad_data="pads[0]"></content-section>
        <content-section :pad_data="pads[0]"></content-section>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import ContentSection from "@/components/ContentSection.vue";
export default {
  data: function() {
    return {
      // 推荐图片
      recommend_imgs: [],
      // 轮播图
      swiper_imgs: [],
      // 右侧今日推荐-第一篇文章
      article_desc: {},
      // 今日文章列表
      day_article_titles: [],
      // 板块数据
      pads: []
    };
  },
  components: {
    "content-section": ContentSection
  },
  methods:{
    getRecommendImgs(){
      this.$http.getRecommendImgs()
      .then(ret=>{
        if(ret.error_code == 0){
          // console.log(ret);
          this.recommend_imgs = ret.data;
        }
        
      })
    },
    getSwiperImgs(){
      this.$http.getSwiperImgs()
      .then(ret=>{
        if(ret.error_code == 0){
          // console.log(ret);
          this.swiper_imgs = ret.data;
        }
      })
    },
    getRecommendArticle(){
      this.$http.getRecommendArticle()
      .then(ret=>{
        if(ret.error_code == 0){
          // console.log(ret);
          this.article_desc = ret.data.article_desc;
          this.day_article_titles = ret.data.day_article_titles;
        }
      })
    },
    getPads(){
      this.$http.getPads()
      .then(ret=>{
        if(ret.error_code == 0){
          // console.log(ret);
          this.pads = ret.data;
        }
      })
    }
  },
  created(){
    this.getRecommendImgs();
    this.getSwiperImgs();
    this.getRecommendArticle();
    this.getPads();
  }
};
</script>

<style scoped>
/* 编写推荐部分 */
.recommend-container {
  background: #f5f6f6; /* Old browsers */
  background: -moz-linear-gradient(
    45deg,
    #f5f6f6 0%,
    #dbdce2 21%,
    #b8bac6 49%,
    #dddfe3 81%,
    #e6e6e6 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    45deg,
    #f5f6f6 0%,
    #dbdce2 21%,
    #b8bac6 49%,
    #dddfe3 81%,
    #e6e6e6 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    45deg,
    #f5f6f6 0%,
    #dbdce2 21%,
    #b8bac6 49%,
    #dddfe3 81%,
    #e6e6e6 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#e6e6e6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.recommend-title {
  padding: 10px 0 10px 0;
}
.recommend-container ul {
  padding: 5px 0;
}
.recommend-container ul li {
  display: inline-block;
  text-align: center;
  height: 80px;
  /* line-height: 80px; */
  margin-right: 20px;
}
.recommend-container ul li img {
  height: 80px;
}
/* 站点最外层 */
.container {
  margin-top: 20px;
}
.site-content {
  padding-top: 10px;
  padding-bottom: 10px;
}
/* 中间跑马灯 */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 中间左侧详情页 */
.sub-block {
  padding: 10px;
  border: 1px solid #cccccc;
}
/* 文章标签 */
.sub-h {
  border: 1px solid #cccccc;
}
.sub-h .sub-title {
  padding: 10px;
  text-align: center;
  word-spacing: 0.5em;
}
.sub-h .sub-title .title-icon {
  font-size: 24px;
}
/* 文章区域 */
.sub-b {
  margin-top: 15px;
}
/* 大文章标题 */
.content-h {
  padding: 0 20px 9px 0;
  overflow: hidden;
}
.content-l {
  float: left;
  width: 100px;
}
.content-l img {
  width: 100px;
  height: 100px;
}
.content-r {
  float: right;
  width: 430px;
}
.content-r .title-c {
  padding-bottom: 17px;
  font-size: 20px;
}
.content-r .title-c a {
  color: #ff6666;
}
.content-r .title-c a:hover {
  text-decoration: underline;
}
.content-r .desc-c {
  font-size: 14px;
  color: #99a9bf;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
/* 文章标题列表 */
.sub-content {
  padding-left: 5px;
}
</style>