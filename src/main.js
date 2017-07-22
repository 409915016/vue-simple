// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./router/routes";
// import Ninjas from "./Ninjas.vue"
// Vue.component('ninjas', Ninjas);
Vue.config.productionTip = false

/* eslint-disable no-new */
export const bus = new Vue();

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
})

//Costom directive
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = '#' + Math.random().toString().slice(2, 8);
//   }
// })

Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px'
    }

  }
})
//Filter
// Vue.filter('toUppercase', function (value) {
//   return value.toUpperCase();
// })

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...';
})



const app = new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  data: {},
  methods: {},
  computed: {}
});



Vue.component('greeting', {
  template: '<p>name: {{ name }} <button v-on:click="changeName" > change name </button> </p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'Mario'
    }
  }
});
