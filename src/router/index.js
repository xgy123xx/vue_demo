import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Articles from '@/views/Articles/Articles'
import ArticleDetail from '@/views/ArticleDetail/ArticleDetail'
import Games from '@/views/Games/Games'
import Comic from '@/views/Comic/Comic'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/ArticleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/Games/:device',
      name: 'Games',
      component: Games
    },
    {
      path: '/Comic',
      name: 'Comic',
      component: Comic
    },
  ]
})
