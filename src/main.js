// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
//import App from './App'
import VueRouter from "vue-router";
import UserHome from "./components/UserHome.vue";
import UserPost from "./components/UserPost.vue";
import layout_header from "./components/layout/header.vue";
import layout_main from "./components/layout/main.vue";
import layout_footer from "./components/layout/footer.vue";

import UserHomeNone from "./components/UserHomeNone.vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        header: layout_header,
        main: layout_main,
        footer: layout_footer
      }
    },
    {
      path: '/user/:username',
      component: UserHome,
      name: 'userHome',
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

router.push({name: 'user', params: {userId: 123}})

