<template>
  <div class="wrapper">
    <m-pad title="我的模板组件">
      <template v-slot:content v-if="pad_data">
        <el-row>
          <el-col :span="6" class="pad-l">
            <div class="img-box" v-for="item in pad_data.left_imgs" :key="item.id">
              <a :href="item.url">
                <img :src="item.imgSrc" alt />
              </a>
            </div>
          </el-col>
          <el-col :span="9" class="pad-c">
            <!-- 这里要做一次整合 -->
            <ul class="mid-lis">
              <li
                v-for="article in pad_data.articles"
                :key="article.id"
                class="article-title"
              >
                <a :href="article.articleUrl">
                  <p class="article-c">{{article.title}}</p>
                  <span class="article-time">{{article.time}}</span>
                </a>
              </li>
            </ul>
            
          </el-col>
          <el-col :span="9" class="pad-r">
            <!-- 左边图片 -->
            <div class="img-l">
              <a :href="pad_data.right_imgs[0].url">
                <img :src="pad_data.right_imgs[0].imgSrc" alt />
              </a>
            </div>
            <!-- 右边图片 -->
            <div class="img-r">
              <a :href="pad_data.right_imgs[1].url">
                <img :src="pad_data.right_imgs[1].imgSrc" alt />
              </a>
              <a :href="pad_data.right_imgs[2].url">
                <img :src="pad_data.right_imgs[2].imgSrc" alt />
              </a>
            </div>
          </el-col>
        </el-row>
      </template>
    </m-pad>
    <div class="banner" v-if="pad_data">
      <a :href="pad_data.banner.url">
        <img :src="pad_data.banner.imgSrc" alt />
      </a>
    </div>
  </div>
</template>

<script>
import Mpad from "@/components/Mpad.vue";
export default {
  props: ["pad_data"],
  components: {
    "m-pad": Mpad,
    pad_data:[]
  },
  computed: {},

};
</script>

<style scoped>
.wrapper {
  margin: 10px 0;
}
/* 板块样式 */
/* .pad-l .img-t,.img-b {
  width: 100%;
  text-align: left;
} */
.pad-l .img-box{
  width: 275px;
  height: 155px;
  margin-bottom: 10px;
}
.pad-l .img-box:last-child{
  margin-bottom: 0;
}
.pad-l a {
  display: block;
}
.pad-l img {
  width: 275px;
  height: 155px;
}


/* 中间板块 */
.mid-lis{
  padding-top: 10px;
  font-size: 15px;
  
}
.mid-lis li:last-child {
  padding-bottom: 0;
}
.mid-lis li:nth-child(4){
  padding-bottom: 30px;
  border-bottom: 2px solid 	#CECEFF;
}
.mid-lis li:nth-child(5){
  margin-top: 30px;
}

/* 下边板块 */
.pad-r {
  padding-left: 5px;
  overflow: hidden;
}
.pad-r a{
  display: block;
}
.pad-r img {
  width: 210px;
  height: 320px;
}
.pad-r .img-l {
  float: left;
}
.pad-r .img-r {
  float: right;
}
.pad-r .img-r img {
  height: 155px;
}
.pad-r .img-r img:first-child {
  margin-bottom: 5px;
}
/* 广告栏 */
.banner {
  width: 100%;
}
.banner img {
  width: 100%;
  height: 90px;
}
</style>