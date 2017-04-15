// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import UserHome from './components/UserHome.vue'
import UserPost from './components/UserPost.vue'
import UserHomeNone from './components/UserHomeNone.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/user/:username', component: UserHome,
      children: [
        {path: '', component: UserHomeNone},
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'post/:postMsg',
          component: UserPost
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
const app = new Vue({
  router
}).$mount('#app')
