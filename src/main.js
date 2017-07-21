// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
// import Ninjas from "./Ninjas.vue"
// Vue.component('ninjas', Ninjas);
Vue.config.productionTip = false

/* eslint-disable no-new */
export const bus = new Vue();

Vue.use(VueResource);
//Costom directive
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value =='narrow') {
      el.style.maxWidth = '560px';
    }
    if(binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px'
    }

  }
})

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

const app = new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    x: 0,
    y: 0,
    age: 23,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    name: "Mather",
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    ninjas: [
      {name: 'Ryu', age: 25},
      {name: 'Yoshi', age: 35},
      {name: 'Ken', age: 55},
    ],
    output: 'Your fav food',


  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("clicked");
    },
    logName: function () {
    },
    logAge: function () {
    },
    readRefs: function () {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }


  },
  computed: {

    addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});


