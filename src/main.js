// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import Home from './components/Home'

import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
}];

const router = new VueRouter({
  routes
});

const app = new Vue({
  el: '#app',
  router,
  ...App,
});
